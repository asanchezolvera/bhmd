export function createErrorResponse(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function createRedirectResponse(url: string) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: url,
    },
  });
}
