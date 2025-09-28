#!/usr/bin/env node

/**
 * 启动 Docsify 文档服务器
 * 使用方法：node serve.js [port]
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.argv[2] || 3000;
const DOCS_DIR = __dirname;

// MIME 类型映射
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown'
};

// 获取文件的 MIME 类型
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return mimeTypes[ext] || 'application/octet-stream';
}

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  // 默认首页
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const filePath = path.join(DOCS_DIR, pathname);

  // 检查文件是否存在
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 错误
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <head><title>404 Not Found</title></head>
          <body style="font-family: Arial, sans-serif; padding: 50px; text-align: center;">
            <h1>404 - Page Not Found</h1>
            <p>The requested file <code>${pathname}</code> was not found.</p>
            <a href="/">Return to Home</a>
          </body>
        </html>
      `);
      return;
    }

    // 读取并返回文件
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const mimeType = getMimeType(filePath);
      res.writeHead(200, {
        'Content-Type': mimeType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
  });
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`
🚀 Momo UI 文档服务器已启动！

📖 本地地址:    http://localhost:${PORT}
📱 网络地址:    http://192.168.1.xxx:${PORT}

💡 提示:
   - 按 Ctrl+C 停止服务器
   - 修改文档后刷新页面即可看到更新
   - 支持热重载和实时预览

📚 目录结构:
   /                    - 首页
   /components/button   - Button 组件文档
   /guide/quickstart    - 快速开始

Happy documenting! 🎉
  `);

  // 尝试自动打开浏览器 (仅在支持的平台上)
  const open = (url) => {
    const { exec } = require('child_process');
    let cmd;

    switch (process.platform) {
      case 'darwin':
        cmd = `open ${url}`;
        break;
      case 'win32':
        cmd = `start ${url}`;
        break;
      default:
        cmd = `xdg-open ${url}`;
    }

    exec(cmd, (error) => {
      if (error) {
        console.log(`\n💡 请手动打开浏览器访问: http://localhost:${PORT}`);
      }
    });
  };

  // 延迟 1 秒后尝试打开浏览器
  setTimeout(() => {
    open(`http://localhost:${PORT}`);
  }, 1000);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n👋 正在关闭文档服务器...');
  server.close(() => {
    console.log('✅ 服务器已关闭');
    process.exit(0);
  });
});