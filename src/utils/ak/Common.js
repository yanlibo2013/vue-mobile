/**
 * 开发环境
 * @type {{HTTP: string, SERVER_PATH: string, PORT: number}}
 */

const host = window.location.host

// 本项目中的服务
const HTTP = {
  'DEV': 'http://',
  'TEST': 'http://',
  'ONLINE': 'http://'
}
const SERVER_PATH = {
  'DEV': '139.224.145.118',
  'TEST': 'ceshi.router.zhongyuanib.com',
  'ONLINE': 'router.zhongyuanib.com'
}
const PORT = {
  'DEV': '8905',
  'TEST': '8905',
  'ONLINE': '8905'
}

//编码接口公共服务
const HTTP2 = {
  'DEV': 'https://',
  'TEST': 'https://',
  'ONLINE': 'https://'
}
const SERVER_PATH2 = {
  'DEV': 'ceshi.router.zhongyuanib.com:13443',
  // 'DEV': 'router.zhongyuanib.com',
  'TEST': 'ceshi.router.zhongyuanib.com:13443',
  'ONLINE': 'router.zhongyuanib.com',
  // 'DEV': 'router.zhongyuanib.com',
  // 'TEST': 'router.zhongyuanib.com',
  // 'ONLINE': 'router.zhongyuanib.com'
}

const PORT2 = {
  'DEV': '8081',
  'TEST':'13443',
  'ONLINE': '8081'
}

// 公共服务接口
const HTTP3 = {
  'DEV': 'http://',
  'TEST': 'https://',
  'ONLINE': 'https://'
}
const SERVER_PATH3 = {
  'DEV': 'test.utils.aibaoxian.com',
  'TEST': 'utils.aibaoxian.com',
  'ONLINE': 'utils.aibaoxian.com'
}
const PORT3 = {
  'DEV': '8081',
  'ONLINE': '8081'
}


// 跳转地址
const HTTPLINK = {
  'LOCAL': 'http://',
  'DEV': 'http://',
  'TEST': 'https://',
  'ONLINE': 'https://'
}

// 跳转地址
const SERVERLINK = {
  'LOCAL': 'localhost:80',
  'DEV': '139.224.149.235/static',
  'TEST': 'devm.zhongyuanib.com/static',
  'ONLINE': 'aimall.zhongyuanib.com/static'
}

// 分享跳转地址
const SHAREHTTPLINK = {
  'LOCAL': 'http://',
  'DEV': 'http://',
  'TEST': 'http://',
  'ONLINE': 'http://'
}

// 分享跳转地址
const SHARESERVERLINK = {
  'LOCAL': 'localhost:80',
  'DEV': 'dev.utils.aibaoxian.com/weChatTestAppendOpenId',
  'TEST': 'dev.utils.aibaoxian.com/weChatTestAppendOpenId',
  'ONLINE': 'utils.aibaoxian.com/ibotAppendOpenId'
}

// 58居家无忧家财保险跳转地址
const FIVEHTTPLINK = {
  'LOCAL': 'https://',
  'DEV': 'https://',
  'TEST': 'https://',
  'ONLINE': 'https://'
}

// 58居家无忧家财保险跳转地址
const FIVESERVERLINK = {
  'LOCAL': 'localhost:80',
  'DEV': 'cshinsure.zhongyuanib.com',
  'TEST': 'cshinsure.zhongyuanib.com',
  'ONLINE': 'hinsure.zhongyuanib.com'
}


let ENV = 'ONLINE'
let LINK = 'ONLINE'
let SHARELINK = 'ONLINE'
let FIVELINK = 'ONLINE'

if (/localhost/i.test(host)) {
  ENV = 'DEV'
  LINK = 'DEV'
  SHARELINK= 'DEV'
  FIVELINK = 'DEV'
} else if (/192.168./.test(host)) {
  ENV = 'DEV'
  LINK = 'DEV'
  SHARELINK= 'DEV'
  FIVELINK = 'DEV'
} else if (/139.224.149.235/.test(host)) {
  ENV = 'DEV'
  LINK = 'TEST'
  SHARELINK= 'TEST'
  FIVELINK = 'TEST'
} else if (/devm.zhongyuanib.com/.test(host)) {
  ENV = 'TEST'
  LINK = 'TEST'
  SHARELINK= 'TEST'
  FIVELINK = 'TEST'
} else if (/aimall.zhongyuanib.com/.test(host)) {
  ENV = 'ONLINE'
  LINK = 'ONLINE'
  SHARELINK= 'ONLINE'
  FIVELINK = 'ONLINE'
} else {
  ENV = 'ONLINE'
  LINK = 'ONLINE'
  SHARELINK= 'ONLINE'
  FIVELINK = 'ONLINE'
}

export const CommonURL = {
  'HTTP': HTTP[ENV],
  'SERVER_PATH': SERVER_PATH[ENV],
  'PORT': PORT[ENV]
};
export const CommonURL2 = {
  'HTTP': HTTP2[ENV],
  'SERVER_PATH': SERVER_PATH2[ENV],
  'PORT': PORT2[ENV]
};

export const CommonURL3 = {
  'HTTP': HTTP3[ENV],
  'SERVER_PATH': SERVER_PATH3[ENV],
  'PORT': PORT3[ENV]
};
// 跳转地址
export const ToLink = {
  'HTTP': HTTPLINK[LINK],
  'SERVER_PATH': SERVERLINK[LINK]
}

// 分享跳转地址
export const ShareToLink = {
  'HTTP': SHAREHTTPLINK[SHARELINK],
  'SERVER_PATH': SHARESERVERLINK[SHARELINK]
}

// 58居家无忧家财保险跳转地址
export const FiveToLink = {
  'HTTP': FIVEHTTPLINK[FIVELINK],
  'SERVER_PATH': FIVESERVERLINK[FIVELINK]
}


