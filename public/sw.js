if (!self.define) {
  let e,
    s = {}
  const c = (c, a) => (
    (c = new URL(c + '.js', a).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = c), (e.onload = s), document.head.appendChild(e)
        } else (e = c), importScripts(c), s()
      }).then(() => {
        let e = s[c]
        if (!e) throw new Error(`Module ${c} didn’t register its module`)
        return e
      })
  )
  self.define = (a, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let r = {}
    const t = (e) => c(e, n),
      d = { module: { uri: n }, exports: r, require: t }
    s[n] = Promise.all(a.map((e) => d[e] || t(e))).then((e) => (i(...e), r))
  }
}
define(['./workbox-dae32412'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'f2749642d6a34fba36c14bf4f278f58d',
        },
        {
          url: '/_next/static/47fdyIYIP3Qm7mrHKc5LM/_buildManifest.js',
          revision: '64c0e1293a66bfa7bee73628f8da8390',
        },
        {
          url: '/_next/static/47fdyIYIP3Qm7mrHKc5LM/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/14b82aa5-f7452bc10a32930d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/15be5694-08f184e62fe328e2.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/1969-49dfe9e43e5f1661.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/2130-907cae09ff1123af.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/2482-1daaa23e105c5ad1.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/281f4f84-2c8c5ad9cdda3bae.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/3326-cc3adda0c23ad3ea.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/3632-9b07cb747817d517.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/3903-f462af922288e456.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/39515de1-7f7859eca4704029.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/3b111db7-04f09c3b82d2511b.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/405-15725caed1c42f81.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/412c10f0-e1fd39eb1bb7910d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/4b9afa04-cf8b93242c6645ce.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/552c1bf5-b7a3f6545a2fb20c.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/5b5c93f0-3a759fd78944b162.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/6034-ef98289491133173.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/6362-02da18c7350a3966.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/7115-77ac25bcc6926955.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/7325-d63f990cac8d5d9a.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/7546-4a74510b9ca87530.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/760ccd9a-d1b3551f96e64969.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/8459-8beeee763b8c7751.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/8656-d93c94499e881c44.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/8960-ae1fc6d69ec19c5a.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/9476-b6693eecac892a48.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/9924-60ff386c77bf3347.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/a20c2d1d-0aee73dc07d48b7e.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/a4938abf-fc851fbd924b6f2b.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/layout-9d8f8ef18ca9b7a9.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/page-d764ae80375788ff.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-room/%5BchatRoomId%5D/page-0af474ff28b78af2.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/layout-062e3357651ed1e7.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/page-0de82350dffba991.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/layout-869f5a9a626bba55.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-8c94c08412ff2884.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-cdbb89c4ec34441d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/goods/page-1c3bd3ad381df826.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/page-828775274e8d1e30.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/goods/page-a74ebf11c91e948d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/page-e5286d79481775cf.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/goods/page-a3a5a9d834c3fd0c.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/page-a5bf996633f609f2.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/layout-f9be20d5c6b6d70a.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-3cbb61dc13d254b7.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(member)/find-info/page-663dc3315152a711.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-e92b851a083951d5.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-ec7a59fa4b1551af.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-0982f0f1e260ac16.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-2449a3b45739b31f.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/admin/layout-1804a95740f83b5b.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/admin/page-fedf8bbe306fa9db.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-2b9c68cb43590473.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-aa3e7dcea3b95971.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-4491bbb0f74d398e.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/layout-17c12c84fb254b40.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-ba3a12d55674264d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-298df71871cf3049.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-ea0fe6dc2d20a70d.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/%5BnoticeId%5D/page-5e85b563f4243169.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/page-e62d9b06cbcdde95.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-f66cd5b720d0b73a.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-90f396ccc84be485.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-4fd9aa2dc9bf6e01.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-c245334fd4897bb6.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-9a8a3a5ad36b6bec.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-c17c521e7a7060e4.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-f924130146636268.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/notification/page-d26125bed4e889ac.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/app/review/page-dac4150be762eed5.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/b81fb708-ff660351f6394f60.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/d30eb90b-3911e795acbd9405.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/d52d3f7c-99a1bb07f5d14a5f.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/d8314949-ffa95aa620711783.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/dfefeca3-6da5a42039872391.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/e6187ad7-8632a17a528b314c.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/framework-da6a81dd5b579b67.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/main-app-e0f34b90832d182e.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/main-d79726bf5cdeb16f.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/pages/_app-b26e549256c7f3c1.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/pages/_error-3c136c7e51d8bb7e.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-31d6cc2b1391217a.js',
          revision: '47fdyIYIP3Qm7mrHKc5LM',
        },
        {
          url: '/_next/static/css/2dba56124cb1947f.css',
          revision: '2dba56124cb1947f',
        },
        {
          url: '/_next/static/css/2ebb2afbe58660e0.css',
          revision: '2ebb2afbe58660e0',
        },
        {
          url: '/_next/static/css/cf493a8e9dde5eae.css',
          revision: 'cf493a8e9dde5eae',
        },
        {
          url: '/_next/static/media/30cd8f99d32fa6e8-s.woff2',
          revision: 'e5c1b944d9e3380a062bf911e26728a3',
        },
        {
          url: '/_next/static/media/36afab82570d46f2-s.p.woff2',
          revision: '89e9fd21dd55cebd3f5ee1dfcb5fdee0',
        },
        {
          url: '/_next/static/media/6b5949cea416cbec-s.woff2',
          revision: '49ae8484eae36f970a54ea3f90bfef3d',
        },
        {
          url: '/_next/static/media/830087706657ee0c-s.woff2',
          revision: '2ac088578e0e51e2fb14bc66a702b901',
        },
        {
          url: '/_next/static/media/8888a3826f4a3af4-s.p.woff2',
          revision: '792477d09826b11d1e5a611162c9797a',
        },
        {
          url: '/_next/static/media/b957ea75a84b6ea7-s.p.woff2',
          revision: '0bd523f6049956faaf43c254a719d06a',
        },
        {
          url: '/_next/static/media/c4f6d62acfbd94a2-s.woff2',
          revision: 'fbaccf16b5420fbc46534b4bcab47719',
        },
        {
          url: '/_next/static/media/c89e2f129f61ebdb-s.woff2',
          revision: '52b9b67fb64ff755e0fbb360c2933042',
        },
        {
          url: '/_next/static/media/f5767adec246cdc1-s.woff2',
          revision: '7a1c6501aa2b3327c1cf556362a851cb',
        },
        {
          url: '/fonts/Dovemayo_gothic.ttf',
          revision: 'ae2fcd5356e023ffa2edab25d2cdbe5e',
        },
        {
          url: '/icons/icon-114x114.png',
          revision: '105d1a171f88ab8454c9094bd7ed7ee2',
        },
        {
          url: '/icons/icon-120x120.png',
          revision: '96b94663b1c369db9dad37b917dec353',
        },
        {
          url: '/icons/icon-144x144.png',
          revision: '8c646cb8cd9c8c38873e5f510652f06a',
        },
        {
          url: '/icons/icon-152x152.png',
          revision: '31401096367cab65745f3281aea00502',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: '12f3b4ffe08d348dc38358d739dbb6e4',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: '4d4322e1b4a25bf30324286e58d787d9',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: '617d8bd990f88fb485fd51fdf47e9df6',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '7593aeca5b87d952850cc71501a268ee',
        },
        {
          url: '/icons/icon-57x57.png',
          revision: '3eaa97b4631c97a894c9a43ef98340e9',
        },
        {
          url: '/icons/icon-60x60.png',
          revision: '5c76162e24b063a2a9afe34c77f96901',
        },
        {
          url: '/icons/icon-72x72.png',
          revision: 'e52050e5f6fde11dc7416e93eb930f6a',
        },
        {
          url: '/icons/icon-76x76.png',
          revision: '2bb2def0345e68378d0b143a0b6e2513',
        },
        {
          url: '/icons/tempProfile.png',
          revision: 'cb3a0a5f154cb62f84e971ff48e44ef2',
        },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        {
          url: '/svgs/category/animationGo.svg',
          revision: '4a0df6c8c000ead1f3350a083baf8119',
        },
        {
          url: '/svgs/category/baseballGo.svg',
          revision: '4a0df6c8c000ead1f3350a083baf8119',
        },
        {
          url: '/svgs/category/kpopGo.svg',
          revision: '000ba2a550148e6a3eda8b00f3ee6a7a',
        },
        {
          url: '/svgs/duck/biddingConfirmDuck.svg',
          revision: '795042a2cf64d3b08e8b92e6ea486b5e',
        },
        {
          url: '/svgs/duck/biddingDuck.svg',
          revision: 'ebe6675333e64223acbecc0100e6eda9',
        },
        {
          url: '/svgs/duck/descriptionDuck.svg',
          revision: '3966eec70598559a4263fbf30d9d3400',
        },
        {
          url: '/svgs/duck/duckOne.svg',
          revision: 'f7b18503e6e9be79ae9205bc68cec62e',
        },
        {
          url: '/svgs/duck/etcDuck.svg',
          revision: '6a67409cfc2621221a9b8a28a4adace5',
        },
        {
          url: '/svgs/duck/falseReviewDuck.svg',
          revision: 'bc516f4264b3dbf446547b876980c17d',
        },
        {
          url: '/svgs/duck/mainDuckPoint.svg',
          revision: 'a13da7286ed2ea3586d656c80d89fc98',
        },
        {
          url: '/svgs/duck/noImageDuck.svg',
          revision: '487a9012cbc18035f3e03d325ce1a8e1',
        },
        {
          url: '/svgs/duck/nonProfileDuck.svg',
          revision: '0dc4b02b42063333978871032e8dd544',
        },
        {
          url: '/svgs/duck/prostrateDuck.svg',
          revision: '2a1abc02a0eb724859d1b8e44bd4876b',
        },
        {
          url: '/svgs/duck/reviewDuck.svg',
          revision: 'b367b805205eaac72fb95d27a78a3742',
        },
        {
          url: '/svgs/duck/sampleDuck.svg',
          revision: '0c7f46f0618381f9738f2775291e24c3',
        },
        {
          url: '/svgs/header/below_arrow.svg',
          revision: '55403349689124071b6fab02150cbf23',
        },
        {
          url: '/svgs/header/logo.svg',
          revision: '5c5fe31577aaa1f2728c436aa9defaa4',
        },
        {
          url: '/svgs/header/notification.svg',
          revision: '0f61ec67e9e3d065a79d89d3f2c02c1f',
        },
        {
          url: '/svgs/header/search.svg',
          revision: '1ae46a78234101d43bbe6ca09f3622a8',
        },
        {
          url: '/svgs/icon/backBtn.svg',
          revision: 'd1996754fa7b7d2e9f73ff900c3a9c20',
        },
        {
          url: '/svgs/icon/checkFalse.svg',
          revision: '4426c2d47ecd31d067e75808bebeb86f',
        },
        {
          url: '/svgs/icon/checkTrue.svg',
          revision: '4bc0d59e2e99348f81fca1b026266065',
        },
        {
          url: '/svgs/icon/homeColor.svg',
          revision: '05417db0a4655a628fb4ad536db4248a',
        },
        {
          url: '/svgs/icon/likeFalse.svg',
          revision: 'd9c5283ee2039de2b6bb072831634432',
        },
        {
          url: '/svgs/icon/likeTrue.svg',
          revision: '15160f62f33edf67d50b454a97e24292',
        },
        {
          url: '/svgs/icon/nextBtn.svg',
          revision: '619ff433cd68515ead49c921ff3546d3',
        },
        {
          url: '/svgs/icon/prevBtn.svg',
          revision: '4111bd796f770a0464b43d4ffb678f07',
        },
        {
          url: '/svgs/icon/profileImgBtn.svg',
          revision: '2b237a4743ce9e2744a62cdcb6b703ce',
        },
        {
          url: '/svgs/icon/remove.svg',
          revision: '89188ba23c2befa084042da91ba426ad',
        },
        {
          url: '/svgs/icon/verificationTime.svg',
          revision: '25d9ae27a83fdebc3daa34e0214eeaec',
        },
        {
          url: '/svgs/intro/introDuck.svg',
          revision: '09b29698a74e6419bc62e5286931406b',
        },
        {
          url: '/svgs/intro/title.svg',
          revision: '328dd9f1f89b2bfcb95585f8ae4ef91d',
        },
        {
          url: '/svgs/loginContour.svg',
          revision: 'c432350a4ef66d3e98fbba096a2b42c0',
        },
        {
          url: '/svgs/loginDuck.svg',
          revision: '7813d75c5cb6d10707fabb273c18d5c1',
        },
        {
          url: '/svgs/nav/chat.svg',
          revision: 'd16a6aba731e85de6654e6b293e878c8',
        },
        {
          url: '/svgs/nav/fullinquiry.svg',
          revision: 'cd0942eab725096ee5d2fd6be673463b',
        },
        {
          url: '/svgs/nav/home.svg',
          revision: 'ce4c35e44044f917574181fae0e6f768',
        },
        {
          url: '/svgs/nav/like.svg',
          revision: '7408b690587bad1b0e72da5998972867',
        },
        {
          url: '/svgs/nav/mypage.svg',
          revision: 'e4d7f5db16b42798aa128779a88db87c',
        },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})
