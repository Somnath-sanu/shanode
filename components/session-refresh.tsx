'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

/**
 * After OAuth, Neon redirects to /?neon_auth_session_verifier=...
 * The client SDK exchanges that for session cookies. Then we strip the
 * query param and refresh the RSC tree so the server sees the session.
 */
export function SessionRefresh() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const verifier = searchParams.get('neon_auth_session_verifier');
    if (!verifier) return;

    let cancelled = false;

    (async () => {
      try {
        // Forces client to pick up / finalize session from verifier + cookies
        await authClient.getSession();
      } catch {
        // ignore — middleware may already have handled it
      }

      if (cancelled) return;

      // Drop verifier from URL and re-render server components with cookies
      router.replace('/');
      router.refresh();
    })();

    return () => {
      cancelled = true;
    };
  }, [searchParams, router]);

  return null;
}
