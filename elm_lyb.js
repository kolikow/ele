/**
 * @kolikow
 * 变量：elmck: 必填，账号cookie
 * cron: 47 0,8,10,14,18,22 * * *
 */

 const {
    sign,
    getToken,
    checkCk,
    getCookies,
    getUserInfo,
    validateCarmeWithType,
    checkCarmeCount,
    tryCatchPromise
  } = require("./common.js"),
  request = require("request"),
  {
    wait
  } = require("./common"),
  GAME_TYEP = 6,
  kami = process.env.ELE_CARME;
function isEmpty(_0x382618) {
  return Object.values(_0x382618).length === 0;
}
async function lottery(_0x441cb5) {
  const _0x25e489 = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://r.ele.me",
      "pragma": "no-cache",
      "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      "cookie": _0x441cb5,
      "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x1cf85f = {
      "actId": "20221207144029906162546384",
      "collectionId": "20230224114656384938530468",
      "componentId": "20230224114825216373367998",
      "bizScene": "game_center",
      "bizCode": "LOTTERY",
      "longitude": "120.21993197500706",
      "latitude": "30.178378857672215",
      "asac": "2A232091VOX6SPEQYH6RG4",
      "extParams": "{\"bizType\":\"LOTTERY\"}",
      "ua": "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=",
      "umidtoken": "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0="
    },
    _0x41dbe8 = new Date().getTime(),
    _0x190eeb = 12574478;
  var _0x43aab7 = "data=" + encodeURIComponent(JSON.stringify(_0x1cf85f));
  const _0x4e1126 = getToken(_0x441cb5),
    _0x396029 = _0x4e1126.split("_")[0],
    _0x325758 = await sign(_0x396029 + "&" + _0x41dbe8 + "&" + _0x190eeb + "&" + JSON.stringify(_0x1cf85f), kami),
    _0x5adac6 = {
      "url": "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x41dbe8 + "&sign=" + _0x325758 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
      "method": "POST",
      "headers": _0x25e489,
      "body": _0x43aab7
    };
  return tryCatchPromise(_0x5d4a35 => {
    request(_0x5adac6, async (_0x253d91, _0x3b3869, _0x4b2646) => {
      if (!_0x253d91 && _0x3b3869.statusCode === 200) {
        try {
          const _0x8a8fd5 = JSON.parse(_0x4b2646);
          if (isEmpty(_0x8a8fd5.data.data)) console.log(_0x8a8fd5.ret[0]), _0x5d4a35(false);else {
            if (_0x8a8fd5.data.data.errorMsg) console.log(_0x8a8fd5.data.data.errorMsg);else {
              let _0x373ece = _0x8a8fd5.data.data.sendRightList[0];
              const _0x559bcb = _0x373ece.materialInfo.description + _0x373ece.materialInfo.title;
              console.log(_0x559bcb);
            }
            _0x5d4a35(_0x8a8fd5);
          }
        } catch (_0x8f1071) {
          _0x5d4a35(false);
        }
      } else _0x5d4a35(false);
    });
  });
}
async function lyb_sign(_0x305fd4) {
  const _0x2fce18 = await checkCk(_0x305fd4),
    _0x5bce9d = {
      "authority": "mtop.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "asac": "2A21607NIIT1ND5C4YXJ6C",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://tb.ele.me",
      "pragma": "no-cache",
      "referer": "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
      "cookie": _0x2fce18,
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x15538e = new Date().getTime(),
    _0x22b3f9 = 12574478,
    _0x1e25c6 = {
      "bizScene": "game_center",
      "asac": "2A21607NIIT1ND5C4YXJ6C",
      "umidtoken": "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + _0x15538e
    };
  var _0x46a7a9 = "data=" + encodeURIComponent(JSON.stringify(_0x1e25c6));
  const _0xe8ad83 = getToken(_0x2fce18),
    _0x40ec19 = _0xe8ad83.split("_")[0],
    _0x4cd30d = await sign(_0x40ec19 + "&" + _0x15538e + "&" + _0x22b3f9 + "&" + JSON.stringify(_0x1e25c6), kami),
    _0x2dc385 = {
      "url": "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=" + _0x22b3f9 + "&t=" + _0x15538e + "&sign=" + _0x4cd30d + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141",
      "method": "POST",
      "headers": _0x5bce9d,
      "body": _0x46a7a9
    };
  return tryCatchPromise(_0x45bc29 => {
    request(_0x2dc385, async (_0x57cc5e, _0x1bd0c9, _0x3271dd) => {
      if (!_0x57cc5e && _0x1bd0c9.statusCode == 200) {
        const _0x423af2 = JSON.parse(_0x3271dd);
        _0x423af2.data.errorMsg ? console.log(_0x423af2.data.errorMsg) : console.log("签到成功");
        _0x45bc29(_0x423af2);
      } else _0x45bc29(null);
    });
  });
}
async function lyb_llk_token(_0x2ef95e) {
  const _0x4de1d6 = {
      "bizScene": "LIANLIANKAN",
      "bizMethod": "login",
      "bizParam": "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
      "longitude": 108.20482212920351,
      "latitude": 22.678892108345325
    },
    _0x4069f9 = await gameRequest(_0x2ef95e, _0x4de1d6);
  return _0x4069f9.data.token;
}
async function lyb_llk_gamecode(_0x573d6d, _0x79d754) {
  const _0x21aca0 = {
      "bizScene": "LIANLIANKAN",
      "bizMethod": "startGameV2",
      "bizParam": "{\"gameId\":null,\"token\":\"" + _0x79d754 + "\"}",
      "longitude": 108.20482212920351,
      "latitude": 22.678892108345325
    },
    _0x45c164 = await gameRequest(_0x573d6d, _0x21aca0);
  if (_0x45c164.bizErrorMsg != "success") return console.log(_0x45c164.bizErrorMsg), null;
  return _0x45c164.data.gameCode;
}
async function lyb_llk_passgame(_0x446a8d, _0x3b9f30, _0x3cc91c) {
  const _0x323574 = {
      "bizScene": "LIANLIANKAN",
      "bizMethod": "settlement",
      "bizParam": "{\"gameCode\":\"" + _0x3b9f30 + "\",\"passLevelTime\":40351,\"gameId\":null,\"token\":\"" + _0x3cc91c + "\"}"
    },
    _0x55a1fb = await gameRequest(_0x446a8d, _0x323574);
  if (_0x55a1fb.bizErrorMsg != "success") {
    return console.log(_0x55a1fb.bizErrorMsg), null;
  }
  return _0x55a1fb.data.lastLevelId;
}
async function gameRequest(_0x297e49, _0x2ae1e5) {
  const _0x1d72ff = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "origin": "https://r.ele.me",
      "pragma": "no-cache",
      "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
      "cookie": _0x297e49,
      "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
      "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
    },
    _0x49236a = new Date().getTime(),
    _0x3db99b = 12574478;
  var _0x48c4ab = "data=" + encodeURIComponent(JSON.stringify(_0x2ae1e5));
  const _0x3c7921 = getToken(_0x297e49),
    _0x29017c = _0x3c7921.split("_")[0],
    _0x25d63f = await sign(_0x29017c + "&" + _0x49236a + "&" + _0x3db99b + "&" + JSON.stringify(_0x2ae1e5), kami),
    _0x1db91b = {
      "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x49236a + "&sign=" + _0x25d63f + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
      "method": "POST",
      "headers": _0x1d72ff,
      "body": _0x48c4ab
    };
  return tryCatchPromise(_0x9faa2b => {
    request(_0x1db91b, async (_0x4f87cc, _0x2c6269, _0x101caa) => {
      if (!_0x4f87cc && _0x2c6269.statusCode == 200) {
        try {
          const _0x1652a3 = JSON.parse(_0x101caa),
            _0x25dc12 = JSON.parse(_0x1652a3.data.data);
          _0x9faa2b(_0x25dc12);
        } catch (_0x429949) {
          console.log(_0x101caa);
          _0x9faa2b(null);
        }
      } else {
        _0x9faa2b(null);
      }
    });
  });
}
async function llk_game(_0x381403, _0x612bc4) {
  const _0x13c747 = await lyb_llk_gamecode(_0x381403, _0x612bc4);
  if (_0x13c747) {
    const _0x10e546 = await lyb_llk_passgame(_0x381403, _0x13c747, _0x612bc4);
    _0x10e546 != 3 && (await llk_game(_0x381403, _0x612bc4));
  }
  return;
}
async function water_login(_0x214240) {
  const _0x5057ba = {
      "bizScene": "WATER_SORT",
      "bizParam": "{\"type\":\"login\"}",
      "bizMethod": "login"
    },
    _0x1b85d6 = await gameRequest(_0x214240, _0x5057ba);
  return _0x1b85d6;
}
async function water_game_success(_0x10ac67) {
  const _0x54cee7 = {
      "bizScene": "WATER_SORT",
      "bizParam": "{\"type\":\"gameSuccess\"}",
      "bizMethod": "gameSuccess"
    },
    _0x42623f = await gameRequest(_0x10ac67, _0x54cee7);
  return _0x42623f;
}
async function water_reward(_0x134550, _0x3d1051) {
  const _0xc51e55 = {
      "bizScene": "WATER_SORT",
      "bizParam": "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + _0x3d1051 + "\",\"type\":1}}",
      "bizMethod": "getPassPrize"
    },
    _0x4a4fa2 = await gameRequest(_0x134550, _0xc51e55);
  return _0x4a4fa2;
}
async function water_game(_0x2f8419) {
  const _0x3a526e = await water_login(_0x2f8419),
    _0x531a74 = _0x3a526e.passConf,
    _0x5bcad0 = [];
  for (let _0x230f41 of Object.values(_0x531a74)) {
    _0x5bcad0.push(_0x230f41.passNum);
  }
  var _0x57a513 = await water_game_success(_0x2f8419),
    _0x3d1956 = _0x57a513.info.todayPass,
    _0x2d2053 = 0;
  while (_0x3d1956 <= _0x5bcad0[_0x5bcad0.length - 1]) {
    _0x57a513 = await water_game_success(_0x2f8419);
    _0x3d1956 = _0x57a513.info.todayPass;
    console.log("欢乐倒水第" + _0x3d1956 + "关闯关成功");
    if (_0x5bcad0.includes(_0x3d1956)) {
      _0x2d2053 = _0x5bcad0.indexOf(_0x3d1956) + 1;
      const _0xefbff0 = await water_reward(_0x2f8419, _0x2d2053);
      console.log("获得：" + _0xefbff0.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x38e8d8 = getCookies();
  
  for (let _0x4dde97 = 0; _0x4dde97 < _0x38e8d8.length; _0x4dde97++) {
    const _0x2a66d2 = _0x38e8d8[_0x4dde97];
    if (!_0x2a66d2) console.log(" ❌无效用户信息, 请重新获取ck");else try {
      let _0x267afc = await checkCk(_0x2a66d2, _0x4dde97);
      if (!_0x267afc) continue;
      let _0x26d709 = await getUserInfo(_0x267afc);
      if (!_0x26d709.username) {
        console.log("第", _0x4dde97 + 1, "账号失效！请重新登录！！！😭");
        continue;
      }
      const _0x141662 = _0x26d709.user_id;
      await checkCarmeCount(kami, _0x141662, GAME_TYEP);
      console.log("******开始【饿了么账号", _0x4dde97 + 1, "】", _0x26d709.username, "*********");
      await lyb_sign(_0x267afc);
      await lottery(_0x267afc);
      const _0x57279d = await lyb_llk_token(_0x267afc);
      await llk_game(_0x267afc, _0x57279d);
      await water_game(_0x267afc);
      console.log("防止黑号延时20-30秒");
      await wait(getRandom(20, 30));
    } catch (_0x5974bf) {
      console.log(_0x5974bf);
    }
  }
  process.exit(0);
}
start();
function getRandom(_0x39379b, _0x3c6083) {
  return Math.floor(Math.random() * (_0x3c6083 - _0x39379b + 1) + _0x39379b);
}
function Env(_0x4e7acc, _0x4ece95) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4a95de {
    constructor(_0x6997a9) {
      this.env = _0x6997a9;
    }
    ["send"](_0x3d577b, _0x47a142 = "GET") {
      _0x3d577b = "string" == typeof _0x3d577b ? {
        "url": _0x3d577b
      } : _0x3d577b;
      let _0x497cde = this.get;
      return "POST" === _0x47a142 && (_0x497cde = this.post), new Promise((_0x188685, _0x21cdd5) => {
        _0x497cde.call(this, _0x3d577b, (_0x32a6ac, _0x35172f, _0x1cabfc) => {
          _0x32a6ac ? _0x21cdd5(_0x32a6ac) : _0x188685(_0x35172f);
        });
      });
    }
    ["get"](_0x48e91e) {
      return this.send.call(this.env, _0x48e91e);
    }
    ["post"](_0x54298c) {
      return this.send.call(this.env, _0x54298c, "POST");
    }
  }
  return new class {
    constructor(_0x556bac, _0x1a2cea) {
      this.name = _0x556bac;
      this.http = new _0x4a95de(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x1a2cea);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x3cff15, _0x1f3c3b = null) {
      try {
        return JSON.parse(_0x3cff15);
      } catch {
        return _0x1f3c3b;
      }
    }
    ["toStr"](_0x5a7e31, _0x3a5148 = null) {
      try {
        return JSON.stringify(_0x5a7e31);
      } catch {
        return _0x3a5148;
      }
    }
    ["getjson"](_0x4868b4, _0x5c4cbf) {
      let _0x45bfbf = _0x5c4cbf;
      const _0x59389a = this.getdata(_0x4868b4);
      if (_0x59389a) try {
        _0x45bfbf = JSON.parse(this.getdata(_0x4868b4));
      } catch {}
      return _0x45bfbf;
    }
    ["setjson"](_0x1de8ba, _0x466dfb) {
      try {
        return this.setdata(JSON.stringify(_0x1de8ba), _0x466dfb);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x4f6b6e) {
      return new Promise(_0x455825 => {
        this.get({
          "url": _0x4f6b6e
        }, (_0x3313cd, _0x45e310, _0x114fd8) => _0x455825(_0x114fd8));
      });
    }
    ["runScript"](_0x506b8c, _0x4bc570) {
      return new Promise(_0x2476f6 => {
        let _0x192b9a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x192b9a = _0x192b9a ? _0x192b9a.replace(/\n/g, "").trim() : _0x192b9a;
        let _0x74dce7 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x74dce7 = _0x74dce7 ? 1 * _0x74dce7 : 20;
        _0x74dce7 = _0x4bc570 && _0x4bc570.timeout ? _0x4bc570.timeout : _0x74dce7;
        const [_0x55529c, _0x24c45d] = _0x192b9a.split("@"),
          _0x31b9df = {
            "url": "http://" + _0x24c45d + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x506b8c,
              "mock_type": "cron",
              "timeout": _0x74dce7
            },
            "headers": {
              "X-Key": _0x55529c,
              "Accept": "*/*"
            }
          };
        this.post(_0x31b9df, (_0x2d2751, _0x5a10eb, _0x5a9e15) => _0x2476f6(_0x5a9e15));
      }).catch(_0x830f29 => this.logErr(_0x830f29));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x7fbf9d = this.path.resolve(this.dataFile),
          _0x645738 = this.path.resolve(process.cwd(), this.dataFile),
          _0x345226 = this.fs.existsSync(_0x7fbf9d),
          _0x85dd1a = !_0x345226 && this.fs.existsSync(_0x645738);
        if (!_0x345226 && !_0x85dd1a) return {};
        {
          const _0x57ac7b = _0x345226 ? _0x7fbf9d : _0x645738;
          try {
            return JSON.parse(this.fs.readFileSync(_0x57ac7b));
          } catch (_0x5bec7e) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x551cac = this.path.resolve(this.dataFile),
          _0x33b4fe = this.path.resolve(process.cwd(), this.dataFile),
          _0x440a02 = this.fs.existsSync(_0x551cac),
          _0x3eebc8 = !_0x440a02 && this.fs.existsSync(_0x33b4fe),
          _0x5a0c23 = JSON.stringify(this.data);
        _0x440a02 ? this.fs.writeFileSync(_0x551cac, _0x5a0c23) : _0x3eebc8 ? this.fs.writeFileSync(_0x33b4fe, _0x5a0c23) : this.fs.writeFileSync(_0x551cac, _0x5a0c23);
      }
    }
    ["lodash_get"](_0x15acb1, _0x54a032, _0x6d6933) {
      const _0x8fa81 = _0x54a032.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x13dd5d = _0x15acb1;
      for (const _0x3004c1 of _0x8fa81) if (_0x13dd5d = Object(_0x13dd5d)[_0x3004c1], void 0 === _0x13dd5d) return _0x6d6933;
      return _0x13dd5d;
    }
    ["lodash_set"](_0x584125, _0x319199, _0x4ade7c) {
      return Object(_0x584125) !== _0x584125 ? _0x584125 : (Array.isArray(_0x319199) || (_0x319199 = _0x319199.toString().match(/[^.[\]]+/g) || []), _0x319199.slice(0, -1).reduce((_0x6a49ac, _0x55a543, _0x5371fa) => Object(_0x6a49ac[_0x55a543]) === _0x6a49ac[_0x55a543] ? _0x6a49ac[_0x55a543] : _0x6a49ac[_0x55a543] = Math.abs(_0x319199[_0x5371fa + 1]) >> 0 == +_0x319199[_0x5371fa + 1] ? [] : {}, _0x584125)[_0x319199[_0x319199.length - 1]] = _0x4ade7c, _0x584125);
    }
    ["getdata"](_0x399f10) {
      let _0x52f1f7 = this.getval(_0x399f10);
      if (/^@/.test(_0x399f10)) {
        const [, _0x2391fe, _0x193958] = /^@(.*?)\.(.*?)$/.exec(_0x399f10),
          _0x4fb884 = _0x2391fe ? this.getval(_0x2391fe) : "";
        if (_0x4fb884) {
          try {
            const _0x1c3281 = JSON.parse(_0x4fb884);
            _0x52f1f7 = _0x1c3281 ? this.lodash_get(_0x1c3281, _0x193958, "") : _0x52f1f7;
          } catch (_0x282396) {
            _0x52f1f7 = "";
          }
        }
      }
      return _0x52f1f7;
    }
    ["setdata"](_0x271277, _0x2aad87) {
      let _0x8ba3c0 = false;
      if (/^@/.test(_0x2aad87)) {
        const [, _0x3d8031, _0xb2259f] = /^@(.*?)\.(.*?)$/.exec(_0x2aad87),
          _0x28e3ad = this.getval(_0x3d8031),
          _0xde413f = _0x3d8031 ? "null" === _0x28e3ad ? null : _0x28e3ad || "{}" : "{}";
        try {
          const _0xec890 = JSON.parse(_0xde413f);
          this.lodash_set(_0xec890, _0xb2259f, _0x271277);
          _0x8ba3c0 = this.setval(JSON.stringify(_0xec890), _0x3d8031);
        } catch (_0xe6d5af) {
          const _0x367e33 = {};
          this.lodash_set(_0x367e33, _0xb2259f, _0x271277);
          _0x8ba3c0 = this.setval(JSON.stringify(_0x367e33), _0x3d8031);
        }
      } else _0x8ba3c0 = this.setval(_0x271277, _0x2aad87);
      return _0x8ba3c0;
    }
    ["getval"](_0x26e052) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x26e052) : this.isQuanX() ? $prefs.valueForKey(_0x26e052) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x26e052]) : this.data && this.data[_0x26e052] || null;
    }
    ["setval"](_0x424ab7, _0x39f57d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x424ab7, _0x39f57d) : this.isQuanX() ? $prefs.setValueForKey(_0x424ab7, _0x39f57d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x39f57d] = _0x424ab7, this.writedata(), !0) : this.data && this.data[_0x39f57d] || null;
    }
    ["initGotEnv"](_0x13e8b0) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x13e8b0 && (_0x13e8b0.headers = _0x13e8b0.headers ? _0x13e8b0.headers : {}, void 0 === _0x13e8b0.headers.Cookie && void 0 === _0x13e8b0.cookieJar && (_0x13e8b0.cookieJar = this.ckjar));
    }
    ["get"](_0x33e617, _0x1b4e79 = () => {}) {
      _0x33e617.headers && (delete _0x33e617.headers["Content-Type"], delete _0x33e617.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x33e617.headers = _0x33e617.headers || {}, Object.assign(_0x33e617.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x33e617, (_0x1c8d07, _0x19d8dc, _0x5a0239) => {
        !_0x1c8d07 && _0x19d8dc && (_0x19d8dc.body = _0x5a0239, _0x19d8dc.statusCode = _0x19d8dc.status);
        _0x1b4e79(_0x1c8d07, _0x19d8dc, _0x5a0239);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x33e617.opts = _0x33e617.opts || {}, Object.assign(_0x33e617.opts, {
        "hints": !1
      })), $task.fetch(_0x33e617).then(_0x3b0ec7 => {
        const {
          statusCode: _0x395f74,
          statusCode: _0x217c90,
          headers: _0x311792,
          body: _0xed4107
        } = _0x3b0ec7;
        _0x1b4e79(null, {
          "status": _0x395f74,
          "statusCode": _0x217c90,
          "headers": _0x311792,
          "body": _0xed4107
        }, _0xed4107);
      }, _0x5e056f => _0x1b4e79(_0x5e056f))) : this.isNode() && (this.initGotEnv(_0x33e617), this.got(_0x33e617).on("redirect", (_0x32b6be, _0x573bdd) => {
        try {
          if (_0x32b6be.headers["set-cookie"]) {
            const _0x652696 = _0x32b6be.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x652696 && this.ckjar.setCookieSync(_0x652696, null);
            _0x573bdd.cookieJar = this.ckjar;
          }
        } catch (_0x3090e) {
          this.logErr(_0x3090e);
        }
      }).then(_0x46786d => {
        const {
          statusCode: _0x5c8ac2,
          statusCode: _0x380e08,
          headers: _0x3e570a,
          body: _0x324a10
        } = _0x46786d;
        _0x1b4e79(null, {
          "status": _0x5c8ac2,
          "statusCode": _0x380e08,
          "headers": _0x3e570a,
          "body": _0x324a10
        }, _0x324a10);
      }, _0x216cbd => {
        const {
          message: _0x290614,
          response: _0x50393a
        } = _0x216cbd;
        _0x1b4e79(_0x290614, _0x50393a, _0x50393a && _0x50393a.body);
      }));
    }
    ["post"](_0x177610, _0x448d0a = () => {}) {
      if (_0x177610.body && _0x177610.headers && !_0x177610.headers["Content-Type"] && (_0x177610.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x177610.headers && delete _0x177610.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x177610.headers = _0x177610.headers || {}, Object.assign(_0x177610.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x177610, (_0x36f8bd, _0x29502b, _0x35a44f) => {
        !_0x36f8bd && _0x29502b && (_0x29502b.body = _0x35a44f, _0x29502b.statusCode = _0x29502b.status);
        _0x448d0a(_0x36f8bd, _0x29502b, _0x35a44f);
      });else {
        if (this.isQuanX()) _0x177610.method = "POST", this.isNeedRewrite && (_0x177610.opts = _0x177610.opts || {}, Object.assign(_0x177610.opts, {
          "hints": !1
        })), $task.fetch(_0x177610).then(_0x888294 => {
          const {
            statusCode: _0x1547a9,
            statusCode: _0xc9fee8,
            headers: _0x2d35cb,
            body: _0xa7fc3a
          } = _0x888294;
          _0x448d0a(null, {
            "status": _0x1547a9,
            "statusCode": _0xc9fee8,
            "headers": _0x2d35cb,
            "body": _0xa7fc3a
          }, _0xa7fc3a);
        }, _0x3d5ae0 => _0x448d0a(_0x3d5ae0));else {
          if (this.isNode()) {
            this.initGotEnv(_0x177610);
            const {
              url: _0x469e96,
              ..._0x1d0ef0
            } = _0x177610;
            this.got.post(_0x469e96, _0x1d0ef0).then(_0x340e94 => {
              const {
                statusCode: _0x5d2205,
                statusCode: _0x112690,
                headers: _0x5db16d,
                body: _0x3b6a2e
              } = _0x340e94;
              _0x448d0a(null, {
                "status": _0x5d2205,
                "statusCode": _0x112690,
                "headers": _0x5db16d,
                "body": _0x3b6a2e
              }, _0x3b6a2e);
            }, _0x41f9e8 => {
              const {
                message: _0x578987,
                response: _0x512231
              } = _0x41f9e8;
              _0x448d0a(_0x578987, _0x512231, _0x512231 && _0x512231.body);
            });
          }
        }
      }
    }
    ["time"](_0x4831bc, _0x5e3526 = null) {
      const _0x5d1bc8 = _0x5e3526 ? new Date(_0x5e3526) : new Date();
      let _0x48ec92 = {
        "M+": _0x5d1bc8.getMonth() + 1,
        "d+": _0x5d1bc8.getDate(),
        "H+": _0x5d1bc8.getHours(),
        "m+": _0x5d1bc8.getMinutes(),
        "s+": _0x5d1bc8.getSeconds(),
        "q+": Math.floor((_0x5d1bc8.getMonth() + 3) / 3),
        "S": _0x5d1bc8.getMilliseconds()
      };
      /(y+)/.test(_0x4831bc) && (_0x4831bc = _0x4831bc.replace(RegExp.$1, (_0x5d1bc8.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xc8b309 in _0x48ec92) new RegExp("(" + _0xc8b309 + ")").test(_0x4831bc) && (_0x4831bc = _0x4831bc.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x48ec92[_0xc8b309] : ("00" + _0x48ec92[_0xc8b309]).substr(("" + _0x48ec92[_0xc8b309]).length)));
      return _0x4831bc;
    }
    ["msg"](_0x28c9bd = _0x4e7acc, _0x2b6479 = "", _0x5ed616 = "", _0x1a4f3e) {
      const _0xf81196 = _0x1f4a44 => {
        if (!_0x1f4a44) {
          return _0x1f4a44;
        }
        if ("string" == typeof _0x1f4a44) return this.isLoon() ? _0x1f4a44 : this.isQuanX() ? {
          "open-url": _0x1f4a44
        } : this.isSurge() ? {
          "url": _0x1f4a44
        } : void 0;
        if ("object" == typeof _0x1f4a44) {
          if (this.isLoon()) {
            let _0x337882 = _0x1f4a44.openUrl || _0x1f4a44.url || _0x1f4a44["open-url"],
              _0x34a658 = _0x1f4a44.mediaUrl || _0x1f4a44["media-url"];
            return {
              "openUrl": _0x337882,
              "mediaUrl": _0x34a658
            };
          }
          if (this.isQuanX()) {
            let _0x8acda0 = _0x1f4a44["open-url"] || _0x1f4a44.url || _0x1f4a44.openUrl,
              _0x4543cd = _0x1f4a44["media-url"] || _0x1f4a44.mediaUrl;
            return {
              "open-url": _0x8acda0,
              "media-url": _0x4543cd
            };
          }
          if (this.isSurge()) {
            let _0x556691 = _0x1f4a44.url || _0x1f4a44.openUrl || _0x1f4a44["open-url"];
            return {
              "url": _0x556691
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x28c9bd, _0x2b6479, _0x5ed616, _0xf81196(_0x1a4f3e)) : this.isQuanX() && $notify(_0x28c9bd, _0x2b6479, _0x5ed616, _0xf81196(_0x1a4f3e))), !this.isMuteLog) {
        let _0xd44020 = ["", "==============📣系统通知📣=============="];
        _0xd44020.push(_0x28c9bd);
        _0x2b6479 && _0xd44020.push(_0x2b6479);
        _0x5ed616 && _0xd44020.push(_0x5ed616);
        console.log(_0xd44020.join("\n"));
        this.logs = this.logs.concat(_0xd44020);
      }
    }
    ["log"](..._0x358b6d) {
      _0x358b6d.length > 0 && (this.logs = [...this.logs, ..._0x358b6d]);
      console.log(_0x358b6d.join(this.logSeparator));
    }
    ["logErr"](_0x16f1d2, _0xabf972) {
      const _0x51a71c = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x51a71c ? this.log("", "❗️" + this.name + ", 错误!", _0x16f1d2.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x16f1d2);
    }
    ["wait"](_0x39f9b7) {
      return new Promise(_0x57a319 => setTimeout(_0x57a319, _0x39f9b7));
    }
    ["done"](_0x3942bc = {}) {
      const _0x36cb4f = new Date().getTime(),
        _0x48cfca = (_0x36cb4f - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x48cfca + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3942bc);
    }
  }(_0x4e7acc, _0x4ece95);
} const $ = new Env('饿了么乐园币');
