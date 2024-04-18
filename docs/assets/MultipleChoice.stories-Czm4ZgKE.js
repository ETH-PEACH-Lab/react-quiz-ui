import{R as C}from"./index-BBkUAzwr.js";import{M as p}from"./MultipleChoiceComponent-C1Iu58dG.js";import"./MultipleChoiceItemComponent-BNYjSHzz.js";const T={component:p},d={render:e=>{const u=Array.from(Array(e.itemsCount).keys()).map(r=>({id:"mc-item-"+r,src:"Multiple Choice Item "+r,type:"markdown"})),l={id:"description",src:e.descriptionText,type:"markdown"};return C.createElement(p,{id:e.id,multi:e.multi,items:u,description:l})},argTypes:{itemsCount:{description:"Storybook argument"},items:{control:!1},descriptionText:{description:"Storybook argument"},description:{control:!1}}},t={name:"Radio Button MC",args:{id:"test-mc",multi:!1,itemsCount:3,descriptionText:"## Multiple Choice"},...d},o={name:"Checkbox Button MC",args:{id:"test-mc",multi:!0,itemsCount:3,descriptionText:"## Multiple Choice"},...d};var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio Button MC',
  args: {
    id: 'test-mc',
    multi: false,
    itemsCount: 3,
    descriptionText: '## Multiple Choice'
  },
  ...Template
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,a,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Checkbox Button MC',
  args: {
    id: 'test-mc',
    multi: true,
    itemsCount: 3,
    descriptionText: '## Multiple Choice'
  },
  ...Template
}`,...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const f=["Primary","Secondary"];export{t as Primary,o as Secondary,f as __namedExportsOrder,T as default};
