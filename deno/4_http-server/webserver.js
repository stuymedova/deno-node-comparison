import { serve } from 'https://deno.land/std@0.99.0/http/server.ts';

const server = serve({ port: 8080 });
console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

for await (const request of server) {
  let bodyContent = 'Your user-agent is:\n\n';
  bodyContent += request.headers.get('user-agent') || 'Unknown';

  request.respond({ status: 200, body: bodyContent });
}


// Run: deno run --allow-net webserver.js
// Output: HTTP webserver running. Access it at: http://localhost:8080/