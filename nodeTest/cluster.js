/** cluster.js **/
const os = require("os");
const cluster = require("cluster");
if (cluster.isMaster) {
	const number_of_cpus = os.cpus().length;

	console.log(`Master ${process.pid} is running`);
	console.log(`Forking Server for ${number_of_cpus} CPUs\n`);
	// 根据CPU内核格式创建woker进程
	for (let index = 0; index < number_of_cpus; index++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		/**
		 * 检查worker进程退出，并且不是由Master进程杀死的情况。fork进程
		 */
		if (code !== 0 && !worker.exitedAfterDisconnect) {
			console.log(`Worker ${worker.process.pid} died`);
			cluster.fork();
		}
	});
} else {
	require("./server");
}