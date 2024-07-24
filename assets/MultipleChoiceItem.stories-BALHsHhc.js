import{j as v}from"./DiffCodeComponent-BdQJpqcX.js";import{a as B}from"./MultipleChoiceItemComponent-BjZnfbmj.js";import{f as e}from"./index-2ywIqtt-.js";import"./index-BBkUAzwr.js";import"./MarkdownComponent-DOv87xdC.js";const _={component:B},n={render:s=>{const E={id:"mc-item-0",src:s.descriptionText};return v.jsx(B,{...s,item:E})},argTypes:{parentId:{control:!1},descriptionText:{description:"Storybook argument"},item:{control:!1}}},t={name:"Radio Button",args:{config:{multi:!1,showEvaluation:!1,incorrectSelection:!1},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n},r={name:"Checkbox Button",args:{config:{multi:!0},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n},o={name:"Checked checkbox Button",args:{config:{multi:!0,checked:!0},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n},c={name:"Checked incorrect checkbox Button",args:{config:{multi:!0,checked:!0,incorrectSelection:!0,showEvaluation:!0},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n},i={name:"Checked correct checkbox Button",args:{config:{multi:!0,checked:!0,incorrectSelection:!1,showEvaluation:!0},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n},a={name:"Show Distribution",args:{config:{multi:!0,checked:!0,incorrectSelection:!1,showEvaluation:!0,distribution:{show:!0,number:100}},descriptionText:"Multiple Choice Item",parentId:"mcq-id",onChange:e()},...n};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Radio Button',
  args: {
    config: {
      multi: false,
      showEvaluation: false,
      incorrectSelection: false
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,l,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Checkbox Button',
  args: {
    config: {
      multi: true
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,f,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Checked checkbox Button',
  args: {
    config: {
      multi: true,
      checked: true
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,I,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Checked incorrect checkbox Button',
  args: {
    config: {
      multi: true,
      checked: true,
      incorrectSelection: true,
      showEvaluation: true
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var k,S,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Checked correct checkbox Button',
  args: {
    config: {
      multi: true,
      checked: true,
      incorrectSelection: false,
      showEvaluation: true
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var M,q,w;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Show Distribution',
  args: {
    config: {
      multi: true,
      checked: true,
      incorrectSelection: false,
      showEvaluation: true,
      distribution: {
        show: true,
        number: 100
      }
    },
    descriptionText: 'Multiple Choice Item',
    parentId: 'mcq-id',
    onChange: fn()
  },
  ...Template
}`,...(w=(q=a.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const O=["First","Second","Third","Forth","Fifth","Sixth"];export{i as Fifth,t as First,c as Forth,r as Second,a as Sixth,o as Third,O as __namedExportsOrder,_ as default};
