import React from 'react'
import SHOP_DATA from './ShopData'

export default class ShopPage extends React.Component {
    constructor(){
        this.state = {
            collections: SHOP_DATA
    }
}
    render(){
        return(
            <div>Shop</div>
        )
    
}}