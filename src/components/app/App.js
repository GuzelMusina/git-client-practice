import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import Auth from "./AuthFunc";
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Navigation from './Navigation'


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
               <Navigation/>
                //<Repositories repositories={organization.repositories}/>
            );
        }}
    </Query>
);

export default App;
