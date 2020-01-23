import gql from "graphql-tag";

export const FOLLOW_USER = gql`
mutation($id:ID!){
   followUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
   }
}`;

export const UNFOLLOW_USER = gql`
mutation($id:ID!){
   unfollowUser(input: {userId:$id} ) {
        user{
            id
            viewerIsFollowing
        }
   }
}`;