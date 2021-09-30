import React from 'react'

const Categories = ({ categories, filterItems, value }) => {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return <button className={`${index === value && 'active-btn'} filter-btn`} key={index} onClick={() => { filterItems(category, index) }}>
                    {category}
                </button>
            })}
        </div>
    )
}

export default Categories
