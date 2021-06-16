import React from 'react'
import { Card } from '../card-component/card-component'
import './card-list-style.css'
export const CardList = (props) =>
{ 
    const {monsters, search} = props
    return (
    <div className="card-list">
        {
        monsters.filter(user => user.name.includes(search))
        .map(user => <Card monsters = {user}/>)
        
        }    
    </div>
    )
}