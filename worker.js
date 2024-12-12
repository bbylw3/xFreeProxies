// 安全头
const securityHeaders = {
    'Content-Type': 'text/html;charset=UTF-8',
    'Cache-Control': 'public, max-age=3600',
    'Content-Security-Policy': "default-src 'self' https: raw.githubusercontent.com; style-src 'unsafe-inline'; script-src 'unsafe-inline'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// HTML 内容
const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - Airport Free 节点导航</title>
    <style>
        :root {
            --primary-color: #ff9000;
            --secondary-color: #000000;
            --background-color: #0f0f0f;
            --card-background: #1b1b1b;
            --text-color: #ffffff;
            --text-secondary: #cccccc;
            --shadow: 0 4px 6px rgba(0,0,0,0.3);
            --max-width: 1100px;
            --spacing: 20px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--background-color);
            padding: var(--spacing);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: var(--max-width);
            margin: 0 auto;
            width: 100%;
        }

        header {
            text-align: center;
            padding: 25px 15px;
            margin-bottom: var(--spacing);
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .logo {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 10px;
        }

        h1 {
            font-size: 2.8em;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1 span:first-child {
            color: white;
        }

        h1 span:last-child {
            color: var(--primary-color);
            background: var(--primary-color);
            padding: 0 10px;
            border-radius: 5px;
            color: black;
        }

        .project-intro {
            margin-bottom: var(--spacing);
            padding: 20px;
            background: var(--card-background);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-intro h2 {
            color: var(--primary-color);
            margin-bottom: 15px;
            font-size: 1.5em;
            display: inline-block;
            background: var(--secondary-color);
            padding: 5px 15px;
            border-radius: 3px;
        }

        .subscription-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: var(--spacing);
        }

        .card {
            background: var(--card-background);
            border-radius: 5px;
            padding: 20px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid #222;
        }

        .card:hover {
            transform: translateY(-3px);
            border-color: var(--primary-color);
        }

        .button {
            width: 100%;
            padding: 12px;
            background-color: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 3px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9em;
            text-transform: uppercase;
            position: relative;
        }

        .button:hover {
            background-color: #ffa31a;
            transform: translateY(-2px);
        }

        .button.success {
            background-color: #4CAF50;
        }

        .button.error {
            background-color: #f44336;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .feature-item {
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            text-align: center;
            border: 1px solid #222;
        }

        .feature-item h4 {
            color: var(--primary-color);
            margin-bottom: 8px;
            font-size: 1.1em;
        }

        .update-info {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            padding: 15px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        .project-links {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }

        .project-links a {
            padding: 10px 20px;
            background: var(--secondary-color);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 3px;
            border: 1px solid var(--primary-color);
            transition: all 0.3s ease;
            font-weight: 600;
            text-transform: uppercase;
        }

        .project-links a:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
            background: var(--secondary-color);
            border-radius: 5px;
            border: 1px solid #222;
        }

        footer p {
            color: #666;
            font-size: 0.9em;
        }

        footer a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #ffa31a;
        }

        footer span {
            color: #444;
            margin: 0 8px;
        }

        @media (max-width: 768px) {
            .features {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .features {
                grid-template-columns: 1fr;
            }
        }

        .update-info {
            text-align: center;
            color: #666;
            margin: 20px 0;
            font-size: 0.9em;
        }

        /* 添加链接样式 */
        a {
            color: var(--primary-color);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #ffa533;  /* 鼠标悬停时颜色加深 */
            text-decoration: underline;
        }

        .project-intro a {
            color: var(--primary-color);
            font-weight: 500;
        }

        .project-intro a:hover {
            color: #ffa533;
        }

        footer a {
            color: var(--primary-color);
            font-weight: 500;
        }

        footer a:hover {
            color: #ffa533;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><span>Node</span><span>Hub</span></h1>
            <p>基于 blue2sea 的节点订阅导航</p>
        </header>

        <main>
            <div class="project-intro">
                <h2>关于 NodeHub</h2>
                <p>NodeHub 是一个基于 <a href="https://blue2sea.com/order/querySubscriptionLink/%20" target="_blank">blue2sea</a> 的节点订阅服务导航项目。项目开源于 <a href="https://github.com/bq2015/FreeProxies" target="_blank">GitHub</a>，提供便捷的节点订阅服务。所有节点均来自 blue2sea 官方服务，定时更新并测试可用性。</p>
                
                <div class="features">
                    <div class="feature-item">
                        <h4>实时更新</h4>
                        <p>每日自动更新</p>
                    </div>
                    <div class="feature-item">
                        <h4>多端支持</h4>
                        <p>主流客户端全覆盖</p>
                    </div>
                    <div class="feature-item">
                        <h4>开源免费</h4>
                        <p>GitHub 开源项目</p>
                    </div>
                </div>

                <div class="update-info">
                    <p>节点更新时间：每日 21:30</p>
                    <p>节点有效期至：2024-12-13 00:00:00</p>
                </div>

                <div class="project-links">
                    <a href="https://github.com/bq2015/FreeProxies" target="_blank">GitHub 仓库</a>
                    <a href="https://blue2sea.com/order/querySubscriptionLink/%20" target="_blank">订阅服务</a>
                </div>
            </div>

            <section class="subscription-list">
                <div class="card">
                    <h3>V2ray 订阅</h3>
                    <p class="card-desc">适用于 v2rayN、v2rayNG、Qv2ray 等</p>
                    <button class="button" onclick="handleSubscription('', this)">获取订阅</button>
                </div>
                <div class="card">
                    <h3>Clash 订阅</h3>
                    <p class="card-desc">适用于 Clash For Windows、ClashX、Clash For Android</p>
                    <button class="button" onclick="handleSubscription('', this)">获取订阅</button>
                </div>
                <div class="card">
                    <h3>Shadowrocket</h3>
                    <p class="card-desc">适用于 iOS 平台的小火箭</p>
                    <button class="button" onclick="handleSubscription('', this)">获取订阅</button>
                </div>
                <div class="card">
                    <h3>sing-box</h3>
                    <p class="card-desc">适用于 sing-box 核心的客户端</p>
                    <button class="button" onclick="handleSubscription('', this)">获取订阅</button>
                </div>
            </section>
        </main>

        <footer>
            <p>数据来源：<a href="https://blue2sea.com/order/querySubscriptionLink/%20" target="_blank">blue2sea</a> | 项目开源：<a href="https://github.com/bq2015/FreeProxies" target="_blank">GitHub</a></p>
        </footer>
    </div>

    <style>
        /* 添加卡片描述样式 */
        .card-desc {
            color: #666;
            font-size: 0.9em;
            margin: 8px 0 15px;
        }
    </style>

    <script>
        async function handleSubscription(url, button) {
            try {
                // 打开新窗口访问订阅链接
                window.open(url, '_blank');
                
                // 同时复制链接到剪贴板
                await navigator.clipboard.writeText(url);
                
                // 显示成功提示
                const originalText = button.textContent;
                button.textContent = '复制成功';
                button.classList.add('success');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('success');
                }, 2000);
            } catch (err) {
                console.error('操作失败:', err);
                button.textContent = '获取失败';
                button.classList.add('error');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('error');
                }, 2000);
            }
        }
    </script>
</body>
</html>`;

// 添加获取订阅信息的函数
async function getSubscriptionInfo() {
    try {
        // 更新为正确的 API 地址
        const response = await fetch('https://blue2sea.com/order/querySubscriptionLink/%20');
        const data = await response.json();
        
        return {
            expireTime: data.expireTime || '2024-12-13 00:00:00',
            updateTime: '21:30',  // 固定更新时间
            subscriptionUrl: data.subscriptionUrl || 'https://blue2sea.com/order/querySubscriptionLink/%20'  // 更新默认订阅地址
        };
    } catch (error) {
        console.error('获取订阅信息失败:', error);
        // 更新后备值中的订阅地址
        return {
            expireTime: '2024-12-13 00:00:00',
            updateTime: '21:30',
            subscriptionUrl: 'https://blue2sea.com/order/querySubscriptionLink/%20'  // 更新默认订阅地址
        };
    }
}

// 修改请求处理函数
async function handleRequest(request) {
    const url = new URL(request.url);
    
    if (url.protocol === 'http:') {
        return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
    }

    // 获取最新的订阅信息
    const subInfo = await getSubscriptionInfo();
    
    // 使用模板字符串替换HTML中的所有相关信息
    const updatedHTML = HTML_CONTENT
        .replace(
            '<p>节点更新时间：每日 21:30</p>',
            `<p>节点更新时间：每日 ${subInfo.updateTime}</p>`
        )
        .replace(
            '<p>节点有效期至：2024-12-13 00:00:00</p>',
            `<p>节点有效期至：${subInfo.expireTime}</p>`
        )
        // 替换所有订阅按钮的空链接为实际链接
        .replace(
            /handleSubscription\(''/g,
            `handleSubscription('${subInfo.subscriptionUrl}'`
        );

    return new Response(updatedHTML, {
        headers: {
            ...securityHeaders,
            'Cache-Control': 'no-cache' // 禁用缓存以确保始终获取最新内容
        }
    });
}

// 事件监听器
addEventListener('fetch', event => {
    event.respondWith(
        handleRequest(event.request).catch(err => {
            return new Response('服务暂时不可用', { status: 500 })
        })
    );
});