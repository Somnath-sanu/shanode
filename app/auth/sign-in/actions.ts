'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export type AuthActionState = { error: string } | null;

/**
 * Server-side GitHub OAuth start.
 * Prefer the client button (authClient.signIn.social) when possible —
 * it auto-redirects. This action is kept for forms that must stay on the server.
 *
 * data.url is an external OAuth URL (github.com). Next.js typedRoutes only
 * types internal routes, so we assert for the external redirect.
 */
export async function signInWithGithub(): Promise<AuthActionState> {
  const { data, error } = await auth.signIn.social({
    provider: 'github',
    callbackURL: '/',
  });

  if (error || !data?.url) {
    return {
      error:
        error?.message ||
        'Failed to initiate GitHub sign in. Check NEON_AUTH_BASE_URL, cookie secret, and that GitHub is enabled + credentials set in Neon Console.',
    };
  }

  // External OAuth URL — typedRoutes only knows app routes
  redirect(data.url as never);
}
