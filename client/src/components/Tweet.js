import React from 'react';

const Tweet = ({tweet}) => {
    const createdDateString = new Date("Fri Aug 31 18:37:04 +0000 2018").toDateString()
    return (
        <li className="list-group-item">
            <span>{tweet.text}</span><br/>
            <span className="text-muted">{createdDateString}</span>
            <span className="text-muted ml-4"><i className="fas fa-heart"></i> {tweet.favorite_count}</span>
            <span className="text-muted ml-4"><i className="fas fa-retweet"></i> {tweet.retweet_count}</span>
        </li>
    );
};

export default Tweet;