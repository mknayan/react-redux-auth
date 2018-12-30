import React, { Component } from 'react';
import NavigationBar from './NavigationBar';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavigationBar />
          {this.props.children}
        </React.Fragment>
    );
  }
}

export default App;
