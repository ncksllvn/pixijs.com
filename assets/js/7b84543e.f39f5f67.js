"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5114],{5835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},o="Interaction",l={unversionedId:"guides/components/interaction",id:"guides/components/interaction",title:"Interaction",description:"PixiJS is primarily a rendering system, but it also includes support for interactivity. Adding support for mouse and touch events to your project is simple and consistent.",source:"@site/docs/guides/components/interaction.md",sourceDirName:"guides/components",slug:"/guides/components/interaction",permalink:"/guides/components/interaction",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/interaction.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Graphics",permalink:"/guides/components/graphics"},next:{title:"Sprites",permalink:"/guides/components/sprites"}},d={},p=[{value:"Event Modes",id:"event-modes",level:2},{value:"Event Types",id:"event-types",level:2},{value:"Enabling Interaction",id:"enabling-interaction",level:2},{value:"Checking if Object is Interactive",id:"checking-if-object-is-interactive",level:3},{value:"Use Pointer Events",id:"use-pointer-events",level:2},{value:"Optimization",id:"optimization",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interaction"},"Interaction"),(0,i.kt)("p",null,"PixiJS is primarily a rendering system, but it also includes support for interactivity. Adding support for mouse and touch events to your project is simple and consistent."),(0,i.kt)("h2",{id:"event-modes"},"Event Modes"),(0,i.kt)("p",null,"The new event-based system that replaced ",(0,i.kt)("inlineCode",{parentName:"p"},"InteractionManager")," from v6 has expanded the definition of what a Container means to be interactive. With this we have introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMode")," which allows you to control how an object responds to interaction events. This is similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"interactive")," property in v6 but with more options."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"eventMode"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"none")),(0,i.kt)("td",{parentName:"tr",align:null},"Ignores all interaction events, similar to CSS's ",(0,i.kt)("inlineCode",{parentName:"td"},"pointer-events: none"),", good optimization for non-interactive children")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"passive")),(0,i.kt)("td",{parentName:"tr",align:null},"Does not emit events and ignores hit testing on itself but does allow for events and hit testing only its interactive children. This is default eventMode for all containers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"auto")),(0,i.kt)("td",{parentName:"tr",align:null},"Does not emit events and but is hit tested if parent is interactive. Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"interactive = false")," in v7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"static")),(0,i.kt)("td",{parentName:"tr",align:null},"Emit events and is hit tested. Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"interaction = true")," in v7, useful for objects like buttons that do not move.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dynamic")),(0,i.kt)("td",{parentName:"tr",align:null},"Emits events and is hit tested but will also receive mock interaction events fired from a ticker to allow for interaction when the mouse isn't moving. This is useful for elements that independently moving or animating.")))),(0,i.kt)("h2",{id:"event-types"},"Event Types"),(0,i.kt)("p",null,"PixiJS supports the following event types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Event Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointercancel")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device button is released outside the display object that initially registered a pointerdown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerdown")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device button is pressed on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerenter")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device enters the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerleave")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device leaves the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointermove")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device is moved while over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"globalpointermove")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device is moved, regardless of hit-testing the current object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerout")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device is moved off the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerover")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device is moved onto the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointertap")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device is tapped twice on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerup")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device button is released over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pointerupoutside")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a pointer device button is released outside the display object that initially registered a pointerdown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mousedown ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse button is pressed on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseenter")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when the mouse cursor enters the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseleave")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when the mouse cursor leaves the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mousemove ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when the mouse cursor is moved while over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"globalmousemove")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse is moved, regardless of hit-testing the current object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseout ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when the mouse cursor is moved off the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseover ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when the mouse cursor is moved onto the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseup ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse button is released over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mouseupoutside ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse button is released outside the display object that initially registered a mousedown.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"click ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse button is clicked (pressed and released) over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"touchcancel ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is removed outside of the display object that initially registered a touchstart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"touchend ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is removed from the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"touchendoutside ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is removed outside of the display object that initially registered a touchstart.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"touchmove ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is moved along the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"globaltouchmove")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is moved, regardless of hit-testing the current object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"touchstart ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is placed on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tap ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a touch point is tapped twice on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"wheel ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a mouse wheel is spun over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightclick ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a right mouse button is clicked (pressed and released) over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightdown ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a right mouse button is pressed on the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightup ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a right mouse button is released over the display object.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"rightupoutside ")),(0,i.kt)("td",{parentName:"tr",align:null},"Fired when a right mouse button is released outside the display object that initially registered a rightdown.")))),(0,i.kt)("h2",{id:"enabling-interaction"},"Enabling Interaction"),(0,i.kt)("p",null,"Any Container-derived object (Sprite, Container, etc.) can become interactive simply by setting its ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMode")," property to any of the eventModes listed above. Doing so will cause the object to emit interaction events that can be responded to in order to drive your project's behavior."),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"../../examples/events/click"},"interaction example code"),"."),(0,i.kt)("p",null,"To respond to clicks and taps, bind to the events fired on the object, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"let sprite = Sprite.from('/some/texture.png');\nsprite.on('pointerdown', (event) => { alert('clicked!'); });\nsprite.eventMode = 'static';\n")),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"https://pixijs.download/release/docs/scene.Container.html"},"Container")," for the list of interaction events supported."),(0,i.kt)("h3",{id:"checking-if-object-is-interactive"},"Checking if Object is Interactive"),(0,i.kt)("p",null,"You can check if an object is interactive by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"isInteractive")," property. This will return true if ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"static")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"if (sprite.isInteractive()) {\n    // sprite is interactive\n}\n")),(0,i.kt)("h2",{id:"use-pointer-events"},"Use Pointer Events"),(0,i.kt)("p",null,"PixiJS supports three types of interaction events - mouse, touch and pointer. Mouse events are fired by mouse movement, clicks etc. Touch events are fired for touch-capable devices. And pointer events are fired for ",(0,i.kt)("em",{parentName:"p"},"both"),"."),(0,i.kt)("p",null,"What this means is that, in many cases, you can write your project to use pointer events and it will just work when used with ",(0,i.kt)("em",{parentName:"p"},"either")," mouse or touch input. Given that, the only reason to use non-pointer events is to support different modes of operation based on input type or to support multi-touch interaction. In all other cases, prefer pointer events."),(0,i.kt)("h2",{id:"optimization"},"Optimization"),(0,i.kt)("p",null,"Hit testing requires walking the full object tree, which in complex projects can become an optimization bottleneck. To mitigate this issue, PixiJS Container-derived objects have a property named ",(0,i.kt)("inlineCode",{parentName:"p"},"interactiveChildren"),". If you have Containers or other objects with complex child trees that you know will never be interactive, you can set this property to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and the hit testing algorithm will skip those children when checking for hover and click events. As an example, if you were building a side-scrolling game, you would probably want to set ",(0,i.kt)("inlineCode",{parentName:"p"},"background.interactiveChildren = false")," for your background layer with rocks, clouds, flowers, etc. Doing so would speed up hit testing substantially due to the number of unclickable child objects the background layer would contain."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EventSystem")," can also be customised to be more performant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const app = new Application({\n    eventMode: 'passive',\n    eventFeatures: {\n        move: true,\n        /** disables the global move events which can be very expensive in large scenes */\n        globalMove: false,\n        click: true,\n        wheel: true,\n    }\n});\n")))}m.isMDXComponent=!0}}]);