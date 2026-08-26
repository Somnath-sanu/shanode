import { auth } from '@/lib/auth/server';

/**
 * Protect account routes only.
 * OAuth session finalization is handled by:
 * - cookies.sameSite: 'lax' (lib/auth/server.ts)
 * - SessionRefresh client component (exchanges neon_auth_session_verifier)
 */
export default auth.middleware({
  loginUrl: '/auth/sign-in',
});

export const config = {
  matcher: ['/account/:path*'],
};
