import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import './App.css';
import Repositories from "./Repositories";

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
                return <div>Loading ...</div>;
            }
            return (
                <Repositories repositories={organization.repositories}/>
            );
        }}
    </Query>
);

export default App;
