import {createStore} from 'redux';

const initialState = {
  tweets: [
    {
      id: 2,
      content: 'You give love a bad name.',
      author: 'Mel',
      avatar: 'avatar.jpg',
      time: '1h'
    },
    {
      id: 1,
      content: 'Old McDonald had a farm.',
      author: 'Mel',
      avatar: 'avatar.jpg',
      time: '2h'
    },
    {
      id: 0,
      content: 'I\'m a little teapot, short and stout.',
      author: 'Mel',
      avatar: 'avatar.jpg',
      time: '3h'
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TWEET':
      return {
        tweets: [{
          content: action.text,
          author: 'Mel',
          avatar: 'avatar.jpg',
          time: 'now',
          id: state.tweets[0].id + 1
        },
        ...state.tweets] // tweets is gonna be a new array with new object and old ones. ES6 stuff
      }
    default:
      return state;
  }
};

export default createStore(reducer, initialState);
