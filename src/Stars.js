import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


library.add(faStar)

const Stars = (props) => (
    <div>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
    </div>
)

export default Stars