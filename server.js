const express = require('express');
require('dotenv').config({ path: '.env.local' });
const { generateHTML } = require('./lib/template');

const app = express();
const PORT = process.env.PORT || 3000;

// URL打码函数
function maskUrl(url) {
  if (!url) return '未配置';
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    const path = urlObj.pathname;
    // 对域名进行打码，保留前后部分
    let maskedDomain = domain;
    if (domain.length > 6) {
      const start = domain.substring(0, 3);
      const end = domain.substring(domain.length - 3);
      maskedDomain = start + '***' + end;
    }
    // 对路径进行打码
    let maskedPath = path;
    if (path.length > 4) {
      maskedPath = path.substring(0, 2) + '***' + path.substring(path.length - 2);
    }
    return `${urlObj.protocol}//${maskedDomain}${maskedPath}`;
  } catch (e) {
    // 如果不是有效URL，直接打码
    if (url.length > 10) {
      return url.substring(0, 5) + '***' + url.substring(url.length - 5);
    }
    return '***';
  }
}

app.get('/', (req, res) => {
  const targetUrl = process.env.TARGET_URL;
  const html = generateHTML(targetUrl);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 极简跳转服务运行在 http://localhost:${PORT}`);
  console.log(`📍 跳转目标: ${maskUrl(process.env.TARGET_URL)}`);
});