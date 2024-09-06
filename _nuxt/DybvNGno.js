import{_ as y,h as w,i as P,o as a,c as o,a as e,t as d,u as p,j,r as b,k as C,l as $,g as T,m as z,p as I,e as S,d as k,b as f,F as _,q as v,w as N}from"./Nanb9n06.js";import{_ as A}from"./Dxq4G_gy.js";import{u as L}from"./BVngLRV5.js";import"./BB9Tfqcv.js";const q={class:"p-2 mt-2 w-56 sm:w-72"},D={class:"flex justify-end not-prose dark:text-zinc-800"},B={class:"flex justify-end w-full bg-gray-200 rounded-full dark:bg-gray-700"},E={class:"flex space-x-10 bg-violet-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full percentage"},M={__name:"progress-bar-reversed",props:{percentage:{type:Number,required:!0,default:0},name:{type:String,required:!0,default:""}},setup(n){w(c=>({"5e573c3a":p(l)}));const i=n,l=P(()=>`${i.percentage}%`);return(c,r)=>(a(),o("div",q,[e("span",D,d(n.name),1),e("div",B,[e("div",E,[e("span",null,d(n.percentage)+"%",1)])])]))}},R=y(M,[["__scopeId","data-v-ee3e796e"]]),F={class:"relative z-10 flex flex-col items-center"},H={class:"tooltip"},U=j({__name:"tooltip",props:{text:{type:String,required:!1}},setup(n){return b(!1),(i,l)=>(a(),o("div",F,[e("div",H,d(n.text),1),e("div",null,[C(i.$slots,"default",{},void 0,!0)])]))}}),V=y(U,[["__scopeId","data-v-bb773ea4"]]),O={class:"p-2 mt-2 w-56 sm:w-72"},G={class:"flex justify-start not-prose dark:text-zinc-800"},J={class:"flex w-full bg-gray-200 rounded-full dark:bg-gray-700"},W={class:"flex space-x-10 bg-violet-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full percentage"},Y={__name:"progress-bar",props:{percentage:{type:Number,required:!0,default:0},name:{type:String,required:!0,default:""}},setup(n){w(c=>({"6be11936":p(l)}));const i=n,l=P(()=>`${i.percentage}%`);return(c,r)=>{const t=V;return a(),o("div",O,[e("span",G,d(n.name),1),e("div",J,[e("div",W,[e("span",null,d(n.percentage)+"%",1),["Deep Learning","Full stack"].includes(n.name)?(a(),$(t,{key:0,text:"Learning Focus"})):T("",!0)])])])}}},K=y(Y,[["__scopeId","data-v-cfb5abe5"]]),Q=n=>z(n,{open:{target:"_blank"}}),X={"data-tooltip-target":"tooltip-animation",class:"flex flex-col place-content-around"},Z={class:"flex self-center"},ee={class:"flex self-center text-xs"},te=["src"],ne={__name:"project-box",props:{name:{type:String,required:!0,default:""},linkPath:{type:String,required:!0,default:""},linkImage:{type:String,required:!0,default:""},about:{type:String,required:!0,default:""}},setup(n){const i=n,l=()=>{const c=i.linkPath;Q(c)};return(c,r)=>(a(),o("div",{class:"flex justify-center p-4 m-2 cursor-pointer bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-56 h-96 hover:shadow-black/70",onClick:l},[e("div",X,[e("span",Z,d(n.name),1),e("span",ee,d(n.about),1),e("img",{src:n.linkImage,class:"flex self-center w-10/12"},null,8,te),r[0]||(r[0]=e("div",{id:"tooltip-animation",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[I(" Tooltip content "),e("div",{class:"tooltip-arrow","data-popper-arrow":""})],-1))])]))}},se=""+new URL("profile.CRGamCHu.png",import.meta.url).href,ae=""+new URL("me.qWkfh4u0.jpg",import.meta.url).href;function oe(n,i){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"})])}const re={class:"flex flex-col"},ie={class:"bg-violet-100 dark:bg-violet-400 max-h-fit"},le={class:"flex justify-center mb-4"},ce={type:"button",onclick:"smoothScroll(document.getElementById('second'))"},de={class:"flex flex-col second h-fit bg-violet-200 dark:bg-violet-300 p-2 lg:flex-row max-w-fit",id:"second"},pe={class:"flex flex-col space-y-4 items-center basis-2/5 px-12 py-12"},ue={class:"flex items-center"},me={class:"flex flex-col bg-violet-100 dark:bg-violet-400 p-8 max-h-fit"},fe={class:"flex flex-wrap justify-center not-prose dark:text-zinc-800"},ge={class:"flex justify-center p-4"},xe={class:"center-txt bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 rounded-lg mt-6 hover:shadow-black/70 not-prose dark:text-zinc-800"},ye={__name:"index",setup(n){const i=b([{percentage:80,name:"Python"},{percentage:75,name:"Machine Learning"},{percentage:85,name:"Data Analysis"},{percentage:55,name:"Deep Learning"},{percentage:40,name:"Full stack"}]),l=b([{percentage:95,name:"Homology Modeling"},{percentage:85,name:"Molecular Dynamics"},{percentage:75,name:"Molecular Docking"},{percentage:85,name:"Cheminformatics"},{percentage:90,name:"Organic Chemistry"}]),c=b([{name:"PeptoCodes",linkPath:"https://github.com/brendaferrari/PepToCodes",linkImage:"images/peptocodes.png",about:"To transform amino acid smiles to one letter code or three letter code"},{name:"Head and Tail Assign",linkPath:"https://github.com/brendaferrari/HeadTailAssign",linkImage:"images/hta_logo.png",about:"Assigns the head and tail atom position in a monomeric unit or in a polymerization reaction, both represented in SMILES string format"},{name:"AutoPaDELPy",linkPath:"https://github.com/brendaferrari/AutoPaDELPy",linkImage:"images/autopadelpy_logo.png",about:"AutoPaDELPy provides an automated user interface for PaDELPy software."},{name:"PORCUPINEplot",linkPath:"https://github.com/brendaferrari/PORCUPINEplot",linkImage:"images/porcupine.png",about:"PORCUPINEplot is a script developed to automate the generation of porcupine plots of PCA analysis."}]);return S(()=>{window.smoothScroll=function(r){var t=r;do{if(t=t.parentNode,!t)return;t.scrollTop+=1}while(t.scrollTop==0);var g=0;do{if(r==t)break;g+=r.offsetTop}while(r=r.offsetParent);scroll=function(x,u,h,s){s++,!(s>30)&&(x.scrollTop=u+(h-u)/30*s,setTimeout(function(){scroll(x,u,h,s)},20))},scroll(t,t.scrollTop,g,0)}}),L({title:"Main page",ogTitle:"Main page",description:"The main page of my website",ogDescription:"The main page of my website"}),(r,t)=>{const g=R,x=K,u=ne,h=A;return a(),o("div",null,[e("div",re,[e("div",ie,[t[0]||(t[0]=k('<div class="p-6"><img class="mx-auto rounded-full w-96 h-96" src="'+se+'"></div><div class="flex justify-center text-4xl dancing-script-font sm:text-5xl dark:text-zinc-800"><p>Hello! I am Brenda Ferrari</p></div><div class="flex justify-center p-2 text-lg sm:text-xl dark:text-zinc-800"><p> DSc in Chemistry | Cheminformatician | Artificial Intelligence | Computational Chemistry </p></div><div class="flex justify-center p-8 gap-1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"><a href="https://github.com/brendaferrari" target="_blank"><button class="bg-black hover:bg-slate-800 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-github mr-1"></i> GitHub </button></a><a href="https://www.linkedin.com/in/brenda-f-b04bb2b4/" target="_blank"><button class="bg-blue-800 hover:bg-blue-700 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-linkedin mr-1"></i> LinkedIn </button></a><a href="https://orcid.org/0000-0001-5609-0947" target="_blank"><button class="bg-lime-600 hover:bg-lime-500 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"><i class="fab fa-orcid mr-1"></i> ORCID </button></a></div>',4)),e("div",le,[e("button",ce,[f(p(oe),{class:"hover:bg-gray-300 rounded dark:hover:bg-gray-800 animate-bounce h-10 w-10 mt-2 md:flex"})])])]),e("div",de,[t[5]||(t[5]=k('<div class="flex flex-col space-y-4 items-center basis-2/5 px-12 py-12"><div class="flex justify-start dancing-script-font text-3xl md:text-5xl sm:text-4xl dark:text-zinc-800"><h3>About me</h3></div><div><img class="rounded w-auto h-44" src="'+ae+'"></div><div class="box-content bg-violet-400 rounded-full h-2 w-16"></div><span class="text-justify not-prose dark:text-zinc-800"> My name is Brenda Ferrari and I just started working as a Postdoctoral Reseacher at the Computational Nanoscience group at Nanoscience Center on the University of Jyväskylä (Jyväskylä, Finland). </span><span class="text-justify not-prose dark:text-zinc-800"> I am working on a project where ligand-stabilized metal nanoclusters are studied as sensors for chiral biomolecules in aqueous solvents. I am also I am adventuring myself on the world of frontend/backend by creating this website with the possibility to run the scripts and software I am developing. I usually write codes related to my research and blog posts to share concepts I have learned! </span></div>',1)),e("div",pe,[t[3]||(t[3]=e("h3",{class:"text-3xl md:text-5xl dancing-script-font not-prose dark:text-zinc-800"}," Skills ",-1)),e("div",ue,[e("div",null,[t[1]||(t[1]=e("h4",{class:"flex justify-end p-4 font-bold not-prose dark:text-zinc-800"}," Chemistry ",-1)),(a(!0),o(_,null,v(p(l),(s,m)=>(a(),o("div",{key:m},[f(g,{percentage:s.percentage,name:s.name},null,8,["percentage","name"])]))),128))]),e("div",null,[t[2]||(t[2]=e("h4",{class:"flex justify-start p-4 font-bold not-prose dark:text-zinc-800"}," Computation ",-1)),(a(!0),o(_,null,v(p(i),(s,m)=>(a(),o("div",{key:m},[f(x,{percentage:s.percentage,name:s.name},null,8,["percentage","name"])]))),128))])]),t[4]||(t[4]=e("div",{class:"flex mt-4"},[e("img",{src:"https://media.tenor.com/akBy6qWGjs4AAAAi/peach-cat-mochi-peach-cat.gif",alt:"",width:"100",height:"100"}),e("div",{class:"thought"},"Always learning...")],-1))])]),e("div",me,[t[7]||(t[7]=e("h3",{class:"flex justify-center dancing-script-font text-5xl px-12 py-12 not-prose dark:text-zinc-800"}," Projects ",-1)),e("div",fe,[(a(!0),o(_,null,v(p(c),(s,m)=>(a(),o("div",{key:m},[f(u,{name:s.name,linkPath:s.linkPath,linkImage:s.linkImage,about:s.about},null,8,["name","linkPath","linkImage","about"])]))),128))]),e("div",ge,[e("div",xe,[f(h,{to:"/projects"},{default:N(()=>t[6]||(t[6]=[I("click here to check other Projects...")])),_:1})])])])])])}}};export{ye as default};
