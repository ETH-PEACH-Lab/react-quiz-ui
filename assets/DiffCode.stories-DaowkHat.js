import{D as O,a as n}from"./DiffCodeComponent-BdQJpqcX.js";import"./index-BBkUAzwr.js";const S={component:O,parameters:{docs:{description:{component:"Wrapper for Monaco Code editor. Uses the adjustableHeightCodeOptions in these examples."}}}},e={name:"Simple javascript",args:{original:"let x = 5",modified:"let x = 10",language:"javascript",config:{options:n}},argTypes:{"config.options":{control:!1}}},i={name:"Simple multiline",args:{original:`Hello
World
...`,modified:`Hello
Bob
...`,language:"text",config:{options:n}}},o={name:"More multiline",args:{original:`Hello
World
This is a test.
Line four.
Line five.
Line six.
Line seven.
Line eight.
Line nine.
Line ten.
Line eleven.
Line twelve.
Line thirteen.
Line fourteen.
Line fifteen.
Line sixteen.
Line seventeen.
Line eighteen.
Line nineteen.
Line twenty.
`,modified:`Hello
Bob
This is a test.
Line four.
Line 5.
Line six.
Line seven.
Line eight.
Line nine.
Line ten.
Line eleven.
Line twelve.
Line 13.
Line fourteen.
Line fifteen.
Line sixteen.
Line 17.
Line eighteen.
Line nineteen.
Line twenty.
`,language:"text",config:{options:n}}},t={name:"Original: multiline + modified: none",args:{original:`Hello
World
...`,modified:"",language:"text",config:{options:n}}},a={name:"Original: none + modified: Multiline",args:{modified:`Hello
World
...`,original:"",language:"text",config:{options:n}}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Simple javascript',
  args: {
    original: 'let x = 5',
    modified: 'let x = 10',
    language: 'javascript',
    config: {
      options: adjustableHeightCodeOptions
    }
  },
  argTypes: {
    'config.options': {
      control: false
    }
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var g,d,L;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Simple multiline',
  args: {
    original: 'Hello' + '\\nWorld\\n' + '...',
    modified: 'Hello' + '\\nBob\\n' + '...',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(L=(d=i.parameters)==null?void 0:d.docs)==null?void 0:L.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'More multiline',
  args: {
    original: 'Hello\\nWorld\\nThis is a test.\\nLine four.\\nLine five.\\nLine six.\\nLine seven.\\nLine eight.\\nLine nine.\\nLine ten.\\nLine eleven.\\nLine twelve.\\nLine thirteen.\\nLine fourteen.\\nLine fifteen.\\nLine sixteen.\\nLine seventeen.\\nLine eighteen.\\nLine nineteen.\\nLine twenty.\\n',
    modified: 'Hello\\nBob\\nThis is a test.\\nLine four.\\nLine 5.\\nLine six.\\nLine seven.\\nLine eight.\\nLine nine.\\nLine ten.\\nLine eleven.\\nLine twelve.\\nLine 13.\\nLine fourteen.\\nLine fifteen.\\nLine sixteen.\\nLine 17.\\nLine eighteen.\\nLine nineteen.\\nLine twenty.\\n',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,u,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Original: multiline + modified: none',
  args: {
    original: 'Hello' + '\\nWorld\\n' + '...',
    modified: '',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,v,H;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Original: none + modified: Multiline',
  args: {
    modified: 'Hello' + '\\nWorld\\n' + '...',
    original: '',
    language: 'text',
    config: {
      options: adjustableHeightCodeOptions
    }
  }
}`,...(H=(v=a.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};const y=["Primary","Secondary","Third","Forth","Fifth"];export{a as Fifth,t as Forth,e as Primary,i as Secondary,o as Third,y as __namedExportsOrder,S as default};
