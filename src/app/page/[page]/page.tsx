'use client';

import { useRouter } from 'next/navigation';

import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';

import { POSTS_PAGINATION } from '@/queries/modules/posts';

import { useFetch } from '@/hooks/useFetch';
import { PaginationPosts } from '@/queries/models/PaginationPosts';

export default function Page({ params }: { params: { page: string } }) {
  const router = useRouter();

  const pagination = process.env.NEXT_PUBLIC_PAGINATION
    ? parseInt(process.env.NEXT_PUBLIC_PAGINATION)
    : 0;

  const page = params?.page ? parseInt(params?.page) : 1;
  const skip = page ? (page - 1) * pagination : 0;

  const { data } = useFetch(POSTS_PAGINATION, {
    first: pagination * page,
    skip: skip,
  });

  return (
    <div className="container">
      <div className="grid">
        <div className="title">
          <h1>Blog {` - Página ${page}`}</h1>
        </div>
      </div>
      <div className="grid">
        <div className="grid posts">
          {data?.postsConnection?.edges.length
            ? data?.postsConnection?.edges.map((post: PaginationPosts) => (
                <PostCard key={post.node.id} post={post.node} />
              ))
            : router.push(`/404`)}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
