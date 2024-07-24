import{j as f}from"./DiffCodeComponent-BdQJpqcX.js";import{C as p}from"./CodingComponent-BdBrtJ_i.js";import{f as x}from"./index-2ywIqtt-.js";import"./index-BBkUAzwr.js";import"./MarkdownComponent-DOv87xdC.js";const C={title:"exercise-elements/coding/Coding",component:p},e={args:{exerciseObject:{startingCode:{src:`def factorial(n):\r
    """\r
    Calculate the factorial of a non-negative integer n.\r
    """`,language:"python"}},initialAnswer:{referenceId:"referenceId",answer:{src:"",language:"python"}},onAnswerChanges:x()},render:u=>f.jsx(p,{...u})},r={name:"Base example",args:{...e.args},render:e.render},n={name:"With inital value",args:{...e.args,initialAnswer:{referenceId:"referenceId",answer:{src:`    if n == 0:\r
        return 1\r
    else:\r
        return n * factorial(n - 1)`,language:"python"}}},render:e.render},a={name:"No starting code",args:{...e.args,exerciseObject:{...e.args.exerciseObject,startingCode:void 0},initialAnswer:{referenceId:"referenceId",answer:{src:'print("Hello World")',language:"python"}}},render:e.render};var s,t,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Base example',
  args: {
    ...Template.args
  },
  render: Template.render
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'With inital value',
  args: {
    ...Template.args,
    initialAnswer: {
      referenceId: 'referenceId',
      answer: {
        src: '    if n == 0:\\r\\n        return 1\\r\\n    else:\\r\\n        return n * factorial(n - 1)',
        language: 'python'
      }
    }
  },
  render: Template.render
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'No starting code',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      startingCode: undefined
    },
    initialAnswer: {
      referenceId: 'referenceId',
      answer: {
        src: 'print("Hello World")',
        language: 'python'
      }
    }
  },
  render: Template.render
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["Primary","Secondary","Third"];export{r as Primary,n as Secondary,a as Third,j as __namedExportsOrder,C as default};
