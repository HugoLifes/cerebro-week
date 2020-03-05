import React from 'react'
import Style from './footer.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import {Segment} from 'semantic-ui-react'
const Footer = () =>{
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return(
        <Segment className={Style.title}>
            <p> Created by {data.site.siteMetadata.author} © 2020 </p>
        </Segment>
    )
}

export default Footer