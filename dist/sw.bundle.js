if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,f)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let d={};const r=e=>n(e,a),s={module:{uri:a},exports:d,require:r};i[a]=Promise.all(c.map((e=>s[e]||r(e)))).then((e=>(f(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"3f7fd89ccc2dbb0154f339dc619a1429"},{url:"946.bundle.js",revision:"cc582ae0cd0fdff61d2e587ce1c4092d"},{url:"app.webmanifest",revision:"ae3d417da8f942de045f18f1df996432"},{url:"app~04e4ec69.bundle.js",revision:"cd70e84d6292eebc492856175ebc28aa"},{url:"app~309f7e27.bundle.js",revision:"c8944c0f8fea02424fb70a8f31b3799a"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a51fa3f5.bundle.js",revision:"8aaf9082ad3e00254e0ac3d8ef6f6f08"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"4359a47743e5067b487337866ee917a5"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"fec066fdef65f58af1afc3c62b6fd4d6"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icons/authentic.png",revision:"7ed588a1f9c9a188707d2d844be452c8"},{url:"icons/cheap.png",revision:"8937267b438b567b554562e3aa3c0741"},{url:"icons/clock.png",revision:"5120c248ac8db1ecf8ca1b8e4fe291a1"},{url:"icons/cutlery.png",revision:"55fa48aae63dbbdc52d80af03309c656"},{url:"icons/food.png",revision:"3d18101c1cca0948e6a603954f60ed2a"},{url:"icons/icon_x128.png",revision:"611481c6e99d7e51baa561ae58e5d144"},{url:"icons/icon_x192.png",revision:"7844a087ad53305a293dfecc14ce82e7"},{url:"icons/icon_x384.png",revision:"b3944bc4aff8837a4c798ff8c6314178"},{url:"icons/icon_x48.png",revision:"9d2ffb95d81fa0f8901560f5dee39ceb"},{url:"icons/icon_x512.png",revision:"fd6e1a51a758931f2d3d3790303a0a2d"},{url:"icons/icon_x72.png",revision:"8399fe97e748a1ce5aa4cadf1b9357e5"},{url:"icons/icon_x96.png",revision:"2cb459a333fb0079cce98fab58eb1f76"},{url:"index.html",revision:"383830136c3313ab38b5929f91fa0760"}],{})}));
//# sourceMappingURL=sw.bundle.js.map