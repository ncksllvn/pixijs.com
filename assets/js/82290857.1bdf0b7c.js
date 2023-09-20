"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4760],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return t?r.createElement(y,o(o({ref:n},l),{},{components:t})):r.createElement(y,o({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const s={hide_table_of_contents:!0,sidebar_position:1},o="Async",i={unversionedId:"examples/assets/async",id:"examples/assets/async",title:"Async",description:"",source:"@site/docs/examples/assets/async.md",sourceDirName:"examples/assets",slug:"/examples/assets/async",permalink:"/examples/assets/async",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/assets/async.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"examplesSidebar",previous:{title:"Promise",permalink:"/examples/assets/promise"},next:{title:"Multiple",permalink:"/examples/assets/multiple"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"async"},"Async"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\n// await can only be used inside an async function\nasync function init()\n{\n    const texture = await PIXI.Assets.load('https://pixijs.com/assets/bunny.png');\n\n    // create a new Sprite from the awaited loaded Texture\n    const bunny = PIXI.Sprite.from(texture);\n\n    // center the sprite's anchor point\n    bunny.anchor.set(0.5);\n\n    // move the sprite to the center of the screen\n    bunny.x = app.screen.width / 2;\n    bunny.y = app.screen.height / 2;\n\n    app.stage.addChild(bunny);\n}\n\n// Call that async function\ninit();\n")))}u.isMDXComponent=!0}}]);