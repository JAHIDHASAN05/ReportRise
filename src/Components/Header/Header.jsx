import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';

const Header = () => {
    return (
        <Container >
            <img className=' mt-5  mx-auto' src={logo} alt="" />
            <p className='text-secondary text-center mt-2'><small>Journalism Without Fear or Favour</small></p>
            <p className='text-center mt-0'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className='d-flex mb-5 mt-5'>
                <Button>Leatest </Button>
                <Marquee speed={100}>
                   Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>

            </div>
            <NavigationBar></NavigationBar>
        </Container>
    );
};

export default Header;