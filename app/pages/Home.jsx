import React from 'react';
import Logo from '../components/Logo.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title"> React electron ring client POC</h1>
        <div className="App-inner">
          <Logo logoPath='../public/images/ring-icon.png' />
        </div>
      </div>
    );
  }
}

export default Home;
