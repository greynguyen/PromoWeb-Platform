import React, { Component } from 'react'

import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <h3>musedesign home</h3>
        <RaisedButton label="Hello There" primary={true}/>
      </div>
    );
  };
};

export default App
