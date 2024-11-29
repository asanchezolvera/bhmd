import { createClient } from "@supabase/supabase-js";
import { createRedirectResponse } from "./responses.server";

export const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || "",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Register a new user with email and OTP
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }
  return data;
}

// Authenticate existing user with email and OTP
export async function signIn(email: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
  });

  if (error) {
    throw error;
  }
  return data;
}

// Sign out current user and redirect to login page
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  return createRedirectResponse("/login");
}

// Delete user account by ID and redirect to login page
export async function deleteAccount(userId: string) {
  const { error } = await supabase.auth.admin.deleteUser(userId);
  if (error) {
    throw error;
  }
  return createRedirectResponse("/login");
}
