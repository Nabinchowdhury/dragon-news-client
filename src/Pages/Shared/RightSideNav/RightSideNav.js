import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import BrandsCarousel from '../BrandsCarousel/BrandsCarousel';


const RightSideNav = () => {
    const { googleSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGglSignin = () => {
        googleSignIn(googleProvider)
            .then(() => {
                console.log("log in successful")
            }).catch(err => console.error("ERROR", err))

    }
    return (
        <div>
            <ButtonGroup vertical className='mb-4'>
                <Button className='mb-2' variant="outline-primary" onClick={handleGglSignin}><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub></FaGithub> Log in with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Terms and conditions</ListGroup.Item>
                </ListGroup>
            </div>

            <div>
                <BrandsCarousel></BrandsCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;