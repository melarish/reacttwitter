import React, { Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Form extends Component {
  static propTypes = {
    addTweet: PropTypes.func.isRequired // this func is expected from parent or you get console error
  }

  static characterLimit = 140;

  constructor(props) {
    super(props);

    this.state = {
      'tweetboxValue': ''
    };
  }
  handleSubmit = event => {
    event.preventDefault(); // don't want to reload the page
    this.props.addTweet(this.state.tweetboxValue); // state is specific to a component; props is passed from parent to child. call addTweet from parent with textarea text
    this.setState({
      tweetboxValue: ''
    });
  }

  setTweetboxValue = event => {
    this.setState({ // setState is from Component - updates state and calls render func
      tweetboxValue: event.target.value
    });
  }

  formValid = () =>
    this.state.tweetboxValue.length !== 0 &&
    this.state.tweetboxValue.length <= Form.characterLimit;

  render() {
    const {tweetboxValue} = this.state;
    return (
      <form className="tweetbox" onSubmit={this.handleSubmit}>{/* can't use 'class' cuz that's CSS classes and I can write this JS comment cuz it's btwn {}. handleSubmit is passed in not to call it on page load*/}
        <textarea
          value={tweetboxValue}
          onChange={this.setTweetboxValue}
          name="tweet_content" className="tweetbox__field" placeholder="Compose new Tweet..." />
        <div className="tweetbox__actions">
          <div className="tweetbox__counter">
            {Form.characterLimit - this.state.tweetboxValue.length}
          </div>
          <input
            className="tweetbox__button"
            disabled={this.formValid() ? '': 'disabled'}
            type="submit"
            value="Tweet"
          />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTweet: text => dispatch({
    type: 'ADD_TWEET',
    text // property name == variable name; text: text
  })
});

export default connect(null, mapDispatchToProps)(Form); // null - no state mapping func here; Form doesn't need to use the redux store. Exports connected Form
