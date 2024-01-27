import React from 'react';
import { Button } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Log in with</h4>
                <Button className='mb-1 mt-2' variant="outline-primary">Log in with google</Button>
                <Button variant="outline-secondary">Log in with GitHub</Button>
            </div>
        </div>
    );
};

export default RightNav;