import gql from "graphql-tag";

export const GET_REPOSITORY = gql`
query Repos($login: String!, $name: String!) {
    repository(owner:$login, name: $name) {
        id
        url
        name
        viewerHasStarred
        isPrivate
        primaryLanguage {
            name
        }
        stargazers {
            totalCount
        } 
        owner {
             login
             avatarUrl
                    }
        description
    }
}`;