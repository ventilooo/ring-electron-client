import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

class App extends React.Component {
    render() {
        return (
            <div className="landing">
                <img src="images/background-logo.png" alt="Ring - Logo" />
                <h1 className="landing__title">Ring is comming...</h1>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));
