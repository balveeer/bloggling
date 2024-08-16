import { PostsContainer } from "../components/index.js";
import { useAppSelector } from "../store/hooks.js";
import { selectPosts } from "../store/postSlice.js";
import { userData } from "../store/authSlice.js";

function MySaved() {
    const posts = useAppSelector(selectPosts);
    const user = useAppSelector(userData);
    let savedPosts = posts.filter(
      (post: any) =>post.saves.includes(user?.$id) || post.userId == user.$id) 
  return (
    <div className=''>
      {user?
      <PostsContainer title={(posts.length>1 && savedPosts.length == 0)?"You haven't saved any post" :"SAVED POSTS"} posts={savedPosts} save={false} />
      :<h2 className="text-5xl text-center p-2 text-gray-950 dark:text-purple-200 font-thin">You may not be logged in</h2>}
    </div>
  );
}

export default MySaved;