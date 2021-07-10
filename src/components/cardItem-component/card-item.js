import React from 'react'
import { connect } from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { selectCardItemCount } from '../../redux/card/card-selector'
import './card-item.scss'

const CardItem = ({handleClick, itemCount}) => {
    return(
            <div className="card-icon" style={{cursor:'pointer'}} onClick={handleClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount: selectCardItemCount(state)  
})

export default connect(mapStateToProps)(CardItem)