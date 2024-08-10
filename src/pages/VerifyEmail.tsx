import { useState, useEffect } from "react";
import {emailVerification,getCurrentUser,updateEmailverification} from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { userData } from "../store/authSlice";
import { UserType } from "../components";
function VerifyEmail() {
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("Sending Verification mail...");
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  const user:UserType = useAppSelector(userData)
  const email = user?.email
  useEffect(() => {
    if (user) {
      setVerified(user?.emailVerification);
      if (secret && userId) {
        setVerified(true);
        setMessage("Email Verified SuccessFully.")
        updateEmailverification(userId, secret);
        getCurrentUser();
      }
     else{
      emailVerification();
      setMessage(`Verification Mail Sent to ${email} Check Your Inbox.`)
    };
    }
}, [user]);
  
  const createVerification = () => {emailVerification();
    setMessage(`Verification Mail Sent to ${email} Check Your Inbox.`)
  };

  if (!verified)
    return (
        <div className="w-full min-h-96 flex flex-col gap-4 justify-center items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl lg:mt-10 xl:mt-16 text-blue-600 dark:text-blue-500 p-4 text-center">
            {message}
          </h2>
          <div className="text-center">
          <span className="text-xl p-4 inline dark:text-white">Didn't get the verification Mail?</span>
          <button className="rounded-xl mx-auto bg-transparent text-center border-blue-600 border-2 font-semibold p-2 px-4 hover:text-white hover:bg-blue-600 hover:rounded-lg hover:shadow-none shadow-md shadow-blue-600 duration-200 text-blue-600" onClick={createVerification} >Send Email again</button>
          </div>
        </div>
    );
  return (
      <div className="w-full min-h-96 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl lg:mt-10 xl:mt-16 font-semibold text-green-700 dark:text-green-600 p-4">
          {message}
        </h2>
        <div className="flex justify-center items-start h-1/2 gap-4">
          <button
            onClick={() => navigate("/")}
            className="h-12 p-2 px-4 bg-white dark:bg-black text-black dark:text-white font-semibold text-center ring-white rounded-lg hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black border-black hover:dark:border-black dark:border-white border-2"
          >
            Home Page
          </button>
          <button
            onClick={() => navigate(-1)}
            className="h-12 p-2 px-4 bg-white dark:bg-black text-black dark:text-white font-semibold text-center ring-white rounded-lg hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black border-black hover:dark:border-black dark:border-white border-2"
          >
            Go Back
          </button>
        </div>
      </div>
  );
}

export default VerifyEmail;
