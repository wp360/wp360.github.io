/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "390c0beb1e2a7b20bda5e636030bf0d6"
  },
  {
    "url": "about/index.html",
    "revision": "c4a8d4e38646c2a3d6c78cf9cf33ecc0"
  },
  {
    "url": "assets/css/0.styles.013cd9ed.css",
    "revision": "2a93ffad28bc9fd31a6cc43987d8c8e3"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.64e93583.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "assets/img/loading.9111579b.svg",
    "revision": "9111579b51f5dedc91eec1a9b4228a9f"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.75dfb1db.js",
    "revision": "75d2eb5e952441379c2d318ac161124e"
  },
  {
    "url": "assets/js/10.e4c5a485.js",
    "revision": "a47bfb2430bed450fcb0b7bd4e919bdf"
  },
  {
    "url": "assets/js/11.78d64ef2.js",
    "revision": "4f5396df76bf8b5b1a64dfa04e9b826e"
  },
  {
    "url": "assets/js/12.e83c49cf.js",
    "revision": "74e73a9b2e7dcdeb38a4f7a632a3ba08"
  },
  {
    "url": "assets/js/13.2ec5b537.js",
    "revision": "83abc0f6309a7c49f778eab48613e294"
  },
  {
    "url": "assets/js/14.be77ca87.js",
    "revision": "44a9bba1e6a0f726224dc515dc924bd5"
  },
  {
    "url": "assets/js/15.eea608df.js",
    "revision": "fec5627eded527ef28e0a3a9d98916a8"
  },
  {
    "url": "assets/js/16.728b1979.js",
    "revision": "1ebe9ca9ce83a8556a5f787e935bbdc4"
  },
  {
    "url": "assets/js/17.58f41cda.js",
    "revision": "8094225f77af95c5a1ced6942031de61"
  },
  {
    "url": "assets/js/18.5cccff9f.js",
    "revision": "562989726be71a0227739ee668a20d78"
  },
  {
    "url": "assets/js/19.092f2268.js",
    "revision": "524a9f804a48cdcf97b38ea8e66e109c"
  },
  {
    "url": "assets/js/2.77ce1ca6.js",
    "revision": "d7a52007a002992bdd346585b877580a"
  },
  {
    "url": "assets/js/20.1a88b036.js",
    "revision": "2fe10a8be1d1b6548ab64ea0057703de"
  },
  {
    "url": "assets/js/21.d828f886.js",
    "revision": "41fdbe46f5f0eb9562dad371cab4a138"
  },
  {
    "url": "assets/js/22.3ec8d9e1.js",
    "revision": "a3693be689ba1d37ecd7a0fc50ed55e4"
  },
  {
    "url": "assets/js/23.ec490cfc.js",
    "revision": "0a5a2606c45f81f334f11f74a396a10a"
  },
  {
    "url": "assets/js/24.960fade3.js",
    "revision": "ae3be77949d809da1a13398e00fb96e9"
  },
  {
    "url": "assets/js/25.4032d81c.js",
    "revision": "1c9493cd7d465ebaebd68a319ebaf6f6"
  },
  {
    "url": "assets/js/26.56a7a51e.js",
    "revision": "406589a8f1fcff16384c16f9366b43ed"
  },
  {
    "url": "assets/js/27.b19d8e28.js",
    "revision": "f4706518b911231d9d50bb00f05b8671"
  },
  {
    "url": "assets/js/5.bd9053d6.js",
    "revision": "d100c2b024db51c108db627ec4615c87"
  },
  {
    "url": "assets/js/6.f11f9331.js",
    "revision": "6e135fe1260057f675d2bd09d43bc6ac"
  },
  {
    "url": "assets/js/7.ba208253.js",
    "revision": "72c9a7b91b255541b0aaed77974fe853"
  },
  {
    "url": "assets/js/8.b6f2e3d4.js",
    "revision": "2463492ef89fddd027a48754f2730845"
  },
  {
    "url": "assets/js/9.295e1110.js",
    "revision": "7482455011cb23183812c4455dfe49e4"
  },
  {
    "url": "assets/js/app.852f14f6.js",
    "revision": "10ce02fb4b2ca0c41cf3a23da004e237"
  },
  {
    "url": "assets/js/vendors~flowchart.134e9eef.js",
    "revision": "f018ec5304da1c3c0c264fd2112eab2f"
  },
  {
    "url": "categories/index.html",
    "revision": "c2880e13da5ba1620b03c614f5fba8e9"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20cbe345ef5618f29f524f50534a390d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "524b663eabf1691f760770f73c5a4748"
  },
  {
    "url": "categories/规范/index.html",
    "revision": "205912b42e07183d342f215ead2a74e8"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "9a49f56bd65231f81c389ca759333f47"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "e4f97a8e278e3c3bd356937e5018890c"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "64e93583d169a901a7d3a20a21707202"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/backEnd/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/rabbitmq/mq001.png",
    "revision": "06c224d930a517e0c68f6db2032e4a07"
  },
  {
    "url": "img/rabbitmq/mq002.png",
    "revision": "4dee5cf620627c17c267d1a033d7ca86"
  },
  {
    "url": "img/rabbitmq/mq003.png",
    "revision": "ffb23d11d23ddbd85c04820b3d016cc6"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/redis02.png",
    "revision": "c48e246e53e5d501cd0fcbdf87258d33"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "87bb2ec94052e9eaf27bddcb966e3882"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "other/project.html",
    "revision": "ae567654069216430124c01005d17c36"
  },
  {
    "url": "tag/index.html",
    "revision": "31a50d681170ad73fc27abfa4a137dc3"
  },
  {
    "url": "tags/node/index.html",
    "revision": "9512db9cb88b839613de98a2dd07e988"
  },
  {
    "url": "tags/React/index.html",
    "revision": "a1da6c2aebe73cf282a0abd63d498e38"
  },
  {
    "url": "tags/前端/index.html",
    "revision": "f1e938f8f0a014e85348d3d6a3b19bad"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "9cab9ca7e5dc70fb2453ba285de174d9"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "29bbceb35a9a3d8b8e603a2c91a3ce5d"
  },
  {
    "url": "timeline/index.html",
    "revision": "e86996266c329d4ae3cd5d42fc3eb079"
  },
  {
    "url": "views/back-end/node.html",
    "revision": "9f382dba85f0d362310181be7fbc29d1"
  },
  {
    "url": "views/essay/20190711.html",
    "revision": "05c68de8494a00e536a6288ab1111592"
  },
  {
    "url": "views/front-end/ReactProduct.html",
    "revision": "4f1d6775414f0002497047ade727f2de"
  },
  {
    "url": "views/index.html",
    "revision": "3a0806631575a1c3463f975e3a04e4e9"
  },
  {
    "url": "views/specification/yahoo35.html",
    "revision": "22c7aea3c12c6357fcd888e2f7de26fd"
  },
  {
    "url": "vuepress/avatar.png",
    "revision": "3ff115722102bf0e5621724f65076a80"
  },
  {
    "url": "vuepress/head.jpg",
    "revision": "a7ae1c0e7657767bbf46be84ca25edc6"
  },
  {
    "url": "vuepress/topic.jpg",
    "revision": "9f363d4711e251605c7b60c14cffc6c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
