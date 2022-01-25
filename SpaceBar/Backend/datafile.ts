import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts"

export class Datareader {
    loadedData: any;
    loadedState: boolean;

    constructor(){
        this.loadedState=false;
        this.getloadData("testdata.json").then(()=>{
            //console.log(this.loadedData);
            this.loadedState=true;
            this.loadedData=this.loadedData["elements"]
        })
    }

    async getloadData(filename: string) {
        this.loadedData = await loadJsonFile(filename);
    }

    getallData(){
        return this.loadedData
    }

    readDataElement(input: string){
        
        try{
            for(const element in this.loadedData){
                //console.log(this.loadedData[element]["NameID"])
                if(this.loadedData[element]["NameID"] === input){
                    console.log("++++++")
                    console.log(this.loadedData[element])
                    console.log("++++++")
                    //console.log(this.loadedData[element])
                    return this.loadedData[element]}//Wenn das element gefunden wird, wird das gesamte Set wiedergegeben
            }
        }finally{return null}
    }
}
    