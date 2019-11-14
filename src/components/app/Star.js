import React from "react";
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import IconButton from '@material-ui/core/IconButton';

import Select from "./Select";

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
            <IconButton color="secondary" aria-label="add an alarm"
                        onClick={starRepository}>
                Star
            </IconButton>
        )}
    </Mutation>
);

export default Star;