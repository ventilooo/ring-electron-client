import React from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h4>Page Not Found</h4>
        <Link to="/">Go back Home</Link>
      </div>
    );
  }
};
