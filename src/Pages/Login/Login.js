import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { logUserIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logUserIn(email, password)
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p>Don't have an account? <Link to="/register">Sign up </Link> </p>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Form.Text className="ms-3">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;