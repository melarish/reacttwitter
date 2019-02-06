import React from 'react';
import Form from './Form';
import './App.css';
import TweetList from './TweetList';

const App = () => ( // instead of Component
  <div>
    <Form />
    <TweetList />
  </div>
);

export default App;
