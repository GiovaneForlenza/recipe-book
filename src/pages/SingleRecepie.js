import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import recepies from '../recepies'
import Image from '../components/Image';
import SingleRecepieInfo from '../components/SingleRecepieInfo';
import Ingredients from '../components/Ingredients';
import Steps from '../components/Steps';


const SingleRecepie = () => {
    const { id } = useParams();
    const [singleRecepie, setRecepie] = useState({});
    const [foundRecepie, setFoundRecepie] = useState(false)

    useEffect(() => {
        recepies.map((recepie) => {
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
                <div className="single-recepie">
                    <Image img={singleRecepie.img} />
                    <div className="recepie-info">
                        <SingleRecepieInfo recepie={singleRecepie} />
                    </div>
                </div>
                <div className="ingredients">
                    <Ingredients recepie={singleRecepie} />
                    <Steps recepie={singleRecepie} />
                </div>
            </section>
        </main>
    )
}

export default SingleRecepie
