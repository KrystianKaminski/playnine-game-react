import React from 'react'
import Stars from './Stars';
import Btn from './Button';
import Answer from './Answer';
import Numbers from './Numbers';

import { Container, Row, Col } from 'reactstrap'
import './styles.css'

class Game extends React.Component {

    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
        usedNumbers: [],
        answerIsCorrect: null,
        redraws: 5,
    }

    selectNumber = (clickedNumber) => {
        if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }))
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
        }))
    }

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }))
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
        }))
    }

    redraw = () => {
        if (this.state.redraws === 0) return
        this.setState(prevState => ({
            randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
            answerIsCorrect: null,
            selectedNumbers: [],
            redraws: prevState.redraws - 1,
        }))
    }

    render() {
        const { selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers, redraws } = this.state
        return (
            <Container>
                <h3>Play Nine</h3>
                <Row>
                    <Col xs="5">
                        <Stars
                            numberOfStars={randomNumberOfStars}
                        />
                    </Col>
                    <Col xs="2">
                        <Btn
                            selectedNumbers={selectedNumbers}
                            checkAnswer={this.checkAnswer}
                            answerIsCorrect={answerIsCorrect}
                            acceptAnswer={this.acceptAnswer}
                            redraw={this.redraw}
                            redraws={redraws}
                        />
                    </Col>
                    <Col xs="5">
                        <Answer
                            selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber}
                        />
                    </Col>
                </Row>
                <br />
                <Numbers
                    selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}
                    usedNumbers={usedNumbers}
                />

            </Container>
        )
    }
}

export default Game