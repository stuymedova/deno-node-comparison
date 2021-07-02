const send = require('koa-send');
const Koa = require('koa');
const app = new Koa();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// Response Time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// Send static content
app.use(async (ctx) => {
  await send(ctx, 'index.html', {
    root: `${__dirname}/static`,
  });
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://localhost:3000');
});


// Run: node app.js
// Output: http://localhost:3000