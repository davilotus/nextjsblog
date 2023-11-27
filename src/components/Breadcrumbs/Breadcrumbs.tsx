import Link from 'next/link';

import * as S from './styles';

type BreadcrumbsProps = {
  title: string;
};

export function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <S.Breadcrumbs>
      <Link href="/">Home</Link> » <span>{title}</span>
    </S.Breadcrumbs>
  );
}
