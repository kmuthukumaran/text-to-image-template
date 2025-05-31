export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "daarsh.com is coming soon",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "title": "daarsh.com coming soon"
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
