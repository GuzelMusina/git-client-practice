import React from "react";
import {Query} from 'react-apollo';
import {Card, Icon, Spin} from "antd";
import {Link} from "react-router-dom";
import {GET_USERS} from "../../graphql/queries/search";
import ShortUserInfo from "../profile/ShortUserInfo";


const UserSearchResult = ({login}) => (
    <Query query={GET_USERS} variables={{login}}>
        {
            ({data, loading}) => {
                return (
                    loading ?
                        <Spin className="search-spin" size="large"/> :
                        data ?
                            <Link to={`/profile/${data.user.login}`}>
                                <Card hoverable style={{marginTop: 20}}>
                                    <ShortUserInfo user={data.user}/>
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