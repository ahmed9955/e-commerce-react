import React from 'react'
import { connect } from 'react-redux'
import { addItems } from '../../redux/card/action'
import CustomButton from '../custom-button/custom-button'
import './collection-style.scss'

const CollectionItem = ({items , addItems }) => {

    const { id,name,price,imageUrl } = items

    return (

        <div className="collection-item">
            <div 
            className="image"
            style={{backgroundImage: `url(${imageUrl})`
            ,
            backgroundRepeat:'no-repeat',
            WebkitBackgroundSize:'cover'
        }}>
           <section className="add-to-card" onClick={()=> addItems(items)} >
                <CustomButton >Add To Card</CustomButton>
            </section>
            </div>
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
        </div>   
    )
}

const mapDispatchToProps = dispatch => ({
    addItems: item => dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)