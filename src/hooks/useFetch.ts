import { DocumentNode, useQuery } from '@apollo/client';

type queryParamsProps = {
  slug?: string;
  categorySlug?: string;
  search?: string;
  first?: number;
  skip?: number;
};

export const useFetch = (query: DocumentNode, params?: queryParamsProps) => {
  const { data, loading } = useQuery(query, {
    variables: {
      slug: params?.slug,
      categorySlug: params?.categorySlug,
      search: params?.search,
      first: params?.first,
      skip: params?.skip,
    },
  });

  return { data, loading };
};
