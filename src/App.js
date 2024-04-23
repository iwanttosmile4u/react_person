import React from 'react';
import './App.scss';
import { Person } from './components/Person/Person';

// eslint-disable-next-line
const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

// eslint-disable-next-line
const olya = {
  name: 'Olya',
  age: 35,
  sex: 'f',
  isMarried: false,
  // partnerName: 'Maksym',
};

// eslint-disable-next-line
const alex = {
  name: 'Alex',
  // age: 25,
  sex: 'm',
  isMarried: false,
};

const App = () => (
  <div className="App">
    <Person
      person={misha}
    />
    <Person
      person={olya}
    />
    <Person
      person={alex}
    />
  </div>
);

export default App;
