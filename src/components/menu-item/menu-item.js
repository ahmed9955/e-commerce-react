import React from 'react'
import './menu-item.scss'


const MenuItem = ({title,url,size}) => {
        return (
                <div className={`menu-item ${size}`}>
                    <div className="item" style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                }}>
                        <div className="content">
                            <h1 style={{opacity:'1'}}>{title}</h1>
                            <p>SHOP NOW</p>
                        </div>
                    </div>
                </div>
        )
    }

export default MenuItem
