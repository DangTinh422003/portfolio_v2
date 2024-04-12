(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[347],{27559:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/auth/users",function(){return r(47083)}])},43801:function(e,s,r){"use strict";function t(e){var s;let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",{displayName:t,display_name:n,fullName:a,full_name:i,familyName:l,family_name:o,givenName:c,given_name:d,surname:u,lastName:h,last_name:x,firstName:m,first_name:f}=null!==(s=e.raw_user_meta_data)&&void 0!==s?s:{},j=l||o||u||h||x,p=c||d||m||f;return t||n||a||i||p&&j&&"".concat(p," ").concat(j)||r}function n(e){var s;let{avatarUrl:r,avatarURL:t,avatar_url:n,profileUrl:a,profileURL:i,profile_url:l,profileImage:o,profile_image:c,profileImageUrl:d,profileImageURL:u,profile_image_url:h}=null!==(s=e.raw_user_meta_data)&&void 0!==s?s:{};return r||t||n||o||c||a||i||l||d||u||h}r.d(s,{E:function(){return n},G:function(){return t}})},81650:function(e,s,r){"use strict";r.d(s,{RT:function(){return i},xY:function(){return o}});var t=r(36492),n=r(49422),a=r(79916);let i=10;async function l(e,s){let{projectRef:r,page:t=1,keywords:a="",verified:l}=e;if(!r)throw Error("Project ref is required");let o={limit:i.toString(),offset:((t-1)*10).toString(),keywords:a};l&&(o.verified=l);let{data:c,error:d}=await (0,n.U2)("/platform/auth/{ref}/users",{params:{path:{ref:r},query:o},signal:s});if(d)throw(0,n.S3)(d);return c}let o=function(e){let{projectRef:s,page:r,keywords:n,verified:i}=e,{enabled:o=!0,...c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,t.a)(a.o.users(s,{page:r,keywords:n,verified:i}),e=>{let{signal:t}=e;return l({projectRef:s,page:r,keywords:n,verified:i},t)},{enabled:o&&void 0!==s,...c})}},47083:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return eT}});var t=r(52322),n=r(85945),a=r(2784),i=r(59491),l=r(24459),o=r(88439),c=r(83314),d=r(18902),u=r(47203),h=r(81650),x=r(13096),m=r(31840),f=r(34124),j=r(27792),p=r(9019),v=r(55380),y=r(28024),g=r(24990),w=r(4678),b=r.n(w),N=r(40386),Z=r(56599),C=r(90753),S=r(13980),_=r.n(S);function E(){return(E=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var P=(0,a.forwardRef)(function(e,s){var r=e.color,t=e.size,n=void 0===t?24:t,i=function(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["color","size"]);return a.createElement("svg",E({ref:s,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),a.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),a.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),a.createElement("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),a.createElement("line",{x1:"23",y1:"11",x2:"17",y2:"11"}))});P.propTypes={color:_().string,size:_().oneOfType([_().string,_().number])},P.displayName="UserPlus";var k=r(83036),O=function(e){return(0,t.jsx)(k.Z,{icon:P,...e})},z=r(76626),T=r(62202),U=r(89796),A=r(53187),F=r(48228),L=r(71436),D=r(79916);async function V(e){let{projectRef:s,email:r}=e,t=await (0,L.v_)("".concat(z.T5,"/auth/").concat(s,"/invite"),{email:r});if(t.error)throw t.error;return t}let X=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.NL)();return(0,F.D)(e=>V(e),{async onSuccess(s,r,n){let{projectRef:a}=r;await t.invalidateQueries(D.o.users(a)),await (null==e?void 0:e(s,r,n))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to invite user: ".concat(e.message)):s(e,r,t)},...r})};var R=e=>{let{visible:s,setVisible:r}=e,{ref:n}=(0,l.UO)(),{mutateAsync:a,isLoading:o}=X(),c=(0,x.Xo)(i.KA.AUTH_EXECUTE,"invite_user"),d=async e=>{if(!n)return console.error("Project ref is required");await a({projectRef:n,email:e.email}),T.ZP.success("Sent invite email to ".concat(e.email)),r(!1)};return(0,t.jsx)("div",{children:(0,t.jsx)(U.C,{closable:!0,hideFooter:!0,size:"small",visible:s,header:"Invite a new user",onCancel:()=>r(!s),children:(0,t.jsx)(A.Z,{validateOnBlur:!1,initialValues:{email:""},validate:e=>{let s={};return 0===e.email.length?s.email="Please enter a valid email":/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.email)||(s.email="".concat(e.email," is an invalid email")),s},onSubmit:d,children:()=>(0,t.jsxs)("div",{className:"space-y-6 py-4",children:[(0,t.jsx)(U.C.Content,{children:(0,t.jsx)(m.Z,{id:"email",className:"w-full",label:"User email",icon:(0,t.jsx)(C.Z,{}),type:"email",name:"email",placeholder:"User email"})}),(0,t.jsx)(U.C.Content,{children:(0,t.jsx)(j.z,{block:!0,size:"small",htmlType:"submit",loading:o,disabled:!c||o,children:"Invite user"})})]})})},"invite-user-modal")})},Y=r(66953),M=r(12203),q=r(72978);async function H(e){let{protocol:s,endpoint:r,serviceApiKey:t,user:n}=e,a=await (0,L.v_)("".concat(s,"://").concat(r,"/auth/v1/admin/users"),{email:n.email,password:n.password,email_confirm:n.autoConfirmUser},{headers:{apikey:t,Authorization:"Bearer ".concat(t)}});if(a.error)throw a.error;return a}let K=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.NL)();return(0,F.D)(e=>H(e),{async onSuccess(s,r,n){let{projectRef:a}=r;await t.invalidateQueries(D.o.users(a)),await (null==e?void 0:e(s,r,n))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to create user: ".concat(e.message)):s(e,r,t)},...r})};var I=r(67959),Q=e=>{let{visible:s,setVisible:r}=e,{ref:n}=(0,l.UO)(),{data:a,isLoading:o,isSuccess:c}=(0,I.q)({projectRef:n},{enabled:s}),d=(0,x.Xo)(i.KA.AUTH_EXECUTE,"create_user"),{mutate:u,isLoading:h}=K({async onSuccess(e){T.ZP.success("Successfully created user: ".concat(e.email)),r(!1)}}),f=async e=>{if(!c)return T.ZP.error("Failed to create user: Error loading project config");let{protocol:s,endpoint:r,serviceApiKey:t}=a.autoApiService;u({projectRef:n,endpoint:r,protocol:s,serviceApiKey:t,user:e})};return(0,t.jsx)(U.C,{closable:!0,hideFooter:!0,size:"small",visible:s,header:"Create a new user",onCancel:()=>r(!s),loading:!0,children:(0,t.jsx)(A.Z,{validateOnBlur:!1,initialValues:{email:"",password:"",autoConfirmUser:!0},validate:e=>{var s;let r={};return 0===e.email.length?r.email="Please enter a valid email":/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.email)||(r.email="".concat(e.email," is an invalid email")),(null===(s=e.password)||void 0===s?void 0:s.trim())||(r.password="Please enter a password"),r},onSubmit:f,children:()=>(0,t.jsx)(Y.Z,{active:o,children:(0,t.jsxs)("div",{className:"space-y-6 py-4",children:[(0,t.jsx)(U.C.Content,{children:(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(m.Z,{id:"email",autoComplete:"off",label:"User Email",icon:(0,t.jsx)(C.Z,{}),type:"email",name:"email",placeholder:"user@example.com",disabled:h||o}),(0,t.jsx)(m.Z,{id:"password",name:"password",type:"password",label:"User Password",placeholder:"••••••••",icon:(0,t.jsx)(M.Z,{}),disabled:h||o,autoComplete:"new-password"}),(0,t.jsx)(q.Z,{value:"true",id:"autoConfirmUser",name:"autoConfirmUser",label:"Auto Confirm User?",size:"medium",description:"Creates the user without sending them a confirmation email",defaultChecked:!0,disabled:h||o})]})}),(0,t.jsx)(U.C.Content,{children:(0,t.jsx)(j.z,{block:!0,size:"small",htmlType:"submit",loading:h,disabled:!d||h||o,children:"Create user"})})]})})})},"create-user-modal")},W=e=>{let{projectKpsVersion:s}=e,r=!z.Qy||b().gte(b().coerce(null!=s?s:"kps-v2.5.4"),b().coerce("kps-v2.5.3")),n=(0,x.Xo)(i.KA.AUTH_EXECUTE,"invite_user"),l=(0,x.Xo)(i.KA.AUTH_EXECUTE,"create_user"),[o,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N.h_,{children:[(0,t.jsx)(N.$F,{asChild:!0,children:(0,t.jsx)(j.z,{type:"primary",iconRight:(0,t.jsx)(Z.Z,{strokeWidth:1.5}),children:"Add user"})}),(0,t.jsxs)(N.AW,{side:"bottom",align:"end",children:[r&&(0,t.jsxs)(g.fC,{delayDuration:0,children:[(0,t.jsx)(g.xz,{className:"w-full",children:(0,t.jsxs)(N.Xi,{className:"space-x-2",disabled:!n,onClick:()=>c(!0),children:[(0,t.jsx)(C.Z,{size:"small"}),(0,t.jsx)("p",{children:"Send invitation"})]})}),!n&&(0,t.jsx)(g.h_,{children:(0,t.jsxs)(g.VY,{side:"bottom",children:[(0,t.jsx)(g.Eh,{className:"radix-tooltip-arrow"}),(0,t.jsx)("div",{className:"rounded bg-alternative py-1 px-2 leading-none shadow border border-background",children:(0,t.jsx)("span",{className:"text-xs text-foreground",children:"You need additional permissions to invite users"})})]})})]}),(0,t.jsxs)(g.fC,{delayDuration:0,children:[(0,t.jsx)(g.xz,{className:"w-full text-left",children:(0,t.jsxs)(N.Xi,{className:"space-x-2",disabled:!l,onClick:()=>u(!0),children:[(0,t.jsx)(O,{size:"small"}),(0,t.jsx)("p",{children:"Create new user"})]})}),!l&&(0,t.jsx)(g.h_,{children:(0,t.jsxs)(g.VY,{side:"bottom",children:[(0,t.jsx)(g.Eh,{className:"radix-tooltip-arrow"}),(0,t.jsx)("div",{className:"rounded bg-alternative py-1 px-2 leading-none shadow border border-background",children:(0,t.jsx)("span",{className:"text-xs text-foreground",children:"You need additional permissions to create users"})})]})})]})]})]}),r&&(0,t.jsx)(R,{visible:o,setVisible:c}),(0,t.jsx)(Q,{visible:d,setVisible:u})]})},$=r(28615),B=r(33105),G=r(98938),J=r(28879),ee=r.n(J),es=r(81733),er=r(42288);async function et(e){let{projectRef:s,userId:r}=e,t=await (0,L.$v)("".concat(z.T5,"/auth/").concat(s,"/users/").concat(r,"/factors"));if(t.error)throw t.error;return t}let en=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,F.D)(e=>et(e),{async onSuccess(s,r,t){await (null==e?void 0:e(s,r,t))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to delete user MFA factors: ".concat(e.message)):s(e,r,t)},...r})};async function ea(e){let{projectRef:s,user:r}=e,t=await (0,L.$v)("".concat(z.T5,"/auth/").concat(s,"/users"),r);if(t.error)throw t.error;return t}let ei=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,n.NL)();return(0,F.D)(e=>ea(e),{async onSuccess(s,r,n){let{projectRef:a}=r;await t.invalidateQueries(D.o.users(a)),await (null==e?void 0:e(s,r,n))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to delete user: ".concat(e.message)):s(e,r,t)},...r})};async function el(e){let{projectRef:s,user:r}=e,t=await (0,L.v_)("".concat(z.T5,"/auth/").concat(s,"/recover"),r);if(t.error)throw t.error;return t}let eo=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,F.D)(e=>el(e),{async onSuccess(s,r,t){await (null==e?void 0:e(s,r,t))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to reset user password: ".concat(e.message)):s(e,r,t)},...r})};async function ec(e){let{projectRef:s,user:r}=e,t=await (0,L.v_)("".concat(z.T5,"/auth/").concat(s,"/magiclink"),r);if(t.error)throw t.error;return t}let ed=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,F.D)(e=>ec(e),{async onSuccess(s,r,t){await (null==e?void 0:e(s,r,t))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to send magic link: ".concat(e.message)):s(e,r,t)},...r})};async function eu(e){let{projectRef:s,user:r}=e,t=await (0,L.v_)("".concat(z.T5,"/auth/").concat(s,"/otp"),r);if(t.error)throw t.error;return t}let eh=function(){let{onSuccess:e,onError:s,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,F.D)(e=>eu(e),{async onSuccess(s,r,t){await (null==e?void 0:e(s,r,t))},async onError(e,r,t){void 0===s?T.ZP.error("Failed to send magic link: ".concat(e.message)):s(e,r,t)},...r})};var ex=r(5388),em=r(38055),ef=r(80088),ej=r(35723),ep=r(21784),ev=r(12467),ey=r(83033),eg=e=>{let{user:s,canRemoveUser:r,canRemoveMFAFactors:n,setSelectedUser:i,setUserSidePanelOpen:o}=e,{ref:c}=(0,l.UO)(),{mutate:d,isLoading:u}=eo({onSuccess:()=>{T.ZP.success("Sent password recovery to ".concat(s.email))}}),{mutate:h,isLoading:x}=ed({onSuccess:()=>{T.ZP.success("Sent magic link to ".concat(s.email))}}),{mutate:m,isLoading:f}=eh({onSuccess:()=>{T.ZP.success("Sent OTP to ".concat(s.phone))}}),{mutateAsync:p,isLoading:v}=ei(),{mutateAsync:y,isLoading:w}=en(),b=async()=>{if(!c)return console.error("Project ref is required");d({projectRef:c,user:s})};async function Z(){if(!c)return console.error("Project ref is required");h({projectRef:c,user:s})}async function S(){if(!c)return console.error("Project ref is required");m({projectRef:c,user:s})}let[_,E]=(0,a.useState)(!1);async function P(){if(await (0,ex.Vs)(200),!c)return console.error("Project ref is required");try{await p({projectRef:c,user:s}),T.ZP.success("Successfully deleted ".concat(s.email)),E(!1)}catch(s){var e;T.ZP.error(null!==(e=null==s?void 0:s.message)&&void 0!==e?e:"Something went wrong while trying to delete user")}}let[k,O]=(0,a.useState)(!1);async function z(){if(await (0,ex.Vs)(200),!c)return console.error("Project ref is required");if(!s.id)return console.error("User id is required");try{await y({projectRef:c,userId:s.id}),T.ZP.success("Successfully deleted the user's factors"),O(!1)}catch(s){var e;T.ZP.error(null!==(e=null==s?void 0:s.message)&&void 0!==e?e:"Something went wrong while trying to delete user's factors")}finally{}}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N.h_,{children:[(0,t.jsx)(N.$F,{asChild:!0,children:(0,t.jsx)(j.z,{type:"text",loading:u||x||f||v||w,className:"hover:border-muted flex",children:(0,t.jsx)(em.Z,{})})}),(0,t.jsx)(N.AW,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N.Xi,{className:"space-x-2",onClick:()=>{i(s),o(!0)},children:[(0,t.jsx)(ef.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"View user info"})]}),(0,t.jsx)(N.VD,{}),null!==s.email?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(N.Xi,{className:"space-x-2",onClick:b,children:[(0,t.jsx)(C.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"Send password recovery"})]}),(0,t.jsxs)(N.Xi,{className:"space-x-2",onClick:Z,children:[(0,t.jsx)(C.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"Send magic link"})]})]}):null,null!==s.phone?(0,t.jsxs)(N.Xi,{className:"space-x-2",onClick:S,children:[(0,t.jsx)(C.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"Send OTP"})]}):null,(0,t.jsx)(N.VD,{}),(0,t.jsxs)(g.fC,{delayDuration:0,children:[(0,t.jsx)(g.xz,{asChild:!0,children:(0,t.jsxs)(N.Xi,{onClick:()=>{O(!0)},disabled:!n,className:"space-x-2",children:[(0,t.jsx)(ej.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"Remove MFA factors"})]})}),!n&&(0,t.jsx)(g.h_,{children:(0,t.jsxs)(g.VY,{side:"bottom",children:[(0,t.jsx)(g.Eh,{className:"radix-tooltip-arrow"}),(0,t.jsx)("div",{className:"rounded bg-alternative py-1 px-2 leading-none shadow border border-background",children:(0,t.jsx)("span",{className:"text-xs text-foreground",children:"You need additional permissions to remove a user's authentication factors."})})]})})]}),(0,t.jsxs)(g.fC,{delayDuration:0,children:[(0,t.jsx)(g.xz,{asChild:!0,children:(0,t.jsxs)(N.Xi,{onClick:()=>{E(!0)},disabled:!r,className:"space-x-2",children:[(0,t.jsx)(ep.Z,{size:"tiny"}),(0,t.jsx)("p",{children:"Delete user"})]})}),!r&&(0,t.jsx)(g.h_,{children:(0,t.jsxs)(g.VY,{side:"bottom",children:[(0,t.jsx)(g.Eh,{className:"radix-tooltip-arrow"}),(0,t.jsx)("div",{className:(0,ev.cn)(["rounded bg-alternative py-1 px-2 leading-none shadow","border border-background"]),children:(0,t.jsx)("span",{className:"text-xs text-foreground",children:"You need additional permissions to delete users"})})]})})]})]})})]}),(0,t.jsx)(ey.Z,{visible:_,title:"Confirm to delete",confirmLabel:"Delete",onCancel:()=>E(!1),onConfirm:()=>{P()},children:(0,t.jsxs)("p",{className:"text-sm text-foreground-light",children:["This is permanent! Are you sure you want to delete user ",s.email,"?"]})}),(0,t.jsx)(ey.Z,{visible:k,title:"Confirm to delete",confirmLabel:"Delete",onCancel:()=>O(!1),onConfirm:()=>{z()},children:(0,t.jsx)("p",{className:"text-sm text-foreground-light",children:"This is permanent! Are you sure you want to delete the user's MFA factors?"})})]})},ew=r(43801),eb=e=>{var s;let{user:r,canRemoveUser:n,canRemoveMFAFactors:a,setSelectedUser:i,setUserSidePanelOpen:l}=e,o=r.email_confirmed_at||r.phone_confirmed_at,c=ee()(r.created_at),d=ee()(r.last_sign_in_at);return(0,t.jsxs)($.Z.tr,{className:"relative",children:[(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)("span",{className:"text-foreground",children:(0,ew.G)(r)})}),(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)("div",{className:"flex items-center gap-2",children:(0,t.jsx)("span",{className:"text-sm text-foreground",children:r.email?r.email:"-"})})}),(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)("span",{className:"text-foreground",children:r.phone?r.phone:"-"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)("span",{className:"capitalize text-foreground",children:r.is_anonymous?"Anonymous":null==r?void 0:null===(s=r.raw_app_meta_data)||void 0===s?void 0:s.provider})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)("span",{className:"text-foreground",children:null==c?void 0:c.format("DD MMM, YYYY HH:mm")})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:o?r.last_sign_in_at?null==d?void 0:d.format("DD MMM, YYYY HH:mm"):"Never":(0,t.jsx)(es.C,{variant:"warning",children:"Waiting for verification.."})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsxs)("div",{className:"flex max-w-[72px] items-baseline",children:[(0,t.jsx)(er.Z,{className:"font-xs bash",children:r.id}),(0,t.jsx)("div",{children:"..."})]})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(eg,{user:r,canRemoveUser:n,canRemoveMFAFactors:a,setSelectedUser:i,setUserSidePanelOpen:l})})]},r.id)},eN=r(54175),eZ=r(66740),eC=()=>(0,t.jsxs)($.Z.tr,{className:"relative",children:[(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-8"})}),(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-36"})}),(0,t.jsx)($.Z.td,{className:"whitespace-nowrap",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-8"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-10"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-32"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-8"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(eN.Z,{className:"h-[20px] py-0 w-20"})}),(0,t.jsx)($.Z.td,{className:"table-cell",children:(0,t.jsx)(j.z,{type:"text",disabled:!0,className:"hover:border-muted flex",children:(0,t.jsx)(eZ.Z,{})})})]}),eS=e=>{let{total:s,page:r,setPage:n,isFetchingNextPage:a}=e,i=h.RT*(r-1)+1,l=i>s?s:i,o=h.RT*r,c=o>s?s:o,d=c<s;return(0,t.jsxs)("nav",{className:"flex items-center justify-between overflow-hidden","aria-label":"Pagination",children:[(0,t.jsx)("div",{className:"hidden sm:block",children:(0,t.jsxs)("p",{className:"text-xs text-foreground-lighter",children:["Showing",(0,t.jsx)("span",{className:"px-1 font-medium text-foreground-light",children:l}),"to",(0,t.jsx)("span",{className:"px-1 font-medium text-foreground-light",children:c}),"of",(0,t.jsx)("span",{className:"px-1 font-medium text-foreground-light",children:s}),"results"]})}),(0,t.jsxs)("div",{className:"flex flex-1 justify-between sm:justify-end",children:[r>1&&!(a&&2===r)&&(0,t.jsx)(j.z,{type:"default",onClick:()=>n(r-1),disabled:a,children:"Previous"}),(d||a)&&(0,t.jsx)(j.z,{type:"default",className:"ml-3",onClick:()=>n(r+1),disabled:a,loading:a,children:"Next"})]})]})},e_=r(17414),eE=e=>{let{selectedUser:s,userSidePanelOpen:r,setUserSidePanelOpen:n}=e;return(0,t.jsx)(e_.ZP,{size:"large",header:"View user info",visible:r,onCancel:()=>n(!1),cancelText:"Close",children:(0,t.jsx)(e_.ZP.Content,{className:"space-y-10 py-6",children:(0,t.jsx)(er.Z,{className:"javascript",children:JSON.stringify(s,null,2)})})})},eP=e=>{let{page:s,setPage:r,keywords:n,total:l,users:o,isLoading:c,isSuccess:d,isFetchingNextPage:u,error:h}=e,[m,f]=(0,a.useState)(void 0),[j,p]=(0,a.useState)(!1),v=(0,x.Xo)(i.KA.TENANT_SQL_DELETE,"auth.users"),y=(0,x.Xo)(i.KA.TENANT_SQL_DELETE,"auth.mfa_factors");return(0,t.jsx)($.Z,{head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($.Z.th,{children:"Display Name"}),(0,t.jsx)($.Z.th,{children:"Email"}),(0,t.jsx)($.Z.th,{children:"Phone"}),(0,t.jsx)($.Z.th,{className:"table-cell",children:"Provider"}),(0,t.jsx)($.Z.th,{className:"table-cell",children:"Created"}),(0,t.jsx)($.Z.th,{className:"table-cell",children:"Last Sign In"}),(0,t.jsx)($.Z.th,{className:"table-cell",children:"User UID"}),(0,t.jsx)($.Z.th,{})]}),body:(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eC,{}),(0,t.jsx)(eC,{}),(0,t.jsx)(eC,{}),(0,t.jsx)(eC,{})]}),h&&(0,t.jsx)(B.Z,{error:h,subject:"Failed to retrieve users"}),d&&0===o.length&&(0,t.jsx)($.Z.tr,{children:(0,t.jsx)($.Z.td,{colSpan:8,className:"h-14 whitespace-nowrap border-t p-4 text-sm leading-5 text-gray-300",children:(0,t.jsxs)("div",{className:"flex items-center space-x-3 opacity-75",children:[(0,t.jsx)(G.Z,{size:16,strokeWidth:2}),(0,t.jsx)("p",{className:"text-foreground-light",children:n?'No users matched the search query "'.concat(n,'"'):"No users in your project"})]})})}),d&&o.length>0&&o.map(e=>(0,t.jsx)(eb,{user:e,canRemoveUser:v,canRemoveMFAFactors:y,setSelectedUser:f,setUserSidePanelOpen:p},e.id)),(0,t.jsx)($.Z.tr,{children:(0,t.jsx)($.Z.td,{colSpan:8,children:(0,t.jsx)(eS,{total:l,page:s,setPage:r,isFetchingNextPage:u})})}),(0,t.jsx)(eE,{selectedUser:m,userSidePanelOpen:j,setUserSidePanelOpen:p})]})})},ek=()=>{var e,s;let r=(0,n.NL)(),{project:g}=(0,c.d2)(),{ref:w}=(0,l.UO)(),b=(0,o.cg)(),[N,Z]=(0,a.useState)(1),[C,S]=(0,a.useState)(""),[_,E]=(0,a.useState)(""),[P,k]=(0,a.useState)(),O=(0,x.Xo)(i.KA.TENANT_SQL_SELECT,"auth.users"),z=(0,x.N4)(),{data:T,isLoading:U,isSuccess:A,refetch:F,isRefetching:L,error:V,isPreviousData:X}=(0,h.xY)({projectRef:w,page:N,keywords:_,verified:P},{keepPreviousData:!0,onSuccess(e){e.users.length<=0&&e.total>0&&(r.removeQueries(D.o.users(w,{page:N,keywords:_,verified:P})),Z(e=>e-1))}});return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"justify-between px-6 pt-6 pb-2 md:flex",children:[(0,t.jsxs)("div",{className:"relative flex space-x-4",children:[(0,t.jsx)(m.Z,{size:"small",value:C,onChange:e=>S(e.target.value),onKeyDown:e=>{13==e.keyCode&&E(C)},className:"min-w-[275px]",name:"email",id:"email",placeholder:"Search by email or phone number",icon:(0,t.jsx)(f.Z,{size:"tiny"}),actions:[C&&(0,t.jsx)(j.z,{size:"tiny",type:"text",icon:(0,t.jsx)(p.Z,{size:"tiny"}),onClick:()=>void(S(""),E(""),k(void 0))})]}),(0,t.jsxs)(v.Z,{size:"small",value:P,onChange:function(e){k(e)},name:"verified",id:"verified",className:"w-[200px]",children:[(0,t.jsx)(v.Z.Option,{label:"All Users",value:"",children:"All Users"}),(0,t.jsx)(v.Z.Option,{label:"Verified Users",value:"verified",children:"Verified Users"}),(0,t.jsx)(v.Z.Option,{label:"Un-Verified Users",value:"unverified",children:"Un-Verified Users"})]})]}),(0,t.jsxs)("div",{className:"mt-4 flex items-center gap-2 md:mt-0",children:[b&&(0,t.jsx)(d.Z,{section:["user-management"]}),(0,t.jsx)(j.z,{size:"tiny",icon:(0,t.jsx)(y.Z,{}),type:"default",loading:L&&!X,onClick:()=>F(),children:"Reload"}),(0,t.jsx)(W,{projectKpsVersion:null==g?void 0:g.kpsVersion})]})]}),(0,t.jsx)("section",{className:"thin-scrollbars mt-4 overflow-visible px-6",children:(0,t.jsx)("div",{className:"section-block--body relative overflow-x-auto rounded",children:(0,t.jsx)("div",{className:"inline-block min-w-full align-middle",children:z&&!O?(0,t.jsx)("div",{className:"mt-8",children:(0,t.jsx)(u.Z,{isFullPage:!0,resourceText:"access your project's users"})}):(0,t.jsx)(eP,{page:N,setPage:Z,keywords:_,verified:P,total:null!==(e=null==T?void 0:T.total)&&void 0!==e?e:0,users:null!==(s=null==T?void 0:T.users)&&void 0!==s?s:[],isLoading:U,isSuccess:A,isFetchingNextPage:X,error:V})})})})]})},eO=r(3593);let ez=()=>(0,t.jsx)(ek,{});ez.getLayout=e=>(0,t.jsx)(eO.g1,{title:"Auth",children:e});var eT=ez},66740:function(e,s,r){"use strict";var t=r(52322);r(2784);var n=r(13667),a=r(83036);s.Z=function(e){return(0,t.jsx)(a.Z,{icon:n.Z,...e})}},35723:function(e,s,r){"use strict";var t=r(52322);r(2784);var n=r(67270),a=r(83036);s.Z=function(e){return(0,t.jsx)(a.Z,{icon:n.Z,...e})}},13667:function(e,s,r){"use strict";var t=r(2784),n=r(13980),a=r.n(n);function i(){return(i=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,s){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["color","size"]);return t.createElement("svg",i({ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("circle",{cx:"12",cy:"12",r:"1"}),t.createElement("circle",{cx:"19",cy:"12",r:"1"}),t.createElement("circle",{cx:"5",cy:"12",r:"1"}))});l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="MoreHorizontal",s.Z=l},67270:function(e,s,r){"use strict";var t=r(2784),n=r(13980),a=r.n(n);function i(){return(i=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var l=(0,t.forwardRef)(function(e,s){var r=e.color,n=e.size,a=void 0===n?24:n,l=function(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],!(s.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["color","size"]);return t.createElement("svg",i({ref:s,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:void 0===r?"currentColor":r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"}),t.createElement("path",{d:"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"}),t.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))});l.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},l.displayName="ShieldOff",s.Z=l}},function(e){e.O(0,[667,9678,8183,8421,3844,3145,8286,3517,5022,6751,1421,5573,1761,5232,2550,4056,3501,7689,6647,6909,5952,1685,9298,9774,2888,179],function(){return e(e.s=27559)}),_N_E=e.O()}]);