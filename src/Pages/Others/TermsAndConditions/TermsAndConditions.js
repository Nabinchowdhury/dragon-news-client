import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Terms and Conditions</h3>
            <p>No term And condition. But you must select "checked" to complete registration </p>
            <Link to="/register">
                <Button variant="primary" type="submit" >Complete registration</Button>
            </Link>
        </div>
    );
};

export default TermsAndConditions;