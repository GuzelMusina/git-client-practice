import React from "react"
import  gql from "graphql-tag"
import {Query} from "react-apollo"
import styled from 'styled-components'

const GET_AVATAR = gql`
{
    viewer {
      avatarUrl
    }
  }
`;

class UserAvatar extends React.Component {
    render() {
        return (
            <Query query={GET_AVATAR}>
                {({loading, error, data}) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    return <ProfilePic src={data.viewer.avatarUrl}/>;
                }}
            </Query>
        )
    }
}


const ProfilePic = styled.img`
  border-radius: 3px;
  height: 250px;
  width: 250px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
`

export default UserAvatar