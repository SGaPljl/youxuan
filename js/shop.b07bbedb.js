(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"5f6f":function(a,t,c){"use strict";c.r(t);var s=c("7a23"),n=function(a){return Object(s["w"])("data-v-1a3bcc54"),a=a(),Object(s["u"])(),a},e={key:0,class:"shop"},i={class:"header"},o=n((function(){return Object(s["g"])("span",null,"商品详情",-1)})),r={class:"img"},d=["src"],p={class:"center"},b={class:"center-price"},l=n((function(){return Object(s["g"])("span",{class:"center-price-icon"},"￥",-1)})),u={class:"center-price-num"},v={class:"center-sum"},f={class:"center-detail"},j=Object(s["h"])('<div class="center-icon" data-v-1a3bcc54><span data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>推荐</span></span><span data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>帮我选</span></span><span data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>分享</span></span></div>',1),O={class:"footer"},h=Object(s["h"])('<div class="footer-icon" data-v-1a3bcc54><span class="footer-icon-list" data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>店铺</span></span><span class="footer-icon-list" data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>客服</span></span><span class="footer-icon-list" data-v-1a3bcc54><span class="iconfont" data-v-1a3bcc54></span><span class="text" data-v-1a3bcc54>收藏</span></span></div>',1),w={class:"footer-button"},g=n((function(){return Object(s["g"])("span",{class:"buy"},"立即购买",-1)}));function m(a,t,c,n,m,I){return n.showlist[n.id-1]?(Object(s["t"])(),Object(s["f"])("div",e,[Object(s["g"])("div",i,[Object(s["g"])("span",{class:"iconfont back",onClick:t[0]||(t[0]=function(){return n.back&&n.back.apply(n,arguments)})},""),o]),Object(s["g"])("div",r,[Object(s["g"])("img",{src:n.showlist[n.id-1].imgUrl,alt:""},null,8,d)]),Object(s["g"])("div",p,[Object(s["g"])("div",b,[l,Object(s["g"])("span",u,Object(s["C"])(n.showlist[n.id-1].tages[1]),1)]),Object(s["g"])("div",v,Object(s["C"])(n.showlist[n.id-1].tages[2]),1),Object(s["g"])("div",f,Object(s["C"])(n.showlist[n.id-1].desc),1),j]),Object(s["g"])("div",O,[h,Object(s["g"])("div",w,[Object(s["g"])("span",{class:"add",onClick:t[1]||(t[1]=function(){n.addCartItemInfo(n.id,n.showlist[n.id-1])})},"加入购物车"),g])])])):Object(s["e"])("",!0)}var I=c("1da1"),k=(c("96cf"),c("6c02")),C=c("b7da"),x=c("5502"),y=function(){var a=Object(s["x"])({showlist:{}}),t=function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["a"])("/api/show");case 2:c=t.sent,0===c.code&&(a.showlist=c.data.showlist);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=Object(s["D"])(a),n=c.showlist,e=Object(x["b"])(),i=Object(s["D"])(e.state),o=i.cartlist,r=function(a,t){e.commit("addCartItemInfo",{productId:a,productInfo:t})};return{showlist:n,pleaseShop:t,cartlist:o,addCartItemInfo:r}},D={setup:function(){var a=Object(k["d"])(),t=Object(k["c"])(),c=t.params.id,s=y(),n=s.showlist,e=s.pleaseShop,i=s.cartlist,o=s.addCartItemInfo;e();var r=function(){a.push({name:"Home"})};return{back:r,showlist:n,id:c,cartlist:i,addCartItemInfo:o}}},J=(c("e1d9"),c("6b0d")),R=c.n(J);const S=R()(D,[["render",m],["__scopeId","data-v-1a3bcc54"]]);t["default"]=S},"997b":function(a,t,c){},e1d9:function(a,t,c){"use strict";c("997b")}}]);
//# sourceMappingURL=shop.b07bbedb.js.map