import React from "react"
import Layout from '../components/layout' 
import Style from './style/homeStyle.module.scss'
import Video from '../components/video'
import BrainVideo from '../images/brain.mp4'
//Home page

function App(){
    return(
        <Layout>
        <div className={Style.div}>
            <h2 className={Style.title} > CerebroWeek2020 </h2>
            <p className={Style.title}> Súmate al marco de la celebración internacional sobre el avance,
             promoción y beneficio de la investigación de la ciencia del cerebro.</p>
            <section className={Style.video}>
                <video controls>
                    <source src={BrainVideo} type="video/mp4"/>
                </video>
            </section>

        </div>
            

        </Layout>
    )
}

export default App; 
