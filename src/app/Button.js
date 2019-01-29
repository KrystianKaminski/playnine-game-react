import React from 'react'

import { Button } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faAsterisk } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)
library.add(faTimes)
library.add(faAsterisk)

const Btn = (props) => {

    let button;

    switch (props.answerIsCorrect) {
        case true:
            button = <Button
                color="success"
                onClick={props.acceptAnswer}
            >
                <FontAwesomeIcon icon="check" />
            </Button>
            break;
        case false:
            button = <Button
                color="danger"
            >
                <FontAwesomeIcon icon="times" />
            </Button>
            break;
        default:
            button = <Button
                disabled={props.selectedNumbers.length === 0}
                color="info"
                onClick={props.checkAnswer}
            >
                <FontAwesomeIcon icon="check" />
            </Button>
            break;
    }

    return (
        <div>
            {button}
            <br /><br />
            <Button
                color="warning"
                onClick={props.redraw}
                disabled={props.redraws === 0}
            >
                <FontAwesomeIcon icon="asterisk" /> {props.redraws}
            </Button>
        </div>
    )
}


export default Btn