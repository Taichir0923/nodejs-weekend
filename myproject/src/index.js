import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Test';
import './style.css';
const Test = () => {
  return <div>
    <Component color="red" content="Hello world" />
    <Component content="Say hi" />
    <Component color="yellow" content="blabla" />
    <Component content="blabla" />
    <Component color="rgb(0 , 255 , 0)" content="blabla" />
    <Component content="blabla" />
    <div style={{backgroundColor: 'black'}}>
      <img style={{width: '200px'}} src='https://www.mnfansubs.net/static/webs/mnfansubs/assets/logo-white.png' alt='' />
    </div>
  </div>
}
ReactDOM.render(
  <Test />,
  document.getElementById('root')
);