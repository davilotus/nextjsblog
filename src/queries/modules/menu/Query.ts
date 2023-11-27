import { gql } from '@apollo/client';

export const MENU_QUERY = gql`
  query GetMenu {
    menus(where: { location: HEADER }) {
      nodes {
        name
        slug
        menuItems {
          nodes {
            url
            cssClasses
            label
            id
            uri
          }
        }
      }
    }
  }
`;
