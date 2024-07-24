import{C as c,a as p}from"./DiffCodeComponent-BdQJpqcX.js";import{f as l}from"./index-2ywIqtt-.js";import"./index-BBkUAzwr.js";const u={component:c,parameters:{docs:{description:{component:"Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples."}}}},e={name:"Simple javascript",args:{src:"let x = 5",language:"javascript",config:{options:p},onCodeChange:l()},argTypes:{"config.options":{control:!1}}},n={name:"Simple multiline",args:{src:`Hello
World
...`,language:"javascript",config:{options:p}}};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple javascript',
  args: {
    src: 'let x = 5',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions
    },
    onCodeChange: fn()
  },
  argTypes: {
    'config.options': {
      control: false
    }
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,t,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Simple multiline',
  args: {
    src: 'Hello' + '\\nWorld\\n' + '...',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const f=["Primary","Secondary"];export{e as Primary,n as Secondary,f as __namedExportsOrder,u as default};
