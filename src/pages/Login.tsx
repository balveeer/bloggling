import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Load } from "../components/index";
import { login as doLogin,googleLogin } from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = async()=>{
    setError("");
    try {
      const session: any = await googleLogin();
      if (session) {
          navigate("/");
      }
    } catch (error: any) {
      setLoad(false);
      setError("google auth failed")
    }
  }

  const login = async (data: any) => {
    setLoad(true);
    setError("");
    try {
      const session: any = await doLogin(data);
      if (session) {
          navigate("/");
      }
    } catch (error: any) {
      setLoad(false);
      if (
        error.message ==
        "Creation of a session is prohibited when a session is active."
      )
        setError("User already logged in.");
      else {
        setError(error.message);
      }
    }
  };
  return (
    <div className="flex items-center justify-center m-3">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl p-10 border border-black/10`}
      >
      <div className="mb-2 flex justify-center">
          <Logo />
      </div>
        <h2 className="text-center text-2xl font-semibold leading-tight dark:text-white">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60 dark:text-gray-200">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline text-blue-500"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <button
              onClick={handleGoogle}
              className="w-full rounded-lg p-1 mt-6 text-black bg-white hover:bg-white font-bold border-black border-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="inline h-10 w-10" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
              Continue with Google</button>
      
    <div className="flex items-center justify-center w-full">
      <div className="h-[0.1rem] rounded bg-gray-500/80 dark:bg-gray-300/80 flex-grow"></div>
      <div className="h-12 grid place-items-center px-2 text-gray-600 dark:text-gray-200 text-sm"><span >OR</span></div>
      <div className="h-[0.1rem] rounded bg-gray-500/80 dark:bg-gray-300/80 flex-grow"></div>
    </div>
        <form onSubmit={handleSubmit(login)} >
          <div className="w-full space-y-4">
            <Input
              label="Email "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                validate: {
                  pattern: (value) =>
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                      value
                    ) || "Enter A Valid Email Address.",
                },
              })}
            />
            <Input
              label="Password "
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            <div className="font-semibold text-right text-base text-blue-500 w-full" >
              <span className=" hover:underline cursor-pointer" onClick={()=>navigate("/reset-password")} >
            Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg px-4 py-2 mt-6 text-white hover:text-black bg-black hover:bg-white border-black border-2 font-bold"
            >
              {load ?( 
              <Load />
              ) : (
                <span>Log in</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
