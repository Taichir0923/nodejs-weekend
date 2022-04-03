import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Test';


const Test = () => {
  return <div>
    <Component color="red" content="Hello world" />
    <Component content="Say hi" />
    <Component color="yellow" content="blabla" />
    <Component content="blabla" />
    <Component color="rgb(0 , 255 , 0)" content="blabla" />
    <Component content="blabla" />
  </div>
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);