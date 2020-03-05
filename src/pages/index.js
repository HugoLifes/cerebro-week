import React from "react"
import Layout from '../components/layout' 
import Style from './style/homeStyle.module.scss'
import BrainVideo from '../images/brain.mp4'
import {Header,Segment} from 'semantic-ui-react'
//Home page

function App(){
    return(
        <Layout>
        <div className={Style.div}>
            <Header className={Style.title} as="h2">CerebroWeek2020</Header> 
            <Segment as="p" className={Style.title}>Súmate al marco de la celebración internacional sobre el avance,
            promoción y beneficio de la investigación de la ciencia del cerebro.</Segment>
            <Segment className={Style.video}>
                <video controls>
                    <source src={BrainVideo} type="video/mp4"/>
                </video>
            </Segment>

        </div>
            

        </Layout>
    )
}

export default App; 
