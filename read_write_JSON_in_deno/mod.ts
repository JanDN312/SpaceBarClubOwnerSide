const path = './fruits.json';

let data;
data = Deno.readFileSync(path);

console.log(typeof data);
console.log(data);