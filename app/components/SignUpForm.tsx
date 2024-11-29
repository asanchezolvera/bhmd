import { Form } from "@remix-run/react";

interface SignUpFormProps {
  actionData?: { error?: string };
  onToggleForm?: () => void;
}

export function SignUpForm({ actionData, onToggleForm }: SignUpFormProps) {
  return (
    <Form method="post" className="w-full flex flex-col items-center gap-4">
      {actionData?.error && (
        <div className="text-red-500 text-sm">{actionData.error}</div>
      )}
      <div className="flex flex-col w-full gap-[2px]">
        <label
          htmlFor="first_name"
          className="text-sm text-slate-600 font-semibold">
          First name
        </label>
        <input
          type="text"
          name="first_name"
          placeholder="First name"
          required
          className="input mb-2"
        />
        <label htmlFor="email" className="text-sm text-slate-600 font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="input"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-500 active:bg-blue-700 transition-colors duration-300">
        Sign Up
      </button>
      <p className="text-sm text-slate-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onToggleForm}
          className="font-medium text-blue-500">
          Log in now
        </button>
      </p>
      <div className="bg-blue-50 border-[1px] border-blue-100 py-4 px-2 rounded-md mt-4">
        <p className="text-xs text-blue-500 text-center">
          By entering your name and email address in the form above, you agree
          to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </Form>
  );
}
