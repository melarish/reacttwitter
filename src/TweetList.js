import React, { PropTypes} from 'react';
import {connect} from 'react-redux';

const TweetList = ({tweets}) => ( // pure component, just returns stuff
  <section className="tweets">
    {tweets.map(tweet => ( //  same as "function (tweet) {}"
      <article className="tweet" key={tweet.id}>
        <a href={"http://twitter.com/" + tweet.author} className="tweet__avatar">
          <img src={tweet.avatar} alt={tweet.author} />
        </a>
        <div className="tweet__details">
          <div className="tweet__metadata">
            <a href={`http://twitter.com/${tweet.author}`/* new cool way of writing out strings */} className="tweet__author">{tweet.author}</a>
            <small className="tweet__time">{tweet.time}</small>
          </div>
          <p className="tweet__content">{tweet.content}</p>
          <button className="retweet">Retweet</button>
          <button className="like">Like</button>
        </div>
      </article>
    ))}
  </section>
);

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired // make sure tweets is array
};

const mapStateToProps = state => ({
  tweets: state.tweets
});

export default connect(mapStateToProps)(TweetList);
