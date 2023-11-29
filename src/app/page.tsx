'use client';
import { Pagination } from '@/components/Pagination';
import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';

import { POSTS_PAGINATION } from '@/queries/modules/posts/';

import { useFetch } from '@/hooks/useFetch';
import { PaginationPosts } from '@/queries/models/PaginationPosts';

export default function Home() {
  const pagination = process.env.NEXT_PUBLIC_PAGINATION
    ? parseInt(process.env.NEXT_PUBLIC_PAGINATION)
    : 0;

  const page = 1;
  const skip = page ? (page - 1) * pagination : 0;

  const { data } = useFetch(POSTS_PAGINATION, {
    first: pagination * page,
    skip: skip,
  });

  return (
    <div className="container">
      <div className="grid">
        <div className="grid posts">
          {data?.postsConnection?.edges.map(
            (post: PaginationPosts) =>
              post && <PostCard key={post.node.id} post={post.node} />,
          )}
          <Pagination current={page} />
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
