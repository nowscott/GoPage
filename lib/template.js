// 极简HTML模板生成函数
function generateHTML(targetUrl) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面跳转中...</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        
        .container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-width: 400px;
            width: 90%;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #e3e3e3;
            border-top: 4px solid #007acc;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        h1 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #333;
        }
        
        p {
            color: #666;
            margin-bottom: 1rem;
        }
        
        .error {
            color: #d73a49;
            background: #ffeef0;
            padding: 1rem;
            border-radius: 4px;
            border: 1px solid #fdb8c0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="spinner"></div>
        <h1>正在跳转</h1>
        <p>请稍候，即将为您跳转到目标页面</p>
        <div id="error" class="error" style="display: none;">
            <strong>跳转失败</strong><br>
            未配置跳转地址，请联系管理员
        </div>
    </div>

    <script>
        // 极简跳转逻辑
        function initRedirect(targetUrl) {
            if (targetUrl && targetUrl !== 'null' && targetUrl !== 'undefined') {
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 1500);
            } else {
                setTimeout(() => {
                    document.querySelector('.spinner').style.display = 'none';
                    document.querySelector('h1').textContent = '配置错误';
                    document.querySelector('p').style.display = 'none';
                    document.getElementById('error').style.display = 'block';
                }, 1500);
            }
        }
        
        // 初始化跳转
        initRedirect(${targetUrl ? `'${targetUrl}'` : 'null'});
    </script>
</body>
</html>`;
}

// Node.js环境导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateHTML };
}