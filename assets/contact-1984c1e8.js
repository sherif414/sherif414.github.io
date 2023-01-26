import{d as g,r as a,o as c,c as i,a as s,w as m,v as p,b,e as _,f as t,t as h,g as y}from"./index-acba78d7.js";const k={class:"grid lg:grid-cols-12 text-3 2xl:text-4 lt-lg:pt-2"},w=y('<section class="lg:col-span-2 lg:border-r"><div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b mb-4"><i class="lg:i-ri-arrow-down-s-fill mr-2"></i>contacts </div><div class="flex pl-2 items-center"><i class="lg:i-ri-mail-fill mx-2"></i> sherif.hassan.dev@gmail.com </div><div class="flex pl-2 items-center"><i class="lg:i-ri-phone-fill mx-2"></i> 0117446242 </div><div class="flex pl-2 items-center"><i class="lg:i-ri-phone-fill mx-2"></i> 0994953238 </div><div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b my-4 border-t"><i class="lg:i-ri-arrow-down-s-fill mr-2"></i>location </div><div class="flex pl-2 items-center"><i class="lg:i-ri-map-pin-user-fill mx-2"></i>khartoum - sudan </div></section>',1),C={class:"flex flex-col items-center justify-center lt-lg:p-8 lt-lg:mt-8 lg:px-[15%] lg:col-span-4 lg:border-r"},V={key:0,class:"grid grid-cols-1 w-full gap-6"},N=s("label",{class:"font-bold",for:"name"},"_name:",-1),S=s("label",{class:"font-bold",for:"email"},"_email:",-1),j=s("label",{class:"font-bold",for:"message"},"_message:",-1),B=["onClick"],T={key:1,class:"text-center"},E=s("div",{class:"text-secondary-4"}," all good ! ",-1),U=s("div",null,"thanks for reaching out",-1),D=s("div",null,"I'll replay as soon as possible",-1),F={key:2},M={key:3,class:"text-center"},O=s("div",null,"hmm something is wrong with your form ..",-1),$={class:"col-span-6 flex flex-col items-center justify-center text-[.825rem] 2xl:text-5 lt-lg:hidden"},q={class:"w-60ch text-secondary-3 break-words"},I=s("span",{class:"mr-8"},null,-1),J=s("span",{class:"text-accent-4"},"const",-1),L=s("span",{class:"text-accent-1"},"'#submit-btn'",-1),P=s("br",null,null,-1),R=s("span",{class:"mr-8"},null,-1),z=s("br",null,null,-1),A=s("span",{class:"mr-8"},null,-1),G=s("span",{class:"text-accent-4"},"const",-1),H=s("br",null,null,-1),K=s("span",{class:"mr-8"},null,-1),Q={class:"text-accent-1"},W=s("br",null,null,-1),X=s("span",{class:"mr-8"},null,-1),Y={class:"text-accent-1"},Z=s("br",null,null,-1),ss=s("span",{class:"mr-8"},null,-1),ts={class:"text-accent-1"},es=s("br",null,null,-1),ls=s("span",{class:"mr-8"},null,-1),ns=s("br",null,null,-1),os=s("span",{class:"mr-8"},null,-1),as=s("br",null,null,-1),cs=s("span",{class:"mr-8"},null,-1),is=s("span",{class:"text-accent-1"},"'click'",-1),ds=s("span",{class:"text-accent-4"},"=>",-1),rs=s("br",null,null,-1),us=s("span",{class:"mr-8"},null,-1),_s=s("span",{class:"text-accent-4"},"message",-1),ms=s("br",null,null,-1),ps=s("span",{class:"mr-8"},null,-1),xs=g({__name:"contact",setup(hs){const d=a(""),r=a(""),u=a(""),l=a(!0),n=a(),v=()=>{l.value=!0},f=()=>{const x={subject:d.value,message:`${u.value} email :${r.value}`};l.value=!1,fetch("https://shareef-mail.herokuapp.com/api/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)}).then(e=>n.value=e.status).catch(e=>{n.value=e.status})};return(x,e)=>(c(),i("main",k,[w,s("section",C,[l.value?(c(),i("form",V,[s("div",null,[N,m(s("input",{id:"name","onUpdate:modelValue":e[0]||(e[0]=o=>d.value=o),class:"form-input",type:"text"},null,512),[[p,d.value]])]),s("div",null,[S,m(s("input",{id:"email","onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),class:"form-input",type:"email"},null,512),[[p,r.value]])]),s("div",null,[j,m(s("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=o=>u.value=o),class:"form-input",name:"",rows:"6"},null,512),[[p,u.value]])]),s("button",{class:"bg-secondary-3 text-secondary-4 px-2 py-1 w-max rounded",onClick:b(f,["prevent"])}," submit-form ",8,B)])):_("",!0),!l.value&&n.value===200?(c(),i("div",T,[E,U,D,s("button",{class:"bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1",onClick:v}," send another? ")])):_("",!0),!l.value&&n.value!==200?(c(),i("div",F," sending.. ")):_("",!0),!l.value&&n.value===400?(c(),i("div",M,[O,s("button",{class:"bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1",onClick:v}," try again? ")])):_("",!0)]),s("section",$,[s("div",q,[t(" 1 "),I,t(),J,t(" button = document.querySelector("),L,t("); "),P,t(" 2 "),R,z,t(" 3 "),A,t(),G,t(" message = { "),H,t(" 4 "),K,t(" name: "),s("span",Q,'"'+h(d.value)+'"',1),t(", "),W,t(" 5 "),X,t(" email: "),s("span",Y,'"'+h(r.value)+'"',1),t(", "),Z,t(" 6 "),ss,t(" message: "),s("span",ts,'"'+h(u.value)+'"',1),es,t(" 7 "),ls,t(" } "),ns,t(" 8 "),os,as,t(" 9 "),cs,t(" button.addEventListener("),is,t(", () "),ds,t(" { "),rs,t(" 10 "),us,t(" form.submit("),_s,t(") "),ms,t(" 11 "),ps,t(" }) ")])])]))}});export{xs as default};
