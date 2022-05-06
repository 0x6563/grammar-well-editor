var Le=Object.defineProperty;var oe=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var le=(i,e,t)=>e in i?Le(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,ae=(i,e)=>{for(var t in e||(e={}))Se.call(e,t)&&le(i,t,e[t]);if(oe)for(var t of oe(e))Ce.call(e,t)&&le(i,t,e[t]);return i};import{S as z,i as R,s as O,e as S,c as C,a as L,d as w,b as $,g as A,E as H,M as Te,v as U,N as Ne,L as F,O as Be,P as Ae,F as te,k as M,m as D,G as k,I as ne,J as re,K as ie,q as N,o as W,w as J,x as K,y as q,B as G,Q as we,R as Ee,l as ue,t as V,h as j,H as ce,T as Pe,n as ve,p as be,j as ye}from"../chunks/index-e0ffeeb0.js";import{_ as We}from"../chunks/preload-helper-bf8d5124.js";import{T as Fe}from"../chunks/theme-1653d4cb.js";import"../chunks/index-6c347e89.js";function Ie(){return new Worker("/grammar-well-editor/_app/assets/compiler.717d3fca.js",{type:"module"})}function Me(){return new Worker("/grammar-well-editor/_app/assets/ts.worker.157dedbb.js",{type:"module"})}function De(){return new Worker("/grammar-well-editor/_app/assets/html.worker.dd160567.js",{type:"module"})}function He(){return new Worker("/grammar-well-editor/_app/assets/css.worker.adcfdd83.js",{type:"module"})}function Ve(){return new Worker("/grammar-well-editor/_app/assets/json.worker.522cac9f.js",{type:"module"})}function je(){return new Worker("/grammar-well-editor/_app/assets/editor.worker.32b41c44.js",{type:"module"})}function ze(i){let e;return{c(){e=S("div"),this.h()},l(t){e=C(t,"DIV",{class:!0}),L(e).forEach(w),this.h()},h(){$(e,"class","editor svelte-1ljxy4j")},m(t,r){A(t,e,r),i[13](e)},p:H,i:H,o:H,d(t){t&&w(e),i[13](null)}}}function Re(i,e,t){let{value:r=""}=e,{language:s="json"}=e,{minHeight:o=200}=e,{maxHeight:l=0}=e,{minWidth:u=600}=e,{maxWidth:a=0}=e,{theme:f="vs-dark"}=e,{width:p="fill"}=e,{height:v="fill"}=e,{settings:g={}}=e,x=null;const T=Te();let E,h;Fe.subscribe(n=>t(2,f=n=="light"?"vs-light":"vs-dark")),U(async()=>{t(12,h=await We(()=>import("../chunks/editor.main-7ba20f4d.js").then(function(d){return d.e}),["chunks/editor.main-7ba20f4d.js","assets/editor.main-cdf3c9f2.css","chunks/preload-helper-bf8d5124.js"]));const n={nearley:{tokensProvider:{brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/->|\||\:\+|\:\*/,operators:["|","->",":*",":+"],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/\{\%/,{token:"tag ",next:"@scriptEnd",nextEmbedded:"text/javascript"}],[/\$\{/,{token:"tag ",next:"@interpolateEnd",nextEmbedded:"text/javascript"}],[/@\{\%/,{token:"tag ",next:"@scriptEnd",nextEmbedded:"text/javascript"}],[/@symbols/,{cases:{"@operators":"keyword","@default":"symbols"}}],[/\[/,"regexp","@regex"],[/"/,"string","@string"],[/[\(\)\[\]]/,"@brackets"]],scriptEnd:[[/\%\}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^%]+/,""]],interpolateEnd:[[/\}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^%]+/,""]],whitespace:[[/[ \t\r\n]+/,"white"],[/\#.*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/(")([i]?)/,[{token:"string",next:"@pop"},{token:"keyword.other"}]]],regex:[[/[^\\\]]+/,"regexp"],[/@escapes/,"regexp.escape"],[/\\./,"regexp.escape.invalid"],[/]/,"regexp","@pop"]]}}},mySpecialLanguage:{tokensProvider:{tokenizer:{root:[{include:"@whitespace"},[/[\{\}\(\)\[\]]/,"@brackets"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\/.*$/,"comment"]]}},completionItemProvider:{provideCompletionItems:(d,m,P,I)=>{const _=d.getWordUntilPosition(m),B={startLineNumber:m.lineNumber,endLineNumber:m.lineNumber,startColumn:_.startColumn,endColumn:_.endColumn};return{suggestions:[{label:"simpleText",kind:h.languages.CompletionItemKind.Text,insertText:"simpleText",range:B},{label:"testing",kind:h.languages.CompletionItemKind.Keyword,insertText:"testing(${1:condition})",insertTextRules:h.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:B},{label:"ifelse",kind:h.languages.CompletionItemKind.Snippet,insertText:["if (${1:condition}) {","	$0","} else {","	","}"].join(`
`),insertTextRules:h.languages.CompletionItemInsertTextRule.InsertAsSnippet,documentation:"If-Else Statement",range:B}]}}}}},c={myTHemes:{base:"vs",inherit:!1,rules:[{token:"custom-info",foreground:"808080"},{token:"custom-error",foreground:"ff0000",fontStyle:"bold"},{token:"custom-notice",foreground:"FFA500"},{token:"custom-date",foreground:"008800"}],colors:{"editor.foreground":"#000000"}}};for(const d in n){const{tokensProvider:m,completionItemProvider:P}=n[d];h.languages.register({id:d}),m&&h.languages.setMonarchTokensProvider(d,m),P&&h.languages.registerCompletionItemProvider(d,P)}for(const d in c)h.editor.defineTheme(d,c[d]);window.MonacoEnvironment={getWorker(d,m){return m==="json"?new Ve:m==="css"||m==="scss"||m==="less"?new He:m==="html"||m==="handlebars"||m==="razor"?new De:m==="typescript"||m==="javascript"?new Me:new je}},t(11,E=h.editor.create(x,ae({value:r,language:s,theme:f,scrollBeyondLastLine:!1,automaticLayout:!0},g))),y(),E.getModel().onDidChangeContent(()=>{t(1,r=E.getValue()),y(),T("edit",r)}),T("load",{resize:y})}),Ne(()=>{if(E){E.dispose();const n=E.getModel();n&&n.dispose()}});function y(){t(0,x.style.display="block",x),t(0,x.style.width="100%",x),t(0,x.style.height="100%",x);let n=x.offsetWidth,c=x.offsetHeight;p=="auto"&&(n=E.getContentWidth()),v=="auto"&&(c=E.getContentHeight());const d=Math.max(u,Math.min(a||n,n)),m=Math.max(o,Math.min(l||c,c));E.layout({width:d,height:m}),t(0,x.style.height=`${m}px`,x),t(0,x.style.width=`${d}px`,x)}function b(n){F[n?"unshift":"push"](()=>{x=n,t(0,x)})}return i.$$set=n=>{"value"in n&&t(1,r=n.value),"language"in n&&t(3,s=n.language),"minHeight"in n&&t(4,o=n.minHeight),"maxHeight"in n&&t(5,l=n.maxHeight),"minWidth"in n&&t(6,u=n.minWidth),"maxWidth"in n&&t(7,a=n.maxWidth),"theme"in n&&t(2,f=n.theme),"width"in n&&t(8,p=n.width),"height"in n&&t(9,v=n.height),"settings"in n&&t(10,g=n.settings)},i.$$.update=()=>{i.$$.dirty&6150&&(E&&r!=E.getValue()&&(E.setValue(r),y()),E&&h.editor.setTheme(f))},[x,r,f,s,o,l,u,a,p,v,g,E,h,b]}class ke extends z{constructor(e){super(),R(this,e,Re,ze,O,{value:1,language:3,minHeight:4,maxHeight:5,minWidth:6,maxWidth:7,theme:2,width:8,height:9,settings:10})}}class Oe{constructor(e){this.element=e,this.textBoxes=[],this.lines=[],this.paths=[]}addText(e,t,r,s){const o=new Ue(this.element,e,t,r,s);return this.textBoxes.push(o),o}addLine(e,t,r,s){const o=new Je(this.element,e,t,r,s);return this.lines.push(o),o}addPath(e,t,r,s,o){const l=new Ke(this.element,e,t,r,s,o);return this.paths.push(l),l}}class Ue{constructor(e,t,r=0,s=0,o=0){this.svg=e,this.label=t,this.yOffset=0,this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.rect.setAttribute("rx","2"),this.svg.appendChild(this.rect),this.textElement=document.createElementNS("http://www.w3.org/2000/svg","text"),this.textElement.innerHTML=t.replace(/\s/g,"\xA0"),this.svg.appendChild(this.textElement);const{y:l,width:u,height:a}=this.textElement.getBBox();this.width=u+r*2,this.height=a+r*2,this.yOffset=0-l,this.x=s,this.y=o}get x(){return this.rect.getBBox().x}get y(){return this.rect.getBBox().y}get width(){return this.rect.getBBox().width}get height(){return this.rect.getBBox().height}set x(e){this.rect.setAttribute("x",e.toString());const{width:t}=this.rect.getBBox(),{width:r}=this.textElement.getBBox();this.textElement.setAttribute("x",((t-r)/2+e).toString())}set y(e){this.rect.setAttribute("y",e.toString());const{height:t}=this.rect.getBBox(),{height:r}=this.textElement.getBBox();this.textElement.setAttribute("y",((t-r)/2+e+this.yOffset).toString())}set width(e){this.rect.setAttribute("width",e.toString()),this.x=this.x}set height(e){this.rect.setAttribute("height",e.toString()),this.y=this.y}get text(){return this.textElement.innerHTML.toString()}}class Je{constructor(e,t=0,r=0,s=0,o=0){this.svg=e,this.line=document.createElementNS("http://www.w3.org/2000/svg","line"),this.svg.appendChild(this.line),this.line.setAttribute("x1",t.toString()),this.line.setAttribute("x2",s.toString()),this.line.setAttribute("y1",r.toString()),this.line.setAttribute("y2",o.toString())}}class Ke{constructor(e,t=0,r=0,s=0,o=0,l=0){this.svg=e,this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svg.appendChild(this.path),this.path.setAttribute("fill","none"),this.path.setAttribute("d",`M ${t},${r} v ${l} H ${s} V ${o}`)}}function qe(i){let e;return{c(){e=Be("svg")},l(t){e=Ae(t,"svg",{}),L(e).forEach(w)},m(t,r){A(t,e,r),i[2](e)},p:H,i:H,o:H,d(t){t&&w(e),i[2](null)}}}function Ge(i,e,t){let r=0,s=0,o=6,l=12,u=0,a=0,f=0,p,v,{tree:g}=e;U(()=>{v=new Oe(p),x()});function x(){r=0,s=0,o=6,l=12,u=0,a=0,f=0;try{p&&(t(0,p.innerHTML="",p),g&&T(JSON.parse(JSON.stringify(g))),p.setAttribute("width",`${a}px`),p.setAttribute("height",`${f}px`),p.setAttribute("viewbox",`0 0 ${a} ${f}`))}catch(n){console.error(n)}}function T(n,c={rows:[[]],symMap:{}}){n.row=n.row||0,n.textbox=v.addText(n.name,o,r,s),u=u||n.textbox.height*2,n.data.length||n.data.push({value:""});for(const _ of n.data)if("data"in _)T(_,c),n.row=n.row<_.row?_.row:n.row;else if("value"in _){const B=c.rows[0][c.rows[0].length-1]||{x:0,width:0};_.textbox=v.addText(_.value,o,r,s),_.textbox.x=B.x+B.width+l,a=Math.max(a,_.textbox.x+_.textbox.width+l),_.row=0,c.rows[0].push(_.textbox)}n.row++,c.rows[n.row]=c.rows[n.row]||[],n.textbox.y=n.row*u,f=Math.max(f,n.textbox.y+n.textbox.height+l);const d=n.data[0].textbox,m=n.data[n.data.length-1].textbox;n.textbox.x=d.x+(m.x+m.width-d.x)/2-n.textbox.width/2;const P=c.rows[n.row],I=P[P.length-1];if(I){const _=I.x+I.width+l-n.textbox.x;_>0&&h(n,_,0)}return E(n.textbox,d,m),c.rows[n.row].push(n.textbox),n.row=n.row,c}function E(n,c,d){v.addPath(n.x+n.width/2,n.y,c.x+c.width/2,c.y+c.height,u/-4),c!=d&&v.addPath(n.x+n.width/2,n.y,d.x+d.width/2,d.y+d.height,u/-4)}function h(n,c,d){y(n.textbox,c,d);for(const m of n.data)"data"in m?h(m,c,d):"value"in m&&y(m.textbox,c,d)}function y(n,c,d){c&&(n.x=n.x+c),d&&(n.y=n.y+d),a=Math.max(a,n.x+n.width+l),f=Math.max(f,n.y+n.height+l)}function b(n){F[n?"unshift":"push"](()=>{p=n,t(0,p)})}return i.$$set=n=>{"tree"in n&&t(1,g=n.tree)},i.$$.update=()=>{i.$$.dirty&2&&g&&x()},[p,g,b]}class Xe extends z{constructor(e){super(),R(this,e,Ge,qe,O,{tree:1})}}var Ye=`## Hack to trigger Grammar Well postprocess signature 
@{%  function Tree(data) { return data; }%}
## {% %} Syntax uses Nearley's postprocess signature
## \${ }  Syntax uses Grammar Well's

Chunk -> _ Block _ \${ Tree }
 
Block -> _Block \${ Tree }
	| _Block __ ReturnStat \${ Tree }
 
ReturnStat -> "return" __ ExpList \${ Tree }
	| "return" __ ExpList _ ";" \${ Tree }
 
_Block -> Statement \${ Tree }
	| _Block _ ";" _ Statement \${ Tree }
	| _Block __ Statement \${ Tree }
 
Statement ->
	VarList _ "=" _ ExpList \${ Tree }
	| FunctionCall \${ Tree }
	| Label \${ Tree }
	| "break" \${ Tree }
	| "goto" __ Name \${ Tree }
	| "do" __ Block __ "end" \${ Tree }
	| "while" __ Exp __ "do" __ Block __ "end" \${ Tree }
	| "repeat" __ Block __ "until" __ Exp \${ Tree }
	| "if" __ Exp __ "then" __ Block __ Else \${ Tree }
	| "for" __ NameList __ "in" __ ExpList __ "do" __ Block __ "end" \${ Tree }
	| "function" __ FunctionName _ FunctionBody \${ Tree }
	| "local" __ "function" __ Name __ FunctionBody \${ Tree }
	| "local" __ NameList \${ Tree }
	| "local" __ NameList _ "=" _ ExpList \${ Tree }
 
Else -> "end" \${ Tree }
	| _Else __ "end" \${ Tree }
	| _Else __ "else" __ Block __ "end" \${ Tree }
 
_Else ->       "elseif" __ Exp __ "then" __ Block \${ Tree }
	| _Else __ "elseif" __ Exp __ "then" __ Block \${ Tree }
 
Label -> "::" _ Name _ "::" \${ Tree }
 
# Names 
# See Section 2.1 
Name -> _name \${ Tree }
 
_name -> [a-zA-Z_] \${ Tree }
	| _name [\\w_] \${ Tree }
 
NameList -> Name \${ Tree }
	| NameList _ "," _ Name \${ Tree }
 
Var -> Name \${ Tree }
	| PrefixExp _ "[" _ Exp _ "]" \${ Tree }
	| PrefixExp _ "." _ Name \${ Tree }
 
VarList -> Var \${ Tree }
	| VarList _ "," _ Var \${ Tree }
 
ExpList -> Exp \${ Tree }
	| ExpList _ "," _ Exp \${ Tree }
 
PrefixExp -> Var \${ Tree }
	| FunctionCall \${ Tree }
	| Parenthesized \${ Tree }
 
FunctionCall ->
	PrefixExp _ Args \${ Tree }
	| PrefixExp _ ":" _ Name _ Args \${ Tree }
 
Args ->
	"(" _ ")" \${ Tree }
	| "(" _ ExpList _ ")" \${ Tree }
	| String \${ Tree }
 
FunctionName -> _functionname \${ Tree }
	| _functionname ":" Name \${ Tree }
 
_functionname -> Name \${ Tree }
	| FunctionName _ "." _ FunctionName \${ Tree }
 
FunctionDef -> "function" __ FunctionBody \${ Tree }
 
FunctionBody -> "(" _ ParamList _ ")" __ Block __ "end" \${ Tree }
	| "(" _ ")" __ Block __ "end" \${ Tree }
 
ParamList -> NameList \${ Tree }
	| NameList _ "," _ "..." \${ Tree }
	| "..." \${ Tree }
 
# Tables
 
TableConstructor -> "{" _ FieldList _ "}" \${ Tree }
	| "{" _ "}" \${ Tree }
 
FieldList -> _FieldList \${ Tree }
	| _FieldList _ FieldSep \${ Tree }
 
_FieldList -> Field \${ Tree }
	| _FieldList _ FieldSep _ Field \${ Tree }
 
Field -> "[" _ Exp _ "]" _ "=" _ Exp \${ Tree }
	| Name _ "=" _ Exp \${ Tree }
	| Exp \${ Tree }
 
FieldSep -> "," \${ Tree }
	| ";" \${ Tree }
 
# Expressions
Exp -> Binop \${ Tree }
 
Binop -> ExpOr \${ Tree }
 
Parenthesized -> "(" Exp ")" \${ Tree }
 
 
ExpOr -> ExpOr __ "or" __ ExpAnd \${ Tree }
	| ExpAnd \${ Tree }
 
ExpAnd -> ExpAnd __ "and" __ ExpComparison \${ Tree }
	| ExpComparison \${ Tree }
 
ExpComparison ->
	  ExpComparison _ "<"  _ ExpConcatenation \${ Tree }
	| ExpComparison _ ">"  _ ExpConcatenation \${ Tree }
	| ExpComparison _ "<=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ ">=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ "~=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ "==" _ ExpConcatenation \${ Tree }
	| ExpConcatenation \${ Tree }
 
ExpConcatenation ->
	  ExpSum _ ".." _ ExpConcatenation \${ Tree }
	| ExpSum \${ Tree }
 
ExpSum ->
	  ExpSum _ "+" _ ExpProduct \${ Tree }
	| ExpSum _ "-" _ ExpProduct \${ Tree }
	| ExpProduct \${ Tree }
 
ExpProduct ->
	  ExpProduct _ "*" _ ExpUnary \${ Tree }
	| ExpProduct _ "/" _ ExpUnary \${ Tree }
	| ExpProduct _ "%" _ ExpUnary \${ Tree }
	| ExpUnary \${ Tree }
 
ExpUnary ->
	  "not" __ ExpPow \${ Tree }
	| "#" _ ExpPow \${ Tree }
	| "-" _ ExpPow \${ Tree }
	| ExpPow \${ Tree }
 
ExpPow ->
	  Atom \${ Tree }
	| Atom _ "^" _ ExpPow \${ Tree }
 
Atom -> Number \${ Tree }
	| String \${ Tree }
	| PrefixExp \${ Tree }
	| "nil" \${ Tree }
	| "false" \${ Tree }
	| "true" \${ Tree }
	| Parenthesized \${ Tree }
	| FunctionDef \${ Tree }
	| TableConstructor \${ Tree }
 
 
 
 
 
# Primitives
# ==========
 
# Numbers
 
Number -> _number \${ Tree }
 
_posint ->
	[0-9] \${ Tree }
	| _posint [0-9] \${ Tree }
 
_int ->
	"-" _posint \${ Tree }
	| _posint \${ Tree }
 
_float ->
	_int \${ Tree }
	| _int "." _posint \${ Tree }
 
_number ->
	_float \${ Tree }
	| _float "e" _int \${ Tree }
 
 
#Strings
String -> "\\"" _string "\\"" \${ Tree }
 
_string ->
	null \${ Tree }
	| _string _stringchar \${ Tree }
 
_stringchar ->
	[^\\\\"] \${ Tree }
	| "\\\\" [^] \${ Tree }
 
# Whitespace
_ -> null \${ Tree }
	| _ [\\s] \${ Tree }
__ -> [\\s] \${ Tree }
	| __ [\\s] \${ Tree }`;const Qe=i=>({}),_e=i=>({}),Ze=i=>({}),fe=i=>({}),et=i=>({}),de=i=>({});function tt(i){let e,t,r,s,o,l,u,a,f,p,v,g;const x=i[7].left,T=te(x,i,i[6],de),E=i[7].right,h=te(E,i,i[6],fe),y=i[7].bottom,b=te(y,i,i[6],_e);return{c(){e=S("div"),t=S("div"),r=S("div"),T&&T.c(),s=M(),o=S("div"),l=M(),u=S("div"),h&&h.c(),a=M(),f=S("div"),p=M(),v=S("div"),b&&b.c(),this.h()},l(n){e=C(n,"DIV",{class:!0});var c=L(e);t=C(c,"DIV",{class:!0});var d=L(t);r=C(d,"DIV",{class:!0});var m=L(r);T&&T.l(m),m.forEach(w),s=D(d),o=C(d,"DIV",{class:!0,"data-axis":!0}),L(o).forEach(w),l=D(d),u=C(d,"DIV",{class:!0});var P=L(u);h&&h.l(P),P.forEach(w),d.forEach(w),a=D(c),f=C(c,"DIV",{class:!0,"data-axis":!0}),L(f).forEach(w),p=D(c),v=C(c,"DIV",{class:!0});var I=L(v);b&&b.l(I),I.forEach(w),c.forEach(w),this.h()},h(){$(r,"class","item svelte-2bwo3g"),$(o,"class","vr-div"),$(o,"data-axis","X"),$(u,"class","item svelte-2bwo3g"),$(t,"class","row svelte-2bwo3g"),$(f,"class","hr-div"),$(f,"data-axis","Y"),$(v,"class","item svelte-2bwo3g"),$(e,"class","stack svelte-2bwo3g")},m(n,c){A(n,e,c),k(e,t),k(t,r),T&&T.m(r,null),i[8](r),k(t,s),k(t,o),i[9](o),k(t,l),k(t,u),h&&h.m(u,null),i[10](u),i[11](t),k(e,a),k(e,f),i[12](f),k(e,p),k(e,v),b&&b.m(v,null),i[13](v),g=!0},p(n,[c]){T&&T.p&&(!g||c&64)&&ne(T,x,n,n[6],g?ie(x,n[6],c,et):re(n[6]),de),h&&h.p&&(!g||c&64)&&ne(h,E,n,n[6],g?ie(E,n[6],c,Ze):re(n[6]),fe),b&&b.p&&(!g||c&64)&&ne(b,y,n,n[6],g?ie(y,n[6],c,Qe):re(n[6]),_e)},i(n){g||(N(T,n),N(h,n),N(b,n),g=!0)},o(n){W(T,n),W(h,n),W(b,n),g=!1},d(n){n&&w(e),T&&T.d(n),i[8](null),i[9](null),h&&h.d(n),i[10](null),i[11](null),i[12](null),b&&b.d(n),i[13](null)}}}function nt(i,e,t,r){if(r<0){const s=Math.round(parseInt(getComputedStyle(i)[t])+r);i.style.flex=`0 ${s<10?0:s}px`,e.style.flex="1 0"}if(r>0){const s=Math.round(parseInt(getComputedStyle(e)[t])-r);e.style.flex=`0 ${s<10?0:s}px`,i.style.flex="1 0"}}function rt(i,e,t){let{$$slots:r={},$$scope:s}=e,o,l,u,a,f,p,v={x:0,y:0},g;const x=Te();U(()=>{f.addEventListener("mousedown",y),f.addEventListener("touchstart",E),p.addEventListener("mousedown",y),p.addEventListener("touchstart",E)});function T(_){_.preventDefault();const B=g.getAttribute("data-axis"),X=`client${B}`,Y=_.type=="mousemove"?_[X]:_.touches[0][X];let Q,Z,ee;B=="X"?(Q=l,Z=u,ee="width"):(Q=o,Z=a,ee="height");const $e=Y-(v[B]||Y);v[B]=Y,nt(Q,Z,ee,$e),x("resize",B)}function E(_){g=_.target,_.preventDefault(),g.addEventListener("touchmove",T),g.addEventListener("touchend",h)}function h(_){_.preventDefault(),g.removeEventListener("touchmove",T),g.removeEventListener("touchend",h)}function y(_){_.preventDefault(),g=_.target,document.addEventListener("mousemove",T),document.addEventListener("mouseup",b)}function b(_){_.preventDefault(),document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",b)}function n(_){F[_?"unshift":"push"](()=>{l=_,t(1,l)})}function c(_){F[_?"unshift":"push"](()=>{f=_,t(4,f)})}function d(_){F[_?"unshift":"push"](()=>{u=_,t(2,u)})}function m(_){F[_?"unshift":"push"](()=>{o=_,t(0,o)})}function P(_){F[_?"unshift":"push"](()=>{p=_,t(5,p)})}function I(_){F[_?"unshift":"push"](()=>{a=_,t(3,a)})}return i.$$set=_=>{"$$scope"in _&&t(6,s=_.$$scope)},[o,l,u,a,f,p,s,r,n,c,d,m,P,I]}class it extends z{constructor(e){super(),R(this,e,rt,tt,O,{})}}function st(i){let e,t,r;function s(l){i[13](l)}let o={slot:"left",language:"nearley",width:"fill",height:"fill"};return i[0]!==void 0&&(o.value=i[0]),e=new ke({props:o}),F.push(()=>we(e,"value",s)),e.$on("edit",i[6]),e.$on("load",i[7]),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,u){q(e,l,u),r=!0},p(l,u){const a={};!t&&u&1&&(t=!0,a.value=l[0],Ee(()=>t=!1)),e.$set(a)},i(l){r||(N(e.$$.fragment,l),r=!0)},o(l){W(e.$$.fragment,l),r=!1},d(l){G(e,l)}}}function ot(i){let e,t,r;function s(l){i[12](l)}let o={slot:"right",language:"nearley",width:"fill",height:"fill"};return i[2]!==void 0&&(o.value=i[2]),e=new ke({props:o}),F.push(()=>we(e,"value",s)),e.$on("edit",i[6]),e.$on("load",i[8]),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,u){q(e,l,u),r=!0},p(l,u){const a={};!t&&u&4&&(t=!0,a.value=l[2],Ee(()=>t=!1)),e.$set(a)},i(l){r||(N(e.$$.fragment,l),r=!0)},o(l){W(e.$$.fragment,l),r=!1},d(l){G(e,l)}}}function he(i){let e,t,r,s,o=i[5]&&me(i),l=i[5]&&i[4]&&pe(i),u=(!i[5]||!i[4])&&ge(i);return{c(){o&&o.c(),e=M(),l&&l.c(),t=M(),u&&u.c(),r=ue()},l(a){o&&o.l(a),e=D(a),l&&l.l(a),t=D(a),u&&u.l(a),r=ue()},m(a,f){o&&o.m(a,f),A(a,e,f),l&&l.m(a,f),A(a,t,f),u&&u.m(a,f),A(a,r,f),s=!0},p(a,f){a[5]?o?o.p(a,f):(o=me(a),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),a[5]&&a[4]?l?(l.p(a,f),f&48&&N(l,1)):(l=pe(a),l.c(),N(l,1),l.m(t.parentNode,t)):l&&(ve(),W(l,1,1,()=>{l=null}),be()),!a[5]||!a[4]?u?u.p(a,f):(u=ge(a),u.c(),u.m(r.parentNode,r)):u&&(u.d(1),u=null)},i(a){s||(N(l),s=!0)},o(a){W(l),s=!1},d(a){o&&o.d(a),a&&w(e),l&&l.d(a),a&&w(t),u&&u.d(a),a&&w(r)}}}function me(i){let e,t,r,s,o,l,u;return{c(){e=S("button"),t=V("data_object"),r=M(),s=S("button"),o=V("account_tree"),this.h()},l(a){e=C(a,"BUTTON",{class:!0});var f=L(e);t=j(f,"data_object"),f.forEach(w),r=D(a),s=C(a,"BUTTON",{class:!0});var p=L(s);o=j(p,"account_tree"),p.forEach(w),this.h()},h(){$(e,"class","material-icons text secondary"),$(s,"class","material-icons text secondary")},m(a,f){A(a,e,f),k(e,t),A(a,r,f),A(a,s,f),k(s,o),l||(u=[ce(e,"click",i[10]),ce(s,"click",i[11])],l=!0)},p:H,d(a){a&&w(e),a&&w(r),a&&w(s),l=!1,Pe(u)}}}function pe(i){let e,t;return e=new Xe({props:{tree:i[5]}}),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p(r,s){const o={};s&32&&(o.tree=r[5]),e.$set(o)},i(r){t||(N(e.$$.fragment,r),t=!0)},o(r){W(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function ge(i){let e,t=JSON.stringify(i[3],null,2)+"",r;return{c(){e=S("pre"),r=V(t)},l(s){e=C(s,"PRE",{});var o=L(e);r=j(o,t),o.forEach(w)},m(s,o){A(s,e,o),k(e,r)},p(s,o){o&8&&t!==(t=JSON.stringify(s[3],null,2)+"")&&ye(r,t)},d(s){s&&w(e)}}}function xe(i){let e,t;return{c(){e=S("pre"),t=V(i[1]),this.h()},l(r){e=C(r,"PRE",{class:!0});var s=L(e);t=j(s,i[1]),s.forEach(w),this.h()},h(){$(e,"class","errors svelte-1lcyzuf")},m(r,s){A(r,e,s),k(e,t)},p(r,s){s&2&&ye(t,r[1])},d(r){r&&w(e)}}}function lt(i){let e,t,r,s=!i[1]&&he(i),o=i[1]&&xe(i);return{c(){e=S("div"),s&&s.c(),t=M(),o&&o.c(),this.h()},l(l){e=C(l,"DIV",{slot:!0,class:!0});var u=L(e);s&&s.l(u),t=D(u),o&&o.l(u),u.forEach(w),this.h()},h(){$(e,"slot","bottom"),$(e,"class","viewport svelte-1lcyzuf")},m(l,u){A(l,e,u),s&&s.m(e,null),k(e,t),o&&o.m(e,null),r=!0},p(l,u){l[1]?s&&(ve(),W(s,1,1,()=>{s=null}),be()):s?(s.p(l,u),u&2&&N(s,1)):(s=he(l),s.c(),N(s,1),s.m(e,t)),l[1]?o?o.p(l,u):(o=xe(l),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i(l){r||(N(s),r=!0)},o(l){W(s),r=!1},d(l){l&&w(e),s&&s.d(),o&&o.d()}}}function at(i){let e,t;return e=new it({props:{$$slots:{bottom:[lt],right:[ot],left:[st]},$$scope:{ctx:i}}}),e.$on("resize",i[9]),{c(){J(e.$$.fragment)},l(r){K(e.$$.fragment,r)},m(r,s){q(e,r,s),t=!0},p(r,[s]){const o={};s&131135&&(o.$$scope={dirty:s,ctx:r}),e.$set(o)},i(r){t||(N(e.$$.fragment,r),t=!0)},o(r){W(e.$$.fragment,r),t=!1},d(r){G(e,r)}}}function se({name:i,data:e}){const t={name:i,data:[]};if(typeof i!="string"||!Array.isArray(e))throw"Is Not Tree";for(let r=0;r<e.length;r++){const s=e[r];typeof s=="string"?t.data.push({value:s}):Array.isArray(s)?t.data.push(...se({data:s,name:""}).data.map((o,l)=>(o.name=`${o.name} #${l}`,o))):t.data.push(se(s))}return t}function ut(i,e,t){let r=Ye,s="",o=`require("INC_Class.lua")

cAnimal=setclass("Animal")

function cAnimal.methods:init(action, cutename) 
	self.superaction = action
	self.supercutename = cutename
end`,l,u,a,f,p=!1,v;function g(){f.postMessage({grammar:r,input:o})}U(()=>{f=f||new Ie,f.addEventListener("message",c=>{const{data:d}=c;t(1,s=d.error||""),t(3,l=d.result),console.log(s);try{t(5,v=se(d.result))}catch{t(5,v=null)}}),g()});function x(c){u=c.detail.resize}function T(c){console.log(c),a=c.detail.resize}function E(){a(),u()}const h=()=>t(4,p=!1),y=()=>t(4,p=!0);function b(c){o=c,t(2,o)}function n(c){r=c,t(0,r)}return[r,s,o,l,p,v,g,x,T,E,h,y,b,n]}class mt extends z{constructor(e){super(),R(this,e,ut,at,O,{})}}export{mt as default};
