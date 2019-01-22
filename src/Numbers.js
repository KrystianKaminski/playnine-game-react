import React from 'react'

import { Card } from 'reactstrap'
import { Range } from 'react-lodash'

const Numbers = (props) => {

    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Card className="text-center">
            <div>
                {arrayOfNumbers.map((number, i) =>
                    <span key={i}>{number}</span>)}
            </div>
        </Card>
    )
}


export default Numbers