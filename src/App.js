import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState };
  // 데이터의 불변성을 유지하기 위해 새로운 state를 생성한다.
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
};

const store = createStore(reducer);

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
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
  console.log('2');
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  const number = useSelector((state) => state.number);
  console.log('3');
  return (
    <div>
      <h1>Left3 : {number}</h1>
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
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      />
    </div>
  );
};
