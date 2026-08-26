'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export type AuthActionState = { error: string } | null;

export async function signInWithGithub(): Promise<AuthActionState> {
  const { data, error } = await auth.signIn.social({
    provider: 'github',
    callbackURL: 'https://ep-red-rice-ay59ql9r.neonauth.c-5.us-east-2.aws.neon.tech/neondb/auth/callback/github',
  });

  if (error || !data?.url) {
    return { error: error?.message || 'Failed to initiate GitHub sign in. Try again.' };
  }

  redirect("/");
}