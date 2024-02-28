importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"7ba7fe6ccf634c30d31e0e2b1564d6c7","url":"contributors.html"},{"revision":"6ee82e0d25e7350662d6a44119c3ea21","url":"feedback.html"},{"revision":"0f71c5cd07b31c79861935fee87564ed","url":"images/bevelgear.png"},{"revision":"0838acd5a1d020a272e7c764335650e3","url":"images/conn.png"},{"revision":"8b0f63073511ebf6b54564ca6482c6ed","url":"images/conn2.png"},{"revision":"04b34079d7f2a41630614a146d692e29","url":"images/fig8.png"},{"revision":"e6d40b063f96fb48b4699f95eafd1ac0","url":"images/fm4.png"},{"revision":"3606f7aa0d16b84d4a585c9073df7ef5","url":"images/gear.jpg"},{"revision":"7c195953d6abca4f85c92aa6d29391c7","url":"images/gearnomen.png"},{"revision":"9619f229c7b59a34589ccac8b16953c7","url":"images/gearspan.png"},{"revision":"58f24baa2ab46d5cf38963775cf193e0","url":"images/geartooth.png"},{"revision":"89f977558704c63389b99c05a77d5b4c","url":"images/helicalgear.png"},{"revision":"6cf743a3b0684170bcd0301a31d56249","url":"images/iitkgp.png"},{"revision":"6d01899607fb498bb1a343db60532014","url":"images/involute.png"},{"revision":"87e02ea16195289fd105d63dc38d2967","url":"images/pinion.png"},{"revision":"ef814b23321c151716cce7289bddcd77","url":"images/spurgear.png"},{"revision":"010ec4d8fea845667ac17ff7f9303d3b","url":"images/vlabs.png"},{"revision":"2d32ebf07d1567fcb1ff657dee946750","url":"images/wormgear.png"},{"revision":"604c566326892c8c59eb3a691f505a37","url":"index.html"},{"revision":"48642c422286d896577b9ce15401331d","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a0cf3e9d9fddb07ac50c1dda58a488f6","url":"posttest.html"},{"revision":"a9f0312608dbc5f41ba53cb7c76a4295","url":"posttest.json"},{"revision":"6113612ff155c5420e06ebebb7832c5d","url":"pretest.html"},{"revision":"1a63dd79b7157c25eb8d33b576ac23e4","url":"pretest.json"},{"revision":"07bfeb66caf53260ea444a4d1bc202b4","url":"procedure.html"},{"revision":"b02012649249dade659b22c6b2662ca1","url":"references.html"},{"revision":"4ddda900445a1ce32d27a571473510b2","url":"simulation.html"},{"revision":"0fa363b7be490bd9cecdd04fb1eba20f","url":"simulation/css/geartooth.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"8cee032d2f0b74961e7ea49600906791","url":"simulation/images/fm1.png"},{"revision":"483d6337a6075e8bb4a9f8192613c9ad","url":"simulation/images/fm2.png"},{"revision":"226ede71e3c3ef77a0d2b270a9df786c","url":"simulation/images/fm3.png"},{"revision":"85979e5ac846e9d64671c835182a6573","url":"simulation/images/fm4.png"},{"revision":"f97490f3aeb6d0338311172def4aed18","url":"simulation/images/fmfixed.png"},{"revision":"380ada2044a4a835a375fc369e08a22e","url":"simulation/images/fmfixed2.png"},{"revision":"1b7abbd59ec6d4b11e1ecffcd225188c","url":"simulation/images/fmls.png"},{"revision":"4706e14051f37f8c4f714d9d28f31b83","url":"simulation/images/fmmove.png"},{"revision":"24be28c61270b9fc3dcc57009af533e1","url":"simulation/images/gear.png"},{"revision":"c369005eee50d92c27b6d867ebda4713","url":"simulation/images/gear2.png"},{"revision":"4c805651d4edf13d5d2867f1d45f63d1","url":"simulation/images/mjh.png"},{"revision":"e4b3850c98f59eb8a45324010f7407e2","url":"simulation/images/mjv.png"},{"revision":"426bf3a12229ad227ebb9904746f1223","url":"simulation/images/mjvprt.png"},{"revision":"1a08ce0afb7394816f27f24391b155e1","url":"simulation/images/mmgauge.png"},{"revision":"e75663a1d53d8b02fca219eeab87d21b","url":"simulation/images/ratchet.png"},{"revision":"b83f0a75a3d5c06479d17287d94bd484","url":"simulation/images/Ruler_with_millimeter_and_centimeter_marks.png"},{"revision":"f2760ec0328ed17efea4c96dddbb4187","url":"simulation/images/vernier.png"},{"revision":"ec4a1167480f850aad42961ce58a9f49","url":"simulation/images/vernier2.png"},{"revision":"257574d60ca6b0cff1b6ca89cfbc1853","url":"simulation/index_span.html"},{"revision":"f2d701b959a6cf8518f88e850d8e0c16","url":"simulation/index.html"},{"revision":"196114589053aa7399dc5eca930c06e1","url":"simulation/js/dw_tester.js"},{"revision":"d87871ee422bbbf7929017f8bbdfc394","url":"simulation/js/geartooth.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"797a97a0c955beeaba487dd25d3831bc","url":"theory.html"},{"revision":"5bda64de6c9d649753f476073766c49a","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );