import React, { useContext } from 'react';
import { Context } from "../index";
import { Nav, Navbar, Button, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const Styles = styled.div`
     .nav-brand, .navbar-bar .nav-link {
        color: #adb1b8;
        &:hover {
            color: red
        }
    }
`
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Cvetut64</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={BASKET_ROUTE}>О нас</Nav.Link>
                            <Nav.Link as={Link} to="/login">Акции</Nav.Link>
                            <Nav.Link as={Link} to="/registration">Каталог</Nav.Link>
                            <Nav.Link as={Link} to="/about">Прайс-лист</Nav.Link>

                        </Nav>
                        {user.isAuth ?
                            <Nav className="ml-auto">
                                <Button
                                    variant="outline-success"
                                    className='me-3 my-2'
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                >Админ панель</Button>
                                <Button
                                    variant="info"
                                    className='me-3 my-2'
                                    onClick={() => logOut()}
                                >Выйти</Button>
                            </Nav>
                            :
                            <Nav className="ml-auto">
                                <Button variant="outline-light" className='me-3 my-2' onClick={() => navigate(LOGIN_ROUTE)} >Авторизация</Button>
                            </Nav>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
    );
});

export default NavBar;