(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18dbf8d8"],{"1a50":function(t,e,i){"use strict";i("f5fb")},7832:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exception-page"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config[t.type].img}})]),i("div",{staticClass:"content"},[i("h1",[t._v(t._s(t.config[t.type].title))]),i("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),i("div",{staticClass:"action"},[i("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回首页")])],1)])])},a=[],c={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},o=c,n={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:o}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}},p=n,r=(i("1a50"),i("2877")),h=Object(r["a"])(p,s,a,!1,null,"206e07da",null);e["a"]=h.exports},a42a:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("exception-page",{style:"min-height: "+t.minHeight,attrs:{"home-route":"/dashboard/workplace",type:"404"}})},a=[],c=i("5530"),o=i("7832"),n=i("5880"),p={name:"Exp404",components:{ExceptionPage:o["a"]},computed:Object(c["a"])(Object(c["a"])({},Object(n["mapState"])("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},r=p,h=i("2877"),l=Object(h["a"])(r,s,a,!1,null,"2c852621",null);e["default"]=l.exports},f5fb:function(t,e,i){}}]);