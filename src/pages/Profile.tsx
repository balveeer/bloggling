import { userData } from "../store/authSlice";
import { useAppSelector } from "../store/hooks";
import { LogoutBtn, PostsContainer } from "../components";
import { selectPosts } from "../store/postSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [selected, setSelected] = useState("all")
  const [selectedPosts, setSelectedPosts] = useState([])
  const navigate = useNavigate();
  let posts: any = useAppSelector(selectPosts);
  const user = useAppSelector(userData);
  useEffect(() => {
    if(user){
    if(selected=="all") setSelectedPosts(posts.filter((post: any) => post.saves.includes(user?.$id) || post.userId==user.$id));
    if(selected=="created") setSelectedPosts(posts.filter((post: any) =>  post.userId==user.$id))
    if(selected=="saved") setSelectedPosts(posts.filter((post: any) => post.saves.includes(user?.$id)));
    }
  }, [selected])
  
  if(!user) return(<h2 className="text-5xl text-center p-2 text-gray-950 dark:text-purple-200 font-thin"> Login to check your posts </h2>)
  return (
    <div className="py-4">
      <div className="w-full block md:flex items-center justify-around ">
      <div className="flex md:flex-col justify-start items-start text-gray-800 dark:text-white bg-purple-200 dark:bg-gray-800 rounded-lg w-full">
        <h3 className="inline-block text-start font-light md:text-lg lg:text-lg px-2 p-1 ">
          Name - <span className=" text-center truncate px-2 bg-white dark:bg-gray-600 rounded ">{user?.name}</span>
          
        </h3>
        <h3 className="inline-block text-start font-light md:text-lg lg:text-xl px-2 p-1">
          Email - <span className="px-2 text-black dark:text-white bg-white dark:bg-gray-600 rounded ">{user?.email}</span>
        </h3>
        </div>
        
        <div className="flex items-center justify-around w-full pt-2">
        {user?.emailVerification?
          <div className="inline-block mx-2 rounded-full px-4 p-1 text-green-700 hover:bg-green-400 bg-green-300 ">verified</div>:
          <div onClick={()=>navigate("/verify-email")} className="inline mx-2 rounded-full px-4 p-1 text-gray-700 bg-gray-300 hover:bg-gray-200 hover:cursor-help ">unverified</div>
        }
        <LogoutBtn />
        </div>
      </div>
      <div className="w-full flex justify-start gap-4 pt-4 font-semibold">
        <button onClick={()=>{setSelected("all")}} className={`min-w-20 p-2 px-4 dark:text-white rounded-full text-center hover:bg-purple-200 hover:dark:bg-gray-900 ${selected=="all"? "bg-purple-200 dark:bg-gray-900 " :"bg-purple-300 dark:bg-gray-800"}`}>All</button>
        <button onClick={()=>setSelected("created")} className={`min-w-20 p-2 px-4 dark:text-white rounded-full text-center hover:bg-purple-200 hover:dark:bg-gray-900 ${selected=="created"? "bg-purple-200 dark:bg-gray-900 " :"bg-purple-300 dark:bg-gray-800"}`}>Created</button>
        <button onClick={()=>setSelected("saved")} className={`min-w-20 p-2 px-4 dark:text-white rounded-full text-center hover:bg-purple-200 hover:dark:bg-gray-900 ${selected=="saved"? "bg-purple-200 dark:bg-gray-900 " :"bg-purple-300 dark:bg-gray-800"}`}>Saved</button>
      </div>
      <PostsContainer title={selected+" Posts"} posts={selectedPosts} save={false} />
    </div>
  );
}

export default Profile;
