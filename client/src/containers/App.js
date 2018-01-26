import React, { Component, PropTypes } from 'react';;
import Footer from '../components/Footer';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Dash board NEO Exchange</div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
