import{j as s,C as d,r as p,a as m}from"./DiffCodeComponent-BdQJpqcX.js";import{r as c}from"./index-BBkUAzwr.js";import"./MarkdownComponent-DOv87xdC.js";const i=({exerciseObject:a,initialAnswer:e,onAnswerChanges:n})=>{var o,t;const r=a.startingCode;return c.useEffect(()=>{n({...e,answer:{...e.answer,src:e.answer.src}})},[e.answer.src]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"mt-4",children:[r&&r.src!==""&&s.jsx(d,{language:r.language,src:r.src,config:((o=a.metadata)==null?void 0:o.startingCodeConfig)??{options:p}}),s.jsx(d,{language:e.answer.language,src:e.answer.src,onCodeChange:g=>{n({...e,answer:{...e.answer,src:g}})},config:((t=a.metadata)==null?void 0:t.answerCodeConfig)??{options:m}})]})})};i.__docgenInfo={description:"",methods:[],displayName:"CodingComponent",props:{exerciseObject:{required:!0,tsType:{name:"T"},description:""},onAnswerChanges:{required:!0,tsType:{name:"signature",type:"function",raw:"(answer: E) => void",signature:{arguments:[{type:{name:"E"},name:"answer"}],return:{name:"void"}}},description:""},initialAnswer:{required:!0,tsType:{name:"E"},description:""}}};export{i as C};