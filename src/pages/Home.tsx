import { useState } from "react";
import { PostsContainer, PostType } from "../components";
import { useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/postSlice";
import { Category } from "../components/index";
function Home() {
  let posts: any = useAppSelector(selectPosts);
  const [loadMoreBtn, setLoadMoreBtn] = useState(true)
 let sortPosts = [...posts]
  function sortPostsByNewest(posts:PostType[]):PostType[] {
    return posts.sort((a, b) => {
      const dateA = new Date(a.$createdAt);
      const dateB = new Date(b.$createdAt);
      return dateB.getTime() - dateA.getTime();
    });
  }
  let sortedPosts:PostType[]=[];
    sortedPosts = sortPostsByNewest(sortPosts && sortPosts)
  return (
    <div className="w-full">
    <PostsContainer title="RECENT POSTS" posts={loadMoreBtn? sortedPosts.slice(0,6): sortedPosts}  />
    {loadMoreBtn && 
    <div className="w-full flex justify-center">
      <button className="my-2 mx-auto p-4 bg-white hover:bg-black hover:dark:bg-white dark:bg-black text-xl font-semibold text-black hover:text-white dark:hover:text-black dark:text-white rounded-lg ring-black dark:ring-white ring-2" onClick={()=>setLoadMoreBtn(false)}>Load More Posts</button>
    </div>
    }
      <Category />
    </div>
  );
}

export default Home;
