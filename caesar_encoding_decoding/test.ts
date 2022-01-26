import {  assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Caesar } from "./src/caesar.ts";

Deno.test("Encoding", () => {
    const result = Caesar.CasaerEncoding("Hello World!",31)
    assertEquals("Mjqqt Btwqi!", result);
  });

Deno.test("Decoding", () => {
  const result = Caesar.CasaerDecoding("Mjqqt Btwqi!",31)
  assertEquals("Hello World!", result);
});