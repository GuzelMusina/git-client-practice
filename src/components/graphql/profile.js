import gql from "graphql-tag";

export const PROFILE_QUERY = gql`
query UserProfile($login:String!){
  user(login: $login) {
    id
    isViewer
    viewerIsFollowing
    avatarUrl
    bio
    email
    login
    name
    repositories(first: 10) {
      edges {
        node {
          id
          name
          stargazers {
            totalCount
          }
          owner {
            login
          }
          viewerHasStarred
          isPrivate
        }
      }
    }
  }
}`;

export const MY_PROFILE_QUERY = gql`
query MyProfile($first:Int!){
    viewer {
        id
        isViewer
        viewerIsFollowing
        name
        login
        avatarUrl
        bio
        email   
        repositories(first: $first) {
            edges {
                node {
                    id
                    name
                    stargazers{
                        totalCount
                    }
                    owner {
                        login
                    }
                    viewerHasStarred
                    isPrivate
                }
            }
        }
    }
}`;