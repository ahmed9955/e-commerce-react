import React from 'react'
import Preview from '../../components/collection-preview/collection-preview'
import './shop-style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionsSelector } from '../../redux/categories/collections-selector'

const ShopPage = ({collections}) =>  {
        return(
            <div >
                {collections.map(item =>
                     <div key={item.id}>
                         <h1 style={{marginLeft:'30px'}}>{item.title}</h1>
                         <Preview items = {item.items}/>
                     </div>
                     )}
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
    collections: collectionsSelector
})

export default connect(mapStateToProps)(ShopPage)