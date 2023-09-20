"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9178],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={hide_table_of_contents:!0,sidebar_position:4},i="Screen Shot",s={unversionedId:"examples/advanced/screen-shot",id:"examples/advanced/screen-shot",title:"Screen Shot",description:"",source:"@site/docs/examples/advanced/screen-shot.md",sourceDirName:"examples/advanced",slug:"/examples/advanced/screen-shot",permalink:"/examples/advanced/screen-shot",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/advanced/screen-shot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{hide_table_of_contents:!0,sidebar_position:4},sidebar:"examplesSidebar",previous:{title:"Mouse Trail",permalink:"/examples/advanced/mouse-trail"},next:{title:"Collision Detection",permalink:"/examples/advanced/collision-detection"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"screen-shot"},"Screen Shot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ backgroundColor: '#111', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nconst texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');\nconst bunnyContainer = new PIXI.Container();\n\nasync function takeScreenshot()\n{\n    app.stop();\n    const url = await app.renderer.extract.base64(bunnyContainer);\n    const a = document.createElement('a');\n\n    document.body.append(a);\n    a.download = 'screenshot';\n    a.href = url;\n    a.click();\n    a.remove();\n    app.start();\n}\n\napp.stage.eventMode = 'static';\napp.stage.hitArea = app.screen;\napp.stage.on('pointerdown', takeScreenshot);\n\nfor (let i = 0; i < 25; i++)\n{\n    const bunny = new PIXI.Sprite(texture);\n\n    bunny.anchor.set(0.5);\n    bunny.x = (i % 5) * 40;\n    bunny.y = Math.floor(i / 5) * 40;\n    bunnyContainer.addChild(bunny);\n}\n\nbunnyContainer.x = 400;\nbunnyContainer.y = 300;\nbunnyContainer.pivot.x = bunnyContainer.width / 2;\nbunnyContainer.pivot.y = bunnyContainer.height / 2;\n\napp.ticker.add((delta) =>\n{\n    bunnyContainer.rotation += 0.01 * delta;\n});\n\nconst style = new PIXI.TextStyle({\n    fontFamily: 'Roboto',\n    fill: '#999',\n});\n\nconst screenshotText = new PIXI.Text('Click To Take Screenshot', style);\n\nscreenshotText.x = Math.round((app.screen.width - screenshotText.width) / 2);\nscreenshotText.y = Math.round(screenshotText.height / 2);\n\napp.stage.addChild(screenshotText, bunnyContainer);\n")))}u.isMDXComponent=!0}}]);