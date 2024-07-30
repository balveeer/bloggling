import PostCard from './PostCard';
import { PostType } from '.';
import CardLoader from './CardLoader';
import { useEffect, useState } from 'react';

function PostsContainer({ title, posts, save = true }: {title: string; posts: PostType[]; save?: boolean }): JSX.Element{
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="w-auto py-2">
      <h2 className="text-Black dark:text-white m-6 opacity-80 text-center uppercase font-medium text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        { loading && posts.length<1  ?
        [...new Array(6)].map((e,index)=><CardLoader key={index} />) 
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