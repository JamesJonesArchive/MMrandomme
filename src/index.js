import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './Hello';
import PersonList from './PersonList';
// import Icon from 'react-native-vector-icons/FontAwesome';
import * as FontAwesome from 'react-icons/lib/fa';
import IoAndroidPersonAdd from
      'react-icons/lib/io/android-person-add';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'MM UserDemo'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <button type="button" className="btn btn-primary float-right" >
          <IoAndroidPersonAdd />&nbsp; Add Contact
        </button>
        
        <PersonList />
      </div>
    );
  }
}
render(<App />, document.getElementById('root'));
