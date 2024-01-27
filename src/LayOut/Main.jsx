import React from 'react';
import Header from '../Components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                
                <Row>
                    <Col sm={3}>sm=true</Col>
                    <Col sm={6}>sm=true</Col>
                    <Col sm={6}>sm=true</Col>
                </Row>
            </Container>

        </div>
    );
};

export default Main;