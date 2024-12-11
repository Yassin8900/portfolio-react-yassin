import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Container, Accordion, Carousel } from 'react-bootstrap';

function Newsletter() {
    const location = useLocation();
    const { name, email } = location.state || {};
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/assets/ProjectItems.json');
                const data = await response.json();
                setImages(data.map(item => ({
                    src: item.projectImg,
                    title: item.projectTitle,
                    description: item.projectDescription
                })));
            } catch (error) {
                console.error('Error fetching project items:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card className="p-5 shadow w-100">
                <Card.Body className="text-center">
                    <Card.Title className="mb-4">Thank You!</Card.Title>
                    <Card.Text>
                        Thank you, {name}, for subscribing to my newsletter with the email {email}.
                    </Card.Text>
                    <hr />
                    <Card.Title className="mt-4">Newsletter Content</Card.Title>
                    <Accordion defaultActiveKey="0" className="text-start mt-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Project Updates</Accordion.Header>
                            <Accordion.Body>
                                <p>I am working on a new web development project that will be launched next month. This project includes innovative features and a modern design.</p>
                                <p>Recently, I reached a significant milestone in one of my projects by integrating a new API that greatly enhances the site's functionality.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Articles or Tutorials</Accordion.Header>
                            <Accordion.Body>
                                <p>I have written a new article on best practices in developing React applications. You can read it on my blog.</p>
                                <p>I have also created a step-by-step tutorial on how to set up a development environment with Docker. This tutorial is available exclusively to my newsletter subscribers.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Useful Resources</Accordion.Header>
                            <Accordion.Body>
                                <p>Here are some of the tools and frameworks I use in my daily work:</p>
                                <ul>
                                    <li><strong>React</strong> - A JavaScript library for building user interfaces.</li>
                                    <li><strong>Bootstrap</strong> - A CSS framework for developing responsive and mobile-first websites.</li>
                                    <li><strong>Axios</strong> - A library for making HTTP requests from Node.js or XMLHttpRequests from the browser.</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Offers or Collaborations</Accordion.Header>
                            <Accordion.Body>
                                <p>I am excited to announce a collaboration with a leading tech company to develop a new mobile application.</p>
                                <p>Additionally, I am offering a special 20% discount on my web development services for my newsletter subscribers. Don't miss out!</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <hr />
                    <Card.Title className="mt-4">Featured Projects</Card.Title>
                    <Carousel className="mt-3">
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={image.title || `Project ${index + 1}`}
                                />
                                <Carousel.Caption>
                                    <h3>{image.title || `Project ${index + 1}`}</h3>
                                    <p>{image.description || 'Description of the project.'}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Newsletter;