import {Datareader} from "./datafile.ts"

const listener = Deno.listen({port: 5000});
const dataloader = new Datareader()
async function getResponse( reqinput: Request){
    console.log(reqinput)//reqinput muss als input ein dataset sein mit aufbau: {artDesZugriffs(w/r),[Schreibelement/Lesekriterien]}
    //TODO Abfrage des Schreibzugriffs
    //TODO Suchfunktion in der Datenbank
    return reqinput;}

for await(const conn of listener)
  handleNewConnection(conn);async function handleNewConnection(conn: Deno.Conn) {
  for await(const {request:req, respondWith:res} of Deno.serveHttp(conn)) {
    res(new Response((await getResponse(req)).body));
  }
}