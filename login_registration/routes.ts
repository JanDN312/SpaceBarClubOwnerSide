import {RouterContext} from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.10.2/mod.ts";

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const login = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {});
}

export const postLogin = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const register = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/register.ejs`, {});
}

export const postRegister = async (ctx: RouterContext) => {
    //ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
    const {value} = await ctx.request.body();
    const name = value.get('name');
    const username = value.get('username');
    const password = value.get('password');
    
    console.log(name, username, password)
}

export const logout = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const protectedRoute = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/protected.ejs`, {});
}