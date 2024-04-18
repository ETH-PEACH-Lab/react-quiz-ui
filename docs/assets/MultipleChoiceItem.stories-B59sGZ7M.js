import{R as u}from"./index-BBkUAzwr.js";import{M as s}from"./MultipleChoiceItemComponent-BNYjSHzz.js";import{f as p}from"./index-2ywIqtt-.js";const I={component:s},d={render:e=>{const l={id:"mc-item-id",src:e.descriptionText,type:"markdown"};return u.createElement(s,{onChange:e.onChange,parentId:e.parentId,multi:e.multi,item:l})},argTypes:{parentId:{control:!1},descriptionText:{description:"Storybook argument"},item:{control:!1}}},t={name:"Radio Button",args:{multi:!1,descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:p()},...d},n={name:"Checkbox Button",args:{multi:!0,descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:p()},...d};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Radio Button',
  args: {
    multi: false,
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,m,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Checkbox Button',
  args: {
    multi: true,
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const g=["Primary","Secondary"];export{t as Primary,n as Secondary,g as __namedExportsOrder,I as default};
