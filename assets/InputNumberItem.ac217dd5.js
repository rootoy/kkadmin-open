import{B as a,bz as o,a1 as p,D as m,F as i,J as u,K as l,w as c,a5 as d,L as _}from"./vendor.bf608252.js";/* empty css               */import{_ as f,a as b}from"./index.8c0c936f.js";import{b as g}from"./index.7884e5d7.js";import"./index.a9dfa6ef.js";/* empty css               *//* empty css                */import"./index.680f0086.js";import"./index.cf8db8b4.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.0366a6a7.js";/* empty css               */import"./lock.8ca59161.js";const v=a({name:"InputNumberItem",components:{InputNumber:o},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:t}=b("setting-input-number-item");function n(r){e.event&&g(e.event,r)}return{prefixCls:t,handleChange:n}}});function C(e,t,n,r,I,N){const s=p("InputNumber");return m(),i("div",{class:_(e.prefixCls)},[u("span",null,l(e.title),1),c(s,d(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}var H=f(v,[["render",C],["__scopeId","data-v-4c1dd0d9"]]);export{H as default};