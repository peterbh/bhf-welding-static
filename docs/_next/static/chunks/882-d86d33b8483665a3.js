"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{93429:function(e,t){t.Z={root:"m-e615b15f",section:"m-599a2148"}},17864:function(e,t){t.Z={root:"m-abbac491",item:"m-abb6bec2",itemWrapper:"m-75cd9f71",itemIcon:"m-60f83e5b"}},7042:function(e,t,r){r.d(t,{R:function(){return a},k:function(){return n}}),r(2265);let[n,a]=(0,r(70712).createSafeContext)("Card component was not found in tree")},34549:function(e,t,r){r.r(t),r.d(t,{Card:function(){return y}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(35918),l=r(1746),u=r(7042),d=r(99856),m=r(93429);let p={},f=(0,o.createVarsResolver)((e,t)=>{let{padding:r}=t;return{root:{"--card-padding":(0,a.getSpacing)(r)}}}),y=(0,s.polymorphicFactory)((e,t)=>{let r=(0,c.useProps)("Card",p,e),{classNames:a,className:o,style:s,styles:y,unstyled:g,vars:h,children:v,padding:S,...w}=r,C=(0,i.useStyles)({name:"Card",props:r,classes:m.Z,className:o,style:s,classNames:a,styles:y,unstyled:g,vars:h,varsResolver:f}),E=n.Children.toArray(v),b=E.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===d.CardSection?(0,n.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===E.length-1||void 0}):e);return n.createElement(u.k,{value:{getStyles:C}},n.createElement(l.Paper,{ref:t,unstyled:g,...C("root"),...w},b))});y.classes=m.Z,y.displayName="@mantine/core/Card",y.Section=d.CardSection},99856:function(e,t,r){r.r(t),r.d(t,{CardSection:function(){return u}});var n=r(2265),a=r(27185),o=r(42539),c=r(35918),i=r(7042),s=r(93429);let l={},u=(0,c.polymorphicFactory)((e,t)=>{let{classNames:r,className:c,style:s,styles:u,vars:d,withBorder:m,inheritPadding:p,mod:f,...y}=(0,a.useProps)("CardSection",l,e),g=(0,i.R)();return n.createElement(o.Box,{ref:t,mod:[{"with-border":m,"inherit-padding":p},f],...g.getStyles("section",{className:c,style:s,styles:u,classNames:r}),...y})});u.classes=s.Z,u.displayName="@mantine/core/CardSection"},28881:function(e,t,r){r.r(t),r.d(t,{Container:function(){return p}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(42539),l=r(98569),u={root:"m-7485cace"};let d={},m=(0,o.createVarsResolver)((e,t)=>{let{size:r,fluid:n}=t;return{root:{"--container-size":n?void 0:(0,a.getSize)(r,"container-size")}}}),p=(0,l.factory)((e,t)=>{let r=(0,c.useProps)("Container",d,e),{classNames:a,className:o,style:l,styles:p,unstyled:f,vars:y,fluid:g,mod:h,...v}=r,S=(0,i.useStyles)({name:"Container",classes:u,props:r,className:o,style:l,classNames:a,styles:p,unstyled:f,vars:y,varsResolver:m});return n.createElement(s.Box,{ref:t,mod:[{fluid:g},h],...S("root"),...v})});p.classes=u,p.displayName="@mantine/core/Container"},28120:function(e,t,r){r.r(t),r.d(t,{Group:function(){return p}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(42539),l=r(98569),u={root:"m-4081bf90"};let d={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},m=(0,o.createVarsResolver)((e,t,r)=>{let{grow:n,preventGrowOverflow:o,gap:c,align:i,justify:s,wrap:l}=t,{childWidth:u}=r;return{root:{"--group-child-width":n&&o?u:void 0,"--group-gap":(0,a.getSpacing)(c),"--group-align":i,"--group-justify":s,"--group-wrap":l}}}),p=(0,l.factory)((e,t)=>{let r=(0,c.useProps)("Group",d,e),{classNames:o,className:l,style:p,styles:f,unstyled:y,children:g,gap:h,align:v,justify:S,wrap:w,grow:C,preventGrowOverflow:E,vars:b,variant:L,__size:k,mod:P,...x}=r,N=n.Children.toArray(g).filter(Boolean),R=N.length,Z=(0,a.getSpacing)(null!=h?h:"md"),I="calc(".concat(100/R,"% - (").concat(Z," - ").concat(Z," / ").concat(R,"))"),B=(0,i.useStyles)({name:"Group",props:r,stylesCtx:{childWidth:I},className:l,style:p,classes:u,classNames:o,styles:f,unstyled:y,vars:b,varsResolver:m});return n.createElement(s.Box,{...B("root"),ref:t,variant:L,mod:[{grow:C},P],size:k,...x},N)});p.classes=u,p.displayName="@mantine/core/Group"},76909:function(e,t,r){r.d(t,{U:function(){return a},Z:function(){return n}}),r(2265);let[n,a]=(0,r(70712).createSafeContext)("List component was not found in tree")},99001:function(e,t,r){r.r(t),r.d(t,{List:function(){return y}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(42539),l=r(98569),u=r(76909),d=r(63199),m=r(17864);let p={type:"unordered"},f=(0,o.createVarsResolver)((e,t)=>{let{size:r,spacing:n}=t;return{root:{"--list-fz":(0,a.getFontSize)(r),"--list-lh":(0,a.getLineHeight)(r),"--list-spacing":(0,a.getSpacing)(n)}}}),y=(0,l.factory)((e,t)=>{let r=(0,c.useProps)("List",p,e),{classNames:a,className:o,style:l,styles:d,unstyled:y,vars:g,children:h,type:v,withPadding:S,icon:w,spacing:C,center:E,listStyleType:b,mod:L,...k}=r,P=(0,i.useStyles)({name:"List",classes:m.Z,props:r,className:o,style:l,classNames:a,styles:d,unstyled:y,vars:g,varsResolver:f});return n.createElement(u.Z,{value:{center:E,icon:w,getStyles:P}},n.createElement(s.Box,{...P("root",{style:{listStyleType:b}}),component:"unordered"===v?"ul":"ol",mod:[{"with-padding":S},L],ref:t,...k},h))});y.classes=m.Z,y.displayName="@mantine/core/List",y.Item=d.ListItem},63199:function(e,t,r){r.r(t),r.d(t,{ListItem:function(){return u}});var n=r(2265),a=r(27185),o=r(42539),c=r(98569),i=r(76909),s=r(17864);let l={},u=(0,c.factory)((e,t)=>{let{classNames:r,className:c,style:s,styles:u,vars:d,icon:m,children:p,mod:f,...y}=(0,a.useProps)("ListItem",l,e),g=(0,i.U)(),h=m||g.icon,v={classNames:r,styles:u};return n.createElement(o.Box,{...g.getStyles("item",{...v,className:c,style:s}),component:"li",mod:[{"with-icon":!!h,centered:g.center},f],ref:t,...y},n.createElement("div",{...g.getStyles("itemWrapper",v)},h&&n.createElement("span",{...g.getStyles("itemIcon",v)},h),n.createElement("span",{...g.getStyles("itemLabel",v)},p)))});u.classes=s.Z,u.displayName="@mantine/core/ListItem"},1746:function(e,t,r){r.r(t),r.d(t,{Paper:function(){return p}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(42539),l=r(35918),u={root:"m-1b7284a3"};let d={},m=(0,o.createVarsResolver)((e,t)=>{let{radius:r,shadow:n}=t;return{root:{"--paper-radius":void 0===r?void 0:(0,a.getRadius)(r),"--paper-shadow":(0,a.getShadow)(n)}}}),p=(0,l.polymorphicFactory)((e,t)=>{let r=(0,c.useProps)("Paper",d,e),{classNames:a,className:o,style:l,styles:p,unstyled:f,withBorder:y,vars:g,radius:h,shadow:v,variant:S,mod:w,...C}=r,E=(0,i.useStyles)({name:"Paper",props:r,classes:u,className:o,style:l,classNames:a,styles:p,unstyled:f,vars:g,varsResolver:m});return n.createElement(s.Box,{ref:t,mod:[{"data-with-border":y},w],...E("root"),variant:S,...C})});p.classes=u,p.displayName="@mantine/core/Paper"},59130:function(e,t,r){r.r(t),r.d(t,{Stack:function(){return p}});var n=r(2265),a=r(39426),o=r(65571),c=r(27185),i=r(22286),s=r(42539),l=r(98569),u={root:"m-6d731127"};let d={gap:"md",align:"stretch",justify:"flex-start"},m=(0,o.createVarsResolver)((e,t)=>{let{gap:r,align:n,justify:o}=t;return{root:{"--stack-gap":(0,a.getSpacing)(r),"--stack-align":n,"--stack-justify":o}}}),p=(0,l.factory)((e,t)=>{let r=(0,c.useProps)("Stack",d,e),{classNames:a,className:o,style:l,styles:p,unstyled:f,vars:y,align:g,justify:h,gap:v,variant:S,...w}=r,C=(0,i.useStyles)({name:"Stack",props:r,classes:u,className:o,style:l,classNames:a,styles:p,unstyled:f,vars:y,varsResolver:m});return n.createElement(s.Box,{ref:t,...C("root"),variant:S,...w})});p.classes=u,p.displayName="@mantine/core/Stack"},4404:function(e,t,r){r.r(t),r.d(t,{useMediaQuery:function(){return a}});var n=r(2265);function a(e,t){var r;let{getInitialValueInEffect:a}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{getInitialValueInEffect:!0},[o,c]=(0,n.useState)(a?t:"boolean"==typeof r?r:!!("undefined"!=typeof window&&"matchMedia"in window)&&window.matchMedia(e).matches),i=(0,n.useRef)();return(0,n.useEffect)(()=>{if("matchMedia"in window)return i.current=window.matchMedia(e),c(i.current.matches),function(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch(r){return e.addListener(t),()=>e.removeListener(t)}}(i.current,e=>c(e.matches))},[e]),o}}}]);