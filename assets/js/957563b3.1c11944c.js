"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[6633],{2797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="v7 Migration Guide",l={unversionedId:"guides/migrations/v7",id:"version-7.x/guides/migrations/v7",title:"v7 Migration Guide",description:"First and foremost, PixiJS v7 is a modernization release that reflects changes in the ecosystem since PixiJS was first published over six years ago. Browsers have gotten better, but PixiJS hasn't really taken advantage of some of the new features like fetch, Workers, modern JavaScript language syntax. This release keeps intact much of the high-level DisplayObjects (e.g., Sprite, Graphics, Mesh, etc). Aside from a few things, this release should be medium to low impact for most users.",source:"@site/versioned_docs/version-7.x/guides/migrations/v7.md",sourceDirName:"guides/migrations",slug:"/guides/migrations/v7",permalink:"/7.x/guides/migrations/v7",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/versioned_docs/version-7.x/guides/migrations/v7.md",tags:[],version:"7.x",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Upgrading PixiJS",permalink:"/7.x/guides/migrations/upgrading"},next:{title:"v6 Migration Guide",permalink:"/7.x/guides/migrations/v6"}},s={},p=[{value:"\ud83d\udc4b Dropping Internet Explorer",id:"-dropping-internet-explorer",level:2},{value:"\ud83d\uddd1\ufe0f Remove Polyfills",id:"\ufe0f-remove-polyfills",level:2},{value:"\ud83d\udcac Output ES2020 (modules) and ES2017 (browser)",id:"-output-es2020-modules-and-es2017-browser",level:2},{value:"\ud83d\udc2d Replaces InteractionManager with EventSystem",id:"-replaces-interactionmanager-with-eventsystem",level:2},{value:"\ud83d\udce6 Replaces Loader with Assets",id:"-replaces-loader-with-assets",level:2},{value:"\ud83e\udd1d Abandon the use of peerDependencies",id:"-abandon-the-use-of-peerdependencies",level:2},{value:"\ud83d\udc42 Other Changes",id:"-other-changes",level:2},{value:"Exports from <code>@pixi/core</code>",id:"exports-from-pixicore",level:3},{value:"Extract and Prepare Systems",id:"extract-and-prepare-systems",level:3},{value:"Extensions Self-Install",id:"extensions-self-install",level:3},{value:"Using hitTest with Events",id:"using-hittest-with-events",level:3},{value:"New Async Extract Methods",id:"new-async-extract-methods",level:3},{value:"Interactive Move Events",id:"interactive-move-events",level:3},{value:"Interactive Property Handlers are Removed",id:"interactive-property-handlers-are-removed",level:3},{value:"Property <code>buttonMode</code> has been removed",id:"property-buttonmode-has-been-removed",level:3},{value:"\u261d\ufe0f Suggestions for Upgrading",id:"\ufe0f-suggestions-for-upgrading",level:2},{value:"\ud83c\udfd7\ufe0f Plugin Supported",id:"\ufe0f-plugin-supported",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v7-migration-guide"},"v7 Migration Guide"),(0,i.kt)("p",null,"First and foremost, PixiJS v7 is a modernization release that reflects changes in the ecosystem since PixiJS was first published over six years ago. Browsers have gotten better, but PixiJS hasn't really taken advantage of some of the new features like ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Workers"),", modern JavaScript language syntax. This release keeps intact much of the high-level DisplayObjects (e.g., Sprite, Graphics, Mesh, etc). Aside from a few things, this release should be medium to low impact for most users."),(0,i.kt)("h2",{id:"-dropping-internet-explorer"},"\ud83d\udc4b Dropping Internet Explorer"),(0,i.kt)("p",null,"Microsoft officially ended support for IE, so we decided to follow. It simplified many of our modernizations since IE was an outliner from Safari/Chrome/Firefox/Edge and mobile browsers. If you need support for IE, please consider using ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," or some other trans-piling tool."),(0,i.kt)("h2",{id:"\ufe0f-remove-polyfills"},"\ud83d\uddd1\ufe0f Remove Polyfills"),(0,i.kt)("p",null,"We removed the bundled polyfills such as ",(0,i.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),". These things are widely available in browsers now. If projects require them, developers should include the polyfills they need for backward-compatibility. Please check out ",(0,i.kt)("a",{parentName:"p",href:"https://cdn.polyfill.io/v3/url-builder/"},"polyfill.io"),"."),(0,i.kt)("h2",{id:"-output-es2020-modules-and-es2017-browser"},"\ud83d\udcac Output ES2020 (modules) and ES2017 (browser)"),(0,i.kt)("p",null,"PixiJS historically only published ES5 (no classes!). A new output standard allows us to use ES2017 features that previously we couldn't use (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"String.prototype.startsWith"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.contains"),", etc). Not only does it make the code more readable, but the output looks nicer as well. For modules we are outputting ES2020, which contains syntax like nullish coalescing (",(0,i.kt)("inlineCode",{parentName:"p"},"??"),"). If your project needs to have backward compatibility, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"Babel")," to transpile or polyfill."),(0,i.kt)("h2",{id:"-replaces-interactionmanager-with-eventsystem"},"\ud83d\udc2d Replaces InteractionManager with EventSystem"),(0,i.kt)("p",null,"InteractionManager was getting complex and difficult to maintain. Few core team members understood the code. We decided to move to FederatedEvents, which is concise, better aligned with the DOM, and supports things like bubbling. The good news, is you shouldn't have to change code, as it is largely a drop-in replacement. We added ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeEventListener")," APIs to DisplayObject which have the same DOM signature and can be used instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"off"),"."),(0,i.kt)("h2",{id:"-replaces-loader-with-assets"},"\ud83d\udce6 Replaces Loader with Assets"),(0,i.kt)("p",null,"Similarly, we've been wanting to remove the Loader because of its legacy approach (e.g., XMLHttpRequest). This was forked from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/englercj/resource-loader"},"resource-loader")," that has been with PixiJS for a long time. The original design inspiration for Loader was driven largely by Flash/AS3, which now seem dated. There were a few things we wanted out of a new iteration: static loading, loading with Workers, background loading, Promise-based, fewer layers of caching. Here's a quick example of how this will change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Loader, Sprite } from 'pixi.js';\n\nconst loader = new Loader();\nloader.add('background', 'path/to/assets/background.jpg');\nloader.load((loader, resources) => {\n  const image = Sprite.from(resources.background.texture);\n});\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Assets, Sprite } from 'pixi.js';\n\nconst texture = await Assets.load('path/to/assets/background.jpg');\nconst image = Sprite.from(texture);\n")),(0,i.kt)("h2",{id:"-abandon-the-use-of-peerdependencies"},"\ud83e\udd1d Abandon the use of peerDependencies"),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"PixiJS heavily uses ",(0,i.kt)("inlineCode",{parentName:"del"},"peerDependencies")," in the ",(0,i.kt)("strong",{parentName:"del"},"package.json")," within each package. This design choice has plagued Pixi with many issues. It's a breaking change to remove, so now was a good time. We have decided to completely remove ",(0,i.kt)("inlineCode",{parentName:"del"},"peerDependencies"),", instead opting for ",(0,i.kt)("em",{parentName:"del"},"nothing"),". This should make installing and upgrading ",(0,i.kt)("inlineCode",{parentName:"del"},"pixi.js")," much easier. We are working on updating ",(0,i.kt)("a",{parentName:"del",href:"https://pixijs.io/customize"},"our tooling")," for composing a custom version with packages.")," ",(0,i.kt)("strong",{parentName:"p"},"Edit: As of 7.2.0, we have reverted this change to keep compatibility with some module-based CDNs.")),(0,i.kt)("h2",{id:"-other-changes"},"\ud83d\udc42 Other Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser builds have been removed for all packages, with the exception of ",(0,i.kt)("inlineCode",{parentName:"li"},"pixi.js")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pixi.js-legacy"),"."),(0,i.kt)("li",{parentName:"ul"},"Removes ",(0,i.kt)("inlineCode",{parentName:"li"},"Graphics.nextRoundedRectBehavior")," this is now the default behavior"),(0,i.kt)("li",{parentName:"ul"},"Removes ",(0,i.kt)("inlineCode",{parentName:"li"},"Text.nextLineHeightBehavior")," this is now the default behavior"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbstractBatchRenderer")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchPluginFactory")," has been removed. Either extends ",(0,i.kt)("inlineCode",{parentName:"li"},"BatchRenderer")," or use ",(0,i.kt)("inlineCode",{parentName:"li"},"setShaderGenerator")," on the default BatchRenderer, (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"renderer.plugins.batch"),")"),(0,i.kt)("li",{parentName:"ul"},"BatchRenderer is installed by default in ",(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/core"),", no need to ",(0,i.kt)("inlineCode",{parentName:"li"},"Renderer.registerPlugin('batch', BatchRenderer)")," anymore")),(0,i.kt)("h3",{id:"exports-from-pixicore"},"Exports from ",(0,i.kt)("inlineCode",{parentName:"h3"},"@pixi/core")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@pixi/core")," package now depends and re-exports the following packages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/math")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/contants")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/utils")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/runner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/settings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/ticker"))),(0,i.kt)("p",null,"While some packages will still work when installed directly, others will not, since by installing them alongside ",(0,i.kt)("inlineCode",{parentName:"p"},"@pixi/core")," you will be effectively importing two copies of the same code.\xa0\nThis will lead to errors where changing settings from ",(0,i.kt)("inlineCode",{parentName:"p"},"@pixi/settings")," doesn't do anything since ",(0,i.kt)("inlineCode",{parentName:"p"},"@pixi/core")," has its own version of that package.\nIt is recommended that you uninstall these from your project and use ",(0,i.kt)("inlineCode",{parentName:"p"},"@pixi/core")," instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Rectangle } from '@pixi/math';\nimport { settings } from '@pixi/settings';\nimport { ALPHA_MODES } from '@pixi/constants';\nimport { string2hex } from '@pixi/utils';\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Rectangle, settings, ALPHA_MODES, utils } from '@pixi/core';\n\nconst { string2hex } = utils;\n")),(0,i.kt)("h3",{id:"extract-and-prepare-systems"},"Extract and Prepare Systems"),(0,i.kt)("p",null,'Extract and prepare plugins have been converted to Renderer "systems".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"renderer.plugins.extract\nrenderer.plugins.prepare\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"renderer.extract\nrenderer.prepare\n")),(0,i.kt)("h3",{id:"extensions-self-install"},"Extensions Self-Install"),(0,i.kt)("p",null,"Extensions now install themselves, so you should only need to import the class in order to use. For example, in v6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { AccessibilityManager } from '@pixi/accessibility';\nimport { extensions } from '@pixi/core';\nextensions.add(AccessibilityManager);\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import '@pixi/accessibility';\n")),(0,i.kt)("h3",{id:"using-hittest-with-events"},"Using hitTest with Events"),(0,i.kt)("p",null,"With the new events system, one of the common APIs that changed is `hitTest."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Application} from 'pixi.js';\n\nconst app = new Application();\napp.renderer.plugins.interaction.hitTest({x, y});\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Application, EventBoundary} from 'pixi.js';\n\nconst app = new Application();\nconst boundary = new EventBoundary(app.stage);\nboundary.hitTest(x, y);\n")),(0,i.kt)("h3",{id:"new-async-extract-methods"},"New Async Extract Methods"),(0,i.kt)("p",null,"The following methods are now async and return a Promise."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CanvasExtract.base64()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CanvasExtract.image()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extract.base64()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Extract.image()"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Application, EventBoundary} from 'pixi.js';\n\nconst app = new Application();\nconst dataUri = app.renderer.extract.base64();\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {Application, EventBoundary} from 'pixi.js';\n\nconst app = new Application();\nconst dataUri = await app.renderer.extract.base64();\n")),(0,i.kt)("h3",{id:"interactive-move-events"},"Interactive Move Events"),(0,i.kt)("p",null,"Interaction events in PixiJS now behave like the DOM in v7. This was intentional to align around behavior that would be familiar with developers, but obviously impacts the behavior with ",(0,i.kt)("inlineCode",{parentName:"p"},"pointermove"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mousemove"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"touchmove"),"."),(0,i.kt)("p",null,"Like the DOM, move events are now ",(0,i.kt)("em",{parentName:"p"},"local"),". This means that if you are outside the bounds of the object, you will not receive a move event. Generally, you should consider adding move events to the stage or parent instead of the DisplayObject itself."),(0,i.kt)("p",null,"Working example: ",(0,i.kt)("a",{parentName:"p",href:"https://jsfiddle.net/bigtimebuddy/spnv4wm6/"},"https://jsfiddle.net/bigtimebuddy/spnv4wm6/")),(0,i.kt)("h3",{id:"interactive-property-handlers-are-removed"},"Interactive Property Handlers are Removed"),(0,i.kt)("p",null,"Property-based handlers were removed from events. This was a feature of the old InteractionManager. For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sprite.pointertap = () => {\n // handler the pointertap\n};\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sprite.on('pointertap', () => {\n // handler the pointertap\n});\n")),(0,i.kt)("h3",{id:"property-buttonmode-has-been-removed"},"Property ",(0,i.kt)("inlineCode",{parentName:"h3"},"buttonMode")," has been removed"),(0,i.kt)("p",null,"The property ",(0,i.kt)("inlineCode",{parentName:"p"},"buttonMode")," was a convenience for toggling the ",(0,i.kt)("inlineCode",{parentName:"p"},"cursor")," property between ",(0,i.kt)("inlineCode",{parentName:"p"},"pointer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". It has now been removed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sprite.buttonMode = true;\n")),(0,i.kt)("p",null,"Now becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sprite.cursor = 'pointer';\n")),(0,i.kt)("p",null,"If you would like to re-add this functionality, you can ",(0,i.kt)("a",{parentName:"p",href:"https://jsfiddle.net/bigtimebuddy/ygka52dr/"},"patch DisplayObject's prototype"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { DisplayObject } from 'pixi.js';\n\nObject.defineProperty(DisplayObject.prototype, 'buttonMode', {\n  get() { return this.cursor === 'pointer'; },\n  set(value) { this.cursor = value ? 'pointer' : null; },\n});\n")),(0,i.kt)("h2",{id:"\ufe0f-suggestions-for-upgrading"},"\u261d\ufe0f Suggestions for Upgrading"),(0,i.kt)("p",null,"If you're planning on transitioning your code from v6, it would be helpful to implement some of the more dramatic changes in v6 first before upgrading to v7:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update to the latest v6.5.x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/pixijs-uninstall-interaction-ke6u3q"},"Switch to the Events package")," by installing ",(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/events")," and swapping InteractionManager.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { InteractionManager, extensions, Application } from 'pixi.js';\nimport { EventSystem } from '@pixi/events';\n\n// Uninstall interaction\nextensions.remove(InteractionManager);\n\n// Create the renderer or application\nconst app = new Application();\n\n// Install events\napp.renderer.addSystem(EventSystem, 'events');\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch to the Assets package by installing ",(0,i.kt)("inlineCode",{parentName:"li"},"@pixi/assets")," and swapping for Loader. For more information on implementing Assets, see ",(0,i.kt)("a",{parentName:"li",href:"https://pixijs.io/guides/basics/assets.html"},"this guide"),"."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Graphics.nextRoundedRectBehavior = true"),", this uses arcs for corner radius instead of bezier curves."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Text.nextLineHeightBehavior = true"),", this defaults to the DOM-like behavior for line height.")),(0,i.kt)("h2",{id:"\ufe0f-plugin-supported"},"\ud83c\udfd7\ufe0f Plugin Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,i.kt)("th",{parentName:"tr",align:null},"Compatible"),(0,i.kt)("th",{parentName:"tr",align:null},"Plugin Version Supported"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/sound"},"PixiJS Sound")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v5.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/html-text"},"PixiJS HTMLText")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v3.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/filters"},"PixiJS Filters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v5.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/gif"},"PixiJS GIF")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/spine"},"PixiJS Spine")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v4.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/particle-emitter"},"PixiJS Particle Emitter")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v5.0.8+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/animate"},"PixiJS Animate")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/layers"},"PixiJS Layers")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/lights"},"PixiJS Lights")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v4.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/graphics-smooth"},"PixiJS Graphics Smooth")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"v1.0.0+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/pixijs/tilemap"},"PixiJS Tilemap")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);