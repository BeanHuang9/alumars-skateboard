(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2de0d8a4"],{"0b42":function(e,t,r){var a=r("da84"),n=r("e8b5"),o=r("68ee"),c=r("861d"),s=r("b622"),l=s("species"),i=a.Array;e.exports=function(e){var t;return n(e)&&(t=e.constructor,o(t)&&(t===i||n(t.prototype))?t=void 0:c(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?i:t}},"1dde":function(e,t,r){var a=r("d039"),n=r("b622"),o=r("2d00"),c=n("species");e.exports=function(e){return o>=51||!a((function(){var t=[],r=t.constructor={};return r[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4558:function(e,t,r){"use strict";r.r(t);r("b0c0");var a=r("7a23"),n=Object(a["g"])("h2",{class:"text-center mt-5"},"結帳",-1),o={class:"my-5 row justify-content-center"},c={class:"mb-3"},s=Object(a["g"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),l={class:"mb-3"},i=Object(a["g"])("label",{for:"email",class:"form-label"},"Email",-1),d={class:"mb-3"},u=Object(a["g"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),b={class:"mb-3"},m=Object(a["g"])("label",{for:"address",class:"form-label"},"收件人地址",-1),f={class:"mb-3"},j=Object(a["g"])("label",{for:"message",class:"form-label"},"留言",-1),p={class:"text-end"},O=["disabled"],v={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},g=Object(a["i"])(" 送出訂單 ");function h(e,t,r,h,y,F){var x=Object(a["E"])("Field"),V=Object(a["E"])("ErrorMessage"),w=Object(a["E"])("Form"),E=Object(a["E"])("FooterView");return Object(a["y"])(),Object(a["f"])(a["a"],null,[n,Object(a["g"])("div",o,[Object(a["j"])(w,{ref:"form",class:"col-md-6",onSubmit:F.createOrder},{default:Object(a["Q"])((function(e){var r,n=e.errors;return[Object(a["g"])("div",c,[s,Object(a["j"])(x,{id:"name",name:"姓名",type:"text",class:Object(a["r"])(["form-control",{"is-invalid":n["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:y.orderForm.user.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return y.orderForm.user.name=e})},null,8,["class","modelValue"]),Object(a["j"])(V,{name:"姓名",class:"invalid-feedback"})]),Object(a["g"])("div",l,[i,Object(a["j"])(x,{id:"email",name:"email",type:"email",class:Object(a["r"])(["form-control",{"is-invalid":n["email"]}]),rules:{required:!0,email:!0},placeholder:"請輸入 Email",modelValue:y.orderForm.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return y.orderForm.user.email=e})},null,8,["class","modelValue"]),Object(a["j"])(V,{name:"email",class:"invalid-feedback"})]),Object(a["g"])("div",d,[u,Object(a["j"])(x,{id:"tel",name:"電話",type:"text",class:Object(a["r"])(["form-control",{"is-invalid":n["電話"]}]),rules:{required:!0,min:8},placeholder:"不需要輸入符號，例：01-2345678，請輸入成 012345678",modelValue:y.orderForm.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return y.orderForm.user.tel=e})},null,8,["class","modelValue"]),Object(a["j"])(V,{name:"電話",class:"invalid-feedback"})]),Object(a["g"])("div",b,[m,Object(a["j"])(x,{id:"address",name:"地址",type:"text",class:Object(a["r"])(["form-control",{"is-invalid":n["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:y.orderForm.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return y.orderForm.user.address=e})},null,8,["class","modelValue"]),Object(a["j"])(V,{name:"地址",class:"invalid-feedback"})]),Object(a["g"])("div",f,[j,Object(a["j"])(x,{as:"textarea",name:"message",id:"message",class:"form-control",cols:"30",rows:"10",modelValue:y.orderForm.message,"onUpdate:modelValue":t[4]||(t[4]=function(e){return y.orderForm.message=e})},null,8,["modelValue"])]),Object(a["g"])("div",p,[Object(a["g"])("button",{type:"submit",class:"btn btn-danger",disabled:!(null!==(r=y.cartData.carts)&&void 0!==r&&r.length)},[y.isLoading?(Object(a["y"])(),Object(a["f"])("span",v)):Object(a["e"])("",!0),g],8,O)])]})),_:1},8,["onSubmit"])]),Object(a["j"])(E)],64)}r("99af");var y=r("f796"),F={data:function(){return{cartData:[],orderForm:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1}},methods:{createOrder:function(){var e=this;this.isLoading=!0,this.$http.post("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("beanhuang","/order"),{data:this.orderForm}).then((function(){e.$refs.form.resetForm()})).catch((function(e){console.dir(e)})).then((function(){e.isLoading=!1}))},getCart:function(){var e=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("beanhuang","/cart")).then((function(t){e.cartData=t.data.data})).catch((function(e){console.dir(e)}))}},components:{FooterView:y["a"]},created:function(){this.getCart()}},x=r("6b0d"),V=r.n(x);const w=V()(F,[["render",h]]);t["default"]=w},"65f0":function(e,t,r){var a=r("0b42");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},8418:function(e,t,r){"use strict";var a=r("a04b"),n=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var c=a(t);c in e?n.f(e,c,o(0,r)):e[c]=r}},"99af":function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),o=r("d039"),c=r("e8b5"),s=r("861d"),l=r("7b0b"),i=r("07fa"),d=r("8418"),u=r("65f0"),b=r("1dde"),m=r("b622"),f=r("2d00"),j=m("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",v=n.TypeError,g=f>=51||!o((function(){var e=[];return e[j]=!1,e.concat()[0]!==e})),h=b("concat"),y=function(e){if(!s(e))return!1;var t=e[j];return void 0!==t?!!t:c(e)},F=!g||!h;a({target:"Array",proto:!0,forced:F},{concat:function(e){var t,r,a,n,o,c=l(this),s=u(c,0),b=0;for(t=-1,a=arguments.length;t<a;t++)if(o=-1===t?c:arguments[t],y(o)){if(n=i(o),b+n>p)throw v(O);for(r=0;r<n;r++,b++)r in o&&d(s,b,o[r])}else{if(b>=p)throw v(O);d(s,b++,o)}return s.length=b,s}})},b0c0:function(e,t,r){var a=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),c=r("9bf2").f,s=Function.prototype,l=o(s.toString),i=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(i.exec),u="name";a&&!n&&c(s,u,{configurable:!0,get:function(){try{return d(i,l(this))[1]}catch(e){return""}}})},e8b5:function(e,t,r){var a=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==a(e)}},f796:function(e,t,r){"use strict";var a=r("7a23"),n={id:"copyrights",class:"text-center mt-3"};function o(e,t,r,o,c,s){return Object(a["y"])(),Object(a["f"])("footer",null,[Object(a["g"])("div",n,[Object(a["g"])("p",null,"©"+Object(a["H"])(c.year)+Object(a["H"])(c.copyright)+" 建議瀏覽器 chrome / IE 11.0 以上",1)])])}var c={data:function(){return{copyright:"僅供學習用無任何商業用途",year:(new Date).getFullYear()}}},s=r("6b0d"),l=r.n(s);const i=l()(c,[["render",o]]);t["a"]=i}}]);
//# sourceMappingURL=chunk-2de0d8a4.f4530e17.js.map