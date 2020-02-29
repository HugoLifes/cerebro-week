import React from 'react'
import Header from './Header'
import Footer from './Footer'
import hl from './layout.module.scss'

// Margen y Diseño de la pagina

const Layout = (props) => {
    return(
        <div className={hl.container}>
            <div className={hl.content}>
                <Header />
                {props.children}
                <Footer/>
            </div>
        </div>
    )
}

export default Layout