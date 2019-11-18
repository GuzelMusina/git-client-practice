import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import './App.css';
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

const App = () => (
    //запрос
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>

        {({data: {organization}, loading}) => {
            if (loading || !organization) {
                return <div>
                    <Grid container
                          justify="center"
                          alignItems="flex-end">
                    <CircularProgress color={"secondary"}></CircularProgress>
                    </Grid>
                </div>;
            }
            return (
                <Profile/>
                //<Repositories repositories={organization.repositories}/>
            );
        }}
    </Query>
);

export default App;
