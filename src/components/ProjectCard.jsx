import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

function ProjectCard({ projectImage, projectTitle, projectDesc, projectDesc2, id }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='col-md-6'>
            <Card className='h-100 shadow'>
                <Card.Img variant="top" src={projectImage} />
                <Card.Body className='p-5'>
                    <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>
                        {projectTitle}
                    </Card.Title>
                    <Card.Text>{projectDesc}</Card.Text>

                    <Collapse in={open}>
                        <div id={`collapseContent${id}`} className="mt-3">
                            <Card.Text>
                                {projectDesc2}
                            </Card.Text>
                            <br />
                        </div>
                    </Collapse>

                    <Button
                        className='shadow text-capitalize'
                        variant='outline-primary'
                        onClick={() => setOpen(!open)}
                        aria-controls={`collapseContent${id}`}
                        aria-expanded={open}
                    >
                        {open ? 'View Less' : 'View More'}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;
