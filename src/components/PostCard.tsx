import { getFilePreview, updatePost } from "../appwrite/config";
import { Modal, PostType } from "./index";
import { Link } from "react-router-dom";
import { updateSave } from "../store/postSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userData } from "../store/authSlice";
import { useState } from "react";
const PostCard: React.FC<{ post: PostType, save: boolean }> = ({ post, save=true }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();
  const user = useAppSelector(userData);
  const handleSave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
      if(user?.emailVerification){
        if (post?.saves.includes(user?.$id)) {
          let tempSave = post.saves.filter((save) => save != user?.$id);
          dispatch(updateSave({ saves: tempSave, id: post?.$id }));
          // @ts-ignore
          updatePost(post?.$id, {
            title: post?.title,
            author: post?.author,
            content: post?.content,
            category: post?.category,
            imageRequired: post.imageRequired,
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
        imageRequired: post?.imageRequired,
        saves: [...post.saves, user?.$id],
      });
    }
  } else{
    setOpen(true);
  }
  };
  const handleClose=(e:any)=>{
    e.stopPropagation();
    setOpen(false);
  }
  return (
    <div className="w-full">
      <Link to={`/post/${post?.$id}`} className="mx-auto relative flex max-w-[20rem] flex-col rounded-xl bg-gray-50 hover:bg-gray-200 bg-clip-border dark:bg-gray-900/70 hover:dark:bg-gray-900 dark:text-white group duration-200 hover:shadow-xl shadow-violet-200 dark:shadow-gray-800 active:scale-95">
        <img
          //@ts-ignore
          src={ post ? getFilePreview(post?.imageRequired ? post.imageRequired : ""): ""}
          loading="lazy"
          alt={post.title}
          className="relative m-4 h-60 group-hover:rounded-b-none group-hover:m-0 rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg object-cover duration-200 group-hover:mb-4 group-hover:h-[16rem]"
        />
        <div className="w-auto h-6 duration-400 opacity-70 font-light text-start truncate mx-4">
          {post?.category.slice(0, 2).map((cat: string,i) => i==1? " • " + cat:cat)}
        </div>
        <div className="w-full">
          <h3 className="mx-4 my-1 min-h-12 pr-16 text-xl md:text-2xl font-semibold text-black dark:text-white duration-200 w-full line-clamp-2 font-serif">
            {post?.title}
          </h3>
          {save && <span
              className="absolute bottom-1 right-1 z-20 rounded-lg"
              onClick={handleSave} 
            >
              {post?.saves.includes(user?.$id) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-12 w-12 opacity-60 fill-gray-900 dark:fill-white"
                  viewBox="0 0 48 48"
                >
                  <path d="M36.5,43c-0.309,0-0.616-0.095-0.876-0.283L24,34.348l-11.624,8.369c-0.458,0.329-1.06,0.375-1.561,0.118	C10.315,42.579,10,42.063,10,41.5v-30C10,7.916,12.916,5,16.5,5h15c3.584,0,6.5,2.916,6.5,6.5v30c0,0.563-0.315,1.079-0.816,1.335	C36.968,42.945,36.734,43,36.5,43z"></path>
                  <text
                    x="50%"
                    y="50%"
                    fill="white"
                    textAnchor="middle"
                    className="font-bold font-mono text-base dark:fill-black"
                  >
                    {post?.saves.length}
                  </text>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="h-12 opacity-60 fill-gray-900 dark:fill-white"
                  viewBox="0 0 48 48"
                >
                  <path d="M 16.5 5 C 12.928062 5 10 7.9280619 10 11.5 L 10 41.5 A 1.50015 1.50015 0 0 0 12.376953 42.716797 L 24 34.347656 L 35.623047 42.716797 A 1.50015 1.50015 0 0 0 38 41.5 L 38 11.5 C 38 7.9280619 35.071938 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 33.450062 8 35 9.5499381 35 11.5 L 35 38.572266 L 24.876953 31.283203 A 1.50015 1.50015 0 0 0 23.123047 31.283203 L 13 38.572266 L 13 11.5 C 13 9.5499381 14.549938 8 16.5 8 z"></path>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="text-top"
                    className="font-extrabold font-mono text-base "
                  >
                    {post?.saves.length}
                  </text>
                </svg>
              )}
            </span>}
            <Modal open={open} type={user?"verification":"authentication"} onClose={handleClose}  />
        </div>
    </Link>
      </div>
  );
}

export default PostCard;
