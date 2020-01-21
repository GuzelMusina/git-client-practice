import Repositories from "../profile/Repositories";
import React from "react";
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import {Icon, Spin} from "antd";

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
query Reps($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
        edges {
            node {
                ... on Repository {
                    id,
                    name,
                    viewerHasStarred,
                    url,
                    isPrivate,
                    isArchived,
                    
                
                    owner {
                    login
                    avatarUrl
                    }
                    
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }
}`;

const RepositorySearch = ({query}) => (
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION} variables={{query}}>
        {
            ({data, loading}) => {
                return (
                    loading ?
                        <Spin className="search-spin" size="large"/> :
                        data ?
                            <Repositories repositories={data.search}/> :
                            (query.length !== 0 &&
                                <Icon type="frown" className="search-spin" style={{fontSize: '40px'}} theme="twoTone"/>
                            )
                );
            }
        }
    </Query>
);

export default RepositorySearch;
