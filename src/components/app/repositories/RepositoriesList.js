import React, {Fragment} from "react";
import Select from '../others/Select';
import Star from '../others/Star';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom'
import Repo_Fragment from "./Fragment";

const RepositoryList = ({
                            repositories,
                            selectedRepositoryIds,
                            toggleSelectRepository,
                        }) => (
    <ul>
        {repositories.edges.map(({node}) => {
            const isSelected = selectedRepositoryIds.includes(node.id);
            //const openDescription = selectedRepositoryIds.includes(node.id);

            const rowClassName = ['row'];

            if (isSelected) {
                rowClassName.push('row_selected');
            }


            return (
                <Card>
                    <CardContent className={rowClassName.join(' ')} key={node.id}>
                        <Typography color="textSecondary" gutterBottom>
                            <a href={node.url}>{node.name}</a>{' '}
                        </Typography>
                        <Typography>
                            <Link to={"/description"}>
                          Description
                            </Link>
                        </Typography>
                    </CardContent>
                    < CardActions>
                        < Select
                            id={node.id}
                            isSelected={isSelected}
                            toggleSelectRepository={toggleSelectRepository}
                        />{' '}
                        {
                            node.viewerHasStarred ? "You have already stared this repo" : <Star id={node.id}/>
                        }
                    </CardActions>
                </Card>
            );
        })}
    </ul>
);


export default RepositoryList;