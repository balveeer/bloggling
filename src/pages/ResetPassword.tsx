import { useState } from "react";
import { Input, Load } from "../components";
import { resetPassword, updateResetPassword } from "../appwrite/auth";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [message, setMessage] = useState("")
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");

  async function sendMail(e: any) {
    e.preventDefault();
    setLoad(true)
    setMessage("")
    const response = await resetPassword(email);
    if(response) setMessage("Password recovery mail sent, check your inbox.")
  }
  async function setPassword(e: any) {
    e.preventDefault();
    setMessage("")
    if(pass.length<8) setMessage("Password can't be less than 8 charactors long.")
    if(pass!==confirmPass) setMessage("passwords don't match")
      
    if(pass==confirmPass && userId && secret ){
    const update = await updateResetPassword(userId,secret,pass )
    if(update==true) {setMessage("Password changed successfully")}
    }
  }
  if(message =="Password changed successfully") return (
    <div className="w-auto max-w-xl py-2 mx-auto">
      <h2 className="text-Black dark:text-white m-6 opacity-80 text-center uppercase font-medium text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
      Password changed successfully
      </h2>
      <p className="mt-2 w-full text-center text-black/60 dark:text-white text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold">
          Go To
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline text-blue-400"
          >
            Login
          </Link>
        </p>
    </div>)

  return (
    <div className="w-auto max-w-xl py-2 mx-auto">
      <h2 className="text-Black dark:text-white m-6 opacity-80 text-center uppercase font-medium text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
        Reset Password
      </h2>
      {message && <p className="text-blue-500 mt-8 text-center">{message}</p>}
      {!secret ? (
        <form onSubmit={sendMail}>
          <Input
            autoFocus
            label="Email "
            placeholder="Enter your email"
            type="email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 mt-6 text-white bg-purple-500 hover:bg-white font-bold"
          >
            {load ? (
              <Load />
            ) : (
              <span>Send Reset Password Email</span>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={setPassword}>
        <Input
          autoFocus
          label="Password "
          placeholder="Enter new password"
          type="password"
          onChange={(e: any) => setPass(e.target.value)}
        />
        <Input
          autoFocus
          label="Password "
          placeholder="Enter new password"
          type="password"
          onChange={(e: any) => setConfirmPass(e.target.value)}
        />
          <button
            type="submit"
            className="w-full rounded-lg px-4 py-2 mt-6 text-white bg-purple-500 hover:bg-purple-600 font-bold"
          >
            {load ? (<Load /> ) : (
              <span>Set Password</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default ResetPassword;
