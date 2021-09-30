import React from 'react'
import Image from './Image'
import RecepieInfo from './RecepieInfo'

const Recepie = ({ recepie }) => {
    return (
        <div className="recepie">
            <Image img={recepie.img} />
            <RecepieInfo recepie={recepie} />
        </div>
    )
}

export default Recepie