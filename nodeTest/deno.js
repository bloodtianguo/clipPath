const input = await Deno.open("./file.rar");
const output = await Deno.create("./file.txt");

await input.readable
	.pipeThrough(new DecompressionStream("gzip"))
	.pipeTo(output.writable);