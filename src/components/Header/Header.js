import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.scss'
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CardItem from '../cardItem-component/card-item'
import CardDropDown from '../card-dropdown/card-dropdown'
import { setMenuVisibility } from '../../redux/card/action'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCardHidden } from '../../redux/card/card-selector'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, setMenuVisibility, hidden  }) => {
    return(
    <div className="header">
        <Link to="/" className="logo-container" >
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link  className="option" to="/shop">
                SHOP
            </Link>
            <Link  className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option" style={{cursor:'pointer'}} onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to="/signin">
                    SIGN IN
                </Link>
            }
            <CardItem handleClick={()=> {setMenuVisibility(!hidden)}}/>
        </div>
        <CardDropDown  visibility={hidden?'hidden':'visible'}/>
    </div>
)
}
const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden: selectCardHidden
})

const mapDispatchToProps = dispath => ({
    setMenuVisibility: (visibility) => dispath(setMenuVisibility(visibility))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)