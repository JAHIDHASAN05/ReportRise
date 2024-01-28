import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
const Register = () => {
   const {createUser}= useContext(authContext)
    const handlerRegister=event=>{
        event.preventDefault();
        const name= event.target.text.value;
        const email= event.target.email.value;
        const password= event.target.password.value;
        console.log(name , email, password)
        createUser(email, password)
        .then(createUser=>{
            const user= createUser.user;
            console.log(user)
        })
        .catch(error=>console.error(error))
     
    }
    return (
        <div>
                  <Container >
            <NavigationBar></NavigationBar>
            <h1 className='text-center'>Please Register</h1>
           <Form onSubmit={handlerRegister} className='w-25 mx-auto mt-5'>
                <Form.Group  className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="text" placeholder="Your name here" required />
                   
                </Form.Group>
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

                <p>Already Have an account? <Link to={'/login'}>Login</Link></p>
            </Form>
           </Container>
        </div>
       
    );
};

export default Register;