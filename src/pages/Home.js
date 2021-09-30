import React, { useState } from 'react'
import Recepies from '../components/Recepies'
import recepies from '../recepies'
import Categories from '../components/Categories';
const allCategories = ['all', ...new Set(recepies.map((recepie) => recepie.category))];
function Home() {

    const [categories, setCategories] = useState(allCategories)
    const [menuItems, setMenuItems] = useState(recepies)
    const [value, setValue] = useState(0);
    const filterItems = (category, index) => {
        if (category === 'all') {
            setMenuItems(recepies);
            setValue(0)
            return;
        }
        const newRecepies = recepies.filter((recepie) => recepie.category === category);
        setMenuItems(newRecepies)
        setValue(index)
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} value={value} />
                <Recepies recepies={menuItems} />
            </section>
        </main>
    )
}

export default Home
