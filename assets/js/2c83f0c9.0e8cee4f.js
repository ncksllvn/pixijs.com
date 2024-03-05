"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4066],{4278:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var n=a(7462),o=(a(7294),a(3905));const r={},i="Render Loop",s={unversionedId:"guides/basics/render-loop",id:"guides/basics/render-loop",title:"Render Loop",description:"Now that you understand the major parts of the system, let's look at how these parts work together to get your project onto the screen.  Unlike a web page, PixiJS is constantly updating and re-drawing itself, over and over.  You update your objects, then PixiJS renders them to the screen, then the process repeats.  We call this cycle the render loop.",source:"@site/docs/guides/basics/render-loop.md",sourceDirName:"guides/basics",slug:"/guides/basics/render-loop",permalink:"/guides/basics/render-loop",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/basics/render-loop.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Architecture Overview",permalink:"/guides/basics/architecture-overview"},next:{title:"Scene Graph",permalink:"/guides/basics/scene-graph"}},l={},h=[{value:"Running Ticker Callbacks",id:"running-ticker-callbacks",level:2},{value:"Updating the Scene Graph",id:"updating-the-scene-graph",level:2},{value:"Rendering the Scene Graph",id:"rendering-the-scene-graph",level:2},{value:"Frame Rates",id:"frame-rates",level:2},{value:"Custom Render Loops",id:"custom-render-loops",level:2}],d={toc:h};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"render-loop"},"Render Loop"),(0,o.kt)("p",null,"Now that you understand the major parts of the system, let's look at how these parts work together to get your project onto the screen.  Unlike a web page, PixiJS is constantly updating and re-drawing itself, over and over.  You update your objects, then PixiJS renders them to the screen, then the process repeats.  We call this cycle the render loop."),(0,o.kt)("p",null,"The majority of any PixiJS project is contained in this update + render cycle.  You code the updates, PixiJS handles the rendering."),(0,o.kt)("p",null,"Let's walk through what happens each frame of the render loop.  There are three main steps."),(0,o.kt)("h2",{id:"running-ticker-callbacks"},"Running Ticker Callbacks"),(0,o.kt)("p",null,"The first step is to calculate how much time has elapsed since the last frame, and then call the Application object's ticker callbacks with that time delta.  This allows your project's code to animate and update the sprites, etc. on the stage in preparation for rendering."),(0,o.kt)("h2",{id:"updating-the-scene-graph"},"Updating the Scene Graph"),(0,o.kt)("p",null,"We'll talk a ",(0,o.kt)("em",{parentName:"p"},"lot")," more about what a scene graph is and what it's made of in the next guide, but for now, all you need to know is that it contains the things you're drawing - sprites, text, etc. - and that these objects are in a tree-like hierarchy.  After you've updated your game objects by moving, rotating and so forth, PixiJS needs to calculate the new positions and state of every object in the scene, before it can start drawing."),(0,o.kt)("h2",{id:"rendering-the-scene-graph"},"Rendering the Scene Graph"),(0,o.kt)("p",null,"Now that our game's state has been updated, it's time to draw it to the screen.  The rendering system starts with the root of the scene graph (",(0,o.kt)("inlineCode",{parentName:"p"},"app.stage"),"), and starts rendering each object and its children, until all objects have been drawn.  No culling or other cleverness is built into this process.  If you have lots of objects outside of the visible portion of the stage, you'll want to investigate disabling them as an optimization."),(0,o.kt)("h2",{id:"frame-rates"},"Frame Rates"),(0,o.kt)("p",null,"A note about frame rates.  The render loop can't be run infinitely fast - drawing things to the screen takes time.  In addition, it's not generally useful to have a frame updated more than once per screen update (commonly 60fps, but newer monitors can support 144fps and up).  Finally, PixiJS runs in the context of a web browser like Chrome or Firefox.  The browser itself has to balance the needs of various internal operations with servicing any open tabs.  All this to say, determining when to draw a frame is a complex issue."),(0,o.kt)("p",null,"In cases where you want to adjust that behavior, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"minFPS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"maxFPS")," attributes on a Ticker to give PixiJS hints as to the range of tick speeds you want to support.  Just be aware that due to the complex environment, your project cannot ",(0,o.kt)("em",{parentName:"p"},"guarantee")," a given FPS.  Use the passed ",(0,o.kt)("inlineCode",{parentName:"p"},"ticker.deltaTime")," value in your ticker callbacks to scale any animations to ensure smooth playback."),(0,o.kt)("h2",{id:"custom-render-loops"},"Custom Render Loops"),(0,o.kt)("p",null,"What we've just covered is the default render loop provided out of the box by the Application helper class.  There are many other ways of creating a render loop that may be helpful for advanced users looking to solve a given problem.  ","  While you're prototyping and learning PixiJS, sticking with the Application's provided system is the recommended approach."))}p.isMDXComponent=!0}}]);