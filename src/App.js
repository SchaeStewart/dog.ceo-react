import React, {Component} from 'react';
import './App.css';
import DogList from './DogList';
import AppNav from "./AppNav";

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
                <AppNav/>
                <DogList/>
            </div>
        );
    }
}

export default App;
