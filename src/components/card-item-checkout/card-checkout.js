import React from 'react'

import './card-checkout.scss'

const CardCheckOut = ({name, quantity, price, imageUrl}) => {

    return (
        <div className="card-check-out">
            <img width = '70' height = '70' placeholder="not found" src={imageUrl} />
            <section className="card-meta">
                <span>{name}</span>
                <span>{quantity} X {price}</span>
            </section>
        </div>
    )
}

export default CardCheckOut