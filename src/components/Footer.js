import React from 'react'
import Style from './footer.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
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
        <footer className={Style.title}>
            <p> Created by {data.site.siteMetadata.author} © 2020 </p>
        </footer>
    )
}

export default Footer