import React, { Component } from 'react'
import {Link} from 'gatsby'
import HeaderStyle from './Header.module.scss';
import logo from '../images/logo.jpg'
import {Responsive, 
        Image, 
    Menu, 
    List, 
    Header, 
    Visibility,
    Container, 
    Segment} from 'semantic-ui-react'

// Barra de navegacion e imagen de logo

export default class Header2 extends Component {
    render(){
    return(        
        <Responsive as={Segment} minWidth={768} maxWidth={2569} fluid widths={4} className={HeaderStyle.div}>
        <Container header className={HeaderStyle.header}>
            <Menu.Item>
                <Image className={HeaderStyle.title} src={logo}/>
            </Menu.Item>
                    <Menu.Item header className={HeaderStyle.navBar}>
                        <List className={HeaderStyle.navList} link>
                            <Menu.Item as={Link} activeClassName={HeaderStyle.activeNavItem}  className={HeaderStyle.link} to="/">Home</Menu.Item>
                            <Menu.Item as={Link} activeClassName={HeaderStyle.activeNavItem}  className={HeaderStyle.link} to="/Blog">Info</Menu.Item>
                            <Menu.Item as={Link} activeClassName={HeaderStyle.activeNavItem}  className={HeaderStyle.link} to="/About">About</Menu.Item>
                            <Menu.Item as={Link} activeClassName={HeaderStyle.activeNavItem}  className={HeaderStyle.link} to="/Contact">Contact</Menu.Item>
                        </List>
                
                    </Menu.Item>
               
            </Container>
        </Responsive>
        
        );
    }
}

