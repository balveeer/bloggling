import { useEffect, useState } from "react";
import {Modal, PostForm} from "../components/index"
import { userData } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
function AddPost() {
  const [open, setOpen] = useState(false)
  const user = useAppSelector(userData);
  const navigate = useNavigate();
  const handleClose=(e:any)=>{
    e.stopPropagation();
    navigate(-1)
  }
  useEffect(()=>{
    if(user?.emailVerification) setOpen(true)
  },[user])
  
  return (
    <div >
            <PostForm />
            
            <Modal open={!open} type={user?"verification":"authentication"} onClose={handleClose}  />
    </div>
  )
}

export default AddPost