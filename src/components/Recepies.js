import React from 'react'
import recepies from '../recepies'
import Recepie from './Recepie'

const Recepies = ({ recepies }) => {
    return (
        <div className='recepies'>
            {recepies.map((recepie) => {
                return <Recepie recepie={recepie} key={recepie.id} />
            })}
        </div>
    )
}

export default Recepies
