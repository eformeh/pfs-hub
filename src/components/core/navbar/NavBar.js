import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown, Modal, Table, Form } from 'react-bootstrap';
import logo from '../../../assets/theHubLogo.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
export default function NavBar() {

    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleRegisterClose = () => setRegisterShow(false);
    const handleRegisterShow = () => setRegisterShow(true);
    // please also note that the login and register page are inside navbar due to the fact that i use modal bootstrap
    return (
        <div>

            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" >
                <Navbar.Brand href="#home"><img src={logo} logo width="65px" height="65px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Talent</Nav.Link>
                        <Nav.Link href="/Employers">Employers</Nav.Link>
                        <NavDropdown title="About Us" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#BoardMembers">Board Members</NavDropdown.Item>
                            <NavDropdown.Item href="#ExecutiveTeam">Executive Team</NavDropdown.Item>
                            <NavDropdown.Item href="#ourPartners">Our Partners</NavDropdown.Item>
                            <NavDropdown.Item href="#ourClients">Our Clients</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#testimonials">Testimonials</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* this login and register button are linked to a modal popup that opens the login and regist overlay */}
                    <Nav className="ml-auto">
                        <Nav.Link onClick={handleLoginShow}>login</Nav.Link>
                        <Nav.Link onClick={handleRegisterShow}><Button className="btn-sm" bg="dark" variant="outline-dark">Register</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* this first modal is the login overlay */}
            <Modal
                show={loginShow}
                onHide={handleLoginClose}
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-login"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-login">
                        Login
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={
                            {
                                email: '',
                                password: '',
                            }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('invalid Email address')
                                .required('Required'),
                            password: Yup.string()
                                .required("Please provide your password.")
                                .min(8, "Password is too short - should be 8 chars minimum.")
                                .matches(/(?=.*[0-9])/, "Password must contain a number."),

                        })}
                    >
                        <Form onSubmit={handleSubmit}   >
                            <Form.Group controlId="emailLogin">
                                <Form.Control name="email" type="email" placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group width='20px' controlId="passwordLogin">
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>

                        </Form>

                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-lg" variant="primary" type="submit">
                        Sign In </Button>
                </Modal.Footer>
            </Modal>

            {/* this second modal is the register overlay */}
            <Modal
                show={registerShow}
                onHide={handleRegisterClose}
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-register"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-register">
                        Register
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={
                            {
                                firstName: '',
                                LastName: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                                gender: '',
                                phone: '',
                                referral: '',
                                yearExp: '',
                                acceptedTerms: false
                            }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .min(3, 'must be atleast 3 characters')
                                .max(15, 'must be atleast 15 characters of less')
                                .required('Required'),
                            lastName: Yup.string()
                                .min(3, 'must be atleast 3 characters')
                                .max(15, 'must be atleast 15 characters of less')
                                .required('Required'),
                            email: Yup.string()
                                .email('invalid Email address')
                                .required('Required'),
                            password: Yup.string()
                                .required("Please provide your password.")
                                .min(8, "Password is too short - should be 8 chars minimum.")
                                .matches(/(?=.*[0-9])/, "Password must contain a number."),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], "Passwords don't match!")
                                .required('Required'),
                            phone: Yup.number()
                                .typeError("That doesn't look like a phone number")
                                .positive("A phone number can't start with a minus")
                                .integer("A phone number can't include a decimal point")
                                .min(8)
                                .max(14)
                                .required('A phone number is required'),

                            gender: Yup.string()
                                .oneOf(['male', 'female'], 'please choose a gender')
                                .required(),
                            yearExp: Yup.string()
                                .oneOf(['0-1 years', '1-2 years', '2-3 years', '3-4 years', '4-5 years', '5-6 years', '6-7 years', '7-8 years', '8-9 years', '9-10 years'], 'please choose a gender')
                                .required(),
                            acceptedTerms: Yup.boolean()
                                .required()
                                .oneOf([true], 'You must accept the terms and conditions'),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                resetForm();
                                setSubmitting(false);
                            }, 3000)
                        }}
                    >
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password*</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="ConfirmPassword">
                                <Form.Label> Confirm Password*</Form.Label>
                                <Form.Control type="password" placeholder=" Confirm Password" />
                            </Form.Group>
                            <Form.Group controlId="Gender">
                                <Form.Control as="select" name="gender" label="Gender*">
                                    <option>Male</option>
                                    <option>Female</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="yearExp">
                                <Form.Label>year(s) of Experience?*</Form.Label>
                                <Form.Control as="select">
                                    <option>0-1 years</option>
                                    <option>1-2 years</option>
                                    <option>2-3 years</option>
                                    <option>3-4 years</option>
                                    <option>4-5 years</option>
                                    <option>5-6 years</option>
                                    <option>6-7 years</option>
                                    <option>7-8 years</option>
                                    <option>8-9 years</option>
                                    <option>9-10 years</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="ConfirmPassword">

                                <Form.Label size="15em"> i accept the terms and conditions that apply<Form.Control type="checkbox" /></Form.Label>

                            </Form.Group>

                        </Form>
                    </Formik>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-lg" variant="primary" type="submit">
                        Sign Up </Button>
                </Modal.Footer>
            </Modal>


        </div >
    )
}

