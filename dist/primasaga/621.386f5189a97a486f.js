"use strict";(self.webpackChunkprimasaga=self.webpackChunkprimasaga||[]).push([[621],{4621:(E,r,i)=>{i.r(r),i.d(r,{SigninComponent:()=>v});var l=i(6814),g=i(3555),u=i(5516),n=i(95),e=i(4946),d=i(3848),m=i(2678),_=i(4670);function f(a,o){1&a&&(e.TgZ(0,"span",20),e._uU(1,"* Email tidak valid"),e.qZA())}function h(a,o){1&a&&(e.TgZ(0,"span",20),e._uU(1,"* Email dibutuhkan"),e.qZA())}function c(a,o){1&a&&(e.TgZ(0,"span",20),e._uU(1,"* Password dibutuhkan"),e.qZA())}let v=(()=>{class a{constructor(s,t,p,Z){this.service=s,this.toast=t,this.router=p,this.fb=Z,this.isLoading=!1,this.google=u.N.api+"/auth/google",this.github=u.N.api+"/auth/github",this.form=this.fb.group({email:["",[n.kI.required,n.kI.email]],password:["",[n.kI.required]]})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}submit(){if(this.form?.invalid)return this.toast.push({content:"Konten harus di isi",type:"error"});this.isLoading=!0;let s=new FormData;s.set("email",this.email?.value??""),s.append("password",this.password?.value??""),this.service.signIn(s).subscribe({next:t=>{this.isLoading=!1,this.service.token=t,this.router.navigateByUrl("")},error:t=>{this.isLoading=!1,console.log(t),this.toast.push({content:"Email atau password salah",type:"error"})}})}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(d.e),e.Y36(m.k),e.Y36(_.F0),e.Y36(n.qu))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-signin"]],standalone:!0,features:[e.jDz],decls:33,vars:7,consts:[[1,"flex","flex-col","gap-10","lg:px-5"],[1,"flex","flex-col","text-lg"],[1,"font-bold"],[1,"h-1","w-8","rounded-full","bg-primary"],[3,"formGroup","submit"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col"],[1,"flex","flex-row","border","rounded","place-items-center","px-2"],[1,"fa-solid","fa-envelope","text-zinc-500"],["type","text","placeholder","Email","formControlName","email",1,"flex-1"],["class","text-red-600 text-xs",4,"ngIf"],[1,"fa-solid","fa-lock","text-zinc-500"],["type","password","placeholder","Password","formControlName","password",1,"flex-1"],[1,"bg-primary","hover:bg-red-600","text-white","font-bold"],[1,"flex","place-items-center","gap-2"],[1,"flex-1"],[1,"bg-red-500","hover:bg-red-600","text-white","font-bold","text-center",3,"href"],[1,"fa-brands","fa-google"],[1,"bg-zinc-500","hover:bg-zinc-600","text-white","font-bold","text-center",3,"href"],[1,"fa-brands","fa-github"],[1,"text-red-600","text-xs"]],template:function(s,t){1&s&&(e.TgZ(0,"app-auth")(1,"div",0)(2,"div",1)(3,"span",2),e._uU(4,"Masuk"),e.qZA(),e._UZ(5,"hr",3),e.qZA(),e.TgZ(6,"form",4),e.NdJ("submit",function(){return t.submit()}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7),e._UZ(10,"i",8)(11,"input",9),e.qZA(),e.YNc(12,f,2,0,"span",10),e.YNc(13,h,2,0,"span",10),e.qZA(),e.TgZ(14,"div",6)(15,"div",7),e._UZ(16,"i",11)(17,"input",12),e.qZA(),e.YNc(18,c,2,0,"span",10),e.qZA(),e.TgZ(19,"button",13),e._uU(20),e.qZA()()(),e.TgZ(21,"div",5)(22,"div",14),e._UZ(23,"hr",15),e.TgZ(24,"span"),e._uU(25,"atau masuk dengan"),e.qZA(),e._UZ(26,"hr",15),e.qZA(),e.TgZ(27,"a",16),e._UZ(28,"i",17),e._uU(29," GOOGLE"),e.qZA(),e.TgZ(30,"a",18),e._UZ(31,"i",19),e._uU(32," GITHUB"),e.qZA()()()()),2&s&&(e.xp6(6),e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("ngIf",null==t.email?null:t.email.hasError("email")),e.xp6(1),e.Q6J("ngIf",(null==t.email?null:t.email.touched)&&(null==t.email?null:t.email.hasError("required"))),e.xp6(5),e.Q6J("ngIf",(null==t.password?null:t.password.touched)&&(null==t.password?null:t.password.hasError("required"))),e.xp6(2),e.Oqu(t.isLoading?"Mengunggah...":"MASUK"),e.xp6(7),e.Q6J("href",t.google,e.LSH),e.xp6(3),e.Q6J("href",t.github,e.LSH))},dependencies:[l.ez,l.O5,g.T,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),a})()}}]);