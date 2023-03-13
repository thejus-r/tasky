import { AuthResponse } from "@supabase/supabase-js";
import supabase from "../lib/database";

interface LoginProps {
  email: string;
  password: string;
}

export async function supabaseLogIn({ email, password }: LoginProps) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error !== null) {
    throw error.message;
  }

  return data.user;
}
