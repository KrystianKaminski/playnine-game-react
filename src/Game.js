import React from 'react'
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

import { Container, Row, Col } from 'reactstrap'

class Game extends React.Component {
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
                        <Answer />
                    </Col>
                </Row>
                <Numbers />

            </Container>
        )
    }
}

export default Game