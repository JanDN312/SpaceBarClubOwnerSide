import { readJson, readJsonSync,
         writeJson, writeJsonSync} from 'https://deno.land/x/jsonfile/mod.ts';

const path = './fruits.json';
let data;

//data = readJsonSync(path)
//console.log(typeof data);
//console.log(data);

writeJsonSync(path, {"fruit": 'banana', "size": 30 , "metric": 'cm'})