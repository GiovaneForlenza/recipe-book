import React from 'react'
import { Link } from 'react-router-dom'
import SingleRecepieInfo from './SingleRecepieInfo';

const RecepieInfo = ({ recepie }) => {
    return (
        <section className='recepie-info'>
            <SingleRecepieInfo recepie={recepie} />
            <Link to={`/recepie/${recepie.id}`} className='btn-blue'>Full Recepie</Link>
        </section>
    )
}

export default RecepieInfo
