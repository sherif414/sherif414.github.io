import{d as f,r as o,c,a as s,l as u,p as _,q as y,b as m,t as h,e as v,j as a,o as i}from"./index.9d6dbeca.js";const k={class:"grid lg:grid-cols-12 text-3 2xl:text-4 lt-lg:pt-2"},w=v('<section class="lg:col-span-2 lg:border-r"><div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b mb-4"><i class="lg:i-ri-arrow-down-s-fill mr-2"></i>contacts </div><div class="flex pl-2 items-center"><i class="lg:i-ri-mail-fill mx-2"></i> creazyhell@gmail.com </div><div class="flex pl-2 items-center"><i class="lg:i-ri-phone-fill mx-2"></i> 0117446242 </div><div class="flex pl-2 items-center"><i class="lg:i-ri-phone-fill mx-2"></i> 0994953238 </div><div class="p-1 text-secondary-4 flex lt-lg:bg-lines pl-4 border-b my-4 border-t"><i class="lg:i-ri-arrow-down-s-fill mr-2"></i>loaction </div><div class="flex pl-2 items-center"><i class="lg:i-ri-map-pin-user-fill mx-2"></i>khartoum - sudan </div></section>',1),C={class:"flex flex-col items-center justify-center lt-lg:p-8 lt-lg:mt-8 lg:px-[15%] lg:col-span-4 lg:border-r"},V={key:0,class:"grid grid-cols-1 w-full gap-6"},N=s("label",{class:"font-bold",for:"name"},"_name:",-1),S=s("label",{class:"font-bold",for:"email"},"_email:",-1),j=s("label",{class:"font-bold",for:"message"},"_message:",-1),B=["onClick"],T={key:1,class:"text-center"},E=s("div",{class:"text-secondary-4"}," all good ! ",-1),U=s("div",null,"thanks for reaching out",-1),q=s("div",null,"I'll replay as soon as possible",-1),D={key:2},F={key:3,class:"text-center"},M=s("div",null,"hmm something is wrong with your form ..",-1),O={class:"col-span-6 flex flex-col items-center justify-center text-[.825rem] 2xl:text-5 lt-lg:hidden"},$={class:"w-60ch text-secondary-3 break-words"},z=v(' 1 <span class="mr-8"></span> <span class="text-accent-4">const</span> button = document.querySelector(<span class="text-accent-1">&#39;#submit-btn&#39;</span>); <br> 2 <span class="mr-8"></span><br> 3 <span class="mr-8"></span> <span class="text-accent-4">const</span> message = { <br> 4 <span class="mr-8"></span> name: ',20),I={class:"text-accent-1"},J=a(", "),L=s("br",null,null,-1),P=a(" 5 "),A=s("span",{class:"mr-8"},null,-1),G=a(" email: "),H={class:"text-accent-1"},K=a(", "),Q=s("br",null,null,-1),R=a(" 6 "),W=s("span",{class:"mr-8"},null,-1),X=a(" message: "),Y={class:"text-accent-1"},Z=v('<br> 7 <span class="mr-8"></span> } <br> 8 <span class="mr-8"></span><br> 9 <span class="mr-8"></span> button.addEventListener(<span class="text-accent-1">&#39;click&#39;</span>, () <span class="text-accent-4">=&gt;</span> { <br> 10 <span class="mr-8"></span> form.submit(<span class="text-accent-4">message</span>) <br> 11 <span class="mr-8"></span> }) ',25),ts=f({__name:"contact",setup(ss){const r=o(""),d=o(""),p=o(""),t=o(!0),l=o(),x=()=>{t.value=!0},b=()=>{const g={subject:r.value,message:`${p.value} email :${d.value}`};t.value=!1,fetch("https://shareef-mail.herokuapp.com/api/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(e=>l.value=e.status).catch(e=>{l.value=e.status})};return(g,e)=>(i(),c("main",k,[w,s("section",C,[t.value?(i(),c("form",V,[s("div",null,[N,u(s("input",{id:"name","onUpdate:modelValue":e[0]||(e[0]=n=>r.value=n),class:"form-input",type:"text"},null,512),[[_,r.value]])]),s("div",null,[S,u(s("input",{id:"email","onUpdate:modelValue":e[1]||(e[1]=n=>d.value=n),class:"form-input",type:"email"},null,512),[[_,d.value]])]),s("div",null,[j,u(s("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=n=>p.value=n),class:"form-input",name:"",rows:"6"},null,512),[[_,p.value]])]),s("button",{class:"bg-secondary-3 text-secondary-4 px-2 py-1 w-max rounded",onClick:y(b,["prevent"])}," submit-form ",8,B)])):m("",!0),!t.value&&l.value===200?(i(),c("div",T,[E,U,q,s("button",{class:"bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1",onClick:x}," send another? ")])):m("",!0),!t.value&&l.value!==200?(i(),c("div",D," sending.. ")):m("",!0),!t.value&&l.value===400?(i(),c("div",F,[M,s("button",{class:"bg-secondary-3 text-secondary-4 rounded mt-4 px-2 py-1",onClick:x}," try again? ")])):m("",!0)]),s("section",O,[s("div",$,[z,s("span",I,'"'+h(r.value)+'"',1),J,L,P,A,G,s("span",H,'"'+h(d.value)+'"',1),K,Q,R,W,X,s("span",Y,'"'+h(p.value)+'"',1),Z])])]))}});export{ts as default};
