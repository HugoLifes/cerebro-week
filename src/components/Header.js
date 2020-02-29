import React from 'react'
import {Link} from 'gatsby'
import HeaderStyle from './Header.module.scss';
import logo from '../images/logo.jpg'

// Barra de navegacion e imagen de logo

const Header = () => {
    return(
        <div className={HeaderStyle.div}>
        <header className={HeaderStyle.header}>
            
            <img className={HeaderStyle.title} src= {logo}/>

            <nav className={HeaderStyle.navBar}>
                <ul className={HeaderStyle.navList}>
                    <li>
                        <Link activeClassName={HeaderStyle.activeNavItem} className={HeaderStyle.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link  ctiveClassName={HeaderStyle.activeNavItem}className={HeaderStyle.link}  to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link ctiveClassName={HeaderStyle.activeNavItem} className={HeaderStyle.link}  to="/About">About us</Link>
                    </li>
                    <li>
                        <Link  ctiveClassName={HeaderStyle.activeNavItem} className={HeaderStyle.link}  to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </div>
    )
}

export default Header