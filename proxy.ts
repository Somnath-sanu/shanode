import { auth } from '@/lib/auth/server';

/**
 * Next.js 16 uses proxy.ts (replaces middleware.ts on earlier versions).
 * Only protect routes that actually require a session.
 * Keep /, /auth/*, and the API auth proxy public.
 */
export default auth.middleware({
  loginUrl: '/auth/sign-in',
});

export const config = {
  matcher: [
    // Protect account / dashboard style routes only.
    // Add more paths here as you introduce them (e.g. '/dashboard/:path*').
    '/account/:path*',
  ],
};
