"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8377],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>b});var o=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var a=o.createContext({}),p=function(t){var n=o.useContext(a),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},c=function(t){var n=p(t.components);return o.createElement(a.Provider,{value:n},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),l=p(e),m=r,b=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return e?o.createElement(b,s(s({ref:n},c),{},{components:e})):o.createElement(b,s({ref:n},c))}));function b(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var i=e.length,s=new Array(i);s[0]=m;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=t,u[l]="string"==typeof t?t:r,s[1]=u;for(var p=2;p<i;p++)s[p]=e[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},3655:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var o=e(7462),r=(e(7294),e(3905));const i={hide_table_of_contents:!0,sidebar_position:1},s="Interactivity",u={unversionedId:"examples/events/interactivity",id:"examples/events/interactivity",title:"Interactivity",description:"",source:"@site/docs/examples/events/interactivity.md",sourceDirName:"examples/events",slug:"/examples/events/interactivity",permalink:"/examples/events/interactivity",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/events/interactivity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"examplesSidebar",previous:{title:"Click",permalink:"/examples/events/click"},next:{title:"Dragging",permalink:"/examples/events/dragging"}},a={},p=[],c={toc:p};function l(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interactivity"},"Interactivity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\n// create a background...\nconst background = PIXI.Sprite.from('https://pixijs.com/assets/bg_button.jpg');\n\nbackground.width = app.screen.width;\nbackground.height = app.screen.height;\n\n// add background to stage...\napp.stage.addChild(background);\n\n// create some textures from an image path\nconst textureButton = PIXI.Texture.from('https://pixijs.com/assets/button.png');\nconst textureButtonDown = PIXI.Texture.from('https://pixijs.com/assets/button_down.png');\nconst textureButtonOver = PIXI.Texture.from('https://pixijs.com/assets/button_over.png');\n\nconst buttons = [];\n\nconst buttonPositions = [\n    175, 75,\n    655, 75,\n    410, 325,\n    150, 465,\n    685, 445,\n];\n\nfor (let i = 0; i < 5; i++)\n{\n    const button = new PIXI.Sprite(textureButton);\n\n    button.anchor.set(0.5);\n    button.x = buttonPositions[i * 2];\n    button.y = buttonPositions[i * 2 + 1];\n\n    // make the button interactive...\n    button.eventMode = 'static';\n    button.cursor = 'pointer';\n\n    button\n    // Mouse & touch events are normalized into\n    // the pointer* events for handling different\n    // button events.\n        .on('pointerdown', onButtonDown)\n        .on('pointerup', onButtonUp)\n        .on('pointerupoutside', onButtonUp)\n        .on('pointerover', onButtonOver)\n        .on('pointerout', onButtonOut);\n\n    // Use mouse-only events\n    // .on('mousedown', onButtonDown)\n    // .on('mouseup', onButtonUp)\n    // .on('mouseupoutside', onButtonUp)\n    // .on('mouseover', onButtonOver)\n    // .on('mouseout', onButtonOut)\n\n    // Use touch-only events\n    // .on('touchstart', onButtonDown)\n    // .on('touchend', onButtonUp)\n    // .on('touchendoutside', onButtonUp)\n\n    // add it to the stage\n    app.stage.addChild(button);\n\n    // add button to array\n    buttons.push(button);\n}\n\n// set some silly values...\nbuttons[0].scale.set(1.2);\nbuttons[2].rotation = Math.PI / 10;\nbuttons[3].scale.set(0.8);\nbuttons[4].scale.set(0.8, 1.2);\nbuttons[4].rotation = Math.PI;\n\nfunction onButtonDown()\n{\n    this.isdown = true;\n    this.texture = textureButtonDown;\n    this.alpha = 1;\n}\n\nfunction onButtonUp()\n{\n    this.isdown = false;\n    if (this.isOver)\n    {\n        this.texture = textureButtonOver;\n    }\n    else\n    {\n        this.texture = textureButton;\n    }\n}\n\nfunction onButtonOver()\n{\n    this.isOver = true;\n    if (this.isdown)\n    {\n        return;\n    }\n    this.texture = textureButtonOver;\n}\n\nfunction onButtonOut()\n{\n    this.isOver = false;\n    if (this.isdown)\n    {\n        return;\n    }\n    this.texture = textureButton;\n}\n")))}l.isMDXComponent=!0}}]);