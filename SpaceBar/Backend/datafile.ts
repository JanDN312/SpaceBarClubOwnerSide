import loadJsonFile from "https://deno.land/x/load_json_file@v1.0.0/mod.ts"

export class Datareader {
    loadedData;

    constructor(){
        this.loadedData=this.getloadData("testdata.json");
        console.log(this.loadedData)
    }

    async getloadData(filename: string) {
        const output = await loadJsonFile(filename);
        console.log(typeof(output))
        return output
    }

    getallData(){
        return this.loadedData
    }

    ReadDataElement(input: any){
        try{
            for(const element in this.loadedData){
                if(element==input){return element}//Wenn das element gefunden wird, wird das gesamte Set wiedergegeben
            }
        }finally{return null}
    }
}
    