import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


library.add(faStar)

const Stars = (props) => {

    // const numberOfStars = 1 + Math.floor(Math.random() * 9)

    let stars = []
    for (let i = 0; i < props.numberOfStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon="star" />)
    }

    return (

        <div>
            {stars}
        </div>
    )
}


export default Stars