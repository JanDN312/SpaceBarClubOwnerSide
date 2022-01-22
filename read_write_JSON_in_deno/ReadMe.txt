deno run --alow-read mod.ts

Beispiel JSON-Datei wird gelesen. Der Output Typ ist ein Object als Uint8Array.
Durch den TextDecoder wird das byte Array in einen String umgewandelt, um das JSON zu lesen.