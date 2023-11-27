'use client';
import { PostCard } from '@/components/PostCard/';
import { Sidebar } from '@/components/Sidebar';

import { POSTS_BY_CATEGORY_QUERY } from '@/queries/modules/posts';

import { useFetch } from '@/hooks/useFetch';
import { Post } from '@/queries/models/Post';

export default function SinglePost({ params }: { params: { slug: string } }) {
  const { data, loading } = useFetch(POSTS_BY_CATEGORY_QUERY, {
    categorySlug: params.slug,
  });

  return (
    <>
      <div className="container">
        <div className="grid">
          <h1>Categoria: {data?.category.category}</h1>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="grid posts">
            {loading ?? <p>Buscando...</p>}
            {data?.category?.posts?.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
