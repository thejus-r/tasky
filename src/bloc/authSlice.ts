import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import supabase from "../lib/database";

supabase.auth.getUser();
interface AuthState {
  user: null | User;
  isLogged: boolean;
  hasError: boolean;
  error: string;
}

async function initState() {
  const res = await supabase.auth.getUser();
  return res.data.user;
}

const initialState: AuthState = {
  user: await initState(),
  isLogged: (await initState()) !== null,
  hasError: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.hasError = false;
      state.error = "";
      state.isLogged = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.hasError = false;
      state.error = "";
      state.isLogged = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.hasError = true;
    },
  },
});

export const { logIn, logOut, setError } = authSlice.actions;
export default authSlice.reducer;
