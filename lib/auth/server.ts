import { createNeonAuth } from '@neondatabase/auth/next/server';

export const auth = createNeonAuth({
  baseUrl: process.env.NEON_AUTH_BASE_URL!,
  cookies: {
    secret: process.env.NEON_AUTH_COOKIE_SECRET!,
    // OAuth returns via a cross-site top-level navigation.
    // Default "strict" drops the session cookie on that return — use "lax".
    sameSite: 'lax',
  },
  logLevel: 'debug',
});
