import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { setMenuVisibility } from '../../redux/card/action'
import { selectCardHidden, selectCardItems } from '../../redux/card/card-selector'
import CardCheckOut from '../card-item-checkout/card-checkout'
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.scss'

const CardDropDown = ({visibility,itemsAdded, history,toggleCard,hidden}) => {
   
    return(
        <div className = 'drop-menu' style={{visibility:`${visibility}`}}>
            <div className='card-items'>
                {
                    itemsAdded.map((item) => (
                            <CardCheckOut {...item} />
                    ))
                }
            </div>
            <div className='check-out' onClick={() => {
                history.push('/checkout')
                toggleCard(!hidden)
                
                }} >
                <CustomButton >Check Out</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsAdded: selectCardItems,
    hidden: selectCardHidden
})

const mapDispatchToProps = dispatch => ({
    toggleCard: visibility => dispatch(setMenuVisibility(visibility))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDropDown))