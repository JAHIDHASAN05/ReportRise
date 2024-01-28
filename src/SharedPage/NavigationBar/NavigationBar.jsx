import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { authContext } from '../../ContextProvider/ContextProvider';

const NavigationBar = () => {
    const{ user, logOut} = useContext(authContext)
    console.log(user);

    const logoutHandler=()=>{
        logOut()
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-5">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/">Career</Nav.Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link className='my-auto' href="#deets">
                                {user && user.email}
                                </Nav.Link>
                           {user ?  <Nav.Link eventKey={2} onClick={logoutHandler} href="/">
                             <Button >Log out</Button>
                            </Nav.Link> :  <Nav.Link eventKey={2} href="/login">
                             <Button >Login</Button>
                            </Nav.Link> }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;