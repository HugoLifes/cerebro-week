import React from 'react';
import Layout from '../components/layout'
import Style from './style/homeStyle.module.scss'
import {Header} from 'semantic-ui-react'
const Contact = () =>{
    return(
        <Layout>
        <Header as="h1" className={Style.title} >Contacto</Header>
            <Header as="p" className={Style.title} >Encuentranos en Facebook!</Header>
            <Header as="p" className={Style.subTitle} >
            <Header as="a" className={Style.subTitle} rel="noopener noreferrer" href="https://www.facebook.com/Semana-del-Cerebro-JRZ-2020-2491373854415010/" target="_blank">CerebroWeek2020</Header> 
        </Header>
        </Layout>
    )
}

export default Contact;
