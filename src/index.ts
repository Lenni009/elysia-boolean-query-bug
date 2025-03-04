import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", ({ query: { bool } }) => bool, {
    query: t.Object({
      bool: t.Union([t.Literal(true), t.Literal("")]),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
