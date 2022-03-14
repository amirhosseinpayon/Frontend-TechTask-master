import { gql } from "@apollo/client"

export const LOAD_CATEGORIES = gql`
    query getCategories($ids: [String!]!) {
      categories(ids: $ids, locale: de_DE) {
        name
        articleCount
        childrenCategories {
          id
          name
        }
        categoryArticles(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 300
              maxHeight: 300
              limit: 1
            ) {
              path
            }
          }
        }
      }
    }`