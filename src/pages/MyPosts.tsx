import { PostsContainer } from "../components/index.js";
import { useAppSelector } from "../store/hooks.js";
import { selectPosts } from "../store/postSlice.js";
import { userData } from "../store/authSlice.js";

function MyPosts() {
    const posts = useAppSelector(selectPosts);
    const user = useAppSelector(userData);
    let myPosts = posts.filter((post)=>post.userId==user.$id)
  return (
    <div className=''>
      {user?
      <PostsContainer title={(posts.length>1 && myPosts.length == 0)?"You haven't created any post" :"MY POSTS"} posts={myPosts} />
      :<h2 className="text-5xl text-center p-2 text-gray-950 dark:text-white/70 font-thin"> You may not be logged in  </h2>}
    </div>
  );
}

export default MyPosts;
