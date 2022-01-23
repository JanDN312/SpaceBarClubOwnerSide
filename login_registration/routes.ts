import {RouterContext} from "https://deno.land/x/oak@v10.1.0/mod.ts";

export const home = (ctx: RouterContext) => {
    ctx.response.body = 'Welcome'
}