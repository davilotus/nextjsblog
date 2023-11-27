import { gql } from '@apollo/client';

export const CATEGORY_QUERY = gql`
  query GetCategories {
    categories {
      id
      slug
      category
    }
  }
`;
