import { useState } from "react";
import { produce } from "immer";

import { redirect } from "react-router-dom";
import supabase from "../lib/database";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErr = {
  hasError: boolean;
  errMessage: string;
};

const formInitialData: FormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

const formInitialErr: FormErr = {
  hasError: false,
  errMessage: "",
};

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>(formInitialData);
  const [formErr, setFormErr] = useState<FormErr>(formInitialErr);

  async function handleSubmit() {
    // resets the error state
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
        {formErr.hasError && (
          <p className="text-base text-red-600">{formErr.errMessage}</p>
        )}
        <button
          className="mt-4 rounded-lg border-2 border-green-700 bg-green-900/50 py-2.5"
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
