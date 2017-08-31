import React, {Component} from 'react';
import './App.css';
import DogList from './DogList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        }

    }


    render() {
        return (
            <div>
                <DogList/>
            </div>
        );
    }
}

export default App;
