import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Log in with</h4>
                <Button className='mb-1 mt-2 d-flex align-items-center gap-1' variant="outline-primary"> <FaGoogle></FaGoogle> Log in with google</Button>
                <Button className='d-flex align-items-center gap-1' variant="outline-secondary "><FaGithub></FaGithub> Log in with GitHub</Button>
            </div>
            <div className='mt-4'>
                <h4>Find us on</h4>

                <ListGroup>             
                    <ListGroup.Item className='d-flex align-items-center gap-1' > <FaFacebook style={{color:'blue'}}></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-1' > <FaTwitter style={{color:'red'}}></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-1' > <FaInstagram style={{color: 'red'}}></FaInstagram>Instragam</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;