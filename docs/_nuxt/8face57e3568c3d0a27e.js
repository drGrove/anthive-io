(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{166:function(t,a,e){var n=e(169);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e(24).default)("9b80c610",n,!0,{})},168:function(t,a,e){"use strict";var n=e(166);e.n(n).a},169:function(t,a,e){(t.exports=e(23)(!1)).push([t.i,"\n.ant-player{background-image:url(https://anthive.io/skins/server/1/background.png);background-repeat:repeat;margin-top:100px\n}",""])},172:function(t,a,e){"use strict";e.r(a);var n={data:function(){return{status:"Loading..."}},mounted:function(){var t=this.$route.query.id||"",a="https://storage.googleapis.com/anthive-prod-games/"+(this.$route.query.v||"")+"/"+t+".zip";if(null!=a)new AnthivePlayer(a,"#player");else this.status="Can't find game."}},s=(e(168),e(14)),i=Object(s.a)(n,function(){var t=this.$createElement,a=this._self._c||t;return a("section",[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{attrs:{xs12:"",md8:"",lg8:""}},[a("div",{staticClass:"ant-player",attrs:{id:"player"}},[a("h2",{staticClass:"loading"},[this._v(this._s(this.status))])])])],1)],1)},[],!1,null,null,null);i.options.__file="game.vue";a.default=i.exports}}]);