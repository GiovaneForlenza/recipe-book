import React from 'react'
import recepies from '../recepies'

const Image = ({ img }) => {
    return (
        <div className='recepie-img'>
            {/* <img src={img} alt="" /> */}
            <img src="https://source.unsplash.com/random" alt="" />
        </div>
    )
}

export default Image
