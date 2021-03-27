// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

let person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({ name: 'Adeel', designation: 'padawan' });
