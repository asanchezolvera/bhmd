import { type ActionFunctionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { useState } from "react";
import { signIn, signUp } from "~/utils/auth.server";
import {
  createErrorResponse,
  createRedirectResponse,
} from "~/utils/responses.server";
import { LoginForm } from "~/components/LoginForm";
import { SignUpForm } from "~/components/SignUpForm";

// Server-side action handler
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = "";
  const intent = formData.get("intent") as string;

  try {
    if (intent === "login") {
      await signIn(email);
      return createRedirectResponse("/");
    } else if (intent === "signup") {
      await signUp(email || "", password);
      return createRedirectResponse("/");
    }

    return createErrorResponse("Invalid form submission", 400);
  } catch (error: unknown) {
    return createErrorResponse(
      error instanceof Error ? error.message : "Authentication failed",
      400
    );
  }
}

// Main Login page component
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const actionData = useActionData<typeof action>();

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main>
      <section className="py-16">
        <div className="container">
          <div className=" max-w-md flex flex-col gap-2 justify-center items-center mx-auto">
            <h1 className="text-4xl font-medium font-serif text-blue-900 text-center">
              {isLogin ? "Welcome back" : "Create an Account"}
            </h1>
            <p className="text-slate-700 text-center">
              {isLogin
                ? "If you have an account with us, please login below."
                : "Create a free account to automatically unlock savings up to 75% and start earning points on all your purchases!."}
            </p>

            <div className="flex justify-center p-1 gap-[2px] mt-2 mb-4 rounded-md bg-slate-50 w-full lg:w-auto">
              <button
                className={`px-8 py-1 text-sm font-medium w-1/2 lg:w-auto ${
                  isLogin
                    ? "bg-white text-blue-500 shadow-sm border-[1px] border-slate-200"
                    : "bg-transparent text-slate-400 hover:text-slate-500 transition-colors duration-300"
                } rounded-md`}
                onClick={() => setIsLogin(true)}>
                Log in
              </button>
              <button
                className={`px-8 py-1 text-sm font-medium w-1/2 lg:w-auto ${
                  !isLogin
                    ? "bg-white text-blue-500 shadow-sm border-[1px] border-slate-200"
                    : "bg-transparent text-slate-400 hover:text-slate-500 transition-colors duration-300"
                } rounded-md`}
                onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </div>

            {isLogin ? (
              <LoginForm
                actionData={actionData}
                onToggleForm={handleToggleForm}
              />
            ) : (
              <SignUpForm
                actionData={actionData}
                onToggleForm={handleToggleForm}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
