import{_ as l,a as m}from"./index.6a0932d8.js";import{b as c}from"./index.3784cf67.js";import{B as d,bO as u,a1 as _,D as r,F as n,ab as f,ap as C,L as a,Y as k,w as h}from"./vendor.bf608252.js";import"./index.0e0d4e31.js";/* empty css               *//* empty css                */import"./index.7d3f771c.js";import"./index.3fb00e2e.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.1cd7d405.js";/* empty css               */import"./lock.0a8df02e.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:u},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:o}=m("setting-theme-picker");function s(i){e.event&&c(e.event,i)}return{prefixCls:o,handleClick:s}}}),y=["onClick"];function $(e,o,s,i,b,g){const p=_("CheckOutlined");return r(),n("div",{class:a(e.prefixCls)},[(r(!0),n(f,null,C(e.colorList||[],t=>(r(),n("span",{key:t,onClick:L=>e.handleClick(t),class:a([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(p)],14,y))),128))],2)}var E=l(v,[["render",$]]);export{E as default};