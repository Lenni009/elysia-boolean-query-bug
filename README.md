# Elysia Boolean Literals Bug

## The Bug

### How to reproduce

There is a query parameter that is typed like this `(true | "")`: `t.Union([t.Literal(true), t.Literal("")])`.

When entering `?bool=`, it works fine. But with `?bool=true`, it throws an error.

### What happens?

Elysia complains that `Property 'bool' should be one of: 'boolean', 'string'`

### Expected Result

I would expect it to convert the `true` value to a boolean.

## Development

To install the dependencies:

```bash
bun install
```

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/?bool=true with your browser to see the result.
