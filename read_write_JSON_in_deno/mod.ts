const path = './fruits.json';

let data;
//const decoder = new TextDecoder('utf-8')
//data = JSON.parse(decoder.decode(Deno.readFileSync(path)));

data = JSON.parse(Deno.readTextFileSync(path))

console.log(typeof data);
console.log(data);