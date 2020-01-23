import Repositories from "../profile/Repositories";
import React from "react";
import {Query} from 'react-apollo';
import {Icon, Spin} from "antd";
import {GET_REPOSITORIES_OF_ORGANIZATION} from "../../graphql/queries/search";

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
