import React from 'react'
import './menu-item.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title,url,size,history,match,path}) => {
        return (
                <div className={`menu-item ${size}`} onClick={()=> history.push(`${match.url}${path}`)}>
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

export default withRouter(MenuItem)