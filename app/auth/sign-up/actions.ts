'use server';

import { auth } from '@/lib/auth/server';
import { redirect } from 'next/navigation';

export type AuthActionState = { error: string } | null;

export async function signUpWithGithub() {
  const { data, error } = await auth.signIn.social({
    provider: 'github',
    callbackURL: '/',
  });

  if (error || !data?.url) {
    return { error: error?.message || 'Failed to initiate GitHub sign up. Try again.' };
  }

  // redirect("/");
}