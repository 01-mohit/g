(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"49b73237"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}i[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a6b":function(t,e,n){"use strict";n("ba01")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",color:"cyan lighten-2"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Vuetify Todo ")]),n("v-list-item-subtitle",[t._v(" Todo list! ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1),n("footer",{staticClass:"ml-7",attrs:{id:"footer"}},[t._v(" © Copyright H.MOHIT 2021 ")])],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",src:"intel.jpg","shrink-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Todo List")]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},o=[],r={data:function(){return{drawer:null,items:[{title:"Todo",icon:"mdi-format-list-checks",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},s=r,l=(n("1a6b"),n("2877")),c=n("6544"),u=n.n(c),d=n("7496"),p=n("40dc"),f=n("5bc1"),v=n("ce7e"),m=n("132d"),b=n("8860"),h=n("da13"),k=n("5d23"),y=n("34c3"),w=n("f6c4"),T=n("f774"),g=n("2fa4"),V=n("2a7f"),_=Object(l["a"])(s,i,o,!1,null,"2f1bcd34",null),x=_.exports;u()(_,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:f["a"],VDivider:v["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemContent:k["a"],VListItemIcon:y["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:w["a"],VNavigationDrawer:T["a"],VSpacer:g["a"],VToolbarTitle:V["a"]});n("d3b7");var O=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Todo pa-6"},[n("h1",{staticClass:"  pl-4"},[t._v("Add your tasks!")]),n("v-text-field",{staticClass:"pa-3",attrs:{outlined:"",label:"Add task","append-icon":"mdi-plus","hide-details":"",clearable:""},on:{"click:append":t.addtask,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addtask(e)}},model:{value:t.newTasktitle,callback:function(e){t.newTasktitle=e},expression:"newTasktitle"}}),n("v-list",{staticClass:"pt-0,\n    done: false",attrs:{flat:""}},t._l(t.tasks,(function(e){return n("div",{key:e.id},[n("v-list-item",{class:{"blue lighten-4":e.done},on:{click:function(n){return t.doneTask(e.id)}},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":e.done,color:"primary"}})],1),n("v-list-item-content",[n("v-list-item-title",{class:{"text-decoration-line-through":e.done}},[t._v(t._s(e.title))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.deleteTask(e.id)}}},[n("v-icon",{attrs:{color:"red"}},[t._v("mdi-delete")])],1)],1)]},proxy:!0}],null,!0)}),n("v-divider")],1)})),0)],1)},I=[],L=(n("4de4"),{name:"Todo",data:function(){return{newTasktitle:"",tasks:[]}},methods:{addtask:function(){console.log("addtask");var t={id:Date.now(),title:this.newTasktitle,done:!1};this.tasks.push(t),this.newTasktitle=""},doneTask:function(t){var e=this.tasks.filter((function(e){return e.id===t}))[0];e.done=!e.done},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t}))}}}),C=L,P=n("8336"),A=n("ac7c"),S=n("1800"),E=n("8654"),M=Object(l["a"])(C,j,I,!1,null,null,null),D=M.exports;u()(M,{VBtn:P["a"],VCheckbox:A["a"],VDivider:v["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemAction:S["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VTextField:E["a"]}),a["a"].use(O["a"]);var B=[{path:"/",name:"Todo",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new O["a"]({routes:B}),H=$,J=n("2f62");a["a"].use(J["a"]);var N=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("f309");a["a"].use(q["a"]);var F=new q["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:H,store:N,vuetify:F,render:function(t){return t(x)}}).$mount("#app")},ba01:function(t,e,n){}});
//# sourceMappingURL=app.0bbb0e18.js.map