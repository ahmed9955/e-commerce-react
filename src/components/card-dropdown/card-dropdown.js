import React from 'react'
import { connect } from 'react-redux'
import { selectCardItems } from '../../redux/card/card-selector'
import CardCheckOut from '../card-item-checkout/card-checkout'
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.scss'

const CardDropDown = ({visibility,itemsAdded}) => {
   
    return(
        <div className = 'drop-menu' style={{visibility:`${visibility}`}}>
            <div className='card-items'>
                {
                    itemsAdded.map((item) => (
                            <CardCheckOut {...item} />
                    ))
                }
            </div>
            <div className='check-out'>
                <CustomButton >Check Out</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemsAdded: selectCardItems(state)
})

export default connect(mapStateToProps, null)(CardDropDown)