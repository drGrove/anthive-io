(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){"use strict";n(96),n(31);var a=n(176),r=n.n(a),i=n(177),o=n.n(i),s=n(62),l=n.n(s),u=function(){function t(){r()(this,t)}return o()(t,null,[{key:"getUserdata",value:function(t){var e=this;return l.a.create({baseURL:"https://api.github.com/",timeout:3e3}).get("users/"+t).then(function(n){var a=n.data;return{name:null!=a.name?a.name:t,avatar:e.photoUrl(t,250),company:a.company,location:a.location,blog:""!=a.blog?a.blog:null}}).catch(function(n){if(404==n.response.status)return{name:t,avatar:e.photoUrl(t,250),company:null,location:null,blog:null}})}},{key:"photoUrl",value:function(t,e){return t.startsWith("sample-")?this.langUrl(t.substring(7)):"https://github.com/"+t+".png?size="+e}},{key:"langUrl",value:function(t){return"https://anthive.io/skins/lang/"+t+".png"}},{key:"skinUrl",value:function(t){return"https://anthive.io/skins/client/"+t+"/ant.png"}},{key:"scoreString",value:function(t){var e=Math.floor(((""+t).length-1)/3);return parseFloat((0!=e?t/Math.pow(1e3,e):t).toPrecision(2))+["","K","M","B","t"][e]}},{key:"timeAgo",value:function(t){var e=Math.round(new Date)-t,n=2592e6,a=6048e5,r=864e5,i=36e5,o=6e4,s=1e3;return e>n?Math.floor(e/n)+"m ago":e>a?Math.floor(e/a)+"w ago":e>r?Math.floor(e/r)+"d ago":e>i?Math.floor(e/i)+"h ago":e>o?Math.floor(e/o)+"m ago":e>s?Math.floor(e/s)+"s ago":"Just now"}}]),t}();e.a=u},176:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},177:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}},182:function(t,e,n){var a=n(197);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(14).default)("9b80c610",a,!0,{})},196:function(t,e,n){"use strict";var a=n(182);n.n(a).a},197:function(t,e,n){(t.exports=n(13)(!1)).push([t.i,"\n.ant-player{background-image:url(https://anthive.io/skins/server/1/background.png);background-repeat:repeat\n}\n.players{margin-top:100px\n}",""])},212:function(t,e,n){"use strict";n.r(e);var a=n(175),r=null,i={data:function(){return{status:"Loading...",isPlaying:!0,us:a.a,players:[],currentTick:0,currentSpeed:4,totalTicks:0}},mounted:function(){var t=this,e=this.$route.query.id||"",n="https://storage.googleapis.com/anthive-prod-games/"+(this.$route.query.v||"")+"/"+e+".zip";null!=n?((r=new AnthivePlayer(n,"#player")).on(AnthivePlayer.onReady,function(){t.totalTicks=r.total,t.players=r.players}),r.on(AnthivePlayer.onFrameRendered,function(){t.currentTick=r.currentIndex+1})):this.status="Can't find game."},methods:{navigate:function(t){this.isPlaying=!1,"prev"==t?r.prev():r.next()},playPause:function(){this.isPlaying?(r.pause(),this.isPlaying=!1):(r.play(),this.isPlaying=!0)},setSpeed:function(t){this.currentSpeed=t,r.speed=t}}},o=(n(196),n(3)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-layout",{attrs:{column:"","align-center":""}},[n("v-flex",{staticClass:"players",attrs:{xs12:"",md8:"",lg8:""}},[t._l(t.players,function(e,a){return[n("a",{attrs:{href:"/user/?username="+e.Username}},[n("v-chip",[n("v-avatar",[n("v-img",{attrs:{src:t.us.photoUrl(e.Username,70)}})],1),n("v-avatar",[n("v-img",{attrs:{src:t.us.langUrl(e.Lang)}})],1),n("v-avatar",[n("v-img",{attrs:{src:t.us.skinUrl(e.Skin)}})],1),n("b",[t._v(t._s(e.Username))])],1)],1),a+1<t.players.length?n("b",[t._v(" VS ")]):t._e()]})],2),n("v-flex",{attrs:{xs12:"",md8:"",lg8:""}},[n("div",{staticClass:"ant-player",attrs:{id:"player"}},[n("h2",{staticClass:"loading"},[t._v(t._s(t.status))])])]),n("v-flex",{attrs:{xs12:"",md8:"",lg8:""}},[t.players.length>0?n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-items",[n("v-btn",{attrs:{title:"Previous",icon:""},on:{click:function(e){t.navigate("prev")}}},[n("v-icon",[t._v("skip_previous")])],1),n("v-btn",{attrs:{title:t.isPlaying?"pause":"play",icon:""},on:{click:function(e){t.playPause()}}},[n("v-icon",[t._v(t._s(t.isPlaying?"pause":"play_arrow"))])],1),n("v-btn",{attrs:{title:"Next",icon:""},on:{click:function(e){t.navigate("next")}}},[n("v-icon",[t._v("skip_next")])],1)],1),n("v-toolbar-title",{staticClass:"body-2 grey--text text--darken-2"},[t._v("Speed:")]),n("v-toolbar-items",[n("v-btn",{attrs:{title:"Speed 1x",disabled:1==t.currentSpeed,icon:""},on:{click:function(e){t.setSpeed(1)}}},[t._v("1x")]),n("v-btn",{attrs:{title:"Speed 2x",disabled:2==t.currentSpeed,icon:""},on:{click:function(e){t.setSpeed(2)}}},[t._v("2x")]),n("v-btn",{attrs:{title:"Speed 4x",disabled:4==t.currentSpeed,icon:""},on:{click:function(e){t.setSpeed(4)}}},[t._v("4x")])],1),n("v-toolbar-title",{staticClass:"body-2 grey--text text--darken-2"},[t._v("Ticks: "+t._s(this.currentTick)+" out of "+t._s(this.totalTicks))])],1):t._e()],1)],1)],1)},[],!1,null,null,null);s.options.__file="game.vue";e.default=s.exports}}]);