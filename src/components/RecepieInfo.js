import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const RecepieInfo = ({ recepie }) => {
    const { title, prepTime, desc, id } = recepie;
    // console.log(recepie);
    return (
        <section className='recepie-info'>
            <div className="title">
                <h1>{recepie.title}</h1>
                <h3><AiOutlineClockCircle /> {prepTime}</h3>
            </div>
            <div className="desc-btn">
                <p>{desc}</p>
                <Link to={`/recepie/${id}`} className='btn btn-blue'>Full Recepie</Link>
            </div>
        </section>
    )
}

export default RecepieInfo
