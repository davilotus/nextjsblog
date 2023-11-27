'use client';

import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';

import { POSTS_QUERY } from '@/queries/modules/posts/';

import { useFetch } from '@/hooks/useFetch';
import { Post } from '@/queries/models/Post';

export default function Home() {
  const { data } = useFetch(POSTS_QUERY);

  return (
    <div className="container">
      <div className="grid">
        <div className="grid posts">
          {data?.posts?.map(
            (post: Post) => post && <PostCard key={post.id} post={post} />,
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
