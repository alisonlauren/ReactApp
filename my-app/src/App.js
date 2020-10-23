import React from 'react';
import './App.css';
import Greeter from './components/Greeter'

const names = [
  'Nelson',
  'Atom',
  'Emmy',
  'Sadie',
  'Cici'
]

function App() {
  return (
    <div className="App">
        <h1 className="greeting">
          Hello React!
        </h1>
        {
          names.map((name, i) => {
            return <Greeter key={i} id={i} name={name} />
          })
        }
    </div>
  );
}

export default App;


    
