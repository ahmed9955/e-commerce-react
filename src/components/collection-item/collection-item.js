import React from 'react'
import './collection-style.scss'

const CollectionItem = ({ id,name,price,imageUrl }) => {
    return (

        <div className="collection-item">
            <div 
            className="image"
            style={{backgroundImage: `url(${imageUrl})`
            ,
            backgroundRepeat:'no-repeat',
            WebkitBackgroundSize:'cover'
        }}
            ></div>
            <div className="collection-footer">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
            </div>
        </div>   
    )
}

export default CollectionItem