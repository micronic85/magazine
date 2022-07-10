import React, { useState, useContext } from 'react';
import { Container, Form, Card, Button, Row, Nav, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }



    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : "Регистрация"}</h2>

                <Form >
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                    <Row className="align-items-center mt-3 ">
                        <Col xs={9} lg={9} md={9}>
                            {isLogin ?
                                <div>
                                    Нет аккаунта? <Nav.Link as={Link} to={REGISTRATION_ROUTE}>Зарегистрироваться</Nav.Link>
                                </div>

                                :
                                <div>
                                    Есть аккаунт? <Nav.Link as={Link} to={LOGIN_ROUTE}>Войдите</Nav.Link>
                                </div>

                            }


                        </Col>
                        <Col xs={3} lg={3} md={3}>
                            <Button
                                variant={"outline-success"}
                                onClick={click}
                            >
                                {isLogin ? 'Войти' : 'Регистрация'}
                            </Button>
                        </Col>

                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;