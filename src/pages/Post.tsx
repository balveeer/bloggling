import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getFilePreview,deleteFile,deletePost, updatePost } from "../appwrite/config";
import parse from "html-react-parser";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userData } from "../store/authSlice";
import {selectPosts, updateSave} from "../store/postSlice";
import { Load, Modal, PostType, UserType } from "../components/index";

function Post() {
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const user:UserType = useAppSelector(userData);
  const posts = useAppSelector(selectPosts)
  const dispatch = useAppDispatch();
  const post:any = posts.find((post:PostType)=>post.$id == slug)
    const isAuthor = (post && post.userId == user?.$id)?true:false
    const date = new Date(post?.$createdAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  const delPost = () => {
    setLoad(true);
    deleteFile(post?.image);
    deletePost(post.$id).then((status) => {
      if (status) {
        navigate(-1);
      }
    });
  };
  const handleClose=(e:any)=>{
    e.stopPropagation();
    setOpen(false);
  }
  const handleSave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
      if(user?.emailVerification){
        if (post?.saves.includes(user?.$id)) {
          let tempSave = post.saves.filter((save:string) => save != user?.$id);
          dispatch(updateSave({ saves: tempSave, id: post?.$id }));
          // @ts-ignore
          updatePost(post?.$id, {
            title: post?.title,
            author: post?.author,
            content: post?.content,
            category: post?.category,
            image: post.image,
            saves: tempSave,
          });
        } 
      else {
      dispatch(
        updateSave({ saves: [...post?.saves, user?.$id], id: post?.$id })
      );
      //@ts-ignore
      updatePost(post?.$id, {
        title: post?.title,
        author: post?.author,
        content: post?.content,
        category: post?.category,
        image: post?.image,
        saves: [...post.saves, user?.$id],
      });
    }
  } else{
    setOpen(true);
  }
  };
  const authorPosts = () => {
    navigate("/author/" + post.userId);
  };
  return post &&(
    <div className="mt-4 dark:text-white max-w-5xl p-2 mx-auto">
        <div className="flex w-full justify-start items-center">
        <h1 className={`w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold inline pl-4 `}>
          {post.title}
        </h1>
        </div>
        {isAuthor && (
            <div className="fixed z-50 top-24 right-4 inline-flex flex-nowrap justify-center items-center">
              <Link to={`/edit-post/${post.$id}`}>
                <button
                  className="py-2 px-4 opacity-60 hover:opacity-100 rounded-l text-white dark:text-black bg-green-600 hover:text-black dark:hover:text-white border border-black font-semibold "
                >
                  Edit
                </button>
              </Link>
              <button
                onClick={delPost}
                className="py-2 px-4 opacity-60 hover:opacity-100 rounded-r  text-white dark:text-black bg-red-600 hover:text-black dark:hover:text-white border border-black border-l-0 font-semibold"
              >
                {load ? (
                  <Load />
                ) : (
                  <span>Delete</span>
                )}
              </button>
            </div>
          )}
        <div className="w-full flex flex-col md:flex-row justify-center">
        <div className={`p-2 my-2 flex justify-around gap-x-2 bg-indigo-200 dark:bg-gray-900 rounded-lg w-full h-min md:w-1/2  text-sm sm:text-base md:text-lg lg:text-xl` } >
          <h2 className="text-gray-700 dark:text-white px-2">
            ✍🏼 {post.author?(<span onClick={authorPosts} className="capitalize hover:no-underline underline hover:text-black dark:hover:text-white dark:text-white cursor-pointer">{post.author}</span>):"Unknown"}
          </h2>
          <h2 className="text-gray-700 dark:text-white">📆 {date?date:""}</h2>
          <h2 onClick={handleSave} className="cursor-pointer text-gray-700 dark:text-white">{post?.saves.includes(user?.$id) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="inline -translate-y-0.5 h-6 w-6 opacity-60 fill-gray-900 dark:fill-white"
                  viewBox="0 0 48 48"
                >
                  <path d="M36.5,43c-0.309,0-0.616-0.095-0.876-0.283L24,34.348l-11.624,8.369c-0.458,0.329-1.06,0.375-1.561,0.118	C10.315,42.579,10,42.063,10,41.5v-30C10,7.916,12.916,5,16.5,5h15c3.584,0,6.5,2.916,6.5,6.5v30c0,0.563-0.315,1.079-0.816,1.335	C36.968,42.945,36.734,43,36.5,43z"></path>
                  
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="inline h-6 opacity-70 fill-gray-900 dark:fill-white"
                  viewBox="0 0 48 48"
                >
                  <path d="M 16.5 5 C 12.928062 5 10 7.9280619 10 11.5 L 10 41.5 A 1.50015 1.50015 0 0 0 12.376953 42.716797 L 24 34.347656 L 35.623047 42.716797 A 1.50015 1.50015 0 0 0 38 41.5 L 38 11.5 C 38 7.9280619 35.071938 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 33.450062 8 35 9.5499381 35 11.5 L 35 38.572266 L 24.876953 31.283203 A 1.50015 1.50015 0 0 0 23.123047 31.283203 L 13 38.572266 L 13 11.5 C 13 9.5499381 14.549938 8 16.5 8 z"></path>
                  
                </svg>
              )} {post?.saves.length || "0"}</h2>
        </div>
        <div className="w-auto flex flex-wrap items-center justify-center gap-2 px-4">
        {post.category.map((cat:string)=>
        <Link key={cat.slice(0,3)} to={`/category/${cat.split(" ").join("-").toLowerCase()}`}
        className="rounded-2xl h-min text-sm sm:text-base md:text-lg lg:text-xl bg-indigo-200  dark:bg-gray-900 dark:text-white/70 dark:hover:text-white px-4 p-1 cursor-pointer"><i>#{cat}</i></Link>
        )}
        </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full justify-center my-2">
            <img
            //@ts-ignore
              src={getFilePreview(post.image)}
              alt={post.title}
              className="w-full md:w-auto md:mx-auto max-h-screen translate-105"
            />
          </div>
          <div className=" first-letter:capitalize first-letter:mr-2 first-letter:float-left first-letter:text-5xl first-letter:text-gray-500 first-letter:font-bold text-xl md:text-xl lg:text-2xl font-serif my-2 prose dark:prose-dark">{parse(post.content)}</div>
        </div>
        <Modal open={open} type={user?"verification":"authentication"} onClose={handleClose}  />
    </div>
  )
}

export default Post;
