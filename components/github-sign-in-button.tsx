'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth/client';

export function GitHubSignInButton() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setPending(true);
    setError(null);

    try {
      // Client SDK starts OAuth and redirects the browser to GitHub.
      // callbackURL = where Neon sends the user AFTER OAuth completes.
      const { error: signInError } = await authClient.signIn.social({
        provider: 'github',
        callbackURL: '/',
      });

      if (signInError) {
        setError(
          signInError.message ||
            'GitHub sign-in failed. Check Neon Console (GitHub enabled + credentials) and trusted domains.'
        );
        setPending(false);
      }
      // On success the browser navigates away — no need to clear pending
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unexpected error starting GitHub sign-in');
      setPending(false);
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-3 sm:w-auto">
      {error && (
        <p className="max-w-sm rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-left text-sm text-red-400">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={handleClick}
        disabled={pending}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-semibold text-gray-900 shadow-md transition duration-150 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
        {pending ? 'Redirecting to GitHub...' : 'Continue with GitHub'}
      </button>
    </div>
  );
}
