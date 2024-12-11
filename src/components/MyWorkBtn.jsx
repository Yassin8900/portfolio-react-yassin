import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function MyWorkBtn() {
    return (
        <Button as={Link} to="/projects" variant="primary" className="text-capitalize">
            View My Work
        </Button>
    );
}

export default MyWorkBtn;