import React from 'react'
import Foto from '../images/foto.jpg'
import Layout from '../components/layout'
import Style from './style/homeStyle.module.scss'
import {Header, Segment, Image, Responsive, Menu, Container} from 'semantic-ui-react'
const BlogPage = () => {
    return(
        <Responsive as={Segment} minWidth={768} maxWidth={2569} >
        <Layout>
            <Container as="h1" className={Style.title} >Convocatoria</Container>
                <Container as="p" className={Style.text} >Cartel de divulgacion
                    <Image as="big" wrapped centered className={Style.logo} src={Foto}/>
                </Container>
                
        </Layout>
        </Responsive>
    )

    
} 

export default BlogPage
