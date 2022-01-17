import React, { useState, useEffect } from 'react'
import Spacer from '../components/Spacer'
import Axios from 'axios'


function CreateRecepie() {
    const [recepieName, setRecepieName] = useState('');


    const createRecepie = () => {
        Axios.post('http://localhost:3005/a', { name: recepieName })
            .then(() => {
                alert('successfull insert')
            })
    }
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Create a new Recepie</h2>
                    <div className="underline"></div>
                </div>
                <div>
                    {/* <form action=""> */}
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' onChange={(e) => {
                        setRecepieName(e.target.value)
                    }}
                    />
                    <button onClick={createRecepie}>save</button>
                    {/* </form> */}
                </div>
            </section>
            <Spacer />
        </main>
    )
}

export default CreateRecepie
