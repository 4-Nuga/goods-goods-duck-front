if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>a(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(i.map((e=>t[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-dae32412"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"eef8aff527755f4a8f7defc47ce07ace"},{url:"/_next/static/chunks/1174-804746bc235ae470.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/1335-4c63643d80bd109a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/14b82aa5-049661512ccacc4e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/15be5694-f27d86337c29e9c4.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/2321-ea1bc394fbc44c54.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/2770-4d8d81122bdc1e7b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/281f4f84-5311f0acca61a130.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/3397-2b3b6a32463358a4.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/3435-0344f5d5f649a9b4.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/3483-61fdc26195ed843e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/353-0f6f8234f7ba21a5.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/39515de1-7f7859eca4704029.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/3b111db7-04f09c3b82d2511b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/412c10f0-e1fd39eb1bb7910d.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/4492-2df4320f9ca56809.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/552c1bf5-b7a3f6545a2fb20c.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/6362-e7341c9e10d324f8.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/6590-5d6eb79dfe67e7b9.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/6743-5dc89f9cfc7a4ffb.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/7325-70cfc5a4fdac0f13.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/760ccd9a-d1b3551f96e64969.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/770-850d3be190b741a1.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/8024-dc47afb9cf9451ee.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/8341-ad63f5ec7d8a5aed.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/8533-fa5d3381907ac6ad.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/8960-e6318a6f953b5ecd.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/9061-96a4ca621cade90b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/9117-810decb0d242432b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/a20c2d1d-303912be6c98b839.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/a4938abf-6299ffefc5b268c2.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(chat)/chat-list/layout-fda031b102257b77.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(chat)/chat-list/page-86fab3533fa4c936.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(chat)/chat-room/%5BchatRoomId%5D/page-ded451e6053703c0.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(complain)/goods-complain/page-1c59f622e7a58b5e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(complain)/layout-dea6680aa0dbf520.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(complain)/user-complain/page-b092667e4934e78c.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/layout-a3adb0d1b300ae12.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/page-e3f01978703d7681.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/goods/layout-97cc07612f69ac28.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/goods/page-4dedb53715821679.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/registration/page-4030c5036f907807.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(goods)/seller/page-e3a56a9ef5794685.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(main)/animation/page-b323fafc8832086b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(main)/baseball/page-7291e45d18f4254d.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(main)/idol/page-956c58368219efc0.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(main)/layout-01bddf13305b53d6.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(main)/page-f82e9ed8a4f1f2bf.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(member)/find-info/page-1ce27ecc06492670.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(member)/join/page-d609b0a00abf7f8e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(member)/layout-92943ff58ff8f358.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/(member)/login/page-14e06e526248490e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/_not-found/page-738b19cf9f6b989e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/duck-point/charge/page-0cbdd697a4b92880.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/duck-point/details/page-4cb83eca1750b620.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/duck-point/layout-22e219078ef8f85f.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/layout-907278a64ef075e9.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/bid/page-54daced868b23b83.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/layout-cf03f2b823c2c93b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/like/page-5e589732f472f0b2.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/notice/%5BnoticeId%5D/page-52e1ee334a1a6e9a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/notice/page-7c63aa3a43fe2b39.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/page-e1f121af32ca8e80.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/reviews/page-ef84af7f26dc0a8a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/sell/page-fc99485df438920e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/settings/page-65e85d7520ee8479.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/update-password/page-0fc886704e8df9fd.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/update-profile/page-44fa6a67db38c09a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/mypage/winning-bid/page-2dd159d00a9a011d.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/app/review/%5BtradeId%5D/page-89cac24fd6e7e0d3.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/b81fb708-ff660351f6394f60.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/d30eb90b-51002d75d8ce7fcd.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/d8314949-cc43085acf52f80a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/dfefeca3-dd0f07792845e088.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/e6187ad7-8632a17a528b314c.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/framework-da6a81dd5b579b67.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/main-20afe66c18dd6b5b.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/main-app-392da0852cd1955e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/pages/_app-b26e549256c7f3c1.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/pages/_error-3c136c7e51d8bb7e.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-31d6cc2b1391217a.js",revision:"rRe5X8GNg3JdHdhDwU4mu"},{url:"/_next/static/css/2ebb2afbe58660e0.css",revision:"2ebb2afbe58660e0"},{url:"/_next/static/css/cf493a8e9dde5eae.css",revision:"cf493a8e9dde5eae"},{url:"/_next/static/css/d0d19f879eac7cd7.css",revision:"d0d19f879eac7cd7"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/36afab82570d46f2-s.p.woff2",revision:"89e9fd21dd55cebd3f5ee1dfcb5fdee0"},{url:"/_next/static/media/6b5949cea416cbec-s.woff2",revision:"49ae8484eae36f970a54ea3f90bfef3d"},{url:"/_next/static/media/830087706657ee0c-s.woff2",revision:"2ac088578e0e51e2fb14bc66a702b901"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/banner2.3d0a24ea.png",revision:"8973b1f7757dc6bb527818175f9c2da4"},{url:"/_next/static/media/basicImage.987dbdc9.png",revision:"e5a7f5dfea4428d548046345f29a8139"},{url:"/_next/static/media/c4f6d62acfbd94a2-s.woff2",revision:"fbaccf16b5420fbc46534b4bcab47719"},{url:"/_next/static/media/c89e2f129f61ebdb-s.woff2",revision:"52b9b67fb64ff755e0fbb360c2933042"},{url:"/_next/static/media/f5767adec246cdc1-s.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/icon-192x192.cafaa25d.png",revision:"540c61504afa7b5c3ca2a0ef645c397b"},{url:"/_next/static/media/profile.c296fd4c.png",revision:"9a00dfb6f7aa161041e9b4447c1ecd8c"},{url:"/_next/static/rRe5X8GNg3JdHdhDwU4mu/_buildManifest.js",revision:"64c0e1293a66bfa7bee73628f8da8390"},{url:"/_next/static/rRe5X8GNg3JdHdhDwU4mu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/fonts/Dovemayo_gothic.ttf",revision:"ae2fcd5356e023ffa2edab25d2cdbe5e"},{url:"/icons/icon-192x192.png",revision:"540c61504afa7b5c3ca2a0ef645c397b"},{url:"/icons/icon-256x256.png",revision:"4d4322e1b4a25bf30324286e58d787d9"},{url:"/icons/icon-384x384.png",revision:"617d8bd990f88fb485fd51fdf47e9df6"},{url:"/icons/icon-512x512.png",revision:"fdaf66fd440fae1ae17d888faa45ef63"},{url:"/icons/tempProfile.png",revision:"cb3a0a5f154cb62f84e971ff48e44ef2"},{url:"/images/appleLoginBtn.png",revision:"4dc526a7755cd41d3c63cbb887ae5b7b"},{url:"/images/basicImage.png",revision:"e5a7f5dfea4428d548046345f29a8139"},{url:"/images/googleLoginBtn.png",revision:"004c126129038e7c8308b62e04927b5b"},{url:"/images/kakaoLoginBtn.png",revision:"6945794b1e2006420e38ee44870732e4"},{url:"/images/naverLoginBtn.png",revision:"b28219c051ab9f96a5d26d3910c0051f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/svgs/category/animation.svg",revision:"d196e707c58b5f3b4eaa1ea357ff6c05"},{url:"/svgs/category/animationColor.svg",revision:"9bf1750009082b5d81c5925442d94153"},{url:"/svgs/category/animationGo.svg",revision:"4a0df6c8c000ead1f3350a083baf8119"},{url:"/svgs/category/baseball.svg",revision:"77d22eb8c090b046b9d34d15c96404c9"},{url:"/svgs/category/baseballColor.svg",revision:"4a675f44a3b72b7d2f19c083a331189b"},{url:"/svgs/category/baseballGo.svg",revision:"4a0df6c8c000ead1f3350a083baf8119"},{url:"/svgs/category/kpop.svg",revision:"67bd6980359405d2b4cd77b63a47d783"},{url:"/svgs/category/kpopColor.svg",revision:"173cae603de7818469ef61bbbef54870"},{url:"/svgs/category/kpopGo.svg",revision:"000ba2a550148e6a3eda8b00f3ee6a7a"},{url:"/svgs/duck/basicProfileDuck.svg",revision:"ae329e36e47315ed2b95c4cb3e71b9da"},{url:"/svgs/duck/biddingConfirmDuck.svg",revision:"795042a2cf64d3b08e8b92e6ea486b5e"},{url:"/svgs/duck/biddingDuck.svg",revision:"ebe6675333e64223acbecc0100e6eda9"},{url:"/svgs/duck/descriptionDuck.svg",revision:"3966eec70598559a4263fbf30d9d3400"},{url:"/svgs/duck/duckOne.svg",revision:"f7b18503e6e9be79ae9205bc68cec62e"},{url:"/svgs/duck/etcDuck.svg",revision:"6a67409cfc2621221a9b8a28a4adace5"},{url:"/svgs/duck/mainDuckPoint.svg",revision:"a13da7286ed2ea3586d656c80d89fc98"},{url:"/svgs/duck/mannerDuckLevel1.svg",revision:"c1229da036bca72df63b9d18e98ce1f5"},{url:"/svgs/duck/mannerDuckLevel2.svg",revision:"faf3939df603a5b52236b538dd75408b"},{url:"/svgs/duck/mannerDuckLevel3.svg",revision:"032a4c03fc70a15ed41d2fc5f017cd43"},{url:"/svgs/duck/mannerDuckLevel4.svg",revision:"0b9a665ea983c8e39b59a763b33afd19"},{url:"/svgs/duck/mannerDuckLevel5.svg",revision:"13efd99e8008b9de210890c2e77023d8"},{url:"/svgs/duck/noImageDuck.svg",revision:"487a9012cbc18035f3e03d325ce1a8e1"},{url:"/svgs/duck/nonProfileDuck.svg",revision:"0dc4b02b42063333978871032e8dd544"},{url:"/svgs/duck/prostrateDuck.svg",revision:"2a1abc02a0eb724859d1b8e44bd4876b"},{url:"/svgs/duck/sampleDuck.svg",revision:"0c7f46f0618381f9738f2775291e24c3"},{url:"/svgs/header/below_arrow.svg",revision:"55403349689124071b6fab02150cbf23"},{url:"/svgs/header/logo.svg",revision:"5c5fe31577aaa1f2728c436aa9defaa4"},{url:"/svgs/header/notification.svg",revision:"0f61ec67e9e3d065a79d89d3f2c02c1f"},{url:"/svgs/header/search.svg",revision:"1ae46a78234101d43bbe6ca09f3622a8"},{url:"/svgs/icon/backBtn.svg",revision:"d1996754fa7b7d2e9f73ff900c3a9c20"},{url:"/svgs/icon/checkFalse.svg",revision:"4426c2d47ecd31d067e75808bebeb86f"},{url:"/svgs/icon/checkTrue.svg",revision:"4bc0d59e2e99348f81fca1b026266065"},{url:"/svgs/icon/homeColor.svg",revision:"05417db0a4655a628fb4ad536db4248a"},{url:"/svgs/icon/likeFalse.svg",revision:"d9c5283ee2039de2b6bb072831634432"},{url:"/svgs/icon/likeTrue.svg",revision:"15160f62f33edf67d50b454a97e24292"},{url:"/svgs/icon/nextBtn.svg",revision:"619ff433cd68515ead49c921ff3546d3"},{url:"/svgs/icon/prevBtn.svg",revision:"4111bd796f770a0464b43d4ffb678f07"},{url:"/svgs/icon/profileImgBtn.svg",revision:"2b237a4743ce9e2744a62cdcb6b703ce"},{url:"/svgs/icon/remove.svg",revision:"89188ba23c2befa084042da91ba426ad"},{url:"/svgs/icon/verificationTime.svg",revision:"25d9ae27a83fdebc3daa34e0214eeaec"},{url:"/svgs/intro/introDuck.svg",revision:"09b29698a74e6419bc62e5286931406b"},{url:"/svgs/intro/title.svg",revision:"328dd9f1f89b2bfcb95585f8ae4ef91d"},{url:"/svgs/loginContour.svg",revision:"c432350a4ef66d3e98fbba096a2b42c0"},{url:"/svgs/loginDuck.svg",revision:"7813d75c5cb6d10707fabb273c18d5c1"},{url:"/svgs/nav/chat.svg",revision:"d16a6aba731e85de6654e6b293e878c8"},{url:"/svgs/nav/fullinquiry.svg",revision:"cd0942eab725096ee5d2fd6be673463b"},{url:"/svgs/nav/home.svg",revision:"ce4c35e44044f917574181fae0e6f768"},{url:"/svgs/nav/like.svg",revision:"7408b690587bad1b0e72da5998972867"},{url:"/svgs/nav/mypage.svg",revision:"e4d7f5db16b42798aa128779a88db87c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
