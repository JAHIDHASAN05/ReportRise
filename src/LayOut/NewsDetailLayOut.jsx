import React from 'react';
import Header from '../Components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../SharedPage/LeftNav/LeftNav';
import Middlecontent from '../SharedPage/MiddleContent/Middlecontent';
import RightNav from '../SharedPage/RightNav/RightNav';

const NewsCardDetail = () => {
    return (
        <div>
              <Header></Header>
        <Container>
            
            <Row>
                <Col sm={9}><Middlecontent></Middlecontent></Col>
                <Col sm={3}><RightNav></RightNav></Col>
            </Row>
        </Container>
        </div>
    );
};

export default NewsCardDetail;