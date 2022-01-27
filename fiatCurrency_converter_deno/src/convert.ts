import {Request} from 'https://deno.land/x/request@1.3.2/mod.ts'
import {round} from "https://deno.land/x/math@v1.1.0/mod.ts";

export class API {
    api_key:string;
    data:any;
    constructor(access_key: string) {
        this.api_key = "http://data.fixer.io/api/latest?access_key="+access_key;
    }
    async get_data(){
        if(this.data==null){
            this.data = await Request.get(this.api_key)
        }else{
                this.data=this.data
        }
    }
    async get_convert(quantity:number, curr_from:string, curr_to:string) {
        return this.get_data().then(()=>{
            return round(quantity*(1/this.data.rates[curr_from])*this.data.rates[curr_to], 2)})
    }
}
const api_key = new API("928d9df316f02c8475d137a189d97112")

console.log(await api_key.get_convert(20, "USD", "EUR"))
console.log(await api_key.get_convert(17.92, "EUR", "USD"))