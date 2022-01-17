import React from 'react'

const Categories = ({ categories, ingredients, filterItems, categoryBtn, ingredientBtn }) => {
    return (<>
        <div className='btn-container'>
            {categories.map((category, index) => {
                return <button className={`${index === categoryBtn && 'active-btn'} filter-btn`} key={index} onClick={() => { filterItems(category, index) }}>
                    {category}
                </button>
            })}
        </div>
        <div className='btn-container'>
            {ingredients.map((ingredient, index) => {
                return <button className={`${index === ingredientBtn && 'active-btn'} filter-btn`} key={index} onClick={() => { filterItems(undefined, index, ingredient) }}>
                    {ingredient}
                </button>
            })}
        </div>
    </>
    )
}

export default Categories
