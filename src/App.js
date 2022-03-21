import React from 'react';
import './style.css';

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Left1 />
        <Right1 />
      </div>
    </div>
  );
}

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
};

const Right3 = () => {
  return (
    <div>
      <h1>Right3</h1>
    </div>
  );
};
