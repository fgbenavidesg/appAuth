"use strict";(self.webpackChunkauthAppp=self.webpackChunkauthAppp||[]).push([[168],{2168:(p,s,r)=>{r.r(s),r.d(s,{ProtectedModule:()=>h});var c=r(9808),a=r(2517),t=r(1223),d=r(6518);const i=[{path:"",children:[{path:"dashboard",component:(()=>{class o{constructor(e,u){this.router=e,this.authService=u}get usuario(){return this.authService.usuario}ngOnInit(){}logout(){this.router.navigateByUrl("/auth/login"),this.authService.logout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.F0),t.Y36(d.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:9,vars:3,consts:[[3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"h1"),t._uU(1,"dashboard"),t.qZA(),t.TgZ(2,"h4"),t._uU(3,"user info"),t.qZA(),t.TgZ(4,"pre"),t._uU(5),t.ALo(6,"json"),t.qZA(),t.TgZ(7,"button",0),t.NdJ("click",function(){return u.logout()}),t._uU(8,"Logout"),t.qZA()),2&e&&(t.xp6(5),t.hij(" ",t.lcZ(6,1,u.usuario),""))},pipes:[c.Ts],styles:[""]}),o})()},{path:"**",redirectTo:"dashboard"}]}];let l=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(i)],a.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,l]]}),o})()}}]);