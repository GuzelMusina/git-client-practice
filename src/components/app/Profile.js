import React from 'react'
import {Query} from "react-apollo";
import gql from 'graphql-tag'
import Repositories, {Repo_Fragment} from './Repositories'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";

const user_repos = gql`
    {
        viewer {
            name
            login
            avatarUrl
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
                        <div className="container">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <img className="img-fluid rounded" src={viewer.avatarUrl} alt={viewer.login}/>
                                </Grid>
                                <Grid container xs={12} sm={6}>
                                    <Grid item>
                                        <Typography variant="h2" component="h2" gutterBottom>
                                            <h2>{viewer.name}</h2>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h3" component="h2" gutterBottom>
                                            <p className="lead">@{viewer.login}</p>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h2" component="h2" gutterBottom>
                                        <h2>Repositories</h2>
                                    </Typography>
                                    <Repositories repositories={viewer.repositories}/>
                                </Grid>
                            </Grid>
                        </div>
                    );
                }}
            </Query>
        )
    }
}


export default Profile