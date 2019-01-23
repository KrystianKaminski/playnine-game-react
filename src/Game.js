import React from 'react'
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

import { Container, Row, Col } from 'reactstrap'
import './styles.css'

class Game extends React.Component {

    state = {
        selectedNumbers: [2, 4]
    }

    render() {
        return (
            <Container>
                <h3>Play Nine</h3>
                <Row>
                    <Col xs="5">
                        <Stars />
                    </Col>
                    <Col xs="2">
                        <Button />
                    </Col>
                    <Col xs="5">
                        <Answer
                            selectedNumbers={this.state.selectedNumbers}
                        />
                    </Col>
                </Row>
                <br />
                <Numbers
                    selectedNumbers={this.state.selectedNumbers}
                />

            </Container>
        )
    }
}

export default Game