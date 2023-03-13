import { useState } from "react";
import { produce } from "immer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logIn, setError } from "../bloc/authSlice";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import supabase from "../lib/database";
import { supabaseSignUp, supabaseLogIn } from "../utils/LoginUtils";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const formInitialData: FormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>(formInitialData);
  const { hasError, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  async function handleSubmit() {
    try {
      const response = await supabaseSignUp(formData);
      if (response !== null) {
        dispatch(logIn(response));
        navigate("/");
      }
    } catch (err) {
      dispatch(setError(err as string));
    }
  }

  return (
    <div className="mt-48">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="max-w-sm mx-auto flex bg-stone-800 p-8 rounded-lg flex-col gap-4"
      >
        <h3 className="text-lg font-semibold mb-4">Create new account</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setFormData(
                produce(formData, (draft) => {
                  draft.email = e.target.value;
                })
              );
            }}
            required
            className="bg-stone-800 rounded-lg"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setFormData(
                produce(formData, (draft) => {
                  draft.password = e.target.value;
                })
              );
            }}
            required
            className="bg-stone-800 rounded-lg"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Re-enter Password</label>
          <input
            onChange={(e) => {
              setFormData(
                produce(formData, (draft) => {
                  draft.confirmPassword = e.target.value;
                })
              );
            }}
            required
            className="bg-stone-800 rounded-lg"
            type="password"
          />
        </div>
        {hasError && <p className="text-base text-red-600">{error}</p>}
        <button
          className="mt-4 rounded-lg border-2 border-green-700 bg-green-900/50 py-2.5"
          type="submit"
        >
          Create Account
        </button>
        <NavLink
          className="underline underline-offset-2 text-center"
          to={"/login"}
        >
          Already have an account?
        </NavLink>
      </form>
    </div>
  );
}
