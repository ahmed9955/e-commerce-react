import React from 'react'
import CustomButton from '../custom-button/custom-button'
import './card-dropdown.scss'

const CardDropDown = ({visibility}) => {
   
    return(
        <div className = 'drop-menu' style={{visibility:`${visibility}`}}>
            <div className='card-items'>
                
            </div>
            <div className='check-out'>
                <CustomButton >Check Out</CustomButton>
            </div>
        </div>
    )
}

export default CardDropDown