import{o,c as r,F as p,r as m,n as c,a as t,_ as $,u as z,b as k,d as b,e as u,w as y,v as f,t as s,f as I}from"./index-e6bdebb9.js";var S=(i,d)=>{const h=i.__vccOpts||i;for(const[n,_]of d)h[n]=_;return h};const D={name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:`${(this.dotSize+this.horizontalMargin*2)*this.dotsNum}px`}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:`${this.dotSize/5}px`,borderColor:this.color}},dotsStyles(){const i=[],h=this.animationDuration;for(let n=1;n<=this.dotsNum;n++)i.push({animationDelay:`${h*n*.3}ms`,...this.dotStyle});return i}}};function C(i,d,h,n,_,l){return o(),r("div",{class:"hollow-dots-spinner",style:c(l.spinnerStyle)},[(o(!0),r(p,null,m(l.dotsStyles,(w,g)=>(o(),r("div",{key:g,class:"dot",style:c(w)},null,4))),128))],4)}var T=S(D,[["render",C]]);const B={name:"TrinityRingsSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:60},color:{type:String,default:"#fff"}},data(){return{containerPadding:3}},computed:{outerRingSize(){return this.size-this.containerPadding*2},spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,padding:`${this.containerPadding}px`}},ring1Style(){return{height:`${this.outerRingSize}px`,width:`${this.outerRingSize}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},ring2Style(){return{height:`${this.outerRingSize*.65}px`,width:`${this.outerRingSize*.65}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},ring3Style(){return{height:`${this.outerRingSize*.1}px`,width:`${this.outerRingSize*.1}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}}}};function P(i,d,h,n,_,l){return o(),r("div",{class:"trinity-rings-spinner",style:c(l.spinnerStyle)},[t("div",{class:"circle circle1",style:c(l.ring1Style)},null,4),t("div",{class:"circle circle2",style:c(l.ring2Style)},null,4),t("div",{class:"circle circle3",style:c(l.ring3Style)},null,4)],4)}var H=S(B,[["render",P]]);const N={name:"FulfillingSquareSpinner",props:{animationDuration:{type:Number,default:4e3},size:{type:Number,default:50},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`,borderColor:this.color,animationDuration:`${this.animationDuration}ms`}},spinnerInnerStyle(){return{backgroundColor:this.color,animationDuration:`${this.animationDuration}ms`}}}};function O(i,d,h,n,_,l){return o(),r("div",{class:"fulfilling-square-spinner",style:c(l.spinnerStyle)},[t("div",{class:"spinner-inner",style:c(l.spinnerInnerStyle)},null,4)],4)}var L=S(N,[["render",O]]);const R={name:"HalfCircleSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{borderWidth:`${this.size/10}px`,animationDuration:`${this.animationDuration}ms`}},circle1Style(){return Object.assign({borderTopColor:this.color},this.circleStyle)},circle2Style(){return Object.assign({borderBottomColor:this.color},this.circleStyle)}}};function j(i,d,h,n,_,l){return o(),r("div",{class:"half-circle-spinner",style:c(l.spinnerStyle)},[t("div",{class:"circle circle-1",style:c(l.circle1Style)},null,4),t("div",{class:"circle circle-2",style:c(l.circle2Style)},null,4)],4)}var F=S(R,[["render",j]]);const q={name:"AtomSpinner",props:{animationDuration:{type:Number,default:1e3},size:{type:Number,default:60},color:{type:String,default:"#fff"}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},circleStyle(){return{color:this.color,fontSize:`${this.size*.24}px`}},lineStyle(){return{animationDuration:`${this.animationDuration}ms`,borderLeftWidth:`${this.size/25}px`,borderTopWidth:`${this.size/25}px`,borderLeftColor:this.color}}}},E={class:"spinner-inner"};function M(i,d,h,n,_,l){return o(),r("div",{class:"atom-spinner",style:c(l.spinnerStyle)},[t("div",E,[t("div",{class:"spinner-line",style:c(l.lineStyle)},null,4),t("div",{class:"spinner-line",style:c(l.lineStyle)},null,4),t("div",{class:"spinner-line",style:c(l.lineStyle)},null,4),t("div",{class:"spinner-circle",style:c(l.circleStyle)},"●",4)])],4)}var V=S(q,[["render",M]]);const v="/assets/new-8724d210.png",W={setup(){return{counter:z()}},mounted:function(){this.counter.F_Data_List_Product_Home(),setTimeout(this.counter.F_Loading,1e3)},components:{AtomSpinner:V,FulfillingSquareSpinner:L,HalfCircleSpinner:F,TrinityRingsSpinner:H,HollowDotsSpinner:T}},A={key:0,class:"grow flex z-30 py-10 lg:px-6 lg:py-10 max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5 justify-center items-center"},K={key:1,class:"grow flex flex-col py-10 lg:px-6 lg:py-10 max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5"},G={key:2,class:"grow flex flex-col py-10 lg:px-6 lg:py-10 max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5"},J={class:"flex flex-col items-center justify-start"},Q={key:0,class:"flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"},U=t("h1",null,".",-1),X={class:"shrink-0"},Y=t("img",{src:v,class:"w-[50px]"},null,-1),Z={key:1,class:"flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"},tt=t("h1",null,".",-1),et={class:"shrink-0"},nt=t("img",{src:v,class:"w-[50px]"},null,-1),ot={class:"flex w-full h-full relative justify-center"},rt={class:"flex flex-col absolute top-0 left-0 right-0 bottom-5 mx-auto justify-end"},it={class:"flex gap-2 justify-center"},st=["src"],lt=["rows"],at=["rows"],ct={class:"flex gap-3 mt-5 text-neutral-900 dark:text-neutral-300"},ut={href:"http://webtoday.store",target:"_blank"},dt={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},ht={key:0},pt={key:1},_t={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},yt={class:"grow flex flex-col py-10 lg:px-6 lg:py-10 max-w-[1100px] my-[40px] text-neutral-800 dark:text-neutral-200 gap-5"},ft={class:"flex flex-col items-center justify-start"},mt={key:0,class:"flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"},gt=t("h1",null,".",-1),xt={class:"shrink-0"},bt=t("img",{src:v,class:"w-[50px]"},null,-1),St={key:1,class:"flex overflow-x-auto text-[20px] font-bold mb-2 w-full text-neutral-700 dark:text-neutral-200 gap-2"},vt=t("h1",null,".",-1),wt={class:"shrink-0"},kt=t("img",{src:v,class:"w-[50px]"},null,-1),It={class:"flex w-full h-full relative justify-center"},$t={class:"flex flex-col absolute top-0 left-0 right-0 bottom-5 mx-auto justify-end"},zt={class:"flex gap-2 justify-center"},Dt=["src"],Ct=["rows"],Tt=["rows"],Bt={class:"flex gap-3 mt-5 text-neutral-900 dark:text-neutral-300"},Pt={href:"http://webtoday.store",target:"_blank"},Ht={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},Nt={key:0},Ot={key:1},Lt={class:"bg-cyan-600 px-3 py-1 rounded font-semibold"};function Rt(i,d,h,n,_,l){const w=k("hollow-dots-spinner"),g=k("font-awesome-icon");return o(),r(p,null,[n.counter.Loading==1?(o(),r("div",A,[b(w,{"animation-duration":1e3,"dot-size":15,"dots-num":3,color:"#0891b2"})])):u("",!0),n.counter.Show_Search==2&&n.counter.Search_ListProduct_Today1.length==0?(o(),r("div",K,[y(t("h1",{class:"text-[25px] font-medium text-cyan-600"},"Không có kết quả nào được tìm kiếm với từ khóa '"+s(n.counter.Search)+"'",513),[[f,i.$i18n.locale=="vi"]]),y(t("h1",{class:"text-[25px] font-medium text-cyan-600"},"No results were found with the keyword '"+s(n.counter.Search)+"'",513),[[f,i.$i18n.locale=="en"]])])):u("",!0),n.counter.Show_Search==2&&n.counter.Search_ListProduct_Today1.length>0?(o(),r("div",G,[y(t("h1",{class:"text-[25px] font-medium text-cyan-600"},"Kết quả tìm kiếm với từ khóa '"+s(n.counter.Search)+"' :",513),[[f,i.$i18n.locale=="vi"]]),y(t("h1",{class:"text-[25px] font-medium text-cyan-600"},"Search results with keyword '"+s(n.counter.Search)+"' :",513),[[f,i.$i18n.locale=="en"]]),(o(!0),r(p,null,m(n.counter.Search_ListProduct_Today1,(e,x)=>(o(),r("div",J,[i.$i18n.locale=="vi"?(o(),r("div",Q,[t("h1",null,s(x+1),1),U,t("h1",X,s(e.Title),1),Y])):u("",!0),i.$i18n.locale=="en"?(o(),r("div",Z,[t("h1",null,s(x+1),1),tt,t("h1",et,s(e.Title_English),1),nt])):u("",!0),t("div",ot,[t("div",rt,[t("div",it,[(o(!0),r(p,null,m(e.Product_Industry,a=>(o(),r("div",{class:I(["bg-gray-100 w-[15px] h-[5px] rounded",{"opacity-100":a==e.Product_Industry[e.Oder_Image],"opacity-50":a!=e.Product_Industry[e.Oder_Image]}])},null,2))),256))])]),b(g,{icon:"fa-solid fa-chevron-left",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 left-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:a=>{e.Oder_Image>0&&e.Oder_Image--}},null,8,["onClick"]),b(g,{icon:"fa-solid fa-chevron-right",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 right-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:a=>{e.Oder_Image<e.Product_Industry.length-1&&e.Oder_Image++}},null,8,["onClick"]),(o(!0),r(p,null,m(e.Product_Industry,a=>y((o(),r("img",{src:n.counter.domain_Backend+a.Image,class:"rounded"},null,8,st)),[[f,a==e.Product_Industry[e.Oder_Image]]])),256))]),n.counter.Table_Informations==!0&&i.$i18n.locale=="vi"?(o(),r("textarea",{key:2,rows:e.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},s(e.Information),9,lt)):u("",!0),n.counter.Table_Informations==!0&&i.$i18n.locale=="en"?(o(),r("textarea",{key:3,rows:e.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},s(e.Information_English),9,at)):u("",!0),t("div",ct,[t("a",ut,[t("button",dt,s(i.$t("Body.Home.Button_Image.Demo")),1)]),t("button",{onClick:d[0]||(d[0]=a=>n.counter.Table_Informations=!n.counter.Table_Informations),class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},[n.counter.Table_Informations==!1?(o(),r("h1",ht,s(i.$t("Body.Home.Button_Image.Information")),1)):u("",!0),n.counter.Table_Informations==!0?(o(),r("h1",pt,s(i.$t("Body.Home.Button_Image.Hide_Information")),1)):u("",!0)]),t("button",_t,s(i.$t("Body.Home.Button_Image.Contact")),1)])]))),256))])):u("",!0),y(t("div",yt,[(o(!0),r(p,null,m(n.counter.Data_List_Product_Home,(e,x)=>(o(),r("div",ft,[i.$i18n.locale=="vi"?(o(),r("div",mt,[t("h1",null,s(x+1),1),gt,t("h1",xt,s(e.Title),1),bt])):u("",!0),i.$i18n.locale=="en"?(o(),r("div",St,[t("h1",null,s(x+1),1),vt,t("h1",wt,s(e.Title_English),1),kt])):u("",!0),t("div",It,[t("div",$t,[t("div",zt,[(o(!0),r(p,null,m(e.Product_Industry,a=>(o(),r("div",{class:I(["bg-gray-100 w-[15px] h-[5px] rounded",{"opacity-100":a==e.Product_Industry[e.Oder_Image],"opacity-50":a!=e.Product_Industry[e.Oder_Image]}])},null,2))),256))])]),b(g,{icon:"fa-solid fa-chevron-left",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 left-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:a=>{e.Oder_Image>0&&e.Oder_Image--}},null,8,["onClick"]),b(g,{icon:"fa-solid fa-chevron-right",class:"text-[25px] cursor-pointer absolute top-0 bottom-0 right-2 my-auto bg-white px-1 py-1 rounded opacity-50 hover:opacity-80 text-gray-900",onClick:a=>{e.Oder_Image<e.Product_Industry.length-1&&e.Oder_Image++}},null,8,["onClick"]),(o(!0),r(p,null,m(e.Product_Industry,a=>y((o(),r("img",{src:n.counter.domain_Backend+a.Image,class:"rounded"},null,8,Dt)),[[f,a==e.Product_Industry[e.Oder_Image]]])),256))]),n.counter.Table_Informations==!0&&i.$i18n.locale=="vi"?(o(),r("textarea",{key:2,rows:e.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},s(e.Information),9,Ct)):u("",!0),n.counter.Table_Informations==!0&&i.$i18n.locale=="en"?(o(),r("textarea",{key:3,rows:e.Information.split(`\r
`).length,class:"pointer-events-none shrink-0 grow w-full mt-3 outline-none border border-neutral-200 dark:border-neutral-700 bg-transparent px-2 py-2 rounded text-neutral-800 dark:text-neutral-300 font-normal"},s(e.Information_English),9,Tt)):u("",!0),t("div",Bt,[t("a",Pt,[t("button",Ht,s(i.$t("Body.Home.Button_Image.Demo")),1)]),t("button",{onClick:d[1]||(d[1]=a=>n.counter.Table_Informations=!n.counter.Table_Informations),class:"bg-cyan-600 px-3 py-1 rounded font-semibold"},[n.counter.Table_Informations==!1?(o(),r("h1",Nt,s(i.$t("Body.Home.Button_Image.Information")),1)):u("",!0),n.counter.Table_Informations==!0?(o(),r("h1",Ot,s(i.$t("Body.Home.Button_Image.Hide_Information")),1)):u("",!0)]),t("button",Lt,s(i.$t("Body.Home.Button_Image.Contact")),1)])]))),256))],512),[[f,n.counter.Loading==2&&n.counter.Show_Search==1]])],64)}const Ft=$(W,[["render",Rt]]);export{Ft as default};
