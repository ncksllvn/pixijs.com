"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2547],{502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=a(7462),i=(a(7294),a(3905));const n={},r="Spritesheets",o={unversionedId:"guides/components/sprite-sheets",id:"guides/components/sprite-sheets",title:"Spritesheets",description:"Now that you understand basic sprites, it's time to talk about a better way to create them - the Spritesheet class.",source:"@site/docs/guides/components/sprite-sheets.md",sourceDirName:"guides/components",slug:"/guides/components/sprite-sheets",permalink:"/guides/components/sprite-sheets",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/sprite-sheets.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Sprites",permalink:"/guides/components/sprites"},next:{title:"Text",permalink:"/guides/components/text"}},p={},l=[{value:"Anatomy of a Spritesheet",id:"anatomy-of-a-spritesheet",level:2},{value:"Doubly Efficient",id:"doubly-efficient",level:2},{value:"Creating SpriteSheets",id:"creating-spritesheets",level:2}],h={toc:l};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spritesheets"},"Spritesheets"),(0,i.kt)("p",null,"Now that you understand basic sprites, it's time to talk about a better way to create them - the ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/assets.Spritesheet.html"},"Spritesheet")," class."),(0,i.kt)("p",null,"A Spritesheet is a media format for more efficiently downloading and rendering Sprites.  While somewhat more complex to create and use, they are a key tool in optimizing your project."),(0,i.kt)("h2",{id:"anatomy-of-a-spritesheet"},"Anatomy of a Spritesheet"),(0,i.kt)("p",null,"The basic idea of a spritesheet is to pack a series of images together into a single image, track where each source image ends up, and use that combined image as a shared BaseTexture for the resulting Sprites."),(0,i.kt)("p",null,"The first step is to collect the images you want to combine.  The sprite packer then collects the images, and creates a new combined image."),(0,i.kt)("p",null,"As this image is being created, the tool building it keeps track of the location of the rectangle where each source image is stored.  It then writes out a JSON file with that information."),(0,i.kt)("p",null,"These two files, in combination, can be passed into a SpriteSheet constructor.  The SpriteSheet object then parses the JSON, and creates a series of Texture objects, one for each source image, setting the source rectangle for each based on the JSON data.  Each texture uses the same shared BaseTexture as its source."),(0,i.kt)("h2",{id:"doubly-efficient"},"Doubly Efficient"),(0,i.kt)("p",null,"SpriteSheets help your project in two ways."),(0,i.kt)("p",null,"First, by ",(0,i.kt)("strong",{parentName:"p"},"speeding up the loading process"),".  While downloading a SpriteSheet's texture requires moving the same (or even slightly more!) number of bytes, they're grouped into a single file.  This means that the user's browser can request and download far fewer files for the same number of Sprites.  The number of files ",(0,i.kt)("em",{parentName:"p"},"itself")," is a key driver of download speed, because each request requires a round-trip to the webserver, and browsers are limited to how many files they can download simultaneously.  Converting a project from individual source images to shared sprite sheets can cut your download time in half, at no cost in quality."),(0,i.kt)("p",null,"Second, by ",(0,i.kt)("strong",{parentName:"p"},"improving batch rendering"),".  WebGL rendering speed scales roughly with the number of draw calls made.  Batching multiple Sprites, etc. into a single draw call is the main secret to how PixiJS can run so blazingly fast.  Maximizing batching is a complex topic, but when multiple Sprites all share a common BaseTexture, it makes it more likely that they can be batched together and rendered in a single call."),(0,i.kt)("h2",{id:"creating-spritesheets"},"Creating SpriteSheets"),(0,i.kt)("p",null,"You can use a 3rd party tool to assemble your sprite sheet files.  Here are two that may fit your needs:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://renderhjs.net/shoebox/"},"ShoeBox"),": ShoeBox is a free, Adobe AIR-based sprite packing utility that is great for small projects or learning how SpriteSheets work."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.codeandweb.com/texturepacker"},"TexturePacker"),": TexturePacker is a more polished tool that supports advanced features and workflows. A free version is available which has all the necessary features for packing spritesheets for PixiJS. It's a good fit for larger projects and professional game development, or projects that need more complex tile mapping features."),(0,i.kt)("p",null,"Spritesheet data can also be created manually or programmatically, and supplied to a new AnimatedSprite. This may be an easier option if your sprites are already contained in a single image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// Create object to store sprite sheet data\nconst atlasData = {\n    frames: {\n        enemy1: {\n            frame: { x: 0, y:0, w:32, h:32 },\n            sourceSize: { w: 32, h: 32 },\n            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }\n        },\n        enemy2: {\n            frame: { x: 32, y:0, w:32, h:32 },\n            sourceSize: { w: 32, h: 32 },\n            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }\n        },\n    },\n    meta: {\n        image: 'images/spritesheet.png',\n        format: 'RGBA8888',\n        size: { w: 128, h: 32 },\n        scale: 1\n    },\n    animations: {\n        enemy: ['enemy1','enemy2'] //array of frames by name\n    }\n}\n\n\n// Create the SpriteSheet from data and image\nconst spritesheet = new Spritesheet(\n    Texture.from(atlasData.meta.image),\n    atlasData\n);\n\n// Generate all the Textures asynchronously\nawait spritesheet.parse();\n\n// spritesheet is ready to use!\nconst anim = new AnimatedSprite(spritesheet.animations.enemy);\n\n// set the animation speed\nanim.animationSpeed = 0.1666;\n// play the animation on a loop\nanim.play();\n// add it to the stage to render\napp.stage.addChild(anim);\n")))}c.isMDXComponent=!0}}]);