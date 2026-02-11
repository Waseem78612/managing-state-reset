// This file is only needed to satisfy Cloudflare Workers config
// Your React app is served as static assets via Cloudflare Pages

export default {
  async fetch(request: Request, env: any, ctx: any) {
    // This function never actually runs - your static files are served by Pages
    return new Response('This is a static React app deployed via Cloudflare Pages', {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
};