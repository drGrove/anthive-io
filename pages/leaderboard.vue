<template lang="pug">
  #Leaderboard
    section(class="section section-lg pt-lg-0")
      v-parallax(src="/img/leaderboard_bg.png" align height="300")
      v-layout(align-center justify-center row fill-height)
        v-flex(xs12 md8 offset2)
          v-card.leaderboard__card
            v-list.pb-0(three-line subheader)
              template(v-for="(player, index) in players.slice(0, 3)")
                v-list-tile(:to="{ path: '/user/?username=' + player.Username}")
                  v-list-tile-avatar(class='mt-0')
                    span(class='title orange--text text--darken-3') {{index+1}}
                  v-list-tile-avatar(class='mt-0' :size=70)
                    v-img(:src="us.photoUrl(player.Username,70)")
                  v-list-tile-content
                    v-list-tile-title(class='title px-3') {{player.Username}}
                    v-list-tile-sub-title(class='px-3') {{player.Games}} games
                  v-list-tile-action.pr-3
                    span(class='title') {{us.scoreString(player.Wealth)}}
                      v-icon.orange--text.text--lighten-2(class="ml-1") bubble_chart
                v-divider
            v-list.pb-0(two-line subheader)
              template(v-for="(player, index) in players.slice(3)")
                v-list-tile(:to="{ path: '/user/?username=' + player.Username}")
                  v-list-tile-avatar
                    span {{index+4}}
                  v-list-tile-avatar(:size=40)
                    v-img(:src="us.photoUrl(player.Username,40)")
                  v-list-tile-content
                    v-list-tile-title {{player.Username}}
                    v-list-tile-sub-title {{player.Games}} games
                  v-list-tile-action.pr-3
                    span(class='subtitle') {{us.scoreString(player.Wealth)}}
                      v-icon.orange--text.text--lighten-2(class="ml-1") bubble_chart
                v-divider
</template>

<script>
import userService from "@/services/User";
import axios from "axios";
export default {
  name: "Leaderboard",
  data: () => ({
    us: userService,
    players:[],
    elastic: axios.create({
      baseURL: 'https://search.anthive.io/',
      timeout: 3000
    })
  }),
  created() {
    this.getPlayers();
  },
  methods:{
    async getPlayers(){
      console.log("loading best players");

      const query = {
        "size": 0,
        "aggs": {
          "by_player": {
            "terms": {
              "size" : 100,
              "field": "Username.keyword",
              "order" : { "total_wealth" : "desc" }
            },
            "aggs": {
              "total_wealth": {
                "sum": {
                  "field": "Wealth"
                }
              },
              "total_games": {
                "sum": {
                  "field": "Games"
                }
              }
            }
          }
        }
      };
      const resp = await this.elastic.get("/players-prod/_search", this.wrap(query));
      this.players = resp.data.aggregations.by_player.buckets.map(p => {
        return {
          Username:p.key,
          Wealth:p.total_wealth.value,
          Games:p.total_games.value
        };
      });
    },
    wrap(query){
      return { params: {
          source: JSON.stringify(query),
          source_content_type: 'application/json'
        }
      };
    },
    pictureUrl(username,size){
      return this.us.photoUrl(username, size);
    }
  }
};
</script>
<style>
.leaderboard__card {
  margin-top: -178px;
}
</style>
