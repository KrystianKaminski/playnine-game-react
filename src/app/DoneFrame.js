import React from 'react'

import { Card } from 'reactstrap'

const DoneFrame = (props) => {
    return (
        <Card
            className="text-center"
            style={{
                marginTop: 20
            }}
        >
            <h2>{props.doneStatus}</h2>
            <button
                onClick={props.resetGame}
            >
                Play again
                </button>
        </Card>
    )
}

export default DoneFrame