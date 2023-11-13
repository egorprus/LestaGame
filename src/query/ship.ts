import { gql } from "@apollo/client";

export const GET_ALL_SHIPS = gql`
  query getAllShips {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

export const GET_ALL_ID = gql`
  query getAllId {
    vehicles {
      id
    }
  }
`;
