import React from 'react'
import Preview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './ShopData'
import './shop-style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { collectionsSelector } from '../../redux/categories/collections-selector'
import OverView from '../../components/collection-overview/collection-overview'

const ShopPage = ({collections}) =>  {
        return(
           <OverView/>
        )
    
}

const mapStateToProps = createStructuredSelector({
    collections: collectionsSelector
})

export default connect(mapStateToProps)(ShopPage)