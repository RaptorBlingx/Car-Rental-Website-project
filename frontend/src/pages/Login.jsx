import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import '../styles/Login.css'

// import loginimg from '../assets/all-images/login.jpg.jpg'
const Login = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login__container d-flex justfuy-content-between">
                        <div className="login__img">
                            {/* <img src={loginimg} alt="" /> */}
                        </div>

                        <div className="login__form">
                            <div className="user">
                                <img src="" alt="" />
                            </div>

                            <h2>Login</h2>

                            {/* <Form>
                                <FormGroup>
                                    <input type="text" placeholder="Email" required id="email" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder="password" required id="password" onChange={handleChange} />
                                </FormGroup>
                                <Button className="btn secondary__btn auth__btn"
                                type="submit">Login</Button>
                            </Form> */}
                            <p>Don't have an account? <Link to='/register'>Create</Link> </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>

}

export default Login;