import {RouterContext} from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.10.2/mod.ts";

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}