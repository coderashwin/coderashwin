import{P as n,T as i,S as o,M as t,B as e,a as s,C as d,b as a,D as r,W as p}from"./vendor.f0f1c3ed.js";let w,c,l,h,m=0,g=0,x=window.innerWidth/2,u=window.innerHeight/2,y=!1,f=document.getElementById("header");f.style.margin="0px";let z=f.getBoundingClientRect(),M=z.bottom-document.body.getBoundingClientRect().top;function b(){x=window.innerWidth/2,u=window.innerHeight/2,f=document.getElementById("header"),f.style.margin="0px",z=f.getBoundingClientRect(),M=z.bottom-document.body.getBoundingClientRect().top,window.innerWidth>=1280?f.style.margin=(window.innerHeight-z.bottom+5)/2+"px 0px":f.style.margin=`${window.innerHeight}px 0px 120px 0px`,w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function H(n,i,o,t,e){return(o-i)*(n-t)/(e-t)+i}window.innerWidth>=1280?f.style.margin=(window.innerHeight-z.bottom+5)/2+"px 0px":f.style.margin=`${window.innerHeight}px 0px 120px 0px`,document.addEventListener("mousemove",(function(n){m=10*(n.clientX-x),g=10*(n.clientY-u)})),document.addEventListener("scroll",(function(n){y=!function(n){let i=n.getBoundingClientRect().bottom;console.log(i),M=Math.max(M,i);let o=!1;if(i>=0){w.position.z=H(i,500,3200,M,0),w.position.x=H(i,0,w.position.x,M,0),w.position.y=H(i,0,w.position.y,M,0),o=!0;const n=5e-4*Date.now();let t=2e3*Math.sin(.7*n),e=2e3*Math.cos(.5*n),s=2e3*Math.cos(.3*n);h.position.x=H(i,0,t,M,0)+100*window.innerWidth/1920,h.position.y=H(i,0,e,M,0),h.position.z=H(i,0,s,M,0)}else w.position.z=3200;return o}(f)})),function(){w=new n(60,window.innerWidth/window.innerHeight,.1,15e3),w.position.z=500,w.position.x=0,w.position.y=0;const m=(new i).load("/assets/black-background.9a72c303.jpg");c=new o,c.background=m;const g=(new i).load("/assets/profile-image.f58cdff7.jpg");h=new t(new e(100,100,100),new s({map:g})),h.position.x+=100*window.innerWidth/1920,h.position.y=0,h.position.z=0,c.add(h);const x=new d(0,10,75,100);x.rotateX(Math.PI/2);const u=new a({color:16777215,specular:16777215,shininess:50});for(let n=0;n<1e3;n++){const n=new t(x,u);n.position.x=4e3*Math.random()-2015,n.position.y=4e3*Math.random()-2015,n.position.z=4e3*Math.random()-2015,n.scale.x=n.scale.y=n.scale.z=4*Math.random()+2.015,c.add(n)}const y=new r(16777215,1);y.position.set(0,-1,0).normalize(),y.color.setHSL(.1,.7,.5),c.add(y);const f=new r(16777215,1);f.position.set(0,1,0).normalize(),f.color.setHSL(.1,.7,.5),c.add(f),l=new p({antialias:!0}),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(l.domElement),window.addEventListener("resize",b)}(),function n(){requestAnimationFrame(n),h.rotation.x+=.01,h.rotation.y+=.005,h.rotation.z+=.01,function(){const n=5e-4*Date.now();y?(h.position.x=2e3*Math.sin(.7*n),h.position.y=2e3*Math.cos(.5*n),h.position.z=2e3*Math.cos(.3*n),w.position.x+=.005*(m-w.position.x),w.position.y+=.005*(-g-w.position.y)):(w.position.x+=5e-5*(m-w.position.x),w.position.y+=5e-5*(-g-w.position.y));for(let i=1,o=c.children.length;i<o;i++)c.children[i].lookAt(h.position);w.lookAt(c.position),l.render(c,w)}()}();
