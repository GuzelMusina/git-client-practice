import {Icon} from "antd";
import React from "react";
import {Mutation} from "@apollo/react-components";
import './repositories.scss';

import {STAR_REPOSITORY, REMOVE_STAR} from "../../graphql/stars";

const Star = ({id, hasStarred, stars, setStars}) => (
    <Mutation mutation={hasStarred ? REMOVE_STAR : STAR_REPOSITORY} variables={{id}}>
        {starRepository => (
            <Icon type="star" className="star-icon" onClick={event => {
                event.preventDefault();
                if (setStars) {
                    setStars(hasStarred ? --stars : ++stars);
                }
                starRepository();
            }} theme={hasStarred ? 'twoTone' : ''}/>
        )}
    </Mutation>
);

export default Star;