import {Application, Router} from "https://deno.land/x/oak@v9.0.0/mod.ts";
import {home, login, postLogin, register, postRegister, logout, protectedRoute} from "./routes.ts";

const app = new Application();

const router = new Router();

router
    .get('/', home)
    .get('/login', login)
    .post('/login', postLogin)
    .get('/register', register)
    .post('/register', postRegister)
    .get('/logout', logout)
    .get('/protected', protectedRoute)
    ;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('error', evt => {
    console.log(evt.error);
})

app.listen({port: 8000});
console.log("Server started on port: 8000")