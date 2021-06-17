import React from 'react'
import MenuItem from '../../components/menu-item/menu-item'
import Directory from '../../directory/directory.component'
import './HomePage.scss'

class HomePage extends React.Component {


    render(){

        return(
            <div className="container">
                <Directory/>
            </div>
        )
    }
}

export default HomePage