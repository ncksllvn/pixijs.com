"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5025],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=i,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const l={hide_table_of_contents:!0,sidebar_position:0},o="Blur",s={unversionedId:"examples/filters-basic/blur",id:"examples/filters-basic/blur",title:"Blur",description:"",source:"@site/docs/examples/filters-basic/blur.md",sourceDirName:"examples/filters-basic",slug:"/examples/filters-basic/blur",permalink:"/examples/filters-basic/blur",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/filters-basic/blur.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{hide_table_of_contents:!0,sidebar_position:0},sidebar:"examplesSidebar",previous:{title:"Filter",permalink:"/examples/masks/filter"},next:{title:"Color Matrix",permalink:"/examples/filters-basic/color-matrix"}},a={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blur"},"Blur"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst bg = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/bg_depth_blur.jpg');\n\nbg.width = app.screen.width;\nbg.height = app.screen.height;\napp.stage.addChild(bg);\n\nconst littleDudes = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/depth_blur_dudes.jpg');\n\nlittleDudes.x = (app.screen.width / 2) - 315;\nlittleDudes.y = 200;\napp.stage.addChild(littleDudes);\n\nconst littleRobot = PIXI.Sprite.from('https://pixijs.com/assets/pixi-filters/depth_blur_moby.jpg');\n\nlittleRobot.x = (app.screen.width / 2) - 200;\nlittleRobot.y = 100;\napp.stage.addChild(littleRobot);\n\nconst blurFilter1 = new PIXI.filters.BlurFilter();\nconst blurFilter2 = new PIXI.filters.BlurFilter();\n\nlittleDudes.filters = [blurFilter1];\nlittleRobot.filters = [blurFilter2];\n\nlet count = 0;\n\napp.ticker.add(() =>\n{\n    count += 0.005;\n\n    const blurAmount = Math.cos(count);\n    const blurAmount2 = Math.sin(count);\n\n    blurFilter1.blur = 20 * (blurAmount);\n    blurFilter2.blur = 20 * (blurAmount2);\n});\n")))}u.isMDXComponent=!0}}]);