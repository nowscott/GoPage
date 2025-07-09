const { generateHTML } = require('../lib/template');

module.exports = (req, res) => {
  const targetUrl = process.env.TARGET_URL;
  const html = generateHTML(targetUrl);
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};