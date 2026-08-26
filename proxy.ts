import { auth } from '@/lib/auth/server';
import { NextResponse } from 'next/server';

/**
 * Middleware must run on the home page too so it can:
 * - exchange neon_auth_session_verifier for session cookies after OAuth
 * - refresh session tokens
 * - feed session into server components
 *
 * Only /account/* requires login; public routes stay public.
 */
export default auth.middleware({
  loginUrl: '/auth/sign-in',
  // @ts-expect-error — authorized is supported by Neon middleware; types may lag
  callbacks: {
    authorized: async ({
      auth: session,
      request,
    }: {
      auth: { user?: unknown } | null;
      request: Request;
    }) => {
      const { pathname } = new URL(request.url);

      // Public routes — always allow (session still gets processed)
      if (
        pathname === '/' ||
        pathname.startsWith('/auth') ||
        pathname.startsWith('/api/auth')
      ) {
        return true;
      }

      // Everything else under matcher needs a user when we expand matcher later
      if (pathname.startsWith('/account')) {
        return !!session?.user;
      }

      return true;
    },
  },
});

export const config = {
  matcher: [
    /*
     * Run on all routes except static assets.
     * Required so OAuth return to /?neon_auth_session_verifier=... is handled.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
