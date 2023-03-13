import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logIn, setError } from "../bloc/authSlice";
import { supabaseLogIn } from "../utils/LoginUtils";

type FormData = {
  email: string;
  password: string;
};

const formInitialData: FormData = {
  email: "",
  password: "",
};

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>(formInitialData);
  const { hasError, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(formData);

  async function handleSubmit() {
    try {
      const user = await supabaseLogIn({
        email: formData.email,
        password: formData.password,
      });
      if (user) {
        dispatch(logIn(user));
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
        <h3 className="text-lg font-semibold mb-4">Welcome Back to Tasky</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={(e) => {
              setFormData((state) => {
                let newData = state;
                newData.email = e.target.value;
                return newData;
              });
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
              setFormData((state) => {
                let newData = state;
                newData.password = e.target.value;
                return newData;
              });
            }}
            name="password"
            required
            className="bg-stone-800 rounded-lg"
            type="password"
          />
        </div>
        {hasError && <p className="text-red-300">{error}!</p>}
        <button
          className="mt-4 rounded-lg border-2 border-green-700 bg-green-900/50 py-2.5"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
