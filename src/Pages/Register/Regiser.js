import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Regiser = () => {
    const { createNewUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoURL = form.photoURL.value

        createNewUser(email, password)
            .then(user => {
                console.log("log in successfull", email)
                form.reset()
                navigate('/')
            }).catch(error => console.error(error))
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter User Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p>Already have an account? <Link to="/login">Log in</Link> </p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="ms-3">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </div>
    );
};

export default Regiser;