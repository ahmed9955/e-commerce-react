import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './card-item.scss'

const CardItem = ({handleClick}) => {
    return(
            <div className="card-icon" style={{cursor:'pointer'}} onClick={handleClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CardItem