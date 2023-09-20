"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9446],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9175:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={hide_table_of_contents:!0,sidebar_position:1},o="Advanced",l={unversionedId:"examples/graphics/advanced",id:"examples/graphics/advanced",title:"Advanced",description:"",source:"@site/docs/examples/graphics/advanced.md",sourceDirName:"examples/graphics",slug:"/examples/graphics/advanced",permalink:"/examples/graphics/advanced",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/graphics/advanced.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"examplesSidebar",previous:{title:"Simple",permalink:"/examples/graphics/simple"},next:{title:"Dynamic",permalink:"/examples/graphics/dynamic"}},c={},p=[],s={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced"},"Advanced"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ antialias: true, resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst sprite = PIXI.Sprite.from('https://pixijs.com/assets/bg_rotate.jpg');\n\n// // BEZIER CURVE ////\n// information: https://en.wikipedia.org/wiki/B\xe9zier_curve\n\nconst realPath = new PIXI.Graphics();\n\nrealPath.lineStyle(2, 0xFFFFFF, 1);\nrealPath.moveTo(0, 0);\nrealPath.lineTo(100, 200);\nrealPath.lineTo(200, 200);\nrealPath.lineTo(240, 100);\n\nrealPath.position.x = 50;\nrealPath.position.y = 50;\n\napp.stage.addChild(realPath);\n\nconst bezier = new PIXI.Graphics();\n\nbezier.lineStyle(5, 0xAA0000, 1);\nbezier.bezierCurveTo(100, 200, 200, 200, 240, 100);\n\nbezier.position.x = 50;\nbezier.position.y = 50;\n\napp.stage.addChild(bezier);\n\n// // BEZIER CURVE 2 ////\nconst realPath2 = new PIXI.Graphics();\n\nrealPath2.lineStyle(2, 0xFFFFFF, 1);\nrealPath2.moveTo(0, 0);\nrealPath2.lineTo(0, -100);\nrealPath2.lineTo(150, 150);\nrealPath2.lineTo(240, 100);\n\nrealPath2.position.x = 320;\nrealPath2.position.y = 150;\n\napp.stage.addChild(realPath2);\n\nconst bezier2 = new PIXI.Graphics();\n\nbezier2.lineTextureStyle({ width: 10, texture: sprite.texture });\nbezier2.bezierCurveTo(0, -100, 150, 150, 240, 100);\n\nbezier2.position.x = 320;\nbezier2.position.y = 150;\n\napp.stage.addChild(bezier2);\n\n// // ARC ////\nconst arc = new PIXI.Graphics();\n\narc.lineStyle(5, 0xAA00BB, 1);\narc.arc(600, 100, 50, Math.PI, 2 * Math.PI);\n\napp.stage.addChild(arc);\n\n// // ARC 2 ////\nconst arc2 = new PIXI.Graphics();\n\narc2.lineStyle(6, 0x3333DD, 1);\narc2.arc(650, 270, 60, 2 * Math.PI, 3 * Math.PI / 2);\n\napp.stage.addChild(arc2);\n\n// // ARC 3 ////\nconst arc3 = new PIXI.Graphics();\n\narc3.lineTextureStyle({ width: 20, texture: sprite.texture });\narc3.arc(650, 420, 60, 2 * Math.PI, 2.5 * Math.PI / 2);\n\napp.stage.addChild(arc3);\n\n// / Hole ////\nconst rectAndHole = new PIXI.Graphics();\n\nrectAndHole.beginFill(0x00FF00);\nrectAndHole.drawRect(350, 350, 150, 150);\nrectAndHole.beginHole();\nrectAndHole.drawCircle(375, 375, 25);\nrectAndHole.drawCircle(425, 425, 25);\nrectAndHole.drawCircle(475, 475, 25);\nrectAndHole.endHole();\nrectAndHole.endFill();\n\napp.stage.addChild(rectAndHole);\n\n// // Line Texture Style ////\nconst beatifulRect = new PIXI.Graphics();\n\nbeatifulRect.lineTextureStyle({ width: 20, texture: sprite.texture });\nbeatifulRect.beginFill(0xFF0000);\nbeatifulRect.drawRect(80, 350, 150, 150);\nbeatifulRect.endFill();\n\napp.stage.addChild(beatifulRect);\n")))}d.isMDXComponent=!0}}]);