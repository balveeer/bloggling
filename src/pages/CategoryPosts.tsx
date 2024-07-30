
import { PostsContainer } from "../components/index.js";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks.js";
import { selectPosts } from "../store/postSlice.js";

function CategoryPosts() {
    const posts = useAppSelector(selectPosts);
    const params = useParams();
    // @ts-ignore
    const category:string= params.slug?.split("-").map((e)=>e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    return (
    <div  className="">
      <PostsContainer title={category+" related posts"} posts={posts.filter((post)=>post.category.includes((category)))} />
  </div>
);
}

export default CategoryPosts