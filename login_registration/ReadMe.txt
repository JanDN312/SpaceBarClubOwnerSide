Der Versuch Login/Registrierung zu bauen...

deno run --allow-net --allow-read server.ts

Wenn Server gestartet ist, einfach localhost:8000 im Browser eingeben und voila! Es läuft!

1) RouterContext benötogt Argumente in oak version v10.1.0
    --> wechsel auf oak-version v9 hat geholfen

2) Nach der Erstellung der Unterseiten kommt ein Error: Source code could not be parsed: Unexpected token '.'