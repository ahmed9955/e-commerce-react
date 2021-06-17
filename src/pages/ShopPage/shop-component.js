import React from 'react'
import Preview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './ShopData'
import './shop-style.scss'

export default class ShopPage extends React.Component {
    constructor(){
        super()
        this.state = {
            collections: SHOP_DATA
    }
}
    render(){
        const {collections} = this.state
        return(
            <div >
                {collections.map(item =>
                     <div key={item.id}>
                         <h1>{item.title}</h1>
                         <Preview items = {item.items}/>
                     </div>
                     )}
            </div>
        )
    
}}