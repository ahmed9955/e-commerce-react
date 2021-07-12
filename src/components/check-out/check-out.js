import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { removeItem, setMenuVisibility } from '../../redux/card/action'
import { selectCardHidden, selectCardItems, selectCardItemTotal } from '../../redux/card/card-selector'
import './check-out.scss'

const CheckOut = ({itemsAdded, total, removeItem}) => {
    return (
        <div className="check-out">
            <div className='check-out-header'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            { itemsAdded.map(item => { 
                return(
                <div className="check-out-content">
                    <span><img width="100%" height="80" src={item.imageUrl}/></span>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                    <span onClick={() => removeItem(item.id)} style={{cursor: 'pointer'}}>X</span>
                </div>
            )})
            }
            <div className="total">
                <h1 >TOTAL:${total}</h1>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsAdded: selectCardItems,
    total: selectCardItemTotal
    
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    toggleCard: visibility => dispatch(setMenuVisibility(visibility))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)