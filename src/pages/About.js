import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import Style from './style/homeStyle.module.scss'

const AboutPage = () =>{
    return(
        <Layout>
        <h1 className={Style.title} >Acerca del evento</h1>
        <p className={Style.text} >
        El proyecto Semana del Cerebro es un evento de difusión a nivel mundial que se encarga llevar a la sociedad las actualizaciones y beneficios de la investigación neurocientífica.
         Para ello participan distintas sedes coordinadas por la Society for Neuroscience,
          con la finalidad de realizar actividades imaginativas en las comunidades compartiendo las maravillas del cerebro y el impacto que la Neurociencia presenta en nuestra vida cotidianamente. Dicho acercamiento es realizado por medio de conferencias magistrales,
         charlas, exposiciones y talleres. 
         </p>
        <Link className={Style.title} to="/Contact">Contactanos!</Link>
        </Layout>

    )
}

export default AboutPage