import React from 'react'

const ItemsList = ({ items }) => {
    return (
        <div className="items-list">
            {items.map((item) => {
                return <li>{item}</li>
            })}
        </div>
    )
}

export default ItemsList
