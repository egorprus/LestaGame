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
        title
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;
