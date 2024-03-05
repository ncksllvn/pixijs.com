"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7918],{8945:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var s=n(7294),a=n(1944),i=n(902),l=n(5893);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6010),m=n(7524),h=n(5999),v=n(2244);function x(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(v.Z,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(v.Z,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var p=n(2263),f=n(9960),g=n(143),j=n(5281),L=n(373),N=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=k[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function C(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(f.Z,{to:n,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function Z(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,p.Z)(),{pluginId:a}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,L.J)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.Jo)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(C,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,N.E)();return n.banner?(0,l.jsx)(Z,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,N.E)();return n.badge?(0,l.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function y(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(U,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(y,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var w=n(4881),M=n(1526);const B="lastUpdated_vwxv";function E(e){return(0,l.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M.Z,{...e})})})}function I(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(w.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",B),children:(n||s)&&(0,l.jsx)(A,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:i}=e,o=i.length>0,r=!!(t||n||a);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(E,{tags:i}),r&&(0,l.jsx)(I,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var O=n(6043),P=n(3743);const S="tocCollapsibleButton_TO0P",D="tocCollapsibleButtonExpanded_MG3E";function R(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",S,!t&&D,n.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const F="tocCollapsible_ETCw",z="tocCollapsibleContent_vkbj",q="tocCollapsibleExpanded_sAul";function W(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,O.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(F,!i&&q,n),children:[(0,l.jsx)(R,{collapsed:i,onClick:o}),(0,l.jsx)(O.z,{lazy:!0,className:z,collapsed:i,children:(0,l.jsx)(P.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const $="tocMobile_ITEo";function G(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(W,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,$)})}var J=n(9407);function Y(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(J.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var K=n(2503),Q=n(3140);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(K.Z,{as:"h1",children:n})}),(0,l.jsx)(Q.Z,{children:t})]})}var ee=n(2802),te=n(8596),ne=n(4996);function se(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ae="breadcrumbHomeIcon_YNFT";function ie(){const e=(0,ne.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(f.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(se,{className:ae})})})}const le="breadcrumbsContainer_Z_bl";function oe(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,l.jsx)(f.Z,{className:a,href:n,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function re(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,le),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(ie,{}),e.map(((t,n)=>{const s=n===e.length-1;return(0,l.jsx)(re,{active:s,index:n,addMicrodata:!!t.href,children:(0,l.jsx)(oe,{href:t.href,isLast:s,children:t.label})},n)}))]})}):null}const de="docItemContainer_Djhp",ue="docItemCol_VOVn";function me(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(G,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(Y,{})}}();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ue),children:[(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:de,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ce,{}),(0,l.jsx)(H,{}),n.mobile,(0,l.jsx)(X,{children:t}),(0,l.jsx)(V,{})]}),(0,l.jsx)(b,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function he(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(me,{children:(0,l.jsx)(n,{})})]})})}},9407:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var s=n(6010),a=n(3743);const i="tableOfContents_bqdL";var l=n(5893);function o(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>v});var s=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(5893);function m(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)("a",{href:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const h=s.memo(m);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...v}=e;const x=(0,a.L)(),b=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:b,maxHeadingLevel:p});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:p}}),[o,r,b,p])),(0,u.jsx)(h,{toc:f,className:n,linkClassName:o,...v})}},4477:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>o});var s=n(7294),a=n(902),i=n(5893);const l=s.createContext(null);function o(e){let{children:t,version:n}=e;return(0,i.jsx)(l.Provider,{value:n,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new a.i6("DocsVersionProvider");return e}},5889:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(2389),a=n(814),i=n(5166);const l="playgroundCodeBlock_UB3Y";var o=n(5893);function r(e){let{children:t,playground:n=!1,usesWebWorkerLibrary:r=!1,...c}=e;const d=(0,s.Z)();return n&&d?(0,o.jsx)("div",{className:l,children:(0,o.jsx)(i.Z,{code:t,isPixiWebWorkerVersion:r})}):(0,o.jsx)(a.Z,{...c,children:t})}}}]);