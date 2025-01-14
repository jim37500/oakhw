import{s as N}from"./pinia-C2udNGLe.js";import{u as y}from"./index-mMw67EmN.js";import{U as v,_ as h}from"./TopBar.vue_vue_type_script_setup_true_lang-DycL_7Rl.js";import{d as C,r as b,a0 as G,o as j,f as n,O as x,i as o,E as p,Y as m,N as d,P as E,G as U,e as r}from"./@vue-Cz6t6s_V.js";import"./leaflet-CA-SS5n8.js";/* empty css                   */import"./vue3-tour-D-BJYS3I.js";import"./@primevue-B6LoD542.js";import"./@primeuix-CZYCaOtW.js";import"./@fortawesome-s9-St5EI.js";import"./sweetalert2-BkU8I-GU.js";import"./@vue-leaflet-ClsXBK7e.js";import"./vue-router-DowOy2fH.js";import"./primevue-sCUDBQs6.js";const V="/oakhw/hero.png",S={class:"pt-24 mx-auto w-11/12"},z={class:"grid grid-cols-1 sm:grid-cols-2 gap-8"},P={class:"w-full bg-zinc-50 border-2 border-zinc-100 px-8 py-8 rounded-2xl"},A={class:"mb-4"},I={class:"text-xl font-semibold mb-1"},T={key:0,class:"text-green-600"},L={class:"mb-4"},R={class:"text-xl font-semibold mb-1"},D={key:0,class:"text-green-600"},H={key:0,class:"flex justify-center w-full"},le=C({__name:"LoginView",setup(J){const u=y(),{User:t}=N(u),f=b(null),g=b(!1),k=s=>{const e=B(s.credential);t.value.GoogleName=e.name,t.value.GoogleEmail=e.email,t.value.GooglePicture=e.picture},B=s=>{const l=s.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(l).split("").map(i=>"%"+("00"+i.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(a)},w=()=>{const s=u.GoogleClientID;google.accounts.id.initialize({client_id:s,callback:k}),google.accounts.id.renderButton(f.value,{theme:"outline",size:"large"})},F=()=>{FB.login(s=>{s.authResponse&&FB.api("/me",{fields:"name,email,picture"},e=>{t.value.FBName=e.name,t.value.FBEmail=e.email,t.value.FBPicture=e.picture.data.url})},{scope:"public_profile,email"})},_=()=>{if(!t.value.GoogleName)return v.Alert("請先登入Google帳號","error");if(!t.value.FBName)return v.Alert("請先綁定Facebook帳號","error");window.router.push("/")};return G(()=>{g.value=!!(t.value.GoogleName&&t.value.FBName)}),j(()=>{const s=document.createElement("script");s.src="https://accounts.google.com/gsi/client",s.async=!0,s.defer=!0,s.onload=w,document.head.appendChild(s),window.fbAsyncInit=function(){FB.init({appId:u.FaceBookAppID,cookie:!0,xfbml:!0,version:"v12.0"})},function(e,l,a){let i,c=e.getElementsByTagName(l)[0];e.getElementById(a)||(i=e.createElement(l),i.id=a,i.src="https://connect.facebook.net/en_US/sdk.js",c&&c.parentNode&&c.parentNode.insertBefore(i,c))}(document,"script","facebook-jssdk")}),(s,e)=>{const l=U("PrimeButton");return r(),n(E,null,[x(h),o("div",S,[e[8]||(e[8]=o("div",{class:"w-full flex flex-col items-center justify-center mb-8"},[o("div",{class:"text-4xl font-semibold"},"歡迎使用"),o("div",{class:"text-4xl font-semibold"},"新北市都市更新Demo")],-1)),o("div",z,[e[7]||(e[7]=o("div",{class:"w-full"},[o("img",{class:"",src:V,alt:"Your Company"})],-1)),o("div",P,[e[5]||(e[5]=o("div",{class:"text-2xl font-semibold mb-2"},"使用說明",-1)),o("div",A,[o("div",I,[e[1]||(e[1]=p(" 1. 登入Google ")),m(t).GoogleName?(r(),n("span",T,e[0]||(e[0]=[o("i",{class:"pi pi-check-circle"},null,-1)]))):d("",!0)]),m(t).GoogleName?d("",!0):(r(),n("div",{key:0,ref_key:"GoogleButton",ref:f},null,512))]),o("div",L,[o("div",R,[e[3]||(e[3]=p(" 2. 綁定Facebook ")),m(t).FBName?(r(),n("span",D,e[2]||(e[2]=[o("i",{class:"pi pi-check-circle"},null,-1)]))):d("",!0)]),m(t).FBName?d("",!0):(r(),n("div",H,[o("button",{onClick:F,class:"w-full bg-blue-600 font-semibold text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"},e[4]||(e[4]=[o("svg",{class:"w-6 h-6 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[o("path",{fill:"#FFFFFF",d:"M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"})],-1),p(" 綁定Facebook ")]))]))]),e[6]||(e[6]=o("div",{class:"text-xl font-semibold mb-1"},"3. 開始使用",-1)),x(l,{class:"w-full",label:"開始使用",severity:"contrast",outlined:!g.value,onClick:_},null,8,["outlined"])])])])],64)}}});export{le as default};