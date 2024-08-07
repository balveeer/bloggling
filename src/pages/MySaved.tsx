import { PostsContainer } from "../components/index.js";
import { useAppSelector } from "../store/hooks.js";
import { selectPosts } from "../store/postSlice.js";
import { userData } from "../store/authSlice.js";

function MySaved() {
    const posts = useAppSelector(selectPosts);
    const user = useAppSelector(userData);
  return (
    <div className=''>
      {user?
      <PostsContainer title="SAVED POSTS" posts={posts.filter(
        (post: any) =>post.saves.includes(user?.$id) || post.userId == user.$id)} />
      :<h2 className="text-5xl text-center p-2 text-gray-950 dark:text-purple-200 font-thin"> Login to check your posts </h2>}
    </div>
  );
}

export default MySaved;