import React from 'react'
import recepies from '../recepies'
import Recepie from './Recepie'

function Recepies() {
    const [id, setID] = React.useState(0);
    // console.log(recepies);
    return (
        <div className='recepies'>
            {recepies.map((recepie) => {
                return <Recepie recepie={recepie} key={id} />
            })}
        </div>
    )
}

export default Recepies
