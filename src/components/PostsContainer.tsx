import PostCard from './PostCard';
import { PostType } from '.';
import CardLoader from './CardLoader';
import { selectPosts } from "../store/postSlice.js";
import { useAppSelector } from '../store/hooks.js';

function PostsContainer({ title, posts, save = true }: {title: string; posts: PostType[]; save?: boolean }): JSX.Element{
  const allPosts = useAppSelector(selectPosts);

  return (
    <div className="w-auto py-2">
      <h2 className="text-bold dark:text-white m-6 opacity-80 text-center font-medium text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        { allPosts.length<1  ?
        [...new Array(6)].map((_,index)=><CardLoader key={index} />) 
        :
        posts.map((post: PostType) => (
          <PostCard key={post.$id} post={post} save={save} />
        ))
        }
      </div>
    </div>
  )
}

export default PostsContainer