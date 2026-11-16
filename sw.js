const C='nightweb-v1';
const LIBS=['https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js','https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png']).then(()=>Promise.allSettled(LIBS.map(u=>fetch(u,{mode:'no-cors'}).then(r=>c.put(u,r)))))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque')){const k=r.clone();caches.open(C).then(c=>c.put(e.request,k))}return r}).catch(()=>m)))});
