import React from 'react'

const ItemsList = ({ items }) => {
    return (
        <div className="items-list">
            {items.map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default ItemsList
