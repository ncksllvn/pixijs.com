"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1606],{3464:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(5166),r=n(7294),s=n(4184),i=n.n(s);const l="select_LFtK",o="label_iJQG",c="labelText_vfPa";var u=n(5893);const d=e=>e.map((e=>{let{value:t,label:n}=e;return(0,u.jsx)("option",{value:t,children:n},t)}));function p(e){let{className:t,label:n,labelClassName:a,selectedId:s,options:p,onValueChange:x,...h}=e;const m=(0,r.useCallback)((e=>{x(e.target.value)}),[x]),v=(e=>e.length>0&&Array.isArray(e[0].options))(p),g=(0,u.jsxs)("select",{className:i()(l,t),...h,value:s,onChange:m,children:[v&&(f=p,f.map((e=>{let{label:t,options:n}=e;return(0,u.jsx)("optgroup",{label:t,children:d(n)},t)}))),!v&&d(p)]});var f;return n?(0,u.jsxs)("label",{className:i()(o,a),children:[(0,u.jsx)("span",{className:c,children:n}),g]}):g}var x=n(3874),h=n(2124),m=n(6550);function v(e,t,n){const a=(0,m.k6)(),s=(0,r.useMemo)((()=>n(function(e){const t=new URLSearchParams(e);return Array.from(t.entries()).reduce(((e,t)=>{let[n,a]=t;return{...e,[n]:a}}),{})}(a.location.search))),[n,a.location.search]),i=(0,r.useRef)("function"==typeof e?e(s):e),l=(0,r.useMemo)((()=>({...i.current,...s})),[s]);return[l,function(e,n,r){void 0===n&&(n=!0),void 0===r&&(r=!1);const s="function"==typeof e?e(l):{...l,...e},o=Object.entries(s).reduce(((e,t)=>{let[n,a]=t;return a===i.current[n]?e:{...e,[n]:a}}),{}),c=new URLSearchParams(Object.entries(t(o))),u={pathname:location.pathname,search:c.toString()};r?n?a.push(u):a.replace(u):n?history.pushState(u,"",`${u.pathname}?${c.toString()}`):history.replaceState(u,"",`${u.pathname}?${c.toString()}`)}]}const g=(0,h.qhW)(h.kKJ,(function(e){const t=JSON.stringify(e);return btoa(t)})),f=(0,h.qhW)(h.kKJ,(function(e){try{return JSON.parse(atob(e))}catch{return}})),b=(0,h.rO9)({state:g}),y=(0,h.rO9)({state:f}),j="wrapper_GThw",_="nav_LVun",C="select_VJqz";var k=n(1262);function N(e){let{pixiVersion:t}=e;const[n,r]=(e=>{let{defaultExampleId:t}=e;return v((e=>{const{state:n,exampleId:a}=e;return{state:n??void 0,exampleId:n?"custom":a??t}}),b,y)})({defaultExampleId:x.L8,defaultPixiVersion:t.version}),{state:s,exampleId:i}=n,{indexCode:l,extraFiles:o,activeFile:c,usesWebWorkerLibrary:d,exampleOptions:h,handleOptionSelected:m,handleEditorCodeChanged:g}=(0,x.AQ)({urlState:s,selectedOptionId:i,setURLState:r,pixiVersion:t});return(0,u.jsx)("div",{className:j,children:(0,u.jsx)(k.Z,{children:()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:_,children:(0,u.jsx)(p,{label:"Example:",labelClassName:C,selectedId:i,options:h,onValueChange:m})}),(0,u.jsx)(a.Z,{code:l,extraFiles:o,activeFile:c,pixiVersion:t.version,isPixiDevVersion:t.dev,isPixiWebWorkerVersion:d,onCodeChanged:g,mode:"fullscreen"})]})})})}},2801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(3464),i=n(7949);const l={hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null},o=void 0,c={unversionedId:"playground/index",id:"playground/index",title:"index",description:"",source:"@site/docs/playground/index.md",sourceDirName:"playground",slug:"/playground/",permalink:"/playground/",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,pagination_next:null,pagination_prev:null,custom_edit_url:null}},u={},d=[],p={toc:d};function x(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{pixiVersion:i,mdxType:"Playground"}))}x.isMDXComponent=!0},7949:e=>{e.exports=JSON.parse('{"versionLabel":"v8.x","version":"8.0.0","releaseNotes":"https://github.com/pixijs/pixijs/releases/tag/v8.0.0","build":"https://pixijs.download/v8.0.0/pixi.min.js","docs":"https://pixijs.download/v8.0.0/docs/index.html","npm":"8.0.0","prerelease":false,"latest":true}')}}]);