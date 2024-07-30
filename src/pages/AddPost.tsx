import {Modal, PostForm} from "../components/index"
import { userData } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";
function AddPost() {
  const user = useAppSelector(userData);
  const navigate = useNavigate();
  const handleClose=(e:any)=>{
    e.stopPropagation();
    navigate(-1)
  }
  return (
    <div >
            <PostForm />
            
            <Modal open={!user} type={user?"verification":"authentication"} onClose={handleClose}  />
    </div>
  )
}

export default AddPost