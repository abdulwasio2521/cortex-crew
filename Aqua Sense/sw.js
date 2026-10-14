// Aqua Sense service worker: instant loads from cache, fresh data from the network.
const V='aqs-v3',SHELL=['/','/index.html','/manifest.webmanifest','/icon-192.png','/icon-512.png']
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())))
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))).then(()=>clients.claim())))
const put=(r,res)=>{if(res&&res.ok)caches.open(V).then(c=>c.put(r,res.clone()));return res}
const timed=(r,ms)=>new Promise((ok,no)=>{const t=setTimeout(()=>no('timeout'),ms);fetch(r).then(x=>{clearTimeout(t);ok(x)},e=>{clearTimeout(t);no(e)})})
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url)
 if(r.method!='GET'||u.origin!=location.origin)return
 // hashed build files never change: serve from cache first (fast, works offline)
 if(u.pathname.startsWith('/assets/'))return e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>put(r,x))))
 // weather/search: network, but give up after 6 s and use the last copy
 if(u.pathname.startsWith('/api/'))return e.respondWith(timed(r,6000).then(x=>put(r,x)).catch(()=>caches.match(r).then(m=>m||Response.error())))
 // pages: show the cached page immediately and refresh it in the background
 e.respondWith(caches.match(r).then(m=>{const net=fetch(r).then(x=>put(r,x)).catch(()=>m||caches.match('/index.html'));return m||net}))})
