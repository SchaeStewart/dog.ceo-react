import React, {Component} from 'react';
import axios from 'axios';
import {Thumbnail, Col, Button} from 'react-bootstrap';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: props.breed
        }
    }

    _getImage() {
        const url = `https://dog.ceo/api/breed/${this.props.breed}/images`
        axios.get(url)
            .then((response, error) => {
                if (!error && response) {
                    this.setState({image: response.data.message[0]})
                } else {
                    console.log('There was an error', error)
                }
            })

    }

    componentWillMount() {
        this._getImage()
    }

    render() {
        return (
            <div>
                <Col xs={6} md={4}>
                    <Thumbnail src={this.state.image}>
                        <h3>{this.state.name}</h3>
                        <Button>TODO: route more images of dogs</Button>
                    </Thumbnail>
                </Col>
            </div>
        )
    }

}

export default Dog;
