import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home',
                link: '/home'
            },
            {
                id: 12,
                title: 'HomePage 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'HomePage 3',
                link: '/home3'
            },
            {
                id: 14,
                title: 'HomePage 4',
                link: '/home4'
            },
        ]
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '/service',
        submenu: [
            {
                id: 31,
                title: 'Service',
                link: '/service'
            },
            {
                id: 32,
                title: 'Service Details',
                link: '/servicedetails'
            }
        ]
    },

    {
        id: 4,
        title: 'Team',
        link: '/team',
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Details',
                link: '/blogdetails'
            }
        ]
    },
    {
        id: 6,
        title: 'Shop',
        link: '/shop',
        submenu: [
            {
                id: 61,
                title: 'Shop',
                link: '/shop'
            },
            {
                id: 62,
                title: 'Shop Details',
                link: '/shopdetails'
            }
        ]
    },
    {
        id: 7,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 71,
                title: 'Shopping Cart',
                link: '/cart'
            },
            {
                id: 72,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 73,
                title: 'FAQs',
                link: '/faq'
            },
            {
                id: 74,
                title: 'Coming Soons',
                link: '/coming'
            },
            {
                id: 75,
                title: 'Error 404',
                link: '/404'
            },
            {
                id: 76,
                title: 'Sign In',
                link: '/login'
            },
            {
                id: 77,
                title: 'Sign Up',
                link: '/signup'
            }
        ]
    },
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link to={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" to={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
