import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaPepperHot } from 'react-icons/fa'

const SingleRecepieInfo = ({ recepie }) => {
    const [isSpicy, setIsSpicy] = React.useState(false);
    let spicyLevel = [];
    React.useEffect(() => {
        if (recepie.spicy !== 0) {
            setIsSpicy(true)
            defSpicyLevel()
        }
    }, [recepie.id]);

    const defSpicyLevel = () => {
        for (let i = 0; i < recepie.spicy; i++) {
            spicyLevel.push(i)
        }
        console.log(spicyLevel);
    }
    return (<>
        <div className="title">
            <h1>{recepie.title}</h1>
        </div>
        <div className="recepie-information">
            <h3><AiOutlineClockCircle /> Prep: {recepie.prepTime}</h3>
            <h3><AiOutlineClockCircle /> Cook: {recepie.cookTime}</h3>
            {isSpicy ? <h3><FaPepperHot /> {recepie.spicy}</h3> : null}
            <h3>Servings: {recepie.servings}</h3>
        </div>
    </>
    )
}

export default SingleRecepieInfo
