import React, { useContext, useLayoutEffect } from 'react';
import { Button, Container, Form, useAccordionButton } from 'react-bootstrap';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';







const Login = () => {

    const {loginUser}= useContext(authContext);
    const location = useLocation();
    console.log(location)
    const navigate= useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handlerLogin=event=>{
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        console.log(email, password)
        loginUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from)

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
           <Container >
            <NavigationBar></NavigationBar>
            <h1 className='text-center'>Please Login</h1>
           <Form className='w-25 mx-auto mt-5' onSubmit={handlerLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p>New to Report Rise? <Link to={'/register'}>Register</Link></p>
            </Form>
           </Container>
        </div>
    );
};

export default Login;