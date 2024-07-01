import{C as c,a as p}from"./DiffCodeComponent-D9zDrCln.js";import{f as m}from"./index-4lRnP7hS.js";import"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";import"./index-DEUJ_QDu.js";const C={component:c,parameters:{docs:{description:{component:"Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples."}}}},e={name:"Simple javascript",args:{src:"let x = 5",language:"javascript",config:{options:p},onCodeChange:m()},argTypes:{"config.options":{control:!1}}},o={name:"Simple multiline",args:{src:`Hello
World
...`,language:"javascript",config:{options:p}}};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Simple multiline',
  args: {
    src: 'Hello' + '\\nWorld\\n' + '...',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const j=["Primary","Secondary"];export{e as Primary,o as Secondary,j as __namedExportsOrder,C as default};
