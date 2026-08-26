'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export type AuthActionState = { error: string } | null;

/**
 * Starts GitHub OAuth. Works for both new and existing users
 * (Managed Better Auth creates the account on first sign-in).
 *
 * callbackURL = where the user lands AFTER Neon Auth finishes the OAuth flow.
 * It must be a path/URL on YOUR app (not the Neon /callback/github endpoint).
 * The GitHub OAuth App's "Authorization callback URL" must be set to:
 *   {NEON_AUTH_BASE_URL}/callback/github
 */
export async function signInWithGithub(): Promise<AuthActionState> {
  const { data, error } = await auth.signIn.social({
    provider: 'github',
    callbackURL: '/', // relative path on your app is fine
  });

  if (error || !data?.url) {
    return {
      error:
        error?.message ||
        'Failed to initiate GitHub sign in. Check NEON_AUTH_BASE_URL and that GitHub is enabled in Neon Console.',
    };
  }

  // Send the browser to GitHub (this is the missing piece)
  redirect(data.url);
}
