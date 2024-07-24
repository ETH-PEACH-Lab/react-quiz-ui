import{j as x}from"./DiffCodeComponent-BdQJpqcX.js";import{M as f}from"./MarkdownEditorComponent-DAjiTc9T.js";import{f as b}from"./index-2ywIqtt-.js";import"./index-BBkUAzwr.js";import"./MarkdownComponent-DOv87xdC.js";const E={component:f,parameters:{docs:{description:{component:`This editor showcases an editing view for markdown code.
**The state has to be managed by the parent component.**`}}}},e={args:{config:{alignVertical:!1,tabs:!1,jupyter:!1},onChange:b()},render:h=>x.jsx(f,{...h}),argTypes:{"config.codeOptions":{control:!1}}},r={name:"Basic example",args:{src:"## What is your option about react?",...e.args},argTypes:e.argTypes,render:e.render},a={name:"Tabs example",args:{src:"## What is your option about react?",...e.args,config:{tabs:!0}},argTypes:e.argTypes,render:e.render},s={name:"Jupyter example",args:{src:"## What is your option about react?",...e.args,config:{jupyter:!0}},argTypes:e.argTypes,render:e.render},n={name:"Jupyter example: empty text",args:{src:"",...e.args,config:{jupyter:!0}},argTypes:e.argTypes,render:e.render};var t,o,p;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Basic example',
  args: {
    src: '## What is your option about react?',
    ...Template.args
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,m,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Tabs example',
  args: {
    src: '## What is your option about react?',
    ...Template.args,
    config: {
      tabs: true
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var g,d,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Jupyter example',
  args: {
    src: '## What is your option about react?',
    ...Template.args,
    config: {
      jupyter: true
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,T,l;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Jupyter example: empty text',
  args: {
    src: '',
    ...Template.args,
    config: {
      jupyter: true
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(l=(T=n.parameters)==null?void 0:T.docs)==null?void 0:l.source}}};const k=["Primary","Secondary","Third","Forth"];export{n as Forth,r as Primary,a as Secondary,s as Third,k as __namedExportsOrder,E as default};
