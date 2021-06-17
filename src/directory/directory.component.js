import React from 'react'
import MenuItem from '../components/menu-item/menu-item'
import './directory.style.scss'
export default class Directory extends React.Component{
    
    constructor () {
        super()
        this.state = {
            section: [
                {
                    name:"chinese",
                    url:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:'',
                    path:'chinese'
                },
                {
                    name:"snacks",
                    url: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:'',
                    path:''
                },
                {
                    name:"sweets",
                    url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:'',
                    path:''
                },
                {
                    name:"fish",
                    url: "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:'large',
                    path:''
                },
                {
                    name:"chicken",
                    url: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    size:'large',
                    path:''               
                }

            ]
        }
    }

    render(){
        return(
            <div className="item-container">
                {this.state.section.map(({name,url,size,path}) => 
                    <MenuItem title={name} url={url} size={size} path={path} />)}
            </div>
        )
    }

}
