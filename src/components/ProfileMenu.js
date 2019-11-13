import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export default graphql(gql`
query {
  viewer {
    repositories {
      totalCount
    }
    followers {
      totalCount
    }
    following {
      totalCount
    }
    starredRepositories{
      totalCount
    }
  }
}
`)(ProfileMenu)