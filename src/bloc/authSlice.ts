import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  isLogged: boolean;
  hasError: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  isLogged: false,
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
