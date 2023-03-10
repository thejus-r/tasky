export default function SignUpPage() {
  return (
    <div className="mt-48">
      <form className="max-w-sm mx-auto flex bg-stone-800 p-8 rounded-lg flex-col gap-4">
        <h3 className="text-lg font-semibold mb-4">Create new account</h3>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input required className="bg-stone-800 rounded-lg" type="email" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input required className="bg-stone-800 rounded-lg" type="password" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Re-enter Password</label>
          <input required className="bg-stone-800 rounded-lg" type="password" />
        </div>
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
