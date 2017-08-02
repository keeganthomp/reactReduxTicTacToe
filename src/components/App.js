import React, { Component } from 'react';
import '../styles/App.css';
import PlayingBoard from './PlayingBoard'


class App extends Component {
    render() {
        return (
            <div className="row">
                <PlayingBoard/>
            </div>
        );
    }
}



export default App;
