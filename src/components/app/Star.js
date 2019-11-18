import React from "react";
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import StarIcon from '@material-ui/icons/Star';
import yellow from '@material-ui/core/colors/yellow';

import Select from "./Select";
import {createMuiTheme} from "@material-ui/core";

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

const Star = ({id}) => (

    <Mutation mutation={STAR_REPOSITORY} variables={{id}}>
        {starRepository => (

            <StarIcon
                        onClick={starRepository}>
                Star
            </StarIcon>
        )}
    </Mutation>
);

export default Star;