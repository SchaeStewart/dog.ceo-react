import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Row, Grid} from 'react-bootstrap';
import Dog from './Dog';

class DogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
        };
    }

    _getAllDogs = () => {
        const url = 'https://dog.ceo/api/breeds/list/all';
        axios.request(url)
            .then((response, error) => {
                if (!error && response) {
                    console.log(response.data.message);
                    this.setState({dogs: Object.keys(response.data.message)});
                } else {
                    console.log('There was a problem getting all dogs', error);
                }
            })
    }

    _renderDogs(dog, index) {
        return (
            <Dog key={index} breed={dog} />
        )
    }

    componentWillMount() {
        this._getAllDogs();
    }

    render() {
        return (
                <Grid>
                    <Row xs={6} md={4}>
                    {this.state.dogs.map(this._renderDogs)}
                    </Row>
                </Grid>
        )
    }
}

export default DogList;
