import {RouterContext} from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.10.2/mod.ts";
import {hashSync, compareSync} from "https://deno.land/x/crypt@v0.1.0/mod.ts";
import {User, users} from "./users.ts";

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const login = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {});
}

export const postLogin = async (ctx: RouterContext) => {
    const {value} = await ctx.request.body().value;
    const username = value.get('username');
    const password = value.read('password');

    const user = users.find((u:User) => u.username === username)
    if (!user) {
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {
            error: "Incorrect username"
        });
    } else if (!compareSync(password, user.password)){
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {
            error: "Incorrect password"
        });
    } else {
        console.log("Success");
    }
}

export const register = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/register.ejs`, {});
}

export const postRegister = async (ctx: RouterContext) => {
    //ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
    const {value} = await ctx.request.body().value;
    const name = value.get('name');
    const username = value.read('username');
    const password = value.read('password');

    const hashedPassword = hashSync(password);
    const user = {
        name,
        username,
        password: hashedPassword
    };
    users.push(user);
    ctx.response.redirect('/login')
    //console.log(name, username, password);
    console.log(users);
}

export const logout = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const protectedRoute = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/protected.ejs`, {});
}