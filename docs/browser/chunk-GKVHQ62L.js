import{a as I}from"./chunk-GI3SSL4I.js";import{$ as T,B as s,D as E,E as b,F as C,G as e,H as t,I as a,K as x,L as k,Q as i,R as h,T as p,U as g,V as M,da as _,k as f,l as u,ma as F,na as O,pa as H,q as v,r as w,s as S,u as y,w as l}from"./chunk-DC25UR2F.js";var A=(r,n)=>({hidden:r,block:n,"md:flex":!0}),D=r=>({hidden:r}),R=r=>({"text-red-500":r});function j(r,n){if(r&1&&(e(0,"li",9)(1,"a",1),i(2),t()()),r&2){let d=n.$implicit,c=k();s("ngClass",g(3,R,c.router.url.includes(d.routeTo))),l(),s("routerLink",d.routeTo),l(),h(d.name)}}var $=(()=>{let n=class n{constructor(){this.router=f(F),this.auth=f(I),this.user=S.required(),this.isMenuOpen=!1,this.menu=[{name:"Home",routeTo:"/home"},{name:"Movies",routeTo:"/movies"},{name:"TV Shows",routeTo:"/tv-shows"}]}ngOnInit(){}signout(){this.auth.setAccessComp(!1),this.auth.signOut()}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=u({type:n,selectors:[["app-header"]],inputs:{user:[1,"user"]},standalone:!0,features:[p],decls:17,vars:10,consts:[[1,"bg-main","sticky","top-0","bg-black","bg-opacity-90","h-fit","flex"],[3,"routerLink"],["src","/public/pngwing.com.png","alt","",1,"w-24","mx-5"],[1,"md:hidden","p-2","rounded","focus:outline-none","focus:ring-2","focus:ring-inset","focus:ring-white",3,"click"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-6","h-6","text-neutral-200"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],[1,"flex-col","md:flex-row","items-center","gap-4","md:gap-5","ml-auto","mr-11",3,"ngClass"],[1,"flex","gap-5"],[1,"flex","flex-col","md:flex-row","items-center","gap-4"],[1,"flex","items-center","cursor-pointer","mx-4","text-neutral-200","text-sm","hover:text-gray-500","transition-[1s]",3,"ngClass"],[1,"flex","flex-col","md:flex-row","items-center","ml-8"],[1,"text-neutral-100","cursor-default",3,"ngClass"],["alt","user",1,"w-8","cursor-pointer","rounded-full","items-center","bg-white","p-1","mx-1","hover:text-gray-700",3,"src"],[1,"mx-2","text-neutral-50","cursor-pointer",3,"click"]],template:function(m,o){m&1&&(e(0,"header",0)(1,"a",1),a(2,"img",2),t(),e(3,"button",3),x("click",function(){return o.toggleMenu()}),v(),e(4,"svg",4),a(5,"path",5),t()(),w(),e(6,"div",6)(7,"div",7)(8,"ul",8),b(9,j,3,5,"li",9,E),t()(),e(11,"div",10)(12,"p",11),i(13),t(),a(14,"img",12),t(),e(15,"a",13),x("click",function(){return o.signout()}),i(16,"Sign out"),t()()()),m&2&&(l(),s("routerLink","/home"),l(5),s("ngClass",M(5,A,!o.isMenuOpen,o.isMenuOpen)),l(3),C(o.menu),l(3),s("ngClass",g(8,D,o.isMenuOpen)),l(),h(o.user().name),l(),s("src",o.user().picture,y))},dependencies:[H,O,_,T]});let r=n;return r})();var K=(()=>{let n=class n{};n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=u({type:n,selectors:[["app-footer"]],standalone:!0,features:[p],decls:70,vars:0,consts:[[1,"bg-black","text-white"],[1,"bg-black","text-gray-400","py-8"],[1,"container","mx-auto","px-4"],[1,"flex","flex-wrap","justify-between"],[1,"w-full","sm:w-1/2","lg:w-1/4","mb-4"],[1,"font-bold","mb-2","text-gray-200"],["href","#",1,"hover:text-white"],[1,"flex","space-x-6","items-center"],["href","https://www.facebook.com/netflix",1,"hover:text-white"],["src","/public/icons8-facebook-48.png"],["href","https://www.instagram.com/netflix/",1,"hover:text-white"],["src","/public/icons8-instagram-48.png"],["href","https://x.com/netflix",1,"hover:text-white"],["src","/public/icons8-twitterx-48.png",1,"bg-white","rounded-lg","h-10"],["href","https://www.youtube.com/@Netflix",1,"hover:text-white"],["src","/public/icons8-youtube-48.png"],[1,"text-center","mt-8","text-gray-600"]],template:function(m,o){m&1&&(e(0,"div",0)(1,"footer",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),i(6,"Company"),t(),e(7,"ul")(8,"li")(9,"a",6),i(10,"Home"),t()(),e(11,"li")(12,"a",6),i(13,"About"),t()(),e(14,"li")(15,"a",6),i(16,"Contact"),t()(),e(17,"li")(18,"a",6),i(19,"Careers"),t()()()(),e(20,"div",4)(21,"h3",5),i(22,"Help"),t(),e(23,"ul")(24,"li")(25,"a",6),i(26,"FAQ"),t()(),e(27,"li")(28,"a",6),i(29,"Support"),t()(),e(30,"li")(31,"a",6),i(32,"Privacy Policy"),t()(),e(33,"li")(34,"a",6),i(35,"Terms of Service"),t()()()(),e(36,"div",4)(37,"h3",5),i(38,"Social"),t(),e(39,"ul",7)(40,"li")(41,"a",8),a(42,"img",9),t()(),e(43,"li")(44,"a",10),a(45,"img",11),t()(),e(46,"li")(47,"a",12),a(48,"img",13),t()(),e(49,"li")(50,"a",14),a(51,"img",15),t()()()(),e(52,"div",4)(53,"h3",5),i(54,"More"),t(),e(55,"ul")(56,"li")(57,"a",6),i(58,"Media Center"),t()(),e(59,"li")(60,"a",6),i(61,"Investor Relations"),t()(),e(62,"li")(63,"a",6),i(64,"Legal Notices"),t()(),e(65,"li")(66,"a",6),i(67,"Netflix Originals"),t()()()()(),e(68,"div",16),i(69," \xA9 2024 Netflix, Inc. "),t()()()())}});let r=n;return r})();export{$ as a,K as b};
