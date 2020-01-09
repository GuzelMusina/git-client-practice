import React from "react";
import {Query} from 'react-apollo';
import {Col, Row, Spin} from "antd";
import FullProfile from "../app/profile/FullProfile";
import {MY_PROFILE_QUERY} from "../graphql/profile";

function MyProfile() {
    return (
        <Query query={MY_PROFILE_QUERY} variables={{first: 10}}>
            {({data, loading}) => {
                if (loading) return (
                    <Row type="flex" justify="center">
                        <Col align="center">
                            <Spin style={{marginTop: 20}} size="large" />
                        </Col>
                    </Row>
                );
                return (
                    <FullProfile data={data.viewer}/>)
            }}
        </Query>
    );
}

export default MyProfile;