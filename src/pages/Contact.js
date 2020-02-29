import React from 'react';
import Layout from '../components/layout'
import Style from './style/homeStyle.module.scss'
const Contact = () =>{
    return(
        <Layout>
        <h1 className={Style.title} >Contacto</h1>
        <p className={Style.title} >Encuentranos en Facebook!</p>
        <p className={Style.subTitle} ><a  className={Style.subTitle} rel="noopener noreferrer" href="https://www.facebook.com/Semana-del-Cerebro-JRZ-2020-2491373854415010/" target="_blank">CerebroWeek2020</a> </p>
        </Layout>
    )
}

export default Contact;
