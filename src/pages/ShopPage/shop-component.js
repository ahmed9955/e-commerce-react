import React from 'react'
import './shop-style.scss'
import OverView from '../../components/collection-overview/collection-overview'
import {Route} from 'react-router-dom'
import Collection from '../../components/collections/collection'

const ShopPage = ({match}) =>  {
    console.log(match)
        return(
            <div>
                <Route exact path={`${match.path}/`} component={OverView} />
                <Route exact path={`${match.path}/:id`} component={Collection} />
           </div>
        )
    
}


export default ShopPage