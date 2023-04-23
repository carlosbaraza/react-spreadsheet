"use strict";(self.webpackChunkreact_spreadsheet=self.webpackChunkreact_spreadsheet||[]).push([[827],{2622:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={id:"usage",title:"Usage"},c="Usage",p={unversionedId:"usage",id:"usage",title:"Usage",description:"Simple",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-spreadsheet/docs/usage",draft:!1,editUrl:"https://github.com/iddan/react-spreadsheet/tree/master/website/docs/usage.md",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage"},sidebar:"sidebar",previous:{title:"Get Started",permalink:"/react-spreadsheet/docs/"}},l={},u=[{value:"Simple",id:"simple",level:2},{value:"Controlled",id:"controlled",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h2",{id:"simple"},"Simple"),(0,o.kt)("p",null,"The Spreadsheet component requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," property: an array of arrays with objects that has the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," key. Changes made in the Spreadsheet will not affect the passed data array as in React props values should not be mutated."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," prop value is changed the component will discard any changes made by the user. If you want to make changes to ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and incorporate the user's changes see ",(0,o.kt)("a",{parentName:"p",href:"#Controlled"},"Controlled"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const data = [\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ];\n  return <Spreadsheet data={data} />;\n};\n')),(0,o.kt)("h2",{id:"controlled"},"Controlled"),(0,o.kt)("p",null,"The Spreadsheet component accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," prop that is called every time one of the Spreadsheet's cell is changed by the user. You can use it to save the modified data and to react to changes (e.g. validating the modified data, further modify it, persist it)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Spreadsheet from "react-spreadsheet";\n\nconst App = () => {\n  const [data, setData] = useState([\n    [{ value: "Vanilla" }, { value: "Chocolate" }],\n    [{ value: "Strawberry" }, { value: "Cookies" }],\n  ]);\n  return <Spreadsheet data={data} onChange={setData} />;\n};\n')))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);