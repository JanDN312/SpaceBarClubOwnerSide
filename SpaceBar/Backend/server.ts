import {Datareader} from "./datafile.ts"

const listener = Deno.listen({port: 5000});
const dataloader = new Datareader()

async function getResponse( reqinput: Request){
  //INFO reqinput muss als input string mit der NameID sein, damit dann im Datensatz danach gesucht werden kann

  console.log(JSON.stringify(reqinput.text))
  
  return dataloader.readDataElement(await reqinput.text())}//Hier funktioniert das convertieren nicht, entweder ist reqinput leer, oder es lässt sich nicht convertieren

for await(const conn of listener)
  handleNewConnection(conn);async function handleNewConnection(conn: Deno.Conn) {
  for await(const {request:req, respondWith:res} of Deno.serveHttp(conn)) {
    res(new Response((await getResponse(req))));
  }
}