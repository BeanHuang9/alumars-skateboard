(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d93fa2a"],{"159b":function(t,e,c){var n=c("da84"),r=c("fdbc"),a=c("785a"),l=c("17c2"),o=c("9112"),d=function(t){if(t&&t.forEach!==l)try{o(t,"forEach",l)}catch(e){t.forEach=l}};for(var b in r)r[b]&&d(n[b]&&n[b].prototype);d(a)},1799:function(t,e,c){"use strict";var n=c("7a23"),r={"aria-label":"Page navigation example"},a={class:"pagination justify-content-center"},l=Object(n["g"])("span",{"aria-hidden":"true"},"«",-1),o=[l],d={key:0,class:"page-link"},b=["onClick"],i=Object(n["g"])("span",{"aria-hidden":"true"},"»",-1),s=[i];function O(t,e,c,l,i,O){return Object(n["y"])(),Object(n["f"])("nav",r,[Object(n["g"])("ul",a,[Object(n["g"])("li",{class:Object(n["r"])([{disabled:!c.pages.has_pre},"page-item"])},[Object(n["g"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(n["S"])((function(t){return O.updatePage(c.pages.current_page-1)}),["prevent"]))},o)],2),(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(c.pages.total_pages,(function(t){return Object(n["y"])(),Object(n["f"])("li",{class:Object(n["r"])(["page-item",{active:c.pages.current_page===t}]),key:t},[t===c.pages.current_page?(Object(n["y"])(),Object(n["f"])("span",d,Object(n["H"])(t),1)):(Object(n["y"])(),Object(n["f"])("a",{key:1,class:"page-link",href:"#",onClick:Object(n["S"])((function(e){return O.updatePage(t)}),["prevent"])},Object(n["H"])(t),9,b))],2)})),128)),Object(n["g"])("li",{class:Object(n["r"])(["page-item",{disabled:!c.pages.has_next}])},[Object(n["g"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(n["S"])((function(t){return O.updatePage(c.pages.current_page+1)}),["prevent"]))},s)],2)])])}var u={props:["pages"],methods:{updatePage:function(t){this.$emit("emitPages",t)}}},j=c("6b0d"),g=c.n(j);const p=g()(u,[["render",O]]);e["a"]=p},"17c2":function(t,e,c){"use strict";var n=c("b727").forEach,r=c("a640"),a=r("forEach");t.exports=a?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"4de4":function(t,e,c){"use strict";var n=c("23e7"),r=c("b727").filter,a=c("1dde"),l=a("filter");n({target:"Array",proto:!0,forced:!l},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));c("b64b"),c("a4d3"),c("4de4"),c("d3b7"),c("e439"),c("159b"),c("dbb4");function n(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function r(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,n)}return c}function a(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?r(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):r(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},a640:function(t,e,c){"use strict";var n=c("d039");t.exports=function(t,e){var c=[][t];return!!c&&n((function(){c.call(null,e||function(){return 1},1)}))}},b0c0:function(t,e,c){var n=c("83ab"),r=c("5e77").EXISTS,a=c("e330"),l=c("9bf2").f,o=Function.prototype,d=a(o.toString),b=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=a(b.exec),s="name";n&&!r&&l(o,s,{configurable:!0,get:function(){try{return i(b,d(this))[1]}catch(t){return""}}})},b64b:function(t,e,c){var n=c("23e7"),r=c("7b0b"),a=c("df75"),l=c("d039"),o=l((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(r(t))}})},dbb4:function(t,e,c){var n=c("23e7"),r=c("83ab"),a=c("56ef"),l=c("fc6a"),o=c("06cf"),d=c("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,c,n=l(t),r=o.f,b=a(n),i={},s=0;while(b.length>s)c=r(n,e=b[s++]),void 0!==c&&d(i,e,c);return i}})},e439:function(t,e,c){var n=c("23e7"),r=c("d039"),a=c("fc6a"),l=c("06cf").f,o=c("83ab"),d=r((function(){l(1)})),b=!o||d;n({target:"Object",stat:!0,forced:b,sham:!o},{getOwnPropertyDescriptor:function(t,e){return l(a(t),e)}})},ec5c:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),r={class:"container"},a={class:"table mt-4"},l=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"購買時間"),Object(n["g"])("th",null,"Email"),Object(n["g"])("th",null,"購買款項"),Object(n["g"])("th",null,"應付金額"),Object(n["g"])("th",null,"是否付款"),Object(n["g"])("th",null,"編輯")])],-1),o=["textContent"],d={class:"list-unstyled"},b={class:"text-right"},i={class:"form-check form-switch"},s=["id","onUpdate:modelValue","onChange"],O=["for"],u={key:0},j={key:1},g={class:"btn-group"},p=["onClick"],f=["onClick"];function h(t,e,c,h,m,y){var v=Object(n["E"])("Pagination"),k=Object(n["E"])("OrderModal"),w=Object(n["E"])("DelOrderModal"),M=Object(n["E"])("FooterView");return Object(n["y"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",r,[Object(n["g"])("table",a,[l,Object(n["g"])("tbody",null,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(m.orders,(function(e,c){return Object(n["y"])(),Object(n["f"])(n["a"],{key:c},[m.orders.length?(Object(n["y"])(),Object(n["f"])("tr",{key:0,class:Object(n["r"])({"text-secondary":!e.is_paid})},[Object(n["g"])("td",null,Object(n["H"])(new Date(e.create_at)),1),Object(n["g"])("td",null,[e.user?(Object(n["y"])(),Object(n["f"])("span",{key:0,textContent:Object(n["H"])(e.user.email)},null,8,o)):Object(n["e"])("",!0)]),Object(n["g"])("td",null,[Object(n["g"])("ul",d,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(e.products,(function(t,e){return Object(n["y"])(),Object(n["f"])("li",{key:e},Object(n["H"])(t.product.title)+" 數量："+Object(n["H"])(t.qty)+Object(n["H"])(t.product.unit),1)})),128))])]),Object(n["g"])("td",b,Object(n["H"])(e.total),1),Object(n["g"])("td",null,[Object(n["g"])("div",i,[Object(n["R"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(c){return t.updatePaid(e)}},null,40,s),[[n["K"],e.is_paid]]),Object(n["g"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(n["y"])(),Object(n["f"])("span",u,"已付款")):(Object(n["y"])(),Object(n["f"])("span",j,"未付款"))],8,O)])]),Object(n["g"])("td",null,[Object(n["g"])("div",g,[Object(n["g"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return y.showModal("edit",e)}}," 檢視 ",8,p),Object(n["g"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return y.showModal("delete",e)}}," 刪除 ",8,f)])])],2)):Object(n["e"])("",!0)],64)})),128))])]),Object(n["j"])(v,{pages:m.pagination,onGetOrders:y.getOrders},null,8,["pages","onGetOrders"])]),Object(n["j"])(k,{ref:"orderModal",order:m.tempOrder,onGetOrders:y.getOrders},null,8,["order","onGetOrders"]),Object(n["j"])(w,{ref:"delOrderModal",order:m.tempOrder,onGetOrders:y.getOrders},null,8,["order","onGetOrders"]),Object(n["j"])(M)],64)}var m=c("5530"),y=(c("99af"),c("b0c0"),{class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),v={class:"modal-dialog modal-xl",role:"document"},k={class:"modal-content border-0"},w=Object(n["g"])("div",{class:"modal-header bg-secondary text-white"},[Object(n["g"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(n["g"])("span",null,"訂單細節")]),Object(n["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),M={class:"modal-body"},x={class:"row"},P={class:"col-md-4"},_=Object(n["g"])("h3",null,"用戶資料",-1),H={class:"table"},C={key:0},D=Object(n["g"])("th",{style:{width:"100px"}},"姓名",-1),E=Object(n["g"])("th",null,"Email",-1),S=Object(n["g"])("th",null,"電話",-1),$=Object(n["g"])("th",null,"地址",-1),G={class:"col-md-8"},V=Object(n["g"])("h3",null,"訂單細節",-1),L={class:"table"},F=Object(n["g"])("th",{style:{width:"100px"}},"訂單編號",-1),U=Object(n["g"])("th",null,"下單時間",-1),q=Object(n["g"])("th",null,"付款時間",-1),J={key:0},K={key:1},R=Object(n["g"])("th",null,"付款狀態",-1),A={key:0,class:"text-success"},I={key:1,class:"text-muted"},N=Object(n["g"])("th",null,"總金額",-1),T=Object(n["g"])("h3",null,"選購商品",-1),X={class:"table"},z=Object(n["g"])("thead",null,[Object(n["g"])("tr")],-1),B={class:"text-end"},Q={class:"d-flex justify-content-end"},W={class:"form-check"},Y={class:"form-check-label",for:"flexCheckDefault"},Z={key:0},tt={key:1},et={class:"modal-footer"},ct=Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function nt(t,e,c,r,a,l){return Object(n["y"])(),Object(n["f"])("div",y,[Object(n["g"])("div",v,[Object(n["g"])("div",k,[w,Object(n["g"])("div",M,[Object(n["g"])("div",x,[Object(n["g"])("div",P,[_,Object(n["g"])("table",H,[a.tempOrder.user?(Object(n["y"])(),Object(n["f"])("tbody",C,[Object(n["g"])("tr",null,[D,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.user.name),1)]),Object(n["g"])("tr",null,[E,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.user.email),1)]),Object(n["g"])("tr",null,[S,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.user.tel),1)]),Object(n["g"])("tr",null,[$,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.user.address),1)])])):Object(n["e"])("",!0)])]),Object(n["g"])("div",G,[V,Object(n["g"])("table",L,[Object(n["g"])("tbody",null,[Object(n["g"])("tr",null,[F,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.id),1)]),Object(n["g"])("tr",null,[U,Object(n["g"])("td",null,Object(n["H"])(new Date(a.tempOrder.create_at)),1)]),Object(n["g"])("tr",null,[q,Object(n["g"])("td",null,[a.tempOrder.paid_date?(Object(n["y"])(),Object(n["f"])("span",J,Object(n["H"])(new Date(a.tempOrder.paid_date)),1)):(Object(n["y"])(),Object(n["f"])("span",K,"時間不正確"))])]),Object(n["g"])("tr",null,[R,Object(n["g"])("td",null,[a.tempOrder.is_paid?(Object(n["y"])(),Object(n["f"])("strong",A,"已付款")):(Object(n["y"])(),Object(n["f"])("span",I,"尚未付款"))])]),Object(n["g"])("tr",null,[N,Object(n["g"])("td",null,Object(n["H"])(a.tempOrder.total),1)])])]),T,Object(n["g"])("table",X,[z,Object(n["g"])("tbody",null,[(Object(n["y"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(a.tempOrder.products,(function(t){return Object(n["y"])(),Object(n["f"])("tr",{key:t.id},[Object(n["g"])("th",null,Object(n["H"])(t.product.title),1),Object(n["g"])("td",null,Object(n["H"])(t.qty)+" / "+Object(n["H"])(t.product.unit),1),Object(n["g"])("td",B,Object(n["H"])(t.final_total),1)])})),128))])]),Object(n["g"])("div",Q,[Object(n["g"])("div",W,[Object(n["R"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.tempOrder.is_paid=t})},null,512),[[n["K"],a.tempOrder.is_paid]]),Object(n["g"])("label",Y,[a.tempOrder.is_paid?(Object(n["y"])(),Object(n["f"])("span",Z,"已付款")):(Object(n["y"])(),Object(n["f"])("span",tt,"未付款"))])])])])])]),Object(n["g"])("div",et,[ct,Object(n["g"])("button",{type:"button",class:"btn btn-warning",onClick:e[1]||(e[1]=function(t){return l.updatePaid(a.tempOrder)})}," 修改付款狀態 ")])])])],512)}var rt=c("7c2b"),at=c.n(rt),lt={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},tempOrder:{},orderModal:{},isPaid:!1}},watch:{order:function(){this.tempOrder=this.order}},methods:{updatePaid:function(t){var e=this,c={is_paid:t.is_paid};this.$http.put("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("beanhuang","/admin/order/").concat(t.id),{data:c}).then((function(t){e.closeModal(),console.log(t),e.$emit("get-orders")})).catch((function(t){console.dir(t)}))},openModal:function(){this.orderModal.show()},closeModal:function(){this.orderModal.hide()}},mounted:function(){this.orderModal=new at.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})}},ot=c("6b0d"),dt=c.n(ot);const bt=dt()(lt,[["render",nt]]);var it=bt,st={id:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true",ref:"modal"},Ot={class:"modal-dialog"},ut={class:"modal-content border-0"},jt=Object(n["g"])("div",{class:"modal-header bg-danger text-white"},[Object(n["g"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(n["g"])("span",null,"刪除訂單")]),Object(n["g"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gt={class:"modal-body"},pt=Object(n["i"])(" 是否刪除"),ft={class:"text-danger"},ht=Object(n["i"])(" 訂單(刪除後將無法恢復)。 "),mt={class:"modal-footer"},yt=Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function vt(t,e,c,r,a,l){return Object(n["y"])(),Object(n["f"])("div",st,[Object(n["g"])("div",Ot,[Object(n["g"])("div",ut,[jt,Object(n["g"])("div",gt,[pt,Object(n["g"])("strong",ft,Object(n["H"])(a.tempOrder.id),1),ht]),Object(n["g"])("div",mt,[yt,Object(n["g"])("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=function(){return l.delOrder&&l.delOrder.apply(l,arguments)})},"確認刪除")])])])],512)}var kt={props:{order:{}},data:function(){return{tempOrder:{},delOrderModal:{}}},watch:{order:function(){this.tempOrder=this.order}},methods:{delOrder:function(){var t=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("beanhuang","/admin/order/").concat(this.tempOrder.id)).then((function(e){t.closeModal(),console.log(e),t.$emit("get-orders")})).catch((function(t){console.dir(t)}))},openModal:function(){this.delOrderModal.show()},closeModal:function(){this.delOrderModal.hide()}},mounted:function(){this.delOrderModal=new at.a(this.$refs.modal,{keyboard:!1})}};const wt=dt()(kt,[["render",vt]]);var Mt=wt,xt=c("1799"),Pt=c("f796"),_t={data:function(){return{orders:[],tempOrder:{},pagination:{}}},components:{OrderModal:it,DelOrderModal:Mt,Pagination:xt["a"],FooterView:Pt["a"]},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("beanhuang","/admin/orders?page=").concat(e);this.$http.get(c,this.tempProduct).then((function(e){t.orders=e.data.orders,t.pagination=e.data.pagination})).catch((function(t){console.dir(t)}))},showModal:function(t,e){"edit"===t?(this.tempOrder=Object(m["a"])({},e),this.$refs.orderModal.openModal()):"delete"===t&&(this.tempOrder=Object(m["a"])({},e),this.$refs.delOrderModal.openModal())}},mounted:function(){this.getOrders()}};const Ht=dt()(_t,[["render",h]]);e["default"]=Ht}}]);
//# sourceMappingURL=chunk-2d93fa2a.4be82ec4.js.map