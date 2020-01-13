import React, {useState} from "react";
import Star from "./Star";

function FullRepository(props) {
    const {repository} = props;
    let [starsCount, setStarsCount] = useState(repository.stargazers.totalCount);
    return (
        <div>
            <div className="repo-title">
                <h1>{repository.name}</h1>
                <Star
                    setStars={setStarsCount}
                    hasStarred={repository.viewerHasStarred}
                    id={repository.id}
                    stars={starsCount}
                />
                <span>{starsCount}</span>
            </div>
            <p>{repository.description}</p>
            <a rel="noopener noreferrer" href={repository.url} target="_blank">Link on github</a>
        </div>
    )
}

export default FullRepository;