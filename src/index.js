import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'

const App = () => {
  return (
    <>
      <Header/>
    </>
  )  //this is jsx that comes from React, not html
  // return React.createElement('h1', {className:'title'}, 'Hello Porld')
}

ReactDOM.render(<App/>, document.getElementById('root'))
