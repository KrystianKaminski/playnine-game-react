import React from 'react'

import { Card } from 'reactstrap'

const Numbers = (props) => {

    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return 'used'
        }
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected'
        }
    }
    return (
        <Card className="text-center">
            <div>
                {arrayOfNumbers.map((number, i) =>
                    <span
                        key={i}
                        className={numberClassName(number)}
                        onClick={() => props.selectNumber(number)}
                    >
                        {number}
                    </span>)}
            </div>
        </Card>
    )
}


export default Numbers