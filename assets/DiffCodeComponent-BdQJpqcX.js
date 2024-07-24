import{r as u,R as D}from"./index-BBkUAzwr.js";var ge={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee=u,Se=Symbol.for("react.element"),Pe=Symbol.for("react.fragment"),Le=Object.prototype.hasOwnProperty,Re=Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ie={key:!0,ref:!0,__self:!0,__source:!0};function me(e,t,r){var n,o={},i=null,c=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)Le.call(t,n)&&!Ie.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Se,type:e,key:i,ref:c,props:o,_owner:Re.current}}J.Fragment=Pe;J.jsx=me;J.jsxs=me;ge.exports=J;var U=ge.exports;function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(n){Te(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function De(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function xe(e,t){if(e==null)return{};var r=De(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function qe(e,t){return Ne(e)||_e(e,t)||$e(e,t)||Ae()}function Ne(e){if(Array.isArray(e))return e}function _e(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,i=void 0;try{for(var c=e[Symbol.iterator](),p;!(n=(p=c.next()).done)&&(r.push(p.value),!(t&&r.length===t));n=!0);}catch(l){o=!0,i=l}finally{try{!n&&c.return!=null&&c.return()}finally{if(o)throw i}}return r}}function $e(e,t){if(e){if(typeof e=="string")return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return se(e,t)}}function se(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?le(Object(r),!0).forEach(function(n){He(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ve(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,i){return i(o)},n)}}function A(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,p=new Array(c),l=0;l<c;l++)p[l]=arguments[l];return t.apply(r,[].concat(o,p))}}}function Y(e){return{}.toString.call(e).includes("Object")}function Fe(e){return!Object.keys(e).length}function V(e){return typeof e=="function"}function ze(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Be(e,t){return Y(t)||S("changeType"),Object.keys(t).some(function(r){return!ze(e,r)})&&S("changeField"),t}function We(e){V(e)||S("selectorType")}function ke(e){V(e)||Y(e)||S("handlerType"),Y(e)&&Object.values(e).some(function(t){return!V(t)})&&S("handlersType")}function Ue(e){e||S("initialIsRequired"),Y(e)||S("initialType"),Fe(e)&&S("initialContent")}function Ye(e,t){throw new Error(e[t]||e.default)}var Ge={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},S=A(Ye)(Ge),W={changes:Be,selector:We,handler:ke,initial:Ue};function Je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};W.initial(e),W.handler(t);var r={current:e},n=A(Xe)(r,t),o=A(Qe)(r),i=A(W.changes)(e),c=A(Ke)(r);function p(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(b){return b};return W.selector(v),v(r.current)}function l(v){Ve(n,o,i,c)(v)}return[p,l]}function Ke(e,t){return V(t)?t(e.current):t}function Qe(e,t){return e.current=de(de({},e.current),t),t}function Xe(e,t,r){return V(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var Ze={create:Je},et={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function tt(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,p=new Array(c),l=0;l<c;l++)p[l]=arguments[l];return t.apply(r,[].concat(o,p))}}}function rt(e){return{}.toString.call(e).includes("Object")}function nt(e){return e||fe("configIsRequired"),rt(e)||fe("configType"),e.urls?(ot(),{paths:{vs:e.urls.monacoBase}}):e}function ot(){console.warn(he.deprecation)}function it(e,t){throw new Error(e[t]||e.default)}var he={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=tt(it)(he),at={config:nt},ut=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(i,c){return c(i)},o)}};function ve(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],ve(e[r],t[r]))}),ce(ce({},e),t)}var ct={type:"cancelation",msg:"operation is manually canceled"};function ne(e){var t=!1,r=new Promise(function(n,o){e.then(function(i){return t?o(ct):n(i)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var st=Ze.create({config:et,isInitialized:!1,resolve:null,reject:null,monaco:null}),ye=qe(st,2),F=ye[0],K=ye[1];function lt(e){var t=at.config(e),r=t.monaco,n=xe(t,["monaco"]);K(function(o){return{config:ve(o.config,n),monaco:r}})}function dt(){var e=F(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(K({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ne(oe);if(window.monaco&&window.monaco.editor)return be(window.monaco),e.resolve(window.monaco),ne(oe);ut(ft,gt)(mt)}return ne(oe)}function ft(e){return document.body.appendChild(e)}function pt(e){var t=document.createElement("script");return e&&(t.src=e),t}function gt(e){var t=F(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),r=pt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function mt(){var e=F(function(r){var n=r.config,o=r.resolve,i=r.reject;return{config:n,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){be(r),e.resolve(r)},function(r){e.reject(r)})}function be(e){F().monaco||K({monaco:e})}function ht(){return F(function(e){var t=e.monaco;return t})}var oe=new Promise(function(e,t){return K({resolve:e,reject:t})}),we={config:lt,init:dt,__getMonacoInstance:ht},vt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ie=vt,yt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bt=yt;function wt({children:e}){return D.createElement("div",{style:bt.container},e)}var Ot=wt,Mt=Ot;function jt({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:c}){return D.createElement("section",{style:{...ie.wrapper,width:e,height:t},...c},!r&&D.createElement(Mt,null,n),D.createElement("div",{ref:o,style:{...ie.fullWidth,...!r&&ie.hide},className:i}))}var Ct=jt,Oe=u.memo(Ct);function Et(e){u.useEffect(e,[])}var Me=Et;function St(e,t,r=!0){let n=u.useRef(!0);u.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var j=St;function H(){}function T(e,t,r,n){return Pt(e,n)||Lt(e,t,r,n)}function Pt(e,t){return e.editor.getModel(je(e,t))}function Lt(e,t,r,n){return e.editor.createModel(t,r,n?je(e,n):void 0)}function je(e,t){return e.Uri.parse(t)}function Rt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:p=!1,keepCurrentModifiedModel:l=!1,theme:v="light",loading:b="Loading...",options:C={},height:Q="100%",width:X="100%",className:Z,wrapperProps:ee={},beforeMount:te=H,onMount:re=H}){let[O,x]=u.useState(!1),[P,h]=u.useState(!0),y=u.useRef(null),m=u.useRef(null),q=u.useRef(null),w=u.useRef(re),d=u.useRef(te),L=u.useRef(!1);Me(()=>{let a=we.init();return a.then(f=>(m.current=f)&&h(!1)).catch(f=>(f==null?void 0:f.type)!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>y.current?N():a.cancel()}),j(()=>{if(y.current&&m.current){let a=y.current.getOriginalEditor(),f=T(m.current,e||"",n||r||"text",i||"");f!==a.getModel()&&a.setModel(f)}},[i],O),j(()=>{if(y.current&&m.current){let a=y.current.getModifiedEditor(),f=T(m.current,t||"",o||r||"text",c||"");f!==a.getModel()&&a.setModel(f)}},[c],O),j(()=>{let a=y.current.getModifiedEditor();a.getOption(m.current.editor.EditorOption.readOnly)?a.setValue(t||""):t!==a.getValue()&&(a.executeEdits("",[{range:a.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),a.pushUndoStop())},[t],O),j(()=>{var a,f;(f=(a=y.current)==null?void 0:a.getModel())==null||f.original.setValue(e||"")},[e],O),j(()=>{let{original:a,modified:f}=y.current.getModel();m.current.editor.setModelLanguage(a,n||r||"text"),m.current.editor.setModelLanguage(f,o||r||"text")},[r,n,o],O),j(()=>{var a;(a=m.current)==null||a.editor.setTheme(v)},[v],O),j(()=>{var a;(a=y.current)==null||a.updateOptions(C)},[C],O);let z=u.useCallback(()=>{var E;if(!m.current)return;d.current(m.current);let a=T(m.current,e||"",n||r||"text",i||""),f=T(m.current,t||"",o||r||"text",c||"");(E=y.current)==null||E.setModel({original:a,modified:f})},[r,t,o,e,n,i,c]),B=u.useCallback(()=>{var a;!L.current&&q.current&&(y.current=m.current.editor.createDiffEditor(q.current,{automaticLayout:!0,...C}),z(),(a=m.current)==null||a.editor.setTheme(v),x(!0),L.current=!0)},[C,v,z]);u.useEffect(()=>{O&&w.current(y.current,m.current)},[O]),u.useEffect(()=>{!P&&!O&&B()},[P,O,B]);function N(){var f,E,R,_;let a=(f=y.current)==null?void 0:f.getModel();p||((E=a==null?void 0:a.original)==null||E.dispose()),l||((R=a==null?void 0:a.modified)==null||R.dispose()),(_=y.current)==null||_.dispose()}return D.createElement(Oe,{width:X,height:Q,isEditorReady:O,loading:b,_ref:q,className:Z,wrapperProps:ee})}var It=Rt,Tt=u.memo(It);function Dt(e){let t=u.useRef();return u.useEffect(()=>{t.current=e},[e]),t.current}var xt=Dt,k=new Map;function qt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:c="light",line:p,loading:l="Loading...",options:v={},overrideServices:b={},saveViewState:C=!0,keepCurrentModel:Q=!1,width:X="100%",height:Z="100%",className:ee,wrapperProps:te={},beforeMount:re=H,onMount:O=H,onChange:x,onValidate:P=H}){let[h,y]=u.useState(!1),[m,q]=u.useState(!0),w=u.useRef(null),d=u.useRef(null),L=u.useRef(null),z=u.useRef(O),B=u.useRef(re),N=u.useRef(),a=u.useRef(n),f=xt(i),E=u.useRef(!1),R=u.useRef(!1);Me(()=>{let s=we.init();return s.then(g=>(w.current=g)&&q(!1)).catch(g=>(g==null?void 0:g.type)!=="cancelation"&&console.error("Monaco initialization: error:",g)),()=>d.current?Ce():s.cancel()}),j(()=>{var g,M,$,I;let s=T(w.current,e||n||"",t||o||"",i||r||"");s!==((g=d.current)==null?void 0:g.getModel())&&(C&&k.set(f,(M=d.current)==null?void 0:M.saveViewState()),($=d.current)==null||$.setModel(s),C&&((I=d.current)==null||I.restoreViewState(k.get(i))))},[i],h),j(()=>{var s;(s=d.current)==null||s.updateOptions(v)},[v],h),j(()=>{!d.current||n===void 0||(d.current.getOption(w.current.editor.EditorOption.readOnly)?d.current.setValue(n):n!==d.current.getValue()&&(R.current=!0,d.current.executeEdits("",[{range:d.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),d.current.pushUndoStop(),R.current=!1))},[n],h),j(()=>{var g,M;let s=(g=d.current)==null?void 0:g.getModel();s&&o&&((M=w.current)==null||M.editor.setModelLanguage(s,o))},[o],h),j(()=>{var s;p!==void 0&&((s=d.current)==null||s.revealLine(p))},[p],h),j(()=>{var s;(s=w.current)==null||s.editor.setTheme(c)},[c],h);let _=u.useCallback(()=>{var s;if(!(!L.current||!w.current)&&!E.current){B.current(w.current);let g=i||r,M=T(w.current,n||e||"",t||o||"",g||"");d.current=(s=w.current)==null?void 0:s.editor.create(L.current,{model:M,automaticLayout:!0,...v},b),C&&d.current.restoreViewState(k.get(g)),w.current.editor.setTheme(c),p!==void 0&&d.current.revealLine(p),y(!0),E.current=!0}},[e,t,r,n,o,i,v,b,C,c,p]);u.useEffect(()=>{h&&z.current(d.current,w.current)},[h]),u.useEffect(()=>{!m&&!h&&_()},[m,h,_]),a.current=n,u.useEffect(()=>{var s,g;h&&x&&((s=N.current)==null||s.dispose(),N.current=(g=d.current)==null?void 0:g.onDidChangeModelContent(M=>{R.current||x(d.current.getValue(),M)}))},[h,x]),u.useEffect(()=>{if(h){let s=w.current.editor.onDidChangeMarkers(g=>{var $;let M=($=d.current.getModel())==null?void 0:$.uri;if(M&&g.find(I=>I.path===M.path)){let I=w.current.editor.getModelMarkers({resource:M});P==null||P(I)}});return()=>{s==null||s.dispose()}}return()=>{}},[h,P]);function Ce(){var s,g;(s=N.current)==null||s.dispose(),Q?C&&k.set(i,d.current.saveViewState()):(g=d.current.getModel())==null||g.dispose(),d.current.dispose()}return D.createElement(Oe,{width:X,height:Z,isEditorReady:h,loading:l,_ref:L,className:ee,wrapperProps:te})}var Nt=qt,_t=u.memo(Nt);const $t=(e,t)=>{const r=e.getModel();if(r!==null){const n=r.getLineCount(),o=r.getLineMaxColumn(n);e.setPosition({lineNumber:n,column:o})}t&&e.focus()},At=(e,t)=>{t&&e.focus()},pe=e=>{var i;const t=e.getDomNode();if(!t)return;const r=23,n=((i=e.getModel())==null?void 0:i.getLineCount())??1,o=e.getTopForLineNumber(n+1)+r;t.style.height=`${o}px`,t.style.width="100%",e.layout({width:t.getBoundingClientRect().width,height:o})},ae=e=>{var i,c;const t=e.getContainerDomNode();if(!t)return;const r=23,n=Math.max(((i=e.getModel())==null?void 0:i.modified.getLineCount())??1,((c=e.getModel())==null?void 0:c.original.getLineCount())??1),o=Math.max(e.getOriginalEditor().getTopForLineNumber(n+1),e.getModifiedEditor().getTopForLineNumber(n+1))+r;t.style.height=`${o}px`,t.style.width="100%",e.getOriginalEditor().layout({width:e.getOriginalEditor().getContainerDomNode().getBoundingClientRect().width,height:o}),e.getModifiedEditor().layout({width:e.getModifiedEditor().getContainerDomNode().getBoundingClientRect().width,height:o})},G={quickSuggestions:{other:"inline",comments:!0,strings:!0},cursorBlinking:"smooth",wrappingStrategy:"advanced",wordWrap:"on",minimap:{enabled:!1},scrollBeyondLastLine:!1,readOnly:!1,overviewRulerLanes:0,lineNumbers:"on",renderLineHighlightOnlyWhenFocus:!0,scrollbar:{alwaysConsumeMouseWheel:!1}},zt={quickSuggestions:{other:"inline",comments:!0,strings:!0},cursorBlinking:"smooth",wrappingStrategy:"advanced",wordWrap:"on",minimap:{enabled:!1},scrollBeyondLastLine:!1,overviewRulerLanes:0,readOnly:!0,lineNumbers:e=>" ",renderLineHighlight:"none",scrollbar:{alwaysConsumeMouseWheel:!1}},Ht=({referenceId:e,src:t,language:r,onCodeChange:n,focused:o,config:i={fullHeight:!1,options:G,theme:"light",actions:[]},onMount:c,beforeMount:p})=>{const l=b=>{n&&n(b??"",e)},v=b=>{$t(b,o),b.onDidContentSizeChange(()=>{pe(b)}),pe(b),i!=null&&i.actions&&i.actions.forEach(C=>{b.addAction(C)}),c&&c(b)};return U.jsx("div",{className:"grid grid-cols-1",children:U.jsx(_t,{height:i!=null&&i.fullHeight?"100%":"auto",options:(i==null?void 0:i.options)??G,theme:i==null?void 0:i.theme,value:t,language:r,onChange:l,onMount:v,beforeMount:p})})};Ht.__docgenInfo={description:"",methods:[],displayName:"CodeComponent",props:{referenceId:{required:!1,tsType:{name:"string"},description:""},src:{required:!0,tsType:{name:"string"},description:""},language:{required:!0,tsType:{name:"string"},description:""},onCodeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, referenceId?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"string"},name:"referenceId"}],return:{name:"void"}}},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},config:{required:!1,tsType:{name:"IExtendedCodeConfig"},description:"",defaultValue:{value:`{
  fullHeight: false,
  options: adjustableHeightCodeOptions,
  theme: 'light',
  actions: [],
}`,computed:!1}},onMount:{required:!1,tsType:{name:"signature",type:"function",raw:"(editor: editor.IStandaloneCodeEditor) => void",signature:{arguments:[{type:{name:"editor.IStandaloneCodeEditor"},name:"editor"}],return:{name:"void"}}},description:""},beforeMount:{required:!1,tsType:{name:"signature",type:"function",raw:"(monaco: Monaco) => void",signature:{arguments:[{type:{name:"Monaco"},name:"monaco"}],return:{name:"void"}}},description:""}}};const Vt=({original:e,modified:t,language:r,focused:n,config:o={fullHeight:!1,options:G,theme:"light"},onMount:i,beforeMount:c})=>{const p=l=>{At(l,n),l.getOriginalEditor().onDidContentSizeChange(()=>{ae(l)}),l.getModifiedEditor().onDidContentSizeChange(()=>{ae(l)}),ae(l),i&&i(l)};return U.jsx("div",{className:"grid grid-cols-1",children:U.jsx(Tt,{height:o!=null&&o.fullHeight?"100%":"auto",options:(o==null?void 0:o.options)??G,theme:o==null?void 0:o.theme,original:e,modified:t,language:r,onMount:p,beforeMount:c})})};Vt.__docgenInfo={description:"",methods:[],displayName:"DiffCodeComponent",props:{original:{required:!0,tsType:{name:"string"},description:""},modified:{required:!0,tsType:{name:"string"},description:""},language:{required:!0,tsType:{name:"string"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},config:{required:!1,tsType:{name:"ICodeConfig"},description:"",defaultValue:{value:`{\r
  fullHeight: false,\r
  options: adjustableHeightCodeOptions,\r
  theme: 'light',\r
}`,computed:!1}},onMount:{required:!1,tsType:{name:"signature",type:"function",raw:"(editor: editor.IStandaloneDiffEditor) => void",signature:{arguments:[{type:{name:"editor.IStandaloneDiffEditor"},name:"editor"}],return:{name:"void"}}},description:""},beforeMount:{required:!1,tsType:{name:"signature",type:"function",raw:"(monaco: Monaco) => void",signature:{arguments:[{type:{name:"Monaco"},name:"monaco"}],return:{name:"void"}}},description:""}}};export{Ht as C,Vt as D,G as a,U as j,zt as r};
