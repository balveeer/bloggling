
import {logout} from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { authLogout, userData } from "../store/authSlice";
import { useState } from "react";
import Load from "./Load";
function LogoutBtn({className=""}) {
  const [load, setLoad] = useState(false)
  const user = useAppSelector(userData);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    setLoad(true);
    logout().then(() => {
      dispatch(authLogout());
      navigate("/");
    });
  };
  return (
    user && <button
      className={`w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-red-500 hover:text-white  hover:dark:bg-red-600 hover:bg-red-600  rounded-xl hover:rounded-s-xl ${load?" bg-red-600":"bg-white"} ${className}`}
      onClick={logoutHandler}
    >{load?<Load/>:"Logout"}
      
    </button>
  );
}

export default LogoutBtn;
