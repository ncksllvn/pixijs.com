"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1905],{8357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(7462),o=(a(7294),a(3905));const n={},r="Graphics",s={unversionedId:"guides/components/graphics",id:"version-7.x/guides/components/graphics",title:"Graphics",description:"Graphics is a complex and much misunderstood tool in the PixiJS toolbox.  At first glance, it looks like a tool for drawing shapes.  And it is!  But it can also be used to generate masks.  How does that work?",source:"@site/versioned_docs/version-7.x/guides/components/graphics.md",sourceDirName:"guides/components",slug:"/guides/components/graphics",permalink:"/7.x/guides/components/graphics",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/versioned_docs/version-7.x/guides/components/graphics.md",tags:[],version:"7.x",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Display Objects",permalink:"/7.x/guides/components/display-object"},next:{title:"Interaction",permalink:"/7.x/guides/components/interaction"}},l={},p=[{value:"Graphics Is About Building - Not Drawing",id:"graphics-is-about-building---not-drawing",level:2},{value:"Types of Primitives",id:"types-of-primitives",level:2},{value:"The Geometry List",id:"the-geometry-list",level:2},{value:"Graphics For Display",id:"graphics-for-display",level:2},{value:"Graphics as a Mask",id:"graphics-as-a-mask",level:2},{value:"Caveats and Gotchas",id:"caveats-and-gotchas",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphics"},"Graphics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.Graphics.html"},"Graphics")," is a complex and much misunderstood tool in the PixiJS toolbox.  At first glance, it looks like a tool for drawing shapes.  And it is!  But it can also be used to generate masks.  How does that work?"),(0,o.kt)("p",null,"In this guide, we're going to de-mystify the Graphics object, starting with how to think about what it does."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"../../examples/graphics/simple"},"graphics example code"),"."),(0,o.kt)("h2",{id:"graphics-is-about-building---not-drawing"},"Graphics Is About Building - Not Drawing"),(0,o.kt)("p",null,"First-time users of the PIXI.Graphics class often struggle with how it works.  Let's look at an example snippet that creates a Graphics object and draws a rectangle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a Graphics object, set a fill color, draw a rectangle\nlet obj = new PIXI.Graphics();\nobj.beginFill(0xff0000);\nobj.drawRect(0, 0, 200, 100);\n\n// Add it to the stage to render\napp.stage.addChild(obj);\n")),(0,o.kt)("p",null,"That code will work - you'll end up with a red rectangle on the screen.  But it's pretty confusing when you start to think about it.  Why am I drawing a rectangle when ",(0,o.kt)("em",{parentName:"p"},"constructing")," the object?  Isn't drawing something a one-time action?  How does the rectangle get drawn the ",(0,o.kt)("em",{parentName:"p"},"second")," frame?  And it gets even weirder when you create a Graphics object with a bunch of drawThis and drawThat calls, and then you use it as a ",(0,o.kt)("em",{parentName:"p"},"mask"),".  What???"),(0,o.kt)("p",null,"The problem is that the function names are centered around ",(0,o.kt)("em",{parentName:"p"},"drawing"),", which is an action that puts pixels on the screen.  But in spite of that, the Graphics object is really about ",(0,o.kt)("em",{parentName:"p"},"building"),"."),(0,o.kt)("p",null,"Let's look a bit deeper at that ",(0,o.kt)("inlineCode",{parentName:"p"},"drawRect()")," call.  When you call ",(0,o.kt)("inlineCode",{parentName:"p"},"drawRect()"),", PixiJS doesn't actually draw anything.  Instead, it stores the rectangle you \"drew\" into a list of geometry for later use.  If you then add the Graphics object to the scene, the renderer will come along, and ask the Graphics object to render itself.  At that point, your rectangle actually gets drawn - along with any other shapes, lines, etc. that you've added to the geometry list."),(0,o.kt)("p",null,"Once you understand what's going on, things start to make a lot more sense.  When you use a Graphics object as a mask, for example, the masking system uses that list of graphics primitives in the geometry list to constrain which pixels make it to the screen.  There's no drawing involved."),(0,o.kt)("p",null,"That's why it helps to think of the Graphics class not as a drawing tool, but as a geometry building tool."),(0,o.kt)("h2",{id:"types-of-primitives"},"Types of Primitives"),(0,o.kt)("p",null,"There are a lot of functions in the PIXI.Graphics class, but as a quick orientation, here's the list of basic primitives you can add:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Line"),(0,o.kt)("li",{parentName:"ul"},"Rect"),(0,o.kt)("li",{parentName:"ul"},"RoundRect"),(0,o.kt)("li",{parentName:"ul"},"Circle"),(0,o.kt)("li",{parentName:"ul"},"Ellipse"),(0,o.kt)("li",{parentName:"ul"},"Arc"),(0,o.kt)("li",{parentName:"ul"},"Bezier and Quadratic Curve")),(0,o.kt)("p",null,"In addition, the Graphics Extras package (",(0,o.kt)("inlineCode",{parentName:"p"},"@pixi/graphics-extras"),") optionally includes the following complex primitives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Torus"),(0,o.kt)("li",{parentName:"ul"},"Chamfer Rect"),(0,o.kt)("li",{parentName:"ul"},"Fillet Rect"),(0,o.kt)("li",{parentName:"ul"},"Regular Polygon"),(0,o.kt)("li",{parentName:"ul"},"Star"),(0,o.kt)("li",{parentName:"ul"},"Rounded Polygon")),(0,o.kt)("h2",{id:"the-geometry-list"},"The Geometry List"),(0,o.kt)("p",null,"Inside every Graphics object is a GraphicsGeometry object.  The ",(0,o.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/PIXI.GraphicsGeometry.html"},"GraphicsGeometry")," class manages the list of geometry primitives created by the Graphics parent object.  For the most part, you will not work directly with this object.  The owning Graphics object creates and manages it.  However, there are two related cases where you ",(0,o.kt)("em",{parentName:"p"},"do")," work with the list."),(0,o.kt)("p",null,"First, you can re-use geometry from one Graphics object in another.  No matter whether you're re-drawing the same shape over and over, or re-using it as a mask over and over, it's more efficient to share identical GraphicsGeometry.  You can do this like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a master graphics object\nlet template = new PIXI.Graphics();\n// Add a circle\ntemplate.drawCircle(100, 100, 50);\n\n// Create 5 duplicate objects\nfor (let i = 0; i < 5; i++) {\n  // Initialize the duplicate using our template's pre-built geometry\n  let duplicate = new PIXI.Graphics(template.geometry);\n}\n")),(0,o.kt)("p",null,"This leads to the second time you need to be aware of the underlying GraphicsGeometry object - avoiding memory leaks.  Because Graphics objects can share geometry, you ",(0,o.kt)("em",{parentName:"p"},"must")," call ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy()")," when you no longer need them.  Failure to do so will prevent the GraphicsGeometry object it owns from being properly de-referenced, and will lead to memory leaks."),(0,o.kt)("h2",{id:"graphics-for-display"},"Graphics For Display"),(0,o.kt)("p",null,"OK, so now that we've covered how the PIXI.Graphics class works, let's look at how you use it.  The most obvious use of a Graphics object is to draw dynamically generated shapes to the screen."),(0,o.kt)("p",null,"Doing so is simple.  Create the object, call the various builder functions to add your custom primitives, then add the object to the scene graph.  Each frame, the renderer will come along, ask the Graphics object to render itself, and each primitive, with associated line and fill styles, will be drawn to the screen."),(0,o.kt)("h2",{id:"graphics-as-a-mask"},"Graphics as a Mask"),(0,o.kt)("p",null,"You can also use a Graphics object as a complex mask.  To do so, build your object and primitives as usual.  Next create a PIXI.Container object that will contain the masked content, and set its ",(0,o.kt)("inlineCode",{parentName:"p"},"mask")," property to your Graphics object.  The children of the container will now be clipped to only show through inside the geometry you've created.  This technique works for both WebGL and Canvas-based rendering."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"../../examples/graphics/simple"},"masking example code"),"."),(0,o.kt)("h2",{id:"caveats-and-gotchas"},"Caveats and Gotchas"),(0,o.kt)("p",null,"The Graphics class is a complex beast, and so there are a number of things to be aware of when using it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memory Leaks"),": The first has already been mentioned - call ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy()")," on any Graphics object you no longer need to avoid memory leaks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Holes"),": Holes you create have to be completely contained in the shape or else it may not be able to triangulate correctly. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Changing Geometry"),": If you want to change the shape of a Graphics object, you don't need to delete and recreate it.  Instead you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"clear()")," function to reset the contents of the geometry list, then add new primitives as desired.  Be careful of performance when doing this every frame."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Performance"),": Graphics objects are generally quite performant.  However, if you build highly complex geometry, you may pass the threshold that permits batching during rendering, which can negatively impact performance. It's better for batching to use many Graphics objects instead of a single Graphics with many shapes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transparency"),": Because the Graphics object renders its primitives sequentially, be careful when using blend modes or partial transparency with overlapping geometry.  Blend modes like ",(0,o.kt)("inlineCode",{parentName:"p"},"ADD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MULTIPLY")," will work ",(0,o.kt)("em",{parentName:"p"},"on each primitive"),", not on the final composite image.  Similarly, partially transparent Graphics objects will show primitives overlapping. To apply transparency or blend modes to a single flattened surface, consider using AlphaFilter or RenderTexture."))}h.isMDXComponent=!0}}]);