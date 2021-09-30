import React from 'react'
import Recepies from '../components/Recepies'
function Home() {
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Menu</h2>
                    <div className="underline"></div>
                </div>
                <Recepies />
            </section>
        </main>
    )
}

export default Home
