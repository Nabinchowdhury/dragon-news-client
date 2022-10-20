import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import BrandsCarousel from '../BrandsCarousel/BrandsCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='mb-4'>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in with Google</Button>
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