'use client';

import { useSearchParams } from 'next/navigation';

import { PostCard } from '@/components/PostCard';
import { Sidebar } from '@/components/Sidebar';

import { POST_SEARCH } from '@/queries/modules/posts';

import { useFetch } from '@/hooks/useFetch';
import { PostSearch } from '@/queries/models/SearchPost';

export default function Search() {
  const searchParams = useSearchParams();
  const search = searchParams.get('s');

  const { data, loading } = useFetch(POST_SEARCH, {
    search: search || '',
  });

  return (
    <div className="container">
      <div className="grid">
        <div className="title">
          <h1>Você pesquisou por: {search}</h1>

          {data && data?.postsConnection?.edges.length == 1 ? (
            <p>{data?.postsConnection?.edges.length} post encontrado</p>
          ) : (
            <p>{data?.postsConnection?.edges.length} posts encontrados</p>
          )}
        </div>

        <div className="grid posts">
          {loading ?? <p>Buscando...</p>}
          {data?.postsConnection?.edges.length ? (
            data?.postsConnection?.edges.map((post: PostSearch) => (
              <PostCard key={post.node.id} post={post.node} />
            ))
          ) : (
            <p>Não encontramos nenhum resultado para a sua busca</p>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
