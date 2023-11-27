import { gql } from '@apollo/client';

export const POSTS_QUERY = gql`
  query GetPosts {
    posts {
      title
      id
      slug
      publishedAt
      categories {
        slug
        category
      }
      thumbnail {
        width
        height
        url
      }
    }
  }
`;

export const POSTS_PAGINATION = gql`
  query PaginationPosts($first: Int!, $skip: Int!) {
    postsConnection(first: $first, skip: $skip) {
      edges {
        node {
          id
          slug
          title
          publishedAt
          thumbnail {
            id
            width
            url
            height
          }
          categories {
            slug
            id
            category
          }
        }
      }
    }
  }
`;

export const POST_QUERY = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      publishedAt
      title
      slug
      content {
        html
      }
      thumbnail {
        width
        height
        url
      }
      categories {
        slug
        category
      }
    }
  }
`;

export const POST_SEARCH = gql`
  query SearchPost($search: String!) {
    postsConnection(where: { title_contains: $search }) {
      edges {
        node {
          id
          publishedAt
          title
          slug
          thumbnail {
            width
            height
            url
          }
          categories {
            slug
            category
          }
        }
      }
    }
  }
`;

export const POSTS_BY_CATEGORY_QUERY = gql`
  query GetPostsByCat($categorySlug: String!) {
    category(where: { slug: $categorySlug }) {
      category
      posts {
        title
        id
        slug
        publishedAt
        categories {
          slug
          category
        }
        thumbnail {
          width
          height
          url
        }
      }
    }
  }
`;
