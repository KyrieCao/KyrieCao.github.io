webpackJsonp([1],{DKCb:function(t,a){},DXc0:function(t,a){},EJ8E:function(t,a){},JKkS:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),n={props:{myWidth:{type:String,default:"1000px"}},methods:{goUrl:function(t){window.location.href=t}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{attrs:{id:"header"}},[e("div",{staticClass:"container_nav"},[e("div",{staticClass:"subnav_box"},[e("div",{staticClass:"nav_content",style:{width:t.myWidth}},[e("div",{staticClass:"logo",staticStyle:{cursor:"pointer"},on:{click:function(a){return t.goUrl("/")}}})])])])])},staticRenderFns:[]};var s=e("VU/8")(n,l,!1,function(t){e("DKCb")},"data-v-19f67600",null).exports,r={name:"App",components:{"v-header":s}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")(r,c,!1,function(t){e("knE4")},null,null).exports,d=e("/ocq"),m=e("2bvH"),p={props:{myWidth:{type:String,default:"1000px"}},mounted:function(){this.$store.dispatch("getLinkList")},computed:Object(m.b)(["linkList"])},v={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{style:{width:t.myWidth},attrs:{id:"footer"}},[e("div",{staticClass:"fglo_bg"},[e("div",{staticClass:"link fl",attrs:{id:"js_link"}},[e("div",{staticClass:"link_c"},[e("div",[e("span",{staticStyle:{color:"#888","margin-right":"20px"}},[t._v("友情链接：")]),t._v(" "),t._l(t.linkList,function(a,i){return e("a",{key:"4"+i,attrs:{href:a.link,target:"_blank"}},[t._v(t._s(a.linkName))])})],2)])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"foot_global"},[a("p",[this._v("24直播吧所有视频数据均调用第三方资源，不提供任何视听上传服务，如有版权问题请联系我们。")]),this._v(" "),a("p",[this._v("微信客服：zhibomei2019  ")]),this._v(" "),a("p",[this._v("Copyright @ 2018 24直播吧")])])}]};var h=e("VU/8")(p,v,!1,function(t){e("pGu7")},"data-v-e59b33ec",null).exports,u={name:"Index",components:{"v-header":s,"v-footer":h},data:function(){return{active:-1,active1:-1,activeClass:-1,url:"http://47.244.250.246:8080"}},mounted:function(){this.$store.dispatch("getBanner"),this.$store.dispatch("getProjects"),this.$store.dispatch("getMatchByProject"),this.$store.dispatch("getTableList"),this.$store.dispatch("getLinkList")},computed:Object(m.b)(["banner","projectData","matchs","tabData","linkList"]),methods:{handleClickActive:function(t,a){this.active1=-1,this.activeClass=t,a?this.$store.dispatch("getMatchByProject",a):(this.activeClass=-1,this.$store.dispatch("getMatchByProject")),this.getTableList()},getTableList:function(t,a){this.active1=t,this.$store.dispatch("getTableList",a)},handleClick:function(t){window.open("/live?todatMatchId="+t.id,"_blank")}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"index"}},[e("v-header"),t._v(" "),e("div",{staticClass:"banner"},[e("el-carousel",t._l(t.banner,function(a){return e("el-carousel-item",{key:a.index,attrs:{height:"200px"}},[e("h3",[e("a",{attrs:{href:a.jumpUrl,target:"_blank"}},[e("img",{attrs:{src:t.url+a.icon,alt:a.title}})])])])}),1)],1),t._v(" "),e("div",{staticClass:"navList"},[e("ul",[e("li",{class:-1==t.activeClass?"active":"",on:{click:function(a){return t.handleClickActive()}}},[t._v("全部")]),t._v(" "),t._l(t.projectData,function(a,i){return i<=1?e("li",{key:a.id,class:t.activeClass==i?"active":"",on:{click:function(e){return t.handleClickActive(i,a.id)}}},[t._v(t._s(a.name))]):t._e()})],2)]),t._v(" "),e("div",{staticClass:"contentList"},[e("el-row",{attrs:{gutter:20}},[t.matchs?e("el-col",{attrs:{span:4}},[e("div",{staticClass:"grid-content bg-purple"},[e("div",{staticClass:"contentListLeft"},[e("ul",t._l(t.matchs,function(a,i){return i<10?e("li",{key:a.id,class:i==t.active1?"on":"",on:{click:function(e){return t.getTableList(i,a.id)}}},[t._v(t._s(a.name))]):t._e()}),0)])])]):t._e(),t._v(" "),e("el-col",{attrs:{span:20}},[e("div",{staticClass:"grid-content bg-purple-light"},[e("div",{staticClass:"contentListRight"},[e("el-table",{attrs:{data:t.tabData.todayMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.todayMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px","vertical-align":"middle"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px","vertical-align":"middle"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.tomorrowMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.tomorrowMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.thirdMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.thirdMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.fourMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.fourMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.fiveMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.fiveMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.sixMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.sixMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1),t._v(" "),e("el-table",{attrs:{data:t.tabData.sevenMatchs.match}},[e("el-table-column",{attrs:{label:t.tabData.sevenMatchs.date}},[e("el-table-column",{attrs:{prop:"startTime"}}),t._v(" "),e("el-table-column",{attrs:{width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.matchName))]),e("span",[t._v(t._s(a.row.rotation))])]}}])}),t._v(" "),e("el-table-column",{attrs:{width:"450"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{display:"inline-block","text-align":"right",width:"200px"}},[e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.hometeam))]),a.row.matchImage1?e("img",{staticStyle:{"vertical-align":"middle","margin-left":"10px"},attrs:{src:t.url+a.row.matchImage1,width:"30px",alt:""}}):t._e()]),t._v(" "),e("span",{staticStyle:{display:"inline-block",width:"20px","vertical-align":"middle","text-align":"center"}},[t._v(" VS ")]),t._v(" "),e("span",{staticStyle:{display:"inline-block","text-align":"left",width:"200px"}},[a.row.matchImage2?e("img",{staticStyle:{"vertical-align":"middle","margin-right":"10px"},attrs:{src:t.url+a.row.matchImage2,width:"30px",alt:""}}):t._e(),e("span",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a.row.visitingTeam))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("视频直播")])]}}])})],1)],1)],1)])])],1)],1),t._v(" "),e("v-footer")],1)},staticRenderFns:[]};var A=e("VU/8")(u,g,!1,function(t){e("EJ8E")},"data-v-55f1dfd6",null).exports,f=e("4gzT"),_=e.n(f),w=e("Muz9"),y=e.n(w),b={name:"Live",components:{"v-header":s,"v-footer":h},data:function(){return{active:0,todatMatchId:this.$route.query.todatMatchId,videoObjectPc:{width:1015,height:574,container:"#video",variable:"player",autoplay:!0,live:!0,video:""},data:{},videoIfr:"",vGuangShow:!0,timeCount:10,duiShow:!0,url:"http://47.244.250.246:8080"}},mounted:function(){this.$store.dispatch("getAdvert",2),this.$store.dispatch("getAdvert",3),this.$store.dispatch("getAdvert",4),this.$store.dispatch("getAdvert",5),this.$store.dispatch("getAdvert",9),this.$store.dispatch("getLinkList"),this.init(),this.videoGu()},computed:Object(m.b)(["getAdvert2","getAdvert3","getAdvert4","getAdvert5","getAdvert9","linkList"]),methods:{handleChangeUrl:function(t,a,e){if(this.active=a,1==e)if(-1!=t.indexOf(".m3u8")){this.videoIfr="",this.videoObjectPc.video=t;new ckplayer(this.videoObjectPc)}else this.videoIfr=t;else window.open(t,"_blank")},videoGu:function(){var t=this,a=setInterval(function(){t.timeCount--,0==t.timeCount&&(clearInterval(a),t.timeCount=10,t.vGuangShow=!1)},1e3)},init:function(){var t=this,a=f.Loading.service({fullscreen:!0,text:"数据加载中..."});y.a.get("http://47.244.250.246:8080/front/tmatch/getChain?todatMatchId="+this.todatMatchId).then(function(e){if(t.data=e.data.data,"200"===e.data.status){if(0!=e.data.data.chains.length)if(1==e.data.data.chains[0].type)if(-1!=e.data.data.chains[0].url.indexOf(".m3u8")){t.videoIfr="",t.videoObjectPc.video=e.data.data.chains[0].url;new ckplayer(t.videoObjectPc)}else t.videoIfr=e.data.data.chains[0].url;else window.open(e.data.data.chains[0].url,"_blank");else t.$message({showClose:!0,message:"没有直播信号",type:"error"});document.title="【24直播吧】"+t.data.hometeam+"vs"+t.data.visitingTeam+"视频直播",a.close();new ckplayer(t.videoObjectPc)}})}}},k={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"live"}},[i("v-header",{attrs:{myWidth:"780px"}}),t._v(" "),i("div",{staticClass:"today",staticStyle:{"margin-top":"90px"}},[i("div",{staticClass:"info"},[i("img",{staticClass:"bg",attrs:{src:e("axWx"),width:"781px"}}),t._v(" "),i("a",{staticClass:"back",attrs:{href:"index.html"}}),t._v(" "),i("div",{staticClass:"infoWrap"},[i("div",{staticClass:"list1"},[i("img",{staticClass:"first homeTeam_img",attrs:{src:t.url+t.data.matchImage1}}),t._v(" "),i("span",{staticClass:"name1 homeTeam"},[t._v(t._s(t.data.hometeam))])]),t._v(" "),i("div",{staticClass:"list2"},[i("p",{staticClass:"gameName matchTitle"},[t._v(t._s(t.data.matchName)+t._s(t.data.rotation))]),t._v(" "),i("p",{staticClass:"gameTime matchTime_pc"},[t._v(t._s(t.data.startDate)+" "+t._s(t.data.startTime))])]),t._v(" "),i("div",{staticClass:"list3"},[i("img",{staticClass:"second visitingTeam_img",attrs:{src:t.url+t.data.matchImage2}}),t._v(" "),i("span",{staticClass:"name2 visitingTeam"},[t._v(t._s(t.data.visitingTeam))])])])]),t._v(" "),i("div",{staticClass:"info2"},[i("div",{staticClass:"liveshow"},[t._l(t.data.chains,function(a,e){return i("a",{key:"5"+e,staticClass:"toLive",class:t.active==e?"picked":"",attrs:{href:"javascript:"},on:{click:function(i){return t.handleChangeUrl(a.url,e,a.type)}}},[t._v(t._s(a.name))])}),t._v(" "),t._l(t.getAdvert4,function(a,e){return i("a",{key:"6"+e,staticClass:"toLive",attrs:{href:a.jumpUrl,target:"_blank"}},[t._v(t._s(a.words))])})],2)]),t._v(" "),t.videoIfr?t._e():i("div",{staticClass:"liveCotainer"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.vGuangShow&&0!=t.getAdvert9.length,expression:"vGuangShow && getAdvert9.length!=0"}],staticClass:"guangg"},[t._l(t.getAdvert9,function(a,e){return i("a",{key:"1"+e,attrs:{href:a.jumpUrl,target:"_blank"}},[i("img",{attrs:{width:"780px",height:"454px",src:t.url+a.icon,alt:""}})])}),t._v(" "),i("div",{staticClass:"timeOff",on:{click:function(a){t.vGuangShow=!1}}},[t._v(t._s(t.timeCount)+" 秒钟后自动关闭 x")])],2),t._v(" "),i("div",{attrs:{id:"video"}})]),t._v(" "),t.videoIfr?i("div",{staticClass:"liveCotainer"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.vGuangShow&&0!=t.getAdvert9.length,expression:"vGuangShow && getAdvert9.length!=0"}],staticClass:"guangg"},[t._l(t.getAdvert9,function(a,e){return i("a",{key:"2"+e,attrs:{href:a.jumpUrl,target:"_blank"}},[i("img",{attrs:{width:"780px",height:"454px",src:t.url+a.icon,alt:""}})])}),t._v(" "),i("div",{staticClass:"timeOff",on:{click:function(a){t.vGuangShow=!1}}},[t._v(t._s(t.timeCount)+" 秒钟后自动关闭 x")])],2),t._v(" "),i("iframe",{attrs:{src:t.videoIfr,width:"100%",height:"454px",frameborder:"0",allowfullscreen:"",scrolling:"no"}})]):t._e(),t._v(" "),t._l(t.getAdvert5,function(a,e){return i("div",{key:"3"+e,staticStyle:{margin:"0 auto",width:"780px"}},[i("a",{attrs:{href:a.jumpUrl,target:"_blank"}},[i("img",{staticStyle:{"margin-top":"10px"},attrs:{width:"780px",height:"80px",src:t.url+a.icon,alt:""}})])])})],2),t._v(" "),i("v-footer",{attrs:{myWidth:"780px"}})],1)},staticRenderFns:[]};var S=e("VU/8")(b,k,!1,function(t){e("DXc0")},"data-v-2eb44244",null).exports;i.default.use(d.a);var x,U=new d.a({mode:"history",routes:[{path:"/",name:"Index",component:A},{path:"/live",name:"Live",component:S}]}),T=(e("JKkS"),e("bOdI")),C=e.n(T);i.default.use(m.a);var K="http://47.244.250.246:8080",I={getBanner:function(t){var a=t.commit;t.state;y.a.post(K+"/front/data/getBanner").then(function(t){"200"===t.data.status&&a("GET_BANNER",t.data.data.banners)})},getProjects:function(t){var a=t.commit;t.state;y.a.post(K+"/front/tmatch/getProjects").then(function(t){"200"===t.data.status&&a("GET_PROJECTS",t.data.data.projects)})},getMatchByProject:function(t,a){var e=t.commit,i=(t.state,"");i=a?K+"/front/tmatch/getMatchByProject?projectId="+a:K+"/front/tmatch/getMatchByProject",y.a.get(i).then(function(t){"200"===t.data.status&&e("GET_MATCHBYPROJECT",t.data.data.matchs)})},getTableList:function(t,a){var e=t.commit,i=(t.state,a||[]);y.a.get(K+"/front/tmatch/getTodayMatch?toMatchId="+i).then(function(t){"200"===t.data.status&&e("GET_TABLELIST",t.data.data)})},getLinkList:function(t){var a=t.commit;t.state;y.a.get(K+"/front/data/getLink?network=24zhibo").then(function(t){"200"===t.data.status&&a("GET_LINKLIST",t.data.data.links)})},getAdvert:function(t,a){var e=t.commit;t.state;y.a.get(K+"/front/data/getAdvert?network=24zhiboba&position="+a).then(function(t){"200"===t.data.status&&e("GET_ADVERT",{data:t.data.data.adverts,position:a})})}},B=(x={},C()(x,"GET_BANNER",function(t,a){t.imgList=a}),C()(x,"GET_PROJECTS",function(t,a){t.projectData=a}),C()(x,"GET_MATCHBYPROJECT",function(t,a){t.matchs=a||[]}),C()(x,"GET_TABLELIST",function(t,a){t.tabData=a||{}}),C()(x,"GET_LINKLIST",function(t,a){t.linkList=a||[]}),C()(x,"GET_ADVERT",function(t,a){switch(a.position){case 2:t.getAdvert2=a.data;break;case 3:t.getAdvert3=a.data;break;case 4:t.getAdvert4=a.data;break;case 5:t.getAdvert5=a.data;break;case 9:t.getAdvert9=a.data}}),x),Q=new m.a.Store({state:{imgList:[],projectData:[],matchs:[],linkList:[],tabData:{todayMatchs:{match:[],date:""},tomorrowMatchs:{match:[],date:""},thirdMatchs:{match:[],date:""},fourMatchs:{match:[],date:""},fiveMatchs:{match:[],date:""},sixMatchs:{match:[],date:""},sevenMatchs:{match:[],date:""}},getAdvert2:[],getAdvert3:[],getAdvert4:[],getAdvert5:[],getAdvert9:[]},getters:{banner:function(t){return t.imgList},projectData:function(t){return t.projectData},matchs:function(t){return t.matchs},tabData:function(t){return t.tabData},linkList:function(t){return t.linkList},getAdvert2:function(t){return t.getAdvert2},getAdvert3:function(t){return t.getAdvert3},getAdvert4:function(t){return t.getAdvert4},getAdvert5:function(t){return t.getAdvert5},getAdvert9:function(t){return t.getAdvert9}},actions:I,mutations:B});i.default.use(_.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:U,store:Q,components:{App:o},template:"<App/>"})},axWx:function(t,a){t.exports="data:image/jpeg;base64,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"},knE4:function(t,a){},pGu7:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.5e52c71a8dcd632f8e52.js.map