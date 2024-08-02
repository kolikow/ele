/**
 * 变量：elmck: 必填，账号cookie
 * cron 1 0,6,12,18,21 * * *
 * 需要手动玩到四级才能跑
 */

const $ = new Env('饿了么梦幻小院');

const {
   "getToken": getToken,
   "tryCatchPromise": tryCatchPromise,
   "getCookies": getCookies,
   "checkCk": checkCk,
   "getUserInfo": getUserInfo,
   "wait": wait
 } = require("./common.js");
 const _0xd960c1 = require("request");
 const md5 = require("md5");
 let _0x244760 = 1;
 let _0x22b780;
 async function _0x1d5d09(_0x37366f) {
   const _0x309187 = {
     "bizScene": "ELEME_ELMYLY",
     "instance": "INNER"
   };
   let _0x495e7d = await _0x768dee("mtop.alsc.playgame.common.real.name.authentication", _0x37366f, _0x309187);
   return _0x495e7d["authentication"];
 }
 async function _0x2eb09b(_0x4dbdaf) {
   const _0x1851a7 = new Date()["getTime"]();
   const _0x34e39f = {
     "body": "{\"nickname\":\"普通玩家\",\"avatar\":\"998d3ad143b581e8f2a3866c1f8a783cjpeg\",\"inviterId\":\"\",\"inviterType\":0,\"shareTime\":0,\"debug\":null,\"reqIdx\":" + _0x244760 + ",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/api/role/login",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x1851a7 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   let _0x4f8b6c = await _0x768dee("mtop.miniapp.cloud.application.request", _0x4dbdaf, _0x34e39f);
   if (_0x4f8b6c) {
     return _0x4f8b6c["data"];
   }
   return null;
 }
 async function _0xe6e63a(_0x3659dc) {
   const _0x239196 = new Date()["getTime"]();
   _0x244760++;
   const _0x4411d4 = {
     "body": "{\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/onlineB/api/game/getAllOpenActivityInfo",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x239196 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   return await _0x768dee("mtop.miniapp.cloud.application.request", _0x3659dc, _0x4411d4);
 }
 async function _0x54ec17(_0x27230d, _0x115188, _0x59c4d3, _0x1a1549 = 1014, _0x244913) {
   const _0x1b43f3 = new Date()["getTime"]();
   _0x244760++;
   const _0x5ecf44 = {
     "body": "{\"orderQueryId\":\"" + _0x115188 + "\",\"posArray\":" + JSON["stringify"](_0x59c4d3) + ",\"customerId\":\"" + _0x1a1549 + "\",\"type\":" + _0x244913 + ",\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/api/game/completeOrder",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x1b43f3 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   let _0x3e174f = await _0x768dee("mtop.miniapp.cloud.application.request", _0x27230d, _0x5ecf44);
   if (_0x3e174f) {
     let _0x9d72de = _0x3e174f["data"];
     if (!_0x9d72de) {
       console["log"](_0x3e174f);
       return null;
     }
     let _0x45eb13 = _0x9d72de["updatePieceArray"];
     if (_0x45eb13) {
       for (let _0x176335 = 0; _0x176335 < _0x45eb13["length"]; _0x176335++) {
         let _0x132eeb = _0x45eb13[_0x176335];
         for (let _0x49433f = 0; _0x49433f < _0xa8f67f["length"]; _0x49433f++) {
           let _0x4489d5 = _0xa8f67f[_0x49433f];
           if (_0x132eeb["pieceId"] === _0x4489d5["pieceId"]) {
             _0xa8f67f[_0x49433f] = _0x132eeb;
           }
         }
       }
     }
     let _0x498986 = _0x9d72de["ownCropMap"];
     if (_0x498986) {
       _0x22b780 = _0x498986;
     }
     if (_0x9d72de["orderArray"]) {
       _0xb0cda6 = _0x9d72de["orderArray"];
     }
   }
   return _0x3e174f;
 }
 async function _0x25c58b(_0x4cc044) {
   const _0x15b9ea = new Date()["getTime"]();
   _0x244760++;
   const _0x4a5bfa = {
     "body": "{\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/onlineB/api/task/getTasksList",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x15b9ea + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   let _0xc27a30 = await _0x768dee("mtop.miniapp.cloud.application.request", _0x4cc044, _0x4a5bfa);
   let _0x2cf1a5 = _0xc27a30["data"];
   if (_0x2cf1a5) {
     try {
       let _0x122251 = _0x2cf1a5["taskInfo"]["dailyTasks"];
       if (_0x122251) {
         for (const _0x1eea0c of Object["keys"](_0x122251)) {
           const _0x282ba3 = _0x122251[_0x1eea0c];
           if (_0x282ba3["type"] === 3 && !_0x282ba3["haveGotReward"]) {
             let _0x3b45e1 = await _0x100c7f(_0x4cc044, _0x1eea0c);
             if (_0x3b45e1["data"]) {
               console["log"]("领取任务奖励完成，当前乐园币", _0x3b45e1["data"]["elemCoin"]);
             } else {}
           }
         }
       }
     } catch (_0x3dbc0c) {}
   }
 }
 async function _0x100c7f(_0x85b4f3, _0x29751c) {
   const _0x461b55 = new Date()["getTime"]();
   _0x244760++;
   const _0x450a04 = {
     "body": "{\"taskId\":" + _0x29751c + ",\"taskType\":0,\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/api/task/getTaskAward",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x461b55 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   return await _0x768dee("mtop.miniapp.cloud.application.request", _0x85b4f3, _0x450a04);
 }
 async function _0x4338e2(_0x3470b3, _0xf1a2ea) {
   const _0x3bf80f = new Date()["getTime"]();
   _0x244760++;
   const _0x333999 = {
     "body": "{\"pos\":" + JSON["stringify"](_0xf1a2ea) + ",\"reqIdx\":" + _0x244760 + " ,\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/onlineB/api/game/cropSell",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x3bf80f + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   let _0x13ff62 = await _0x768dee("mtop.miniapp.cloud.application.request", _0x3470b3, _0x333999);
   if (_0x13ff62["data"]) {
     for (let _0x173e36 = 0; _0x173e36 < _0xa8f67f["length"]; _0x173e36++) {
       let _0x4818db = _0xa8f67f[_0x173e36];
       if (_0x13ff62["data"]["piece"]["pieceId"] === _0x4818db["pieceId"]) {
         _0xa8f67f[_0x173e36] = _0x13ff62["data"]["piece"];
       }
     }
     console["log"]("售卖植物，当前金币", _0x13ff62["data"]["coin"]);
   }
   return _0x13ff62;
 }
 async function _0x768dee(_0xe42167, _0x846f90, _0x3c14d6) {
   const _0x45d61d = {
     "accept": "application/json",
     "content-type": "application/x-www-form-urlencoded",
     "cookie": _0x846f90,
     "x-miniapp-id-taobao": "3000000088680964",
     "x-miniapp-version": "0.0.19",
     "x-mini-appkey": "34351764",
     "x-miniapp-env": "{\"nbsn\":\"ONLINE\",\"nbsource\":\"online\"}",
     "x-req-appkey": "34351764",
     "x-open-biz": "mini-app",
     "x-open-biz-data": "%7B%22appId%22%3A%223000000088680964%22%2C%22invokerAppId%22%3A%223000000088680964%22%2C%22viaFusionApp%22%3Atrue%7D",
     "x-exttype": "isv_open_api",
     "appid": "3000000088680964"
   };
   const _0x23aac9 = new Date()["getTime"]();
   const _0x11b19f = 34351764;
   const _0x43dafe = "data=" + encodeURIComponent(JSON["stringify"](_0x3c14d6));
   const _0x208fa6 = getToken(_0x846f90);
   const _0x93d6d4 = _0x208fa6["split"]('_')[0];
   const _0x8540c0 = md5(_0x93d6d4 + '&' + _0x23aac9 + '&' + _0x11b19f + '&' + JSON["stringify"](_0x3c14d6));
   const _0x2ba191 = {
     "url": "https://shopping.ele.me/h5/" + _0xe42167 + "/1.0/?jsv=2.6.1&appKey=34351764&t=" + _0x23aac9 + "&sign=" + _0x8540c0 + "&api=" + _0xe42167 + "&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
     "method": "POST",
     "headers": _0x45d61d,
     "body": _0x43dafe
   };
   return tryCatchPromise(_0x2911df => {
     _0xd960c1(_0x2ba191, async (_0x2299f1, _0x1cb3ee, _0x4e0376) => {
       if (!_0x2299f1 && _0x1cb3ee["statusCode"] == 200) {
         try {
           const _0x5a599c = JSON["parse"](_0x4e0376);
           _0x2911df(_0x5a599c["data"]["data"]);
         } catch (_0x36f649) {
           console["log"](_0x4e0376);
           _0x2911df(null);
         }
       } else {
         _0x2911df(null);
       }
     });
   });
 }
 let _0x1b7a8d;
 let _0x35bf66;
 let _0xa8f67f = [];
 let _0xb0cda6 = [];
 let _0x4399a0 = [];
 async function _0x31f56d(_0x438d96, _0x427368) {
   await _0xd42e5(_0x427368);
   await _0xe6e63a(_0x438d96);
   let _0x4942b8 = await _0x30b351(_0x438d96);
   while (_0x4942b8 === 0) {
     let _0xc5a491 = await _0x2eb09b(_0x438d96);
     await _0xd42e5(_0xc5a491);
     _0x4942b8 = await _0x30b351(_0x438d96);
   }
   await _0x25c58b(_0x438d96);
 }
 async function _0xd42e5(_0x5c2fe9) {
   _0x1b7a8d = null;
   _0x35bf66 = null;
   _0xa8f67f = [];
   _0xb0cda6 = [];
   _0x4399a0 = [];
   _0x1b7a8d = _0x5c2fe9["gameId"];
   _0x35bf66 = _0x5c2fe9["token"];
   _0x22b780 = _0x5c2fe9["cropInfo"]["ownCropMap"];
   let _0x35c178 = _0x5c2fe9["gardenInfo"]["checkerboard"];
   for (let _0x43f0c4 = 0; _0x43f0c4 < _0x35c178["length"]; _0x43f0c4++) {
     let _0x20c513 = _0x35c178[_0x43f0c4];
     for (let _0x2ac9ed = 0; _0x2ac9ed < _0x20c513["length"]; _0x2ac9ed++) {
       let _0xb962aa = _0x20c513[_0x2ac9ed];
       if (!_0xb962aa["isLock"]) {
         _0xa8f67f["push"](_0xb962aa);
       }
     }
   }
   Object["keys"](_0x22b780)["forEach"](_0x48b5e7 => {
     let _0x1b4b83 = _0x22b780[_0x48b5e7];
     if (_0x1b4b83["seeds"]["length"] > 0) {
       let _0x409985 = _0x3f4a47(_0x1b4b83["queryId"]);
       if (_0x409985) {
         _0x409985["seeds"] = _0x1b4b83["seeds"];
         _0x4399a0["push"](_0x409985);
       }
     }
   });
   _0xb0cda6 = _0x5c2fe9["orderInfo"]["orderArray"];
 }
 async function _0x1de15a(_0x313069, _0x1e6599, _0x553533) {
   let _0x46ed77 = true;
   let _0x4e2c17 = [];
   for (let _0x58ff2b = 0; _0x58ff2b < _0x313069["length"]; _0x58ff2b++) {
     let _0x253ba8 = _0x313069[_0x58ff2b];
     let _0x6b2252 = _0x1c2c8b(_0x253ba8);
     if (!_0x6b2252) {
       _0x46ed77 = false;
       break;
     } else {
       _0x4e2c17["push"](_0x6b2252["pos"]);
     }
   }
   if (_0x46ed77) {
     let _0x4ed096 = await _0x54ec17(_0x1e6599, _0x553533["queryId"], _0x4e2c17, _0x553533["customerId"], _0x553533["type"]);
     if (_0x4ed096) {
       console["log"]("完成订单，获得", _0x553533["orderValue"], '金币');
       return 3;
     }
   }
 }
 async function _0x3d9d6b(_0x18112d) {
   for (let _0x5a94ed = 0; _0x5a94ed < _0x4399a0["length"]; _0x5a94ed++) {
     let _0x104134 = _0x4399a0[_0x5a94ed];
     if (!_0x104134) {
       console["log"]("需要解锁新母体植物");
       return;
     }
     let _0x58e621 = [];
     for (let _0x103451 = 0; _0x103451 < _0xa8f67f["length"]; _0x103451++) {
       let _0x336da4 = _0xa8f67f[_0x103451];
       if (!_0x336da4["cropQueryId"]) {
         const _0x3f3134 = {
           "producedCrop": {},
           "type": 2,
           "pos1": _0x104134["pos"],
           "pos2": _0x336da4["pos"],
           "timestamp": new Date()["getTime"]()
         };
         _0x3f3134["producedCrop"]["queryId"] = _0x1a886c(_0x22b780, 1);
         _0x3f3134["producedCrop"]["cropId"] = _0x104134["seeds"][0];
         _0x58e621["push"](_0x3f3134);
       }
     }
     if (_0x58e621["length"] > 0) {
       console["log"]("开始种植新的植物");
       let _0x328dd7 = await _0x1024fc(_0x18112d, _0x58e621);
       if (_0x328dd7 === -1) {
         return -1;
       } else if (_0x328dd7 === 1 || _0x328dd7 == null) {
         continue;
       }
       return 0;
     }
   }
 }
 async function _0x30b351(_0x3bd27a) {
   for (let _0xa8b92d = 0; _0xa8b92d < _0xa8f67f["length"]; _0xa8b92d++) {
     let _0x2fb245 = _0xa8f67f[_0xa8b92d];
     if (_0x2fb245["cropQueryId"]) {
       if (_0x22b780[_0x2fb245["cropQueryId"]]["type"] === 1) {
         await _0x4338e2(_0x3bd27a, _0x2fb245["pos"]);
       }
     }
   }
   return await _0x3d9d6b(_0x3bd27a);
 }
 async function _0x3ed2e4(_0x5eb131) {
   const _0x190f14 = new Date()["getTime"]();
   _0x244760++;
   const _0x35ecd1 = {
     "body": "{\"type\":2,\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/onlineB/api/game/refresh",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x190f14 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
   };
   let _0x417f26 = await _0x768dee("mtop.miniapp.cloud.application.request", _0x5eb131, _0x35ecd1);
   return _0x417f26;
 }
 function _0x1c2c8b(_0x46007f) {
   for (let _0x11e4f8 = 0; _0x11e4f8 < _0xa8f67f["length"]; _0x11e4f8++) {
     let _0x28aa5d = _0xa8f67f[_0x11e4f8];
     let _0x3bb85d = _0x28aa5d["cropQueryId"];
     if (_0x3bb85d) {
       let _0x3286eb = _0x22b780[_0x3bb85d];
       if (_0x3286eb) {
         if (_0x3286eb['id'] === _0x46007f) {
           return _0x28aa5d;
         }
       }
     }
   }
   return null;
 }
 function _0x3f4a47(_0x1aea5d) {
   for (let _0x2605f4 = 0; _0x2605f4 < _0xa8f67f["length"]; _0x2605f4++) {
     let _0x4ed3d8 = _0xa8f67f[_0x2605f4];
     if (_0x4ed3d8["cropQueryId"] === _0x1aea5d) {
       return _0x4ed3d8;
     }
   }
   return null;
 }
 function _0x1a886c(_0x2b3714, _0xecfab1) {
   var _0xa54c9c = _0x40dc91(Date["now"](), Math["random"]());
   if (!_0x2b3714 || !_0x2b3714[_0xa54c9c] || !_0xecfab1 || _0xecfab1 <= 0) return _0xa54c9c;
   for (var _0x5c252f = 0; _0x5c252f < _0xecfab1; _0x5c252f++) {
     if (!_0x2b3714[_0xa54c9c = _0x40dc91(Date["now"](), Math["random"]())]) return _0xa54c9c;
     console["error"]("generate id failed, retry:" + (_0x5c252f + 1) + '/' + _0xecfab1);
   }
 }
 function _0x40dc91() {
   for (var _0x10372a = [], _0x2c7add = 0; _0x2c7add < arguments["length"]; _0x2c7add++) {
     _0x10372a[_0x2c7add] = arguments[_0x2c7add];
   }
   return md5(_0x10372a["join"]('+'))["toString"]();
 }
 async function _0x1024fc(_0x2e65b5, _0x3fff1b) {
   await wait(3);
   _0x244760++;
   let _0x2959d6 = JSON["stringify"](_0x3fff1b);
   const _0x2b1d94 = {
     "body": "{\"cmds\":" + _0x2959d6 + ",\"reqIdx\":" + _0x244760 + ",\"gameId\":\"" + _0x1b7a8d + "\",\"token\":\"" + _0x35bf66 + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.5.4\"}",
     "headers": "{\"content-type\":\"application/json;charset=UTF-8\"}",
     "instance": "INNER",
     "method": "POST",
     "options": "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
     "path": "/onlineB/api/game/cmdExec",
     "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + Date["now"]() + "\",\"mc-env\":\"online\",\"mc-network\":\"NOTREACHABLE\"}"
   };
   let _0x5a38ea = await _0x768dee("mtop.miniapp.cloud.application.request", _0x2e65b5, _0x2b1d94);
   if (_0x5a38ea) {
     let _0x4691e5 = _0x5a38ea["data"];
     if (!_0x4691e5) {
       console["log"](_0x5a38ea);
       return null;
     }
     if (_0x4691e5["dayUsedEnergyNum"]) {
       console["log"]("今日消耗的体力为：" + _0x4691e5["dayUsedEnergyNum"]);
       if (_0x4691e5["dayUsedEnergyNum"] > 299) {
         await _0x25c58b(_0x2e65b5);
         console["log"]("今日所有乐园币任务已完成");
         return -1;
       }
     }
     let _0x4af419 = _0x4691e5["changedPieceList"];
     if (_0x4af419["length"] === 0) {
       if (_0x4691e5["energy"] === 0) {
         console["log"]("体力不足");
         return -1;
       } else {
         console["log"]("种植失败，稍后重试");
         return 1;
       }
     }
     if (_0x4af419) {
       for (let _0x1a25ec = 0; _0x1a25ec < _0x4af419["length"]; _0x1a25ec++) {
         let _0x5017fe = _0x4af419[_0x1a25ec];
         for (let _0x55b2f2 = 0; _0x55b2f2 < _0xa8f67f["length"]; _0x55b2f2++) {
           let _0xd36e9 = _0xa8f67f[_0x55b2f2];
           if (_0x5017fe["pieceId"] === _0xd36e9["pieceId"]) {
             _0xa8f67f[_0x55b2f2] = _0x5017fe;
           }
         }
       }
     }
     let _0x59adef = _0x4691e5["changedCropMap"];
     if (_0x59adef) {
       Object["keys"](_0x59adef)["forEach"](_0x476275 => {
         if (_0x22b780[_0x476275]) {
           if (_0x59adef[_0x476275]["isDelete"]) {
             delete _0x22b780[_0x476275];
           } else {
             _0x22b780[_0x476275] = _0x59adef[_0x476275]["cropInfo"];
           }
         } else {
           _0x22b780[_0x476275] = _0x59adef[_0x476275]["cropInfo"];
         }
       });
     }
   }
   return _0x5a38ea;
 }
 async function _0x2b4a48() {
   const _0x122270 = getCookies();
   for (let _0x58e74c = 0; _0x58e74c < _0x122270["length"]; _0x58e74c++) {
     const _0xfb13b1 = _0x122270[_0x58e74c];
     if (!_0xfb13b1) {
       console["log"](" ❌无效用户信息, 请重新获取ck");
     } else {
       try {
         let _0xa95efd = await checkCk(_0xfb13b1, _0x58e74c);
         if (!_0xa95efd) {
           continue;
         }
         let _0x2003d5 = await getUserInfo(_0xa95efd);
         if (!_0x2003d5["username"]) {
           console["log"]('第', _0x58e74c + 1, "账号失效！请重新登录！！！😭");
           continue;
         }
         const _0x35e63c = _0x2003d5["user_id"];
         console["log"]("******开始【饿了么账号", _0x58e74c + 1, '】', _0x2003d5["username"], "*********");
         let _0x15d4ce = await _0x1d5d09(_0xa95efd);
         if (!_0x15d4ce) {
           console["log"]("请完成实名认证后再来玩游戏");
           continue;
         }
         let _0x4c52f9 = await _0x2eb09b(_0xa95efd);
         if (_0x4c52f9["gardenInfo"]["level"] < 4) {
           console["log"]("请先玩到 4 级再运行脚本");
           continue;
         }
         await _0x31f56d(_0xa95efd, _0x4c52f9);
       } catch (_0x4236b6) {
         console["log"](_0x4236b6);
       }
     }
   }
   process["exit"](0);
 }
 _0x2b4a48();
 
 // prettier-ignore
 function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
