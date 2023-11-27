'use client';

import Link from 'next/link';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Share } from '@/components/Share';
import { Sidebar } from '@/components/Sidebar';

import { POST_QUERY } from '@/queries/modules/posts';

import imageDefaultBlog from '../../../public/images/default-blog.jpg';
import * as S from './styles';

import { useFetch } from '@/hooks/useFetch';
import { formatDate } from '@/lib/formatDate';

export default function SinglePost({ params }: { params: { slug: string } }) {
  const { data } = useFetch(POST_QUERY, { slug: params.slug });

  const postImage = data?.post?.thumbnail?.url
    ? data?.post?.thumbnail?.url
    : imageDefaultBlog.src;

  return (
    <>
      {data?.post && (
        <>
          <div className="container">
            <div className="grid">
              <S.Banner
                style={{
                  backgroundImage: `url(${postImage})`,
                }}
              >
                <S.After style={{ backgroundImage: `url(${postImage})` }} />

                <div className="container">
                  <div className="grid">
                    <Breadcrumbs title={data?.post?.title} />
                    <h1>{data?.post?.title}</h1>

                    {data?.post?.categories[0]?.slug && (
                      <Link
                        className="category"
                        href={data?.post?.categories[0]?.slug}
                      >
                        {data?.post?.categories[0]?.category}
                      </Link>
                    )}

                    <time>
                      {data?.post?.publishedAt &&
                        formatDate(data?.post?.publishedAt)}
                    </time>
                  </div>
                </div>
              </S.Banner>
            </div>
          </div>

          <div className="container">
            <div className="grid gap">
              <div className="grid posts">
                <S.Content
                  dangerouslySetInnerHTML={{ __html: data?.post?.content.html }}
                ></S.Content>
                <Share url={window.location.href} />
              </div>
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </>
  );
}
