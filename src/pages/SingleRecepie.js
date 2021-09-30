import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import recepies from '../recepies'
import Image from '../components/Image';
import { AiOutlineClockCircle } from 'react-icons/ai'


const SingleRecepie = () => {
    const { id } = useParams();
    const [singleRecepie, setRecepie] = useState({});
    const [foundRecepie, setFoundRecepie] = useState(false)

    useEffect(() => {
        recepies.map((recepie) => {
            // console.log(recepie.id);
            if (recepie.id == id) {
                setRecepie(recepie)
                setFoundRecepie(true)
            }
        })
    }, [id])

    if (!foundRecepie) return <h2>No recepie found</h2>

    return (

        <main>
            <section className="menu section">
                <div className="title">
                    <h2>{singleRecepie.title}</h2>
                    <div className="underline"></div>
                </div>
                <div className="single-recepie">
                    <div className="img">
                        <Image img={singleRecepie.img} />
                    </div>
                    <div className="info">
                        <div className="title">
                            <h1>{singleRecepie.title}</h1>
                            <h3><AiOutlineClockCircle /> {singleRecepie.prepTime}</h3>
                        </div>
                        <div className="desc">
                            <p>{singleRecepie.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SingleRecepie
