import React from 'react'
import MenuItem from '../components/menu-item/menu-item'
import './directory.style.scss'
export default class Directory extends React.Component{
    
    constructor () {
        super()
        this.state = {
            section: [
                {
                    name:"Hats",
                    url:"https://i.ibb.co/ypkgK0X/blue-beanie.png",
                    size:'',
                    path:'hats'
                },
                {
                    name:"Jackets",
                    url: "https://i.ibb.co/XzcwL5s/black-shearling.png",
                    size:'',
                    path:''
                },
                {
                    name:"sneakers",
                    url: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                    size:'',
                    path:''
                },
                {
                    name:"Men",
                    url: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                    size:'large',
                    path:''
                },
                {
                    name:"women",
                    url: "https://i.ibb.co/7CQVJNm/blue-tank.png",
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
