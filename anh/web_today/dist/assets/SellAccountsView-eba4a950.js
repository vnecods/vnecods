import{_ as p,u as y,b as g,o as e,c as n,F as d,r as c,a as o,t as r,e as u,f as m,d as h,w as b,v as x}from"./index-e6bdebb9.js";const I={setup(){return{counter:y()}},mounted:function(){this.counter.F_Data_List_Product()}},v={class:"grow flex flex-col py-4 lg:px-6 lg:py-10"},k={class:"flex flex-col items-center justify-start"},w={key:0,class:"flex text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200"},B=o("h1",null,".",-1),C={key:1,class:"flex text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200"},P=o("h1",null,".",-1),T={class:"flex w-full h-full relative justify-center"},O={class:"flex flex-col absolute top-0 left-0 right-0 bottom-5 mx-auto justify-end"},$={class:"flex gap-2 justify-center"},D=["src"],H=["rows"],S=["rows"],V={class:"flex gap-3 mt-5 text-neutral-900 dark:text-neutral-300"},j={href:"http://webtoday.store",target:"_blank"},E={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},F={key:0},L={key:1},N={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"};function z(a,i,A,s,q,G){const _=g("font-awesome-icon");return e(),n("div",v,[(e(!0),n(d,null,c(s.counter.Data_List_Product[0].Category_Industry,(t,f)=>(e(),n("div",k,[a.$i18n.locale=="vi"?(e(),n("div",w,[o("h1",null,r(f+1),1),B,o("h1",null,r(t.Title),1)])):u("",!0),a.$i18n.locale=="en"?(e(),n("div",C,[o("h1",null,r(f+1),1),P,o("h1",null,r(t.Title_English),1)])):u("",!0),o("div",T,[o("div",O,[o("div",$,[(e(!0),n(d,null,c(t.Product_Industry,l=>(e(),n("div",{class:m(["bg-gray-100 w-[15px] h-[5px] rounded",{"opacity-100":l==t.Product_Industry[t.Oder_Image],"opacity-50":l!=t.Product_Industry[t.Oder_Image]}])},null,2))),256))])]),h(_,{icon:"fa-solid fa-chevron-left",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 left-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:l=>{t.Oder_Image>0&&t.Oder_Image--}},null,8,["onClick"]),h(_,{icon:"fa-solid fa-chevron-right",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 right-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:l=>{t.Oder_Image<t.Product_Industry.length-1&&t.Oder_Image++}},null,8,["onClick"]),(e(!0),n(d,null,c(t.Product_Industry,l=>b((e(),n("img",{src:s.counter.domain_Backend+l.Image,class:"rounded"},null,8,D)),[[x,l==t.Product_Industry[t.Oder_Image]]])),256))]),s.counter.Table_Informations==!0&&a.$i18n.locale=="vi"?(e(),n("textarea",{key:2,rows:t.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},r(t.Information),9,H)):u("",!0),s.counter.Table_Informations==!0&&a.$i18n.locale=="en"?(e(),n("textarea",{key:3,rows:t.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},r(t.Information_English),9,S)):u("",!0),o("div",V,[o("a",j,[o("button",E,r(a.$t("Body.Home.Button_Image.Demo")),1)]),o("button",{onClick:i[0]||(i[0]=l=>s.counter.Table_Informations=!s.counter.Table_Informations),class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},[s.counter.Table_Informations==!1?(e(),n("h1",F,r(a.$t("Body.Home.Button_Image.Information")),1)):u("",!0),s.counter.Table_Informations==!0?(e(),n("h1",L,r(a.$t("Body.Home.Button_Image.Hide_Information")),1)):u("",!0)]),o("button",N,r(a.$t("Body.Home.Button_Image.Contact")),1)])]))),256))])}const K=p(I,[["render",z]]);export{K as default};