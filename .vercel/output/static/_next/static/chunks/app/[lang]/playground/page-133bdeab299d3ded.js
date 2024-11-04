(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[519],{7157:function(e,t,a){Promise.resolve().then(a.bind(a,8697))},1042:function(e,t,a){"use strict";a.d(t,{ON:function(){return i},Jh:function(){return o},N_:function(){return d},Ix:function(){return c}});var s=a(9357),l=a(2306);let r=s.Z.create({baseURL:l.env.NEXT_PUBLIC_API_BASE_URL||"/api",timeout:55e4,headers:{"Content-Type":"application/json"}});r.interceptors.request.use(e=>e,e=>Promise.reject(e)),r.interceptors.response.use(e=>e,e=>{if(e.response)switch(e.response.status){case 401:case 403:case 404:case 500:break;default:console.log("发生错误: ".concat(e.message))}return Promise.reject(e)});let n={get:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.get(e,{params:t})},post:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.post(e,t,a)},put:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.put(e,t)},del:e=>r.delete(e)},i=e=>n.post("/runModel",e),c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new FormData;return a.append("file",e),Object.entries(t).forEach(e=>{let[t,s]=e;a.append(t,String(s))}),n.post("/uploadImage",a,{headers:{"Content-Type":"multipart/form-data"}})},o=e=>n.get("/credits",e),d=e=>n.post("/credits",e)},8697:function(e,t,a){"use strict";a.r(t),a.d(t,{runtime:function(){return h}});var s=a(2384),l=a(7341),r=a(7797),n=a(6286),i=a(1042),c=a(3526),o=a(2664),d=a(9605),u=a(5086);let h="edge";t.default=(0,d.Pi)(()=>{let e=(0,c.useSearchParams)(),[t,a]=(0,r.useState)(""),[d,h]=(0,r.useState)(""),[f,g]=(0,r.useState)(null),[m,p]=(0,r.useState)(null),[x,b]=(0,r.useState)(0),w=(0,r.useRef)(null),j=(0,r.useRef)(null),[y,v]=(0,r.useState)(30),[N,C]=(0,r.useState)(!1),I=(0,r.useRef)(null),[k,S]=(0,r.useState)([]),[U,E]=(0,r.useState)(-1),[P,R]=(0,r.useState)(0),[_,M]=(0,r.useState)("Generate"),[D,L]=(0,r.useState)(!1),[O,B]=(0,r.useState)(""),[G,F]=(0,r.useState)(!1),[T,W]=(0,r.useState)(""),[A,X]=(0,r.useState)(null);(0,r.useEffect)(()=>{let t=e.get("image");t&&g(decodeURIComponent(t))},[e]);let q=(0,r.useCallback)(()=>{if(w.current&&f){let e=document.createElement("img");e.crossOrigin="Anonymous",e.onload=()=>{let t=w.current.offsetWidth;R(t);let a=e.height/e.width*t;if(b(a),I.current&&j.current){let s=I.current,l=j.current,r=s.getContext("2d"),n=l.getContext("2d");s.width=l.width=t,s.height=l.height=a,null==r||r.drawImage(e,0,0,t,a),null==n||n.fillRect(0,0,t,a),S([{main:null==r?void 0:r.getImageData(0,0,s.width,s.height),mask:null==n?void 0:n.getImageData(0,0,l.width,l.height)}])}},e.src=f}},[f]);(0,r.useEffect)(()=>{f&&q()},[f,q]);let J=async(e,t,a)=>{M("Generating..."),L(!0),B("Working magic on your prompt and generating image..."),(0,i.ON)({prompt:e,image:t,mask:a,sceneContext:d}).then(e=>{M("Generate"),L(!1),p(e.data),o.f.updateCredits()})},z=async()=>{let e=o.f.credits;if(null===e||e<=0){F(!0),W("No credits left, please sign up for more credits.");return}if(!I.current||!j.current){F(!0),W("Please upload an image first.");return}let a=j.current,s=a.getContext("2d"),l=null==s?void 0:s.getImageData(0,0,a.width,a.height);if(l){for(let e=0;e<l.data.length;e+=4)255===l.data[e]&&255===l.data[e+1]&&255===l.data[e+2]?l.data[e]=l.data[e+1]=l.data[e+2]=255:l.data[e]=l.data[e+1]=l.data[e+2]=0,l.data[e+3]=255;null==s||s.putImageData(l,0,0)}let r=a.toDataURL("image/png"),n=await fetch(r),c=await n.blob(),d=new File([c],"mask.png",{type:"image/png"});L(!0),B("Mask Generating...");let u=await (0,i.Ix)(d);L(!1),J(t,f,u.data.url)},H=async e=>{var t;let a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(a){L(!0),B("Image Uploading...");let e=await (0,i.Ix)(a);L(!1),e.data.url&&(g(e.data.url),p(""))}},Y=()=>{C(!1),X(null)},Z=()=>{if(k.length>0){let e=I.current,t=j.current,a=null==e?void 0:e.getContext("2d"),s=null==t?void 0:t.getContext("2d");if(e&&a&&t&&s){let e=k[0];a.putImageData(e.main,0,0),s.putImageData(e.mask,0,0)}}},K=e=>{if(!N||!I.current||!j.current)return;let t=I.current,a=j.current,s=t.getContext("2d"),l=a.getContext("2d");if(s&&l){let a=t.getBoundingClientRect(),r={x:e.clientX-a.left,y:e.clientY-a.top},n=(e,t)=>{s.fillStyle="rgba(255, 200, 100, 0.5)",s.beginPath(),s.arc(e,t,y/2,0,2*Math.PI),s.fill(),l.fillStyle="rgb(255, 255, 255)",l.beginPath(),l.arc(e,t,y/2,0,2*Math.PI),l.fill()};if(A){let e=r.x-A.x,t=r.y-A.y,a=Math.max(1,Math.floor(Math.sqrt(e*e+t*t)/(y/4)));for(let s=0;s<=a;s++){let l=s/a;n(A.x+e*l,A.y+t*l)}}else n(r.x,r.y);X(r)}},Q=async()=>{if(m){let e=await fetch(m),t=await e.blob(),a=window.URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download="generated-image.png",document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(a),document.body.removeChild(s)}};return(0,s.jsxs)("div",{style:{height:x?"".concat(x+100,"px"):"600px"},className:"bg-homeBackground",children:[(0,s.jsxs)("div",{className:"flex h-screen bg-homeBackground",children:[(0,s.jsxs)("div",{className:"w-64 p-4",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"text-white text-sm mb-2 block",children:"Image Description"}),(0,s.jsx)("textarea",{className:"w-full h-24 p-2 rounded bg-transparent placeholder:text-sm placeholder-gray-300 border border-white text-white focus:outline-none focus:ring-0 focus:border-white",placeholder:"Brief describe this image (e.g., 'A bench at sunset, someone sitting with a bag')",value:d,onChange:e=>h(e.target.value)})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"text-white text-sm mb-2 block",children:"What to Generate"}),(0,s.jsx)("textarea",{className:"w-full h-24 p-2 rounded bg-transparent placeholder:text-sm placeholder-gray-300 border border-white text-white focus:outline-none focus:ring-0 focus:border-white",placeholder:"What would you like to add or replace in the selected area?",value:t,onChange:e=>a(e.target.value)})]}),(0,s.jsx)("button",{className:"w-full py-2 mb-4 bg-blue-500 text-white rounded",onClick:z,disabled:D,children:_}),(0,s.jsxs)("label",{className:"flex items-center justify-center w-full py-2 bg-gray-200 text-gray-700 rounded cursor-pointer mb-4",children:[(0,s.jsx)(n.DUB,{className:"mr-2"}),"Upload File",(0,s.jsx)("input",{type:"file",className:"hidden",onChange:H})]}),(0,s.jsx)("button",{className:"flex items-center justify-center w-full py-2 bg-gray-200 text-gray-700 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",onClick:()=>{m&&(g(m),p(null),Z())},disabled:!m,children:"Continue Generate"})]}),(0,s.jsxs)("div",{className:"flex-1 flex",children:[(0,s.jsx)("div",{className:"flex-1 p-4",children:(0,s.jsx)("div",{ref:w,className:"border border-white overflow-hidden rounded-lg border-dashed",style:{height:x?"".concat(x,"px"):"560px"},children:(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:f?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("canvas",{ref:I,onMouseDown:e=>{C(!0),X(null),K(e)},onMouseUp:Y,onMouseOut:Y,onMouseMove:K,className:"w-full h-full"})}):(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,s.jsx)("p",{className:"text-white",children:"Uploaded Image"})})})})}),(0,s.jsx)("div",{className:"flex-1 p-4",children:(0,s.jsx)("div",{ref:w,className:"border border-white overflow-hidden rounded-lg border-dashed",style:{height:x?"".concat(x,"px"):"560px"},children:(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center relative",children:m?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:Q,className:"absolute top-2 right-2 z-10 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all",children:(0,s.jsx)(n.aBF,{className:"text-gray-700"})}),(0,s.jsx)(l.default,{src:m,height:x,width:P,alt:"Generated"})]}):(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,s.jsx)("p",{className:"text-white",children:"Generated Image"})})})})})]}),(0,s.jsxs)("div",{className:"fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex justify-center space-x-6 min-w-96",children:[(0,s.jsx)("button",{className:"text-lg",onClick:Z,children:(0,s.jsx)(n.wXW,{})}),(0,s.jsx)("button",{className:"text-lg",children:(0,s.jsx)(n._TT,{})}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("input",{type:"range",min:"1",max:"50",value:y,onChange:e=>v(Number(e.target.value)),className:"w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),(0,s.jsx)("span",{className:"text-sm text-gray-600",children:y})]})]})]}),(0,s.jsx)("canvas",{ref:j,style:{display:"none"}}),D&&(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black bg-opacity-50",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)("span",{className:"loading loading-dots loading-lg text-white"}),(0,s.jsx)("div",{className:"text-white",children:O})]})}),G&&(0,s.jsx)("div",{className:"toast",children:(0,s.jsxs)("div",{className:"alert alert-info bg-yellow-400",children:[(0,s.jsx)("span",{children:T}),(0,s.jsx)(u.abH,{onClick:()=>F(!1),className:"cursor-pointer"})]})})]})})},2664:function(e,t,a){"use strict";a.d(t,{f:function(){return n}});var s=a(9773),l=a(1042);class r{constructor(){this.credits=0,this.creditLoading=!1,this.userIp="",this.fetchUserIp=async()=>{try{let e=await fetch("https://api.ipify.org?format=json"),t=await e.json();this.userIp=t.ip,this.fetchCredits()}catch(e){console.error("Error fetching user IP:",e)}},this.updateCredits=async()=>{try{let e=await (0,l.N_)({userIp:this.userIp});console.log("response",e),this.credits=e.data.credits}catch(e){console.error("Error fetching credits:",e)}finally{this.creditLoading=!1}this.userIp?this.fetchCredits():(console.log("fetching user ip"),this.fetchUserIp())},this.fetchCredits=async()=>{try{let e=await (0,l.Jh)({userIp:this.userIp});this.credits=e.data.credits,console.log("credits",this.credits)}catch(e){console.error("Error fetching credits:",e)}finally{this.creditLoading=!1}},(0,s.ky)(this),this.userIp?this.fetchCredits():this.fetchUserIp()}}let n=new r}},function(e){e.O(0,[885,757,242,510,605,653,612,744],function(){return e(e.s=7157)}),_N_E=e.O()}]);