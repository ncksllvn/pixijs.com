"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[4366],{2769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>u});var o=a(7462),r=(a(7294),a(3905));const s={},i="Textures",n={unversionedId:"guides/components/textures",id:"guides/components/textures",title:"Textures",description:"We're slowly working our way down from the high level to the low.  We've talked about the scene graph, and in general about display objects that live in it.  We're about to get to sprites and other simple display objects.  But before we do, we need to talk about textures.",source:"@site/docs/guides/components/textures.md",sourceDirName:"guides/components",slug:"/guides/components/textures",permalink:"/guides/components/textures",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/textures.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Text",permalink:"/guides/components/text"},next:{title:"Performance Tips",permalink:"/guides/production/performance-tips"}},l={},u=[{value:"Life-cycle of a Texture",id:"life-cycle-of-a-texture",level:2},{value:"Serving the Image",id:"serving-the-image",level:3},{value:"Loading the Image",id:"loading-the-image",level:3},{value:"TextureSources Own the Data",id:"texturesources-own-the-data",level:3},{value:"Textures are a View on BaseTextures",id:"textures-are-a-view-on-basetextures",level:3},{value:"Loading Textures",id:"loading-textures",level:2},{value:"Unloading Textures",id:"unloading-textures",level:2},{value:"Beyond Images",id:"beyond-images",level:2}],d={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"textures"},"Textures"),(0,r.kt)("p",null,"We're slowly working our way down from the high level to the low.  We've talked about the scene graph, and in general about display objects that live in it.  We're about to get to sprites and other simple display objects.  But before we do, we need to talk about textures."),(0,r.kt)("p",null,"In PixiJS, textures are one of the core resources used by display objects.  A texture, broadly speaking, represents a source of pixels to be used to fill in an area on the screen.  The simplest example is a sprite - a rectangle that is completely filled with a single texture.  But things can get much more complex."),(0,r.kt)("h2",{id:"life-cycle-of-a-texture"},"Life-cycle of a Texture"),(0,r.kt)("p",null,"Let's examine how textures really work, by following the path your image data travels on its way to the screen."),(0,r.kt)("p",null,"Here's the flow we're going to follow:  Source Image > Loader > BaseTexture > Texture"),(0,r.kt)("h3",{id:"serving-the-image"},"Serving the Image"),(0,r.kt)("p",null,"To start with, you have the image you want to display.  The first step is to make it available on your server.  This may seem obvious, but if you're coming to PixiJS from other game development systems, it's worth remembering that everything has to be loaded over the network.  If you're developing locally, please be aware that you ",(0,r.kt)("em",{parentName:"p"},"must")," use a webserver to test, or your images won't load due to how browsers treat local file security."),(0,r.kt)("h3",{id:"loading-the-image"},"Loading the Image"),(0,r.kt)("p",null,"To work with the image, the first step is to pull the image file from your webserver into the user's web browser.  To do this, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.load('myTexture.png')"),".  ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets")," wraps and deals with telling the browser to fetch the image, convert it and then let you when that has been completed.  This process is ",(0,r.kt)("em",{parentName:"p"},"asynchronous")," - you request the load, then time passes, then a proimise completes to let you know the load is completed.  We'll go into the loader in a lot more depth in a later guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const texture = await Assets.load('myTexture.png');\n\n// pass a texture explicitly\nconst sprite = new Sprite(texture);\n// as options\nconst sprite2 = new Sprite({texture});\n// from the cache as the texture is loaded\nconst sprite3 = Sprite.from('myTexture.png')\n")),(0,r.kt)("h3",{id:"texturesources-own-the-data"},"TextureSources Own the Data"),(0,r.kt)("p",null,"Once the texture has loaded, the loaded ",(0,r.kt)("inlineCode",{parentName:"p"},"<IMG>")," element contains the pixel data we need.  But to use it to render something, PixiJS has to take that raw image file and upload it to the GPU.  This brings us to the real workhorse of the texture system - the ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/TextureSource.html"},"TextureSource")," class.  Each TextureSource manages a single pixel source - usually an image, but can also be a Canvas or Video element.  TextureSources allow PixiJS to convert the image to pixels and use those pixels in rendering.  In addition, it also contains settings that control how the texture data is rendered, such as the wrap mode (for UV coordinates outside the 0.0-1.0 range) and scale mode (used when scaling a texture)."),(0,r.kt)("p",null,"TextureSource are automatically cached, so that calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture.from()")," repeatedly for the same URL returns the same TextureSource each time.  Destroying a TextureSource frees the image data associated with it."),(0,r.kt)("h3",{id:"textures-are-a-view-on-basetextures"},"Textures are a View on BaseTextures"),(0,r.kt)("p",null,"So finally, we get to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture")," class itself!  At this point, you may be wondering what the ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture")," object ",(0,r.kt)("em",{parentName:"p"},"does"),".  After all, the BaseTexture manages the pixels and render settings.  And the answer is, it doesn't do very much.  Textures are light-weight views on an underlying BaseTexture.  Their main attribute is the source rectangle within the TextureSource from which to pull."),(0,r.kt)("p",null,"If all PixiJS drew were sprites, that would be pretty redundant.  But consider ",(0,r.kt)("a",{parentName:"p",href:"./sprite-sheets"},"SpriteSheets"),".  A SpriteSheet is a single image that contains multiple sprite images arranged within.  In a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/assets.Spritesheet.html"},"Spritesheet")," object, a single TextureSource is referenced by a set of Textures, one for each source image in the original sprite sheet.  By sharing a single TextureSource, the browser only downloads one file, and our batching renderer can blaze through drawing sprites since they all share the same underlying pixel data.  The SpriteSheet's Textures pull out just the rectangle of pixels needed by each sprite."),(0,r.kt)("p",null,"That is why we have both Textures and TextureSource - to allow sprite sheets, animations, button states, etc to be loaded as a single image, while only displaying the part of the master image that is needed."),(0,r.kt)("h2",{id:"loading-textures"},"Loading Textures"),(0,r.kt)("p",null,"We will discuss resource loading in a later guide, but one of the most common issues new users face when building a PixiJS project is how best to load their textures."),(0,r.kt)("p",null,"here's a quick cheat sheet of one good solution:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Show a loading image"),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/guides/components/assets"},"Assets")," to ensure that all textures are loaded"),(0,r.kt)("li",{parentName:"ol"},"optionally update your loading image based on progress callbacks"),(0,r.kt)("li",{parentName:"ol"},"On loader completion, run all objects and use ",(0,r.kt)("inlineCode",{parentName:"li"},"Texture.from()")," to pull the loaded textures out of the texture cache"),(0,r.kt)("li",{parentName:"ol"},"Prepare your textures (optional - see below)"),(0,r.kt)("li",{parentName:"ol"},"Hide your loading image, start rendering your scene graph")),(0,r.kt)("p",null,"Using this workflow ensures that your textures are pre-loaded, to prevent pop-in, and is relatively easy to code."),(0,r.kt)("p",null,"Regarding preparing textures: Even after you've loaded your textures, the images still need to be pushed to the GPU and decoded.  Doing this for a large number of source images can be slow and cause lag spikes when your project first loads.  To solve this, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/rendering.PrepareSystem.html"},"Prepare")," plugin, which allows you to pre-load textures in a final step before displaying your project."),(0,r.kt)("h2",{id:"unloading-textures"},"Unloading Textures"),(0,r.kt)("p",null,"Once you're done with a Texture, you may wish to free up the memory (both WebGL-managed buffers and browser-based) that it uses.  To do so, you should call ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy()")," on the BaseTexture that owns the data.  Remember that Textures don't manage pixel data!"),(0,r.kt)("p",null,"This is a particularly good idea for short-lived imagery like cut-scenes that are large and will only be used once. If a texture is destroyed that was loaded via ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets")," then the assets class will automatically remove it from the cache for you."),(0,r.kt)("h2",{id:"beyond-images"},"Beyond Images"),(0,r.kt)("p",null,"As we alluded to above, you can make a Texture out of more than just images:"),(0,r.kt)("p",null,"Video: Pass an HTML5 ",(0,r.kt)("inlineCode",{parentName:"p"},"<VIDEO>")," element to ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureSource.from()")," to allow you to display video in your project.  Since it's a texture, you can tint it, add filters, or even apply it to custom geometry."),(0,r.kt)("p",null,"Canvas: Similarly, you can wrap an HTML5 ",(0,r.kt)("inlineCode",{parentName:"p"},"<CANVAS>")," element in a BaseTexture to let you use canvas's drawing methods to dynamically create a texture."),(0,r.kt)("p",null,"SVG: Pass in an ",(0,r.kt)("inlineCode",{parentName:"p"},"<SVG>")," element or load a .svg URL, and PixiJS will attempt to rasterize it.  For highly network-constrained projects, this can allow for beautiful graphics with minimal network load times."),(0,r.kt)("p",null,"RenderTexture: A more advanced (but very powerful!) feature is to build a Texture from a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/RenderTexture.html"},"RenderTexture"),".  This can allow for building complex geometry using a ",(0,r.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/Geometry.html"},"Geometry")," object, then baking that geometry down to a simple texture."),(0,r.kt)("p",null,"Each of these texture sources has caveats and nuances that we can't cover in this guide, but they should give you a feeling for the power of PixiJS's texture system. "),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"../../examples/textures/render-texture-basic"},"render texture example code"),"."))}h.isMDXComponent=!0}}]);