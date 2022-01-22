import { readJson, readJsonSync } from 'https://deno.land/x/jsonfile/mod.ts';
const path = './fruits.json';
let data;

data = readJsonSync(path)

console.log(typeof data);
console.log(data);