import React from 'react';
import gql from 'graphql-tag';

import RepositoryList from "./RepositoriesList";
import './App.css';
import './Select';
import './Star';
import './App.css';
import Select from "./Select";

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
class Repositories extends React.Component {
    state = {
        selectedRepositoryIds: [],
    };

    toggleSelectRepository = (id, isSelected) => {
        let {selectedRepositoryIds} = this.state;

        selectedRepositoryIds = isSelected
            ? selectedRepositoryIds.filter(itemId => itemId !== id)
            : selectedRepositoryIds.concat(id);

        this.setState({selectedRepositoryIds});
    };
    render() {
        return (
            <RepositoryList
                repositories={this.props.repositories}
                selectedRepositoryIds={this.state.selectedRepositoryIds}
                toggleSelectRepository={this.toggleSelectRepository}
            />
        );
    }
}


export default Repositories;