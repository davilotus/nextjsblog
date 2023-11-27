'use client';

import Image from 'next/image';
import Link from 'next/link';

import imageBlogDefault from '../../../public/images/default-blog-medium.jpg';
import * as S from './styles';

import { formatDate } from '@/lib/formatDate';
import { Post } from '@/queries/models/Post';

export function PostCard({ post }: { post: Post }) {
  const imgSource = post.thumbnail;

  const imageFallback = imgSource
    ? imgSource
    : {
        sourceUrl: imageBlogDefault,
        name: 'medium',
        width: '300',
        height: '200',
      };

  return (
    <S.PostCard className="card-post">
      <figure>
        <Link
          className="categoria"
          href={`/categoria/${post?.categories[0].slug}`}
        >
          {post.categories[0].category}
        </Link>
        <Link href={`/${post?.slug}`}>
          {post.thumbnail.url ? (
            <Image
              src={imgSource ? imgSource.url : imageBlogDefault}
              alt={post?.title}
              width={parseInt(imageFallback?.width.toString())}
              height={parseInt(imageFallback?.height.toString())}
            />
          ) : (
            <Image src={imageBlogDefault} alt={post.title} />
          )}
        </Link>
      </figure>

      <Link className="info" href={`/${post?.slug}`}>
        <h3 className="headline">{post.title}</h3>
        <div className="more">
          <time>
            <i className="icon-bookmark"></i> {formatDate(post.publishedAt)}
          </time>
          <span>
            Ler mais <i></i>
          </span>
        </div>
      </Link>
    </S.PostCard>
  );
}
