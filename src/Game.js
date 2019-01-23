import React from 'react'
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

import { Container, Row, Col } from 'reactstrap'
import './styles.css'

class Game extends React.Component {

    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }))
    }

    render() {
        return (
            <Container>
                <h3>Play Nine</h3>
                <Row>
                    <Col xs="5">
                        <Stars
                            numberOfStars={this.state.randomNumberOfStars}
                        />
                    </Col>
                    <Col xs="2">
                        <Button />
                    </Col>
                    <Col xs="5">
                        <Answer
                            selectedNumbers={this.state.selectedNumbers}
                            unselectNumber={this.unselectNumber}
                        />
                    </Col>
                </Row>
                <br />
                <Numbers
                    selectedNumbers={this.state.selectedNumbers}
                    selectNumber={this.selectNumber}
                />

            </Container>
        )
    }
}

export default Game