import React from "react";
import gql from "graphql-tag";
import {Query} from 'react-apollo';
import {Avatar, Card, Icon, Spin} from "antd";
import {Link} from "react-router-dom";

const {Meta} = Card;

const userSearchQuery = gql`
query User($login:String!){
    user(login: $login) {
        login
        name
        avatarUrl  
    } 
}`;

const UserSearchResult = ({login}) => (
    <Query query={userSearchQuery} variables={{login}}>
        {
            ({data, loading}) => {
                return (
                    loading ?
                        <Spin className="search-spin" size="large"/> :
                        data ?
                            <Link to={`/profile/${data.user.login}`}>
                                <Card hoverable style={{marginTop: 20}}>
                                    <Meta
                                        avatar={
                                            <Avatar src={data.user.avatarUrl}/>
                                        }
                                        title={data.user.login}
                                        description={data.user.name}
                                    />
                                </Card>
                            </Link> :
                            (login.length !== 0 &&
                                <Icon type="frown" className="search-spin" style={{fontSize: '40px'}} theme="twoTone"/>
                            )
                );
            }
        }
    </Query>
);

export default UserSearchResult;