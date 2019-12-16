import React from "react";
import {Col, Icon, Row} from "antd";
import './profile.css';
import Repositories from "./Repositories";
import ShortUserInfo from "./ShortUserInfo";
import FollowUserButton from "./FollowUserButton";

function FullProfile(props) {
    const { data } = props;
    return (
        <div>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <ShortUserInfo user={data}/>
                    <p>{data.bio}</p>
                    {data.email &&
                    <span>
                            <Icon type="mail" style={{marginRight: '5px'}} />
                        {data.email}
                        </span>
                    }
                    <br/>
                    {!data.isViewer &&
                    <FollowUserButton id={data.id} isFollowing={data.viewerIsFollowing} />
                    }
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col align="center" span={20}>
                    <h2>Repositories</h2>
                    <Repositories repositories={data.repositories} />
                </Col>
            </Row>
        </div>
    )
}

export default FullProfile;