import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logUserOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logUserOut()
            .then(() => {
                console.log("Log out successfull")
            }).catch(err => console.error(err))
    }
    // console.log(user);
    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link to="/">Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                user?.uid ?
                                    <>
                                        <Nav.Link >{user?.displayName}</Nav.Link>
                                        <Link><Button variant="outline-danger" size="sm" className='fw-semibold' onClick={handleLogOut}>Log out</Button></Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login"><Button variant="outline-primary" size="sm" className='fw-semibold'>Sign in</Button></Link>
                                    </>
                            }
                            <Nav.Link eventKey={2} >
                                {
                                    user?.photoURL ?
                                        <Image roundedCircle style={{ height: "30px" }} src={user?.photoURL
                                        }></Image> :
                                        <FaUserCircle className='fs-3'></FaUserCircle>
                                }
                            </Nav.Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;