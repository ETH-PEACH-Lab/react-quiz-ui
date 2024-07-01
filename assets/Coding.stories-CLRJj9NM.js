import{j as f}from"./jsx-runtime-QvZ8i92b.js";import{C as g}from"./CodingComponent-UPpMeeiI.js";import{f as x}from"./index-4lRnP7hS.js";import"./index-uubelm5h.js";import"./DiffCodeComponent-D9zDrCln.js";import"./MarkdownComponent-ClauHaOy.js";import"./index-DEUJ_QDu.js";const A={title:"exercise-elements/coding/Coding",component:g},e={args:{exerciseObject:{startingCode:{src:`def factorial(n):\r
    """\r
    Calculate the factorial of a non-negative integer n.\r
    """`,language:"python"}},initialAnswer:{referenceId:"referenceId",answer:{src:"",language:"python"}},onAnswerChanges:x()},render:u=>f.jsx(g,{...u})},r={name:"Base example",args:{...e.args},render:e.render},n={name:"With inital value",args:{...e.args,initialAnswer:{referenceId:"referenceId",answer:{src:`    if n == 0:\r
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const O=["Primary","Secondary","Third"];export{r as Primary,n as Secondary,a as Third,O as __namedExportsOrder,A as default};
