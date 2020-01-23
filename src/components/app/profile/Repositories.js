import React from "react";
import '../scss/profile.scss';
import {Card, Icon} from "antd";
import {Link} from "react-router-dom";
import Star from "../repositories/Star";

const Repositories = ({repositories}) => (
    <div className="repositories">
        {repositories.edges.map(({node}) => {
            return (
                <Link key={node.id} to={`/repository/${node.owner.login}/${node.name}`}>
                    <Card hoverable className="mb-10">
                        <Icon style={{ fontSize: '15px' }} type={node.isPrivate ? 'lock' : 'unlock'} theme="twoTone" />
                        <span className="repository-name">{node.name}</span>
                        <Star id={node.id} hasStarred={node.viewerHasStarred} />
                    </Card>
                </Link>
            );})
        }
    </div>
);

export default Repositories;