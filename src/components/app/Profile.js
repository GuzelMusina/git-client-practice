import React from 'react'
import {Query} from "react-apollo";
import gql from 'graphql-tag'
import Repositories, {Repo_Fragment} from './Repositories'
import Grid from '@material-ui/core/Grid';
import CircularProgress from "@material-ui/core/CircularProgress";
import UserAvatar from "./Avatar";
import styled from 'styled-components'

const user_repos = gql`
    {
        viewer {
            name
            login
            repositories(
                first: 20 orderBy: {
                    direction: DESC,
                    field: STARGAZERS
                }
            ) {
                edges {
                    node {
                        ...repository
                    }
                }
            }
        }
    }
    ${Repo_Fragment}
`

class Profile extends React.Component {
    componentDidMount() {
        console.log("Profile");
    }

    render() {
        return (

            <Query query={user_repos}
                   notifyOnNetworkStatusChange={true}>
                {({data, loading}) => {

                    const {viewer} = data;

                    if (loading || !viewer) {
                        return <div><Grid container
                                          justify="center"
                                          alignItems="flex-end">
                            <CircularProgress color={"secondary"}></CircularProgress>
                        </Grid></div>;
                    }

                    return (
                        <ProfileSection>
                            <UserAvatar/>
                            <NameSection>
                                <UsersFullName>{viewer.name}</UsersFullName>
                                <UsersName>@{viewer.login}</UsersName>
                            </NameSection>
                            <BioContainer>

                            </BioContainer>

                            <ProfileDivider/>

                            <Organisation>
                                <Repositories repositories={viewer.repositories}/>
                            </Organisation>


                        </ProfileSection>
                    );
                }}
            </Query>
        )
    }
}

const ProfileSection = styled.section`
  padding: 50px;
`

const NameSection = styled.div`
  padding: 16px 0;
`



const ProfileDivider = styled.div`
  height: 1px;
  margin: 8px 1px;
  background-color: #e1e4e8;
`

const UsersFullName = styled.p`
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  margin: 0;
`

const UsersName = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
  margin: 0;
`

const Organisation = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`

const BioContainer = styled.div`
  margin-bottom: 12px;
  max-width: 230px;
  font-size: 14px;
  color: #6a737d;
  `
export default Profile