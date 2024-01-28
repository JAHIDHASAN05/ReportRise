import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const NewsCard = () => {
    const CategoryNews = useLoaderData()
    console.log(CategoryNews)
    return (
        <div>
            {
                CategoryNews.map(news => 
                <Card className="" key={news._id}>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Img variant="top" src={news.image_url} />
                        <Card.Text>
                           {news.details<250 ? <>{news.details}</> : <>{news.details.slice(0,250)}...{<Link to={`/news/${news._id}`}>Read More</Link>}</>}
                        </Card.Text>
                      
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>)
            }
        </div>
    );
};

export default NewsCard;