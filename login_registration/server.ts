import {Application, Router} from "https://deno.land/x/oak@v10.1.0/mod.ts";
import {home} from "./routes.ts"

const app = new Application();

const router = new Router();
router.get('/', home);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log("Server started on port: 8000")