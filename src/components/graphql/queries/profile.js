import gql from "graphql-tag";

export const SHORT_PROFILE = gql`
query UserProfile($login:String!){
  user(login: $login) {
    id
    avatarUrl
    email
    login
    name
  }
}`;

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
    url
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
        url
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