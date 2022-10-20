import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Regiser = () => {
    const { createNewUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState("")
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || "/"
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoURL = form.photoURL.value
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        createNewUser(email, password)
            .then(user => {
                console.log("log in successfull", email)
                form.reset()
                navigate(from, { replace: true })
                setError("")
                handleUpdateUser(profile)
            }).catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleCheckBox = (e) => {
        setChecked(e.target.checked)
    }
    const handleUpdateUser = (profile) => {
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
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


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheckBox} type="checkbox" label={<>Accept <Link to="/terms" > Terms And Conditions</Link> </>} />
                </Form.Group>
                <p>Already have an account? <Link to="/login">Log in</Link> </p>
                <Button variant="primary" type="submit" disabled={!checked}>
                    Sign up
                </Button>
                <Form.Text className="ms-3 text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Regiser;