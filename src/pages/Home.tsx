import { useEffect, useState } from "react";
import { PostsContainer } from "../components";
import { useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/postSlice";
import { Category } from "../components/index";
function Home() {
  let postss: any = useAppSelector(selectPosts);
  const [posts, setPosts] = useState([])
  // postss.sort((a:any,b:any) => b?.saves?.length - a?.saves?.length);
  useEffect(() => {
    setPosts(postss.slice(0,6))
  }, [postss])
  

  return (
    <div className="w-full">
    <PostsContainer title="RECENT POSTS" posts={posts}  />
    {posts.length<7 && posts.length>1 && 
    <div className="w-full flex justify-center">
      <button className="my-2 mx-auto p-4 bg-white hover:bg-black hover:dark:bg-white dark:bg-black text-xl font-semibold text-black hover:text-white dark:hover:text-black dark:text-white rounded-lg ring-black dark:ring-white ring-2" onClick={()=>setPosts(postss)}>Load More Posts</button>
    </div>
    }
      <Category />
    </div>
  );
}

export default Home;
