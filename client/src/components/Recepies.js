import React from 'react'
import recepies from '../recepies'
import Recepie from './Recepie'

const Recepies = ({ recepies }) => {

    if (recepies.length < 1) {
        return <h1>Nothing to see here</h1>
    }
    return (
        <div className='recepies'>
            {!recepies ? <h1>No recepies found</h1> : null}
            {
                recepies.map((recepie) => {
                    return <Recepie recepie={recepie} key={recepie.id} />
                })
            }
        </div>
    )
}

export default Recepies
