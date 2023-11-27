'use client';

import Link from 'next/link';

import { CATEGORY_QUERY } from '@/queries/modules/categories';

import * as S from './styles';

import { useFetch } from '@/hooks/useFetch';
import { Category } from '@/queries/models/Category';

export function Sidebar() {
  const { data } = useFetch(CATEGORY_QUERY);

  return (
    <S.Sidebar>
      <S.ItemSidebar>
        <S.TitleSidebar>Categorias</S.TitleSidebar>
        <S.ListSidebar>
          {data?.categories?.map((cat: Category) => {
            return (
              <li key={cat.id}>
                <Link href={`/categoria/${cat.slug}`}>{cat.category}</Link>
              </li>
            );
          })}
        </S.ListSidebar>
      </S.ItemSidebar>
    </S.Sidebar>
  );
}
