'use server';

// Social sign-in already creates the account on first use.
// Re-export the same action so /auth/sign-up can keep working if linked.
export { signInWithGithub as signUpWithGithub, type AuthActionState } from '../sign-in/actions';
