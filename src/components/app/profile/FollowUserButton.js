import {Button} from "antd";
import {Mutation} from "@apollo/react-components";
import React from "react";
import {FOLLOW_USER, UNFOLLOW_USER} from "../../graphql/follow";

const FollowUserButton = ({id, isFollowing}) => (
    <Mutation mutation={isFollowing ? UNFOLLOW_USER : FOLLOW_USER} variables={{id}}>
        {followUser => (
            <Button className="follow-button" shape="round" type="primary" onClick={followUser}>
                {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
        )}
    </Mutation>
);

export default FollowUserButton;