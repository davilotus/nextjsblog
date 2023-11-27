import { DocumentNode, useQuery } from '@apollo/client';

type queryParamsProps = {
  slug?: string;
  categorySlug?: string;
  search?: string;
  first?: number;
  skip?: string;
  page?: number;
};

export const useFetch = (query: DocumentNode, params?: queryParamsProps) => {
  const skipPagination = process.env.NEXT_PUBLIC_PAGINATION
    ? parseInt(process.env.NEXT_PUBLIC_PAGINATION)
    : 0;

  const { data, loading } = useQuery(query, {
    variables: {
      categorySlug: params?.categorySlug,
      slug: params?.slug,
      search: params?.search,
      page: params?.page,
      first: process.env.NEXT_PUBLIC_PAGINATION,
      skip: params?.page ? (params?.page - 1) * skipPagination : 0,
    },
  });

  return { data, loading };
};
