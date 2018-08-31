import React from 'react';
import Tweet from './Tweet';

const TweetList = ({tweets}) => {
    return (
        <ul className="list-group">
            {tweets.map((twt, key) => {
                return <Tweet tweet={twt} key={key}/>
            })}
        </ul>
    );
}

export default TweetList;