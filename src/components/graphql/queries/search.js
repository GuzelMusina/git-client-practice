import gql from "graphql-tag";

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
query Reps($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
        edges {
            node {
                ... on Repository {
                    id,
                    name,
                    viewerHasStarred,
                    url,
                    isPrivate,
                    isArchived,
                  
                    owner {
                    login
                    avatarUrl
                    }
                    
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }
}`;

export const GET_USERS = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl  
    } 
}`;