const express = require('express');
require('dotenv').config({ path: '.env.local' });
const { generateHTML } = require('./lib/template');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  const targetUrl = process.env.TARGET_URL;
  const html = generateHTML(targetUrl);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🚀 极简跳转服务运行在 http://localhost:${PORT}`);
  console.log(`📍 跳转目标: ${process.env.TARGET_URL || '未配置'}`);
});