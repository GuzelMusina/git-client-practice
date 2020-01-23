import React from "react";
import {Query} from 'react-apollo';
import FullProfile from "../app/profile/FullProfile";
import {useParams} from "react-router-dom";
import {Col, Row, Spin} from "antd";
import {PROFILE_QUERY} from "../graphql/queries/profile";

function Profile() {
    let {login} = useParams();

    return (
        <Query query={PROFILE_QUERY} variables={{login: login}}>
            {({data, loading}) => {
                if (loading) return (
                    <Row type="flex" justify="center">
                        <Col align="center">
                            <Spin style={{marginTop: 20}} size="large"/>
                        </Col>
                    </Row>
                );
                return (
                    <FullProfile data={data.user}/>)
            }}
        </Query>
    );
}

export default (Profile);
