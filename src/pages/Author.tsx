import { PostsContainer } from "../components/index.js";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks.js";
import { selectPosts } from "../store/postSlice.js";

function Author() {
    const posts = useAppSelector(selectPosts);
    const params = useParams();
    const author = params.slug;
    return (
    <div className=''>
      <PostsContainer title= {posts[0] && posts.find((post)=>post.userId==author)?.author +"'s Posts"} posts={posts.filter((post)=>post.userId==author)} />
</div>
);
}

export default Author;
