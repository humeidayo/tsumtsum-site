const CACHE='cube-robo-orientation-20261022';
const FILES=["/games/cube-robo/","/games/cube-robo/manifest.webmanifest","/games/cube-robo/icons/icon-192.png","/games/cube-robo/icons/icon-512.png","/games/cube-robo/icons/apple-touch-icon.png","/games/cube-robo/assets/index-BKv9IeW8.js","/games/cube-robo/assets/index-C0yYFpXl.css","/games/cube-robo/ui/battle-hud-reference.png","/games/cube-robo/ui/result-background.png","/games/cube-robo/ui/stage-reference.png","/games/cube-robo/ui/title-background.png","/games/cube-robo/audio/battle.mp3","/games/cube-robo/audio/battle.ogg","/games/cube-robo/audio/damage.mp3","/games/cube-robo/audio/damage.ogg","/games/cube-robo/audio/dash.mp3","/games/cube-robo/audio/dash.ogg","/games/cube-robo/audio/jump.mp3","/games/cube-robo/audio/jump.ogg","/games/cube-robo/audio/land.mp3","/games/cube-robo/audio/land.ogg","/games/cube-robo/audio/menu.mp3","/games/cube-robo/audio/menu.ogg","/games/cube-robo/audio/missile_fire.mp3","/games/cube-robo/audio/missile_fire.ogg","/games/cube-robo/audio/missile_fly.mp3","/games/cube-robo/audio/missile_fly.ogg","/games/cube-robo/audio/missile_impact.mp3","/games/cube-robo/audio/missile_impact.ogg","/games/cube-robo/audio/respawn.mp3","/games/cube-robo/audio/respawn.ogg","/games/cube-robo/audio/result_lose.mp3","/games/cube-robo/audio/result_lose.ogg","/games/cube-robo/audio/result_win.mp3","/games/cube-robo/audio/result_win.ogg","/games/cube-robo/audio/saber_hit.mp3","/games/cube-robo/audio/saber_hit.ogg","/games/cube-robo/audio/saber_swing.mp3","/games/cube-robo/audio/saber_swing.ogg","/games/cube-robo/audio/shield_hit.mp3","/games/cube-robo/audio/shield_hit.ogg","/games/cube-robo/audio/shield_on.mp3","/games/cube-robo/audio/shield_on.ogg","/games/cube-robo/audio/title.mp3","/games/cube-robo/audio/title.ogg","/games/cube-robo/audio/ui_cancel.mp3","/games/cube-robo/audio/ui_cancel.ogg","/games/cube-robo/audio/ui_confirm.mp3","/games/cube-robo/audio/ui_confirm.ogg","/games/cube-robo/audio/ui_hover.mp3","/games/cube-robo/audio/ui_hover.ogg","/games/cube-robo/models/CR01_EDGE_FRAME.glb"];
async function valid(response,path){
 if(!response.ok||response.redirected)return false;
 if(path==='/'||path==='/games/cube-robo/')return (await response.clone().text()).includes('id="arena"');
 return !response.headers.get('content-type')?.includes('text/html');
}
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await Promise.all(FILES.map(async path=>{const response=await fetch(new Request(path,{cache:'reload',credentials:'same-origin'}));if(!await valid(response,path))throw Error('Game asset unavailable');await cache.put(path,response)}));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('cube-robo-')&&key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);if(req.method!=='GET'||url.origin!==self.location.origin||url.search||!FILES.includes(url.pathname))return;
 if(req.mode==='navigate'){
  event.respondWith((async()=>{try{const response=await fetch(req);if(await valid(response,'/')){const cache=await caches.open(CACHE);await cache.put('/games/cube-robo/',response.clone())}return response}catch{const cached=await caches.match('/games/cube-robo/');return cached||Response.error()}})());return;
 }
 event.respondWith((async()=>{const cached=await caches.match(url.pathname);if(cached)return cached;return fetch(req)})());
});
