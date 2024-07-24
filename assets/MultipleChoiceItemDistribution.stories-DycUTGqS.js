import{j as x}from"./DiffCodeComponent-BdQJpqcX.js";import"./MarkdownEditorComponent-DAjiTc9T.js";import"./CodingComponent-BdBrtJ_i.js";import{M as u}from"./MultipleChoiceItemComponent-BjZnfbmj.js";import"./MultipleChoiceComponent-UhL3VWUJ.js";import"./TextResponseComponent-DGq8uxVe.js";import"./MarkdownComponent-DOv87xdC.js";import"./index-BBkUAzwr.js";const D={component:u},r={args:{correct:!0,distribution:50},render:g=>x.jsx(u,{...g})},e={name:"Correct Example",...r},t={name:"Incorrect Example",...r,args:{...r.args,correct:!1}},a={name:"0 Distribution Example",...r,args:{...r.args,distribution:0}};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Correct Example',
  ...Template
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var m,c,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Incorrect Example',
  ...Template,
  args: {
    ...Template.args,
    correct: false
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '0 Distribution Example',
  ...Template,
  args: {
    ...Template.args,
    distribution: 0
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const I=["First","Second","Third"];export{e as First,t as Second,a as Third,I as __namedExportsOrder,D as default};
