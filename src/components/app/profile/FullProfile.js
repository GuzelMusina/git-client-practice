import React from "react";
import {Col, Icon, Row} from "antd";
import '../scss/profile.scss';
import Repositories from "./Repositories";
import ShortUserInfo from "./ShortUserInfo";
import FollowUserButton from "./FollowUserButton";

function FullProfile(props) {
    const {data} = props;
    return (
        <div className="info-profile">
            <Row type="flex">
                <Col type="flex">
                    <ShortUserInfo user={data}/>
                    <p>{data.bio}</p>
                    {data.email &&
                    <span>
                            <Icon type="mail" style={{marginRight: '5px'}}/>
                        {data.email}
                        </span>
                    }
                    <br/>
                    {!data.isViewer &&
                    <FollowUserButton id={data.id} isFollowing={data.viewerIsFollowing}/>
                    }
                    <a rel="noopener noreferrer" href={data.url} target="_blank">Link on github</a>
                </Col>
                <Col align="center" span={19} margin="20px">
                    <h2>Repositories</h2>
                    <Repositories repositories={data.repositories}/>
                </Col>
            </Row>
        </div>
    )
}

export default FullProfile;