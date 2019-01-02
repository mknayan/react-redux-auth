import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <NavigationBar />
          <div className='container'>
            <FlashMessagesList />
          </div>
          {this.props.children}
        </React.Fragment>
    );
  }
}

export default App;
