import React from "react";
import {useParams} from "react-router-dom";
import gql from "graphql-tag";
import {Col, Row, Spin} from "antd";
import {Query} from 'react-apollo';
import FullRepository from "../app/repositories/FullRepository";

const GET_REPOSITORY = gql`
query Repos($login: String!, $name: String!) {
    repository(owner:$login, name: $name) {
        id
        url
        name
        viewerHasStarred
        isPrivate
        primaryLanguage {
            name
        }
        stargazers {
            totalCount
        }
        description
    }
}`;

function Repository() {
    let {login, name} = useParams();

    return (
        <Query query={GET_REPOSITORY} variables={{login: login, name: name}}>
            {({data, loading}) => {
                if (loading) return (
                    <Row type="flex" justify="center">
                        <Col align="center">
                            <Spin style={{marginTop: 20}} size="large"/>
                        </Col>
                    </Row>
                );
                return (<FullRepository repository={data.repository}/>)
            }}
        </Query>
    )
}

export default Repository;