import React from 'react'
import Header2 from './Header'
import Footer from './Footer'
import hl from './layout.module.scss'
import {Container, Responsive, Text, Segment} from 'semantic-ui-react'

// Margen y Diseño de la pagina

const Layout = (props) => {
    return(
        <Container 
        as={Segment } 
        position="rigth"  
        fluid widths={4} 
        className={hl.container} 
        >
            <Responsive as={Segment} minWidth={320} className={hl.content} >
                <Header2 />
                {props.children}
                <Footer/>
            </Responsive>
        </Container>
    )
}

export default Layout