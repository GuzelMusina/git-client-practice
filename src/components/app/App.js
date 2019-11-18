import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import Auth from "./Auth";
import Profile from "./Profile";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
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
                <Router>
                    <ul>
                        {/*<li>*/}
                        {/*    <Link to="/profile">Profile</Link>*/}
                        {/*</li>*/}
                        <li>
                            <Link to="/auth">Authorize</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                    <Switch>
                        {/*<Route path="/profile">*/}
                        {/*    <Profile/>*/}
                        {/*</Route>*/}
                        <Route path="/auth">
                            <Auth/>
                        </Route>
                        <Route path="/contacts">
                        </Route>
                    </Switch>
                </Router>
                //<Repositories repositories={organization.repositories}/>
            );
        }}
    </Query>
);

export default App;
