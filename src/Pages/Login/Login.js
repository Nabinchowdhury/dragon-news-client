import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { logUserIn, setLoading } = useContext(AuthContext)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        logUserIn(email, password)
            .then(result => {
                const user = result.user
                console.log("log in successfull", user)
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error("Verify your email first")
                }
                setError("")
            }).catch(error => {
                console.error(error)
                setError(error.message)
            }).finally(() => {
                setLoading(false)
            })
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

                <p>Don't have an account? <Link to="/register" state={{ from: from }} replace>Sign up </Link> </p>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                <Form.Text className="ms-3 text-danger fw-bold">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;