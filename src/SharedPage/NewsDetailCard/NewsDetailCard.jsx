import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetailCard = () => {
    const singleNews= useLoaderData()
    console.log(singleNews)

    return (
        <div>
            
               
                <Card className="" key={singleNews._id}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>{singleNews.title}</Card.Title>
                        <Card.Img variant="top" src={singleNews.image_url} />
                        <Card.Text>
                           {singleNews.details}
                        </Card.Text>
                      
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
         
        </div>
    );
};

export default NewsDetailCard;