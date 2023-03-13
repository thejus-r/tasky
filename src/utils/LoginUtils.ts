import { AuthResponse } from "@supabase/supabase-js";
import supabase from "../lib/database";

interface LoginProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export async function supabaseLogIn(props: LoginProps) {
  const { email, password } = props;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error !== null) {
    throw error.message;
  }

  return data.user;
}

export async function supabaseSignUp(props: SignUpProps) {
  const { email, password, confirmPassword } = props;
  if (password !== confirmPassword) {
    throw "Passwords doesnt match!";
  }
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error !== null) {
    throw error.message;
  }
  return data.user;
}

export async function supabaseSignOut() {
  const { error } = await supabase.auth.signOut();
  console.log(error);
}
