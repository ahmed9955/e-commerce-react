import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import MenuItem from '../components/menu-item/menu-item'
import { sectionsSelector } from '../redux/categories/sections-selector'
import './directory.style.scss'

const Directory = ({sections}) => {
        return(
            <div className="item-container">
                {sections.map(({name,url,size,path}) => 
                    <MenuItem title={name} url={url} size={size} path={path} />)}
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    sections: sectionsSelector
})

export default connect(mapStateToProps)(Directory)