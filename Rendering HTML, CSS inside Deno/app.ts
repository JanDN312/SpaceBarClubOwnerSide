// Building a deno app serving HTML and CSS

import {Application, Router, send} from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import {viewEngine, engineFactory, adapterFactory} from 'https://deno.land/x/view_engine@v1.5.0/mod.ts'

// Setting app and view engine as EJS
const app = new Application();
const ejsEngine = await engineFactory.getEjsEngine();
const oakAdapter = await adapterFactory.getOakAdapter();

// Passing view engine as middleware to app
app.use(viewEngine(oakAdapter, ejsEngine));

// Setting router
const router = new Router();
    router.get("/", (ctx) => {
        ctx.render('index.ejs', {data: {msg: 'World'}});
    });

// Now pass our router as middleware to our app
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
    

