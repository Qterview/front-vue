(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{353:function(t,e,o){var content=o(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(48).default)("fdeada0e",content,!0,{sourceMap:!1})},360:function(t,e,o){"use strict";o(353)},361:function(t,e,o){var n=o(47)(!1);n.push([t.i,".socket-outside[data-v-2ab5b770]{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,.6);display:grid;align-content:center;justify-content:center;place-content:center;z-index:1}#socket-modal[data-v-2ab5b770]{width:520px;padding:24px;background:#fff;border-color:#000}#socket-modal a[data-v-2ab5b770]{display:block;line-height:1.4em;margin-top:1px;height:52px;margin-bottom:0}#socket-modal .head[data-v-2ab5b770],#socket-modal a[data-v-2ab5b770]{color:#222;font-weight:700;font-size:18px}#socket-modal .head[data-v-2ab5b770]{display:flex;justify-content:space-between;align-items:center;padding:0 30px 20px 10px;border-bottom:1px solid #dfe1e4}#socket-modal .title[data-v-2ab5b770]{padding-left:10px}#socket-modal .btn-container[data-v-2ab5b770]{display:flex;position:relative;top:-10px;left:35px}#socket-modal .btn-container>img[data-v-2ab5b770]{cursor:pointer;width:16px}",""]),t.exports=n},368:function(t,e,o){"use strict";o.r(e);o(33),o(24),o(32),o(17),o(39),o(25),o(40);var n=o(14),r=o(36);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["socketstate"])),data:function(){return{socket:null,alarmTitle:"Ngnix에 대해 설명하세요",alarmId:""}},created:function(){},mounted:function(){var t=this;this.socket=this.$nuxtSocket({name:"alarm",channel:"/alarm"}),this.socket.on("alarm",(function(data){console.log("소켓 데이터:",data),t.$store.commit("socketstate/SHOW_REGISTER_ALARM",!0),t.alarmTitle=data.data,t.alarmId=data.id}))}},d=l,f=(o(360),o(19)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return t.socketstate.register?e("div",{staticClass:"socket-outside"},[e("div",{attrs:{id:"socket-modal"}},[e("div",{staticClass:"head"},[e("span",[t._v("질문 등록 완료")]),t._v(" "),e("div",{staticClass:"btn-container"},[e("img",{attrs:{src:"/cross-icon.png",alt:"닫기"},on:{click:function(e){return e.preventDefault(),t.$store.commit("socketstate/SHOW_REGISTER_ALARM",!1)}}})])]),t._v(" "),e("nuxt-link",{attrs:{to:{name:"list-id",params:{id:t.alarmId}}},on:{click:function(e){return e.preventDefault(),t.$store.commit("socketstate/SHOW_REGISTER_ALARM",!1)}}},[e("h5",{staticClass:"title"},[t._v(t._s("".concat(t.alarmTitle)))])])],1)]):t._e()}),[],!1,null,"2ab5b770",null);e.default=component.exports}}]);