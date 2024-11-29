import { Form } from "@remix-run/react";

interface LoginFormProps {
  actionData?: { error?: string };
  onToggleForm?: () => void;
}

export function LoginForm({ actionData, onToggleForm }: LoginFormProps) {
  return (
    <Form method="post" className="w-full flex flex-col items-center gap-4">
      {actionData?.error && (
        <div className="text-red-500 text-sm">{actionData.error}</div>
      )}
      <div className="flex flex-col w-full gap-[2px]">
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
        Login
      </button>
      <p className="text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={onToggleForm}
          className="font-medium text-blue-500">
          Sign up now
        </button>
      </p>
    </Form>
  );
}
