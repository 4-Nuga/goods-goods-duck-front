if (!self.define) {
  let e,
    s = {}
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (i, c) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[n]) return
    let t = {}
    const o = (e) => a(e, n),
      r = { module: { uri: n }, exports: t, require: o }
    s[n] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (c(...e), t))
  }
}
define(['./workbox-b1b34251'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '93aa5e7435778ef1573b7ef88806de38',
        },
        {
          url: '/_next/static/IuQhd4tOmlooqzj0IbP35/_buildManifest.js',
          revision: '6fbad686f1d634bff4a437ec93afbf9f',
        },
        {
          url: '/_next/static/IuQhd4tOmlooqzj0IbP35/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0069da5d-06a8e6a658b51865.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/03102c3f-a617eb6348bce7b2.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/06ff0236-165f7b776f15997b.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/0ab17c2b-237abbdd19c47364.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/1279-ee20a719356f53c4.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/263bbe58-03a3ae135fe9177c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/2c5441ed-49bbc05794884747.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/2cef071e-3813ec9a63675024.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/302-6dcd12c9fa57dc25.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/317-8ff79f638ab32dab.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/3238-868adc257a4f859b.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/3489197a-3f05c9f45309a610.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/3f4e57d2-8af750c674c316f1.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/416218ec-9b82ec063826676e.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/4177-5b6c93555a19b3cf.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/4412-b04eba35f0a16286.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/4893-866697cd2d9b90e4.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/5464-8f2465a24531c7e6.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/63dc9855-075bbaa894a0e895.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/66-0df77e9161737fed.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/6a7b169c-e582af19cb657e2f.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/7071-717eb36feb18c51c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/709-c715f791a379834f.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/7651-91be5d544247ccf4.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/8042fdf4-40be255204f2015c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/8206-bd41eb45c655380e.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/9166-fb6e4dbab13472f2.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/9369-7c3090d43f37529a.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/9753-2fc494df774496b9.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/9904-41b06f657ed37778.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/a80862c0-e407dc680ed127cf.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/ab3ca5da-11d0b3f527303e2a.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/layout-74eb818eb7a87851.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-list/page-06715c67ca016232.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(chat)/chat-room/%5BchatRoomId%5D/page-364c32165b4c4814.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/layout-1dedefd62dc938e9.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/%5BgoodsCode%5D/page-79cc4aa35fce30ce.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(goods)/goods/layout-7241755654d10003.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(goods)/registration/page-883bf8c8304a39f3.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(goods)/seller/page-5606809edf92f48a.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/goods/page-1c4cfedd5ba4560c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/animation/page-51846adeb00f5d51.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/goods/page-bd4a88c43b49bf98.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/baseball/page-f937324225c56937.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/goods/page-04f534badea7a4ab.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/idol/page-c39fd60cf1b9baab.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/layout-68cc93d431433fe0.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(main)/page-52fe3967d740f742.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(member)/find-info/page-a28c1d7e11e041eb.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(member)/join/page-18cba6fc717bfc03.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(member)/layout-5daa15547a8e9b4b.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/(member)/login/page-1fc19305c95e3c97.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-d714f45fbe62a18f.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/admin/layout-916148da9025a1ea.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/admin/page-0a47a1617a9fd2e6.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/duck-point/charge/page-ed5e1c3b1396bc1f.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/duck-point/details/page-f067842988632bca.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/duck-point/layout-f4bea0ff5c9dcfee.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/layout-dcfbc9613332776d.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/bid/page-63c067e411adc316.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/layout-c33d922bfae3a07c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/like/page-57a7946fc1bbec80.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/%5BnoticeId%5D/page-6f60f398861c318c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/notice/page-ebec1c9406f1548a.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/page-357c346877ca5809.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/reviews/page-860770d0c4b59b6c.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/sell/page-4a90ab4dfef12cca.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/settings/page-f9970ab1dd8d98b7.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-password/page-4c829dcb8d818599.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/update-profile/page-ea97709388183aa9.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/mypage/winning-bid/page-2762ba49f38bfcfd.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/notification/page-aaba3e2c5e613cae.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/app/review/page-54d00095b45b66f4.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/c516f14e-5b9f4e16b5d11302.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/de2bcb84-ffbfef8bdfc42518.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/ed28442d-c05d5f02b998286d.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/framework-9c75c43ff7b67089.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/main-app-09fd68f819717e65.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/main-be5313b8d5b85004.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/pages/_app-b31c2f3949fee873.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/pages/_error-a4a054c7bd637474.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-da8ce416a3e69bf4.js',
          revision: 'IuQhd4tOmlooqzj0IbP35',
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
              event: a,
              state: i,
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
