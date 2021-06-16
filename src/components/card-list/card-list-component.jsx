import React from 'react'
import { Card } from '../card-component/card-component'
import './card-list-style.css'
export const CardList = (props) =>
{ 
    return (
    <div className="card-list">
        {props.monsters.map(user => <Card monsters = {user}/>)}    
    </div>
    )
}