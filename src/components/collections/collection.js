import React from 'react'
import './collection.scss'

const Collection = ({match}) => {
    return (
        <div className="specific-container">   
            <h1 style={{margin:"0 auto",width:"fit-content"}}>{`${match.params.id[0].toUpperCase()}${match.params.id.slice(1)}`}</h1>
            <div className="collecions-items">
                
            </div>
        </div>
    )
}


export default Collection