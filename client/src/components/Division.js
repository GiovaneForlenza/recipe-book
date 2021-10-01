import React from 'react'

const Division = ({ text }) => {
    return (
        <div className="division-lable">
            <h3>{text}: </h3>
            <div className="line"></div>
            {/* {text === 'Ingredients' ? <h1>qaa</h1> : null} */}
        </div>
    )
}

export default Division
