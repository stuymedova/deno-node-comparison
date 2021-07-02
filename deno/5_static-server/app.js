import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get('X-Response-Time');
  console.log(
    `${ctx.request.method} ${ctx.request.url.pathname} - ${String(rt)}`,
  );
});

// Response Time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${ms}ms`);
});

// Send static content
app.use(async (ctx) => {
  await ctx.send({
    root: `${Deno.cwd()}/static`,
    index: 'index.html',
  });
});

app.addEventListener('listen', () => {
  console.log('Listening on http://localhost:8000');
});

await app.listen({ hostname: 'localhost', port: 8000 });


// Run: deno run --allow-net --allow-read app.js
// Output: http://localhost:8000