import React from "react";
import {Query, Mutation} from 'react-apollo';
import gql from 'graphql-tag';

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
            <button type="button" onClick={starRepository}>
                Star
            </button>
        )}
    </Mutation>
);

export default Star;