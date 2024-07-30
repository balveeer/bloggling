import { PostForm } from "../components";
import {  useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/postSlice";
function EditPost() {
  const { slug } = useParams();
  const posts = useAppSelector(selectPosts)
  const post = posts.find((ele)=>ele.$id == slug)
  return post ? (
    <div className="py-8">
        <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost;
