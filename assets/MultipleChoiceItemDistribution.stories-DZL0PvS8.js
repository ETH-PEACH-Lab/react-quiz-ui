import{j as x}from"./jsx-runtime-QvZ8i92b.js";import"./MarkdownEditorComponent-BLgmIUG7.js";import"./CodingComponent-UPpMeeiI.js";import{M as u}from"./MultipleChoiceItemComponent-DMZ40ius.js";import"./MultipleChoiceComponent-Day0T-E9.js";import"./TextResponseComponent-DMekj8qv.js";import"./DiffCodeComponent-D9zDrCln.js";import"./MarkdownComponent-ClauHaOy.js";import"./index-uubelm5h.js";const I={component:u},r={args:{correct:!0,distribution:50},render:g=>x.jsx(u,{...g})},e={name:"Correct Example",...r},t={name:"Incorrect Example",...r,args:{...r.args,correct:!1}},a={name:"0 Distribution Example",...r,args:{...r.args,distribution:0}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Correct Example',
  ...Template
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,c,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const F=["First","Second","Third"];export{e as First,t as Second,a as Third,F as __namedExportsOrder,I as default};
