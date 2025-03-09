import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { serveStatic } from "hono/middleware";
import { characters } from "./mock-data.js";
import { CharacterListResponse } from "./model.js";

let db = {
  characters,
};

const app = new Hono();
app.use(logger());

app.use("/*", serveStatic({ root: "./public" }));

app.use("/api/*", cors());

app.get("/api/character", async (context) => {
  const response = {
    info: {
      count: db.characters.length,
    },
    results: db.characters,
  };
  return context.json(response);
});

app.get("/api/character/:id", (context) => {
  return context.json(
    db.characters.find((c) => c.id === Number(context.req.param("id")))
  );
});

app.put("/api/character/:id", async (context) => {
  console.log("llamando a put...");
  const id = Number(context.req.param("id"));
  const character = await context.req.json();
  // console.log('BD' + character);
  db.characters = db.characters.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );
  return context.body(null, 204);
});

const PORT = process.env.PORT || 3000;

serve({ fetch: app.fetch, port: Number(PORT) }, (info) => {
  console.log(`API running on ${info.port}`);
});
