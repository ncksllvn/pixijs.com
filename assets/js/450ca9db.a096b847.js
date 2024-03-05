"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3865],{3497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={},r="Text",s={unversionedId:"guides/components/text",id:"guides/components/text",title:"Text",description:"Whether it's a high score or a diagram label, text is often the best way to convey information in your projects.  Surprisingly, drawing text to the screen with WebGL is a very complex process - there's no built in support for it at all.  One of the values PixiJS provides is in hiding this complexity to allow you to draw text in diverse styles, fonts and colors with a few lines of code.  In addition, these bits of text are just as much scene objects as sprites - you can tint text, rotate it, alpha-blend it, and otherwise treat it like any other graphical object.",source:"@site/docs/guides/components/text.md",sourceDirName:"guides/components",slug:"/guides/components/text",permalink:"/guides/components/text",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/text.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Spritesheets",permalink:"/guides/components/sprite-sheets"},next:{title:"Textures",permalink:"/guides/components/textures"}},l={},p=[{value:"There Are Three Kinds of Text",id:"there-are-three-kinds-of-text",level:2},{value:"The Text Object",id:"the-text-object",level:2},{value:"Text Styles",id:"text-styles",level:2},{value:"Loading and Using Fonts",id:"loading-and-using-fonts",level:2},{value:"Caveats and Gotchas",id:"caveats-and-gotchas",level:2},{value:"BitmapText",id:"bitmaptext",level:2},{value:"BitmapFont",id:"bitmapfont",level:2},{value:"Selecting the Right Approach",id:"selecting-the-right-approach",level:2}],h={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text"},"Text"),(0,i.kt)("p",null,"Whether it's a high score or a diagram label, text is often the best way to convey information in your projects.  Surprisingly, drawing text to the screen with WebGL is a very complex process - there's no built in support for it at all.  One of the values PixiJS provides is in hiding this complexity to allow you to draw text in diverse styles, fonts and colors with a few lines of code.  In addition, these bits of text are just as much scene objects as sprites - you can tint text, rotate it, alpha-blend it, and otherwise treat it like any other graphical object."),(0,i.kt)("p",null,"Let's dig into how this works."),(0,i.kt)("h2",{id:"there-are-three-kinds-of-text"},"There Are Three Kinds of Text"),(0,i.kt)("p",null,"Because of the challenges of working with text in WebGL, PixiJS provides three very different solutions.  In this guide, we're going to go over both methods in some detail to help you make the right choice for your project's needs.  Selecting the wrong text type can have a large negative impact on your project's performance and appearance."),(0,i.kt)("h2",{id:"the-text-object"},"The Text Object"),(0,i.kt)("p",null,"In order to draw text to the screen, you use a ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Text.html"},"Text")," object.  Under the hood, this class draws text to an off-screen buffer using the browser's normal text rendering, then uses that offscreen buffer as the source for drawing the text object.  Effectively what this means is that whenever you create or change text, PixiJS creates a new rasterized image of that text, and then treats it like a sprite.  This approach allows truly rich text display while keeping rendering speed high."),(0,i.kt)("p",null,"So when working with Text objects, there are two sets of options - standard display object options like position, rotation, etc that work ",(0,i.kt)("em",{parentName:"p"},"after")," the text is rasterized internally, and text style options that are used ",(0,i.kt)("em",{parentName:"p"},"while")," rasterizing.  Because text once rendered is basically just a sprite, there's no need to review the standard options.  Instead, let's focus on how text is styled."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"../../examples/text/pixi-text"},"text example code"),"."),(0,i.kt)("h2",{id:"text-styles"},"Text Styles"),(0,i.kt)("p",null,"There are a lot of text style options available (see ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/text.TextStyle.html"},"TextStyle"),"), but they break down into 5 main groups:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Font"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," to select the webfont to use, ",(0,i.kt)("inlineCode",{parentName:"p"},"fontSize")," to specify the size of the text to draw, along with options for font weight, style and variant."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Appearance"),": Set the color with ",(0,i.kt)("inlineCode",{parentName:"p"},"fill")," or add a ",(0,i.kt)("inlineCode",{parentName:"p"},"stroke")," outline, including options for gradient fills."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Drop-Shadows"),": Set a drop-shadow with ",(0,i.kt)("inlineCode",{parentName:"p"},"dropShadow"),", with a host of related options to specify offset, blur, opacity, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Layout"),": Enable with ",(0,i.kt)("inlineCode",{parentName:"p"},"wordWrap")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"wordWrapWidth"),", and then customize the ",(0,i.kt)("inlineCode",{parentName:"p"},"lineHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"align")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"letterSpacing")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Utilities"),": Add ",(0,i.kt)("inlineCode",{parentName:"p"},"padding")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"trim")," extra space to deal with funky font families if needed."),(0,i.kt)("p",null,"To interactively test out feature of Text Style, ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.io/pixi-text-style/"},"check out this tool"),"."),(0,i.kt)("h2",{id:"loading-and-using-fonts"},"Loading and Using Fonts"),(0,i.kt)("p",null,"In order for PixiJS to build a Text object, you'll need to make sure that the font you want to use is loaded by the browser. This can be easily accomplished with our good friends ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// load the fonts\nawait Assets.load('short-stack.woff2');\n\n// now they can be used!\n\nconst text = new Text({\n  text:'hello',\n  style:{\n    fontFamily:'short-stack'\n  }\n})\n")),(0,i.kt)("h2",{id:"caveats-and-gotchas"},"Caveats and Gotchas"),(0,i.kt)("p",null,"While PixiJS does make working with text easy, there are a few things you need to watch out for."),(0,i.kt)("p",null,"First, changing an existing text string requires re-generating the internal render of that text, which is a slow operation that can impact performance if you change many text objects each frame.  If your project requires lots of frequently changing text on the screen at once, consider using a BitmapText object (explained below) which uses a fixed bitmap font that doesn't require re-generation when text changes."),(0,i.kt)("p",null,"Second, be careful when scaling text.  Setting a text object's scale to > 1.0 will result in blurry/pixely display, because the text is not re-rendered at the higher resolution needed to look sharp - it's still the same resolution it was when generated.  To deal with this, you can render at a higher initial size and down-scale, instead.  This will use more memory, but will allow your text to always look clear and crisp."),(0,i.kt)("h2",{id:"bitmaptext"},"BitmapText"),(0,i.kt)("p",null,"In addition to the standard Text approach to adding text to your project, PixiJS also supports ",(0,i.kt)("em",{parentName:"p"},"bitmap fonts"),".  Bitmap fonts are very different from TrueType or other general purpose fonts, in that they consist of a single image containing pre-rendered versions of every letter you want to use.  When drawing text with a bitmap font, PixiJS doesn't need to render the font glyphs into a temporary buffer - it can simply copy and stamp out each character of a string from the master font image."),(0,i.kt)("p",null,"The primary advantage of this approach is speed - changing text frequently is much cheaper and rendering each additional piece of text is much faster due to the shared source texture."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"../../examples/text/bitmap-text"},"bitmap text example code"),"."),(0,i.kt)("h2",{id:"bitmapfont"},"BitmapFont"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"3rd party solutions"),(0,i.kt)("li",{parentName:"ul"},"BitmapFont.from auto-generation")),(0,i.kt)("h2",{id:"selecting-the-right-approach"},"Selecting the Right Approach"),(0,i.kt)("p",null,"Text"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static text"),(0,i.kt)("li",{parentName:"ul"},"Small number of text objects"),(0,i.kt)("li",{parentName:"ul"},"High fidelity text rendering (kerning e.g.)"),(0,i.kt)("li",{parentName:"ul"},"Text layout (line & letter spacing)")),(0,i.kt)("p",null,"BitmapText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dynamic text"),(0,i.kt)("li",{parentName:"ul"},"Large number of text objects"),(0,i.kt)("li",{parentName:"ul"},"Lower memory")),(0,i.kt)("p",null,"HTMLText"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static text"),(0,i.kt)("li",{parentName:"ul"},"Need that HTML formatting")))}d.isMDXComponent=!0}}]);