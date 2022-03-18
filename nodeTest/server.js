const http = require("http");
const processId = process.pid; // 获取进程id
// 创建http服务并处理请求
const server = http.createServer((req, res) => {
	// 模拟CPU工作
	for (let index = 0; index < 1e7; index++);
	res.end(`Process handled by pid: ${processId}`);
});
// 监听8080端口
server.listen(8080, () => {
	console.log(`Server Started in process ${processId}`);
});