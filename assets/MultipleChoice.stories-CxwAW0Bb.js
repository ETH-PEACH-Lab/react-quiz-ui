import{j as L}from"./DiffCodeComponent-BdQJpqcX.js";import{M as J}from"./MultipleChoiceComponent-UhL3VWUJ.js";import{f as P}from"./index-2ywIqtt-.js";import"./index-BBkUAzwr.js";import"./MultipleChoiceItemComponent-BjZnfbmj.js";import"./MarkdownComponent-DOv87xdC.js";const $={component:J},e={args:{exerciseObject:{items:[],correctAnswers:["mc-item-0"],metadata:{showEvaluation:!1,disabled:!1,random:!1,showIndicator:!1}},itemsCount:3,onAnswerChanges:P()},render:a=>{const K=Array.from(Array(a.itemsCount).keys()).map(u=>({id:"mc-item-"+u,src:"Multiple Choice Item "+u}));return delete a.itemsCount,L.jsx(J,{...a,exerciseObject:{...a.exerciseObject,items:K}})},argTypes:{"exerciseObject.items":{control:!1},"exerciseObject.metadata.showEvaluation":{control:"boolean",description:"Will show the evaluation, iff it is set to true and the correctAnswers array is not empty"},"exerciseObject.metadata.random":{control:"boolean",description:"Assign random location to each multiple choice item"},"exerciseObject.metadata.multi":{control:"boolean",description:"Allow multiple answers"},"exerciseObject.metadata.disabled":{control:"boolean"},"exerciseObject.metadata.showIndicator":{control:"boolean",description:"Show an indicator for the correct answer"},"exerciseObject.metadata.correctAnswers":{control:"object"},itemsCount:{description:"Storybook argument"}}},t={name:"Radio Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!1}}},argTypes:e.argTypes,render:e.render},r={name:"Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0}}},argTypes:e.argTypes,render:e.render},n={name:"Random Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,random:!0}}},argTypes:e.argTypes,render:e.render},s={name:"Show Evaluation: Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showEvaluation:!0}}},argTypes:e.argTypes,render:e.render},i={name:"Show Evaluation with initial answer: Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showEvaluation:!0}},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render},c={name:"Show Results with initial answer: Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showIndicator:!0}},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render},o={name:"Show indicator and evaluation with initial answer: Checkbox Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showIndicator:!0,showEvaluation:!0},correctAnswers:["mc-item-1","mc-item-2"]},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render},m={name:"Show indicator and evaluation with initial answer: Radio Button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!1,showIndicator:!0,showEvaluation:!0},correctAnswers:["mc-item-1"]},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render},d={name:"Show indicator and evaluation with initial answer: Disable checkbox button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showIndicator:!0,disabled:!0,showEvaluation:!0},correctAnswers:["mc-item-1","mc-item-2"]},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render},l={name:"Show distribution and evaluation with initial answer: Disable checkbox button MC",args:{...e.args,exerciseObject:{...e.args.exerciseObject,metadata:{...e.args.exerciseObject.metadata,multi:!0,showIndicator:!0,disabled:!0,showEvaluation:!0,distribution:{show:!0,perItem:{"mc-item-1":15,"mc-item-2":35,"mc-item-3":55}}},correctAnswers:["mc-item-1","mc-item-2"]},initialAnswer:{answer:["mc-item-1"]}},argTypes:e.argTypes,render:e.render};var p,g,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Radio Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: false
      }
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var w,h,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true
      }
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var x,j,O;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Random Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        random: true
      }
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(O=(j=n.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var y,C,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Show Evaluation: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showEvaluation: true
      }
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var v,A,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Show Evaluation with initial answer: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showEvaluation: true
      }
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(M=(A=i.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,f,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Show Results with initial answer: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showIndicator: true
      }
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(k=(f=c.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var B,I,R;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Show indicator and evaluation with initial answer: Checkbox Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showIndicator: true,
        showEvaluation: true
      },
      correctAnswers: ['mc-item-1', 'mc-item-2']
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(R=(I=o.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var F,D,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Show indicator and evaluation with initial answer: Radio Button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: false,
        showIndicator: true,
        showEvaluation: true
      },
      correctAnswers: ['mc-item-1']
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(N=(D=m.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,W,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Show indicator and evaluation with initial answer: Disable checkbox button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showIndicator: true,
        disabled: true,
        showEvaluation: true
      },
      correctAnswers: ['mc-item-1', 'mc-item-2']
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,G,H;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Show distribution and evaluation with initial answer: Disable checkbox button MC',
  args: {
    ...Template.args,
    exerciseObject: {
      ...Template.args.exerciseObject,
      metadata: {
        ...Template.args.exerciseObject.metadata,
        multi: true,
        showIndicator: true,
        disabled: true,
        showEvaluation: true,
        distribution: {
          show: true,
          perItem: {
            'mc-item-1': 15,
            'mc-item-2': 35,
            'mc-item-3': 55
          }
        }
      },
      correctAnswers: ['mc-item-1', 'mc-item-2']
    },
    initialAnswer: {
      answer: ['mc-item-1']
    }
  },
  argTypes: Template.argTypes,
  render: Template.render
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ee=["First","Second","Third","Forth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth"];export{m as Eighth,i as Fifth,t as First,s as Forth,d as Ninth,r as Second,o as Seventh,c as Sixth,l as Tenth,n as Third,ee as __namedExportsOrder,$ as default};
