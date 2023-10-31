const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(9088, '127.0.0.1', () => {
  console.log('서버가 실행 중입니다!');
});

