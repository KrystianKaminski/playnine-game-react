import React from 'react'

import { Button } from 'reactstrap'

const Btn = (props) => {

    return (
        <div>
            <Button
                disabled={props.selectedNumbers.length === 0}
            >
                =
            </Button>
        </div>
    )
}


export default Btn