import React, { useState } from 'react'
import { Button, Col, Image, Jumbotron, Row, Card, Modal, Table } from 'react-bootstrap'
import './landing.css';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

export default function Landing() {
    // these are for toggling the modal popup
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <div id="body">
                <Row>
                    <Col>
                        <Jumbotron className="container">
                            <h1><b>The better way to find <br />your next role!</b></h1>
                            <p>Chat, interview and get hired from any mobile device, tablet or computer.<br />Connect with companies looking for top black tech talent.</p>
                            <h1 >
                                <Button className="btn-lg" variant="outline-dark">Apply</Button>
                                <Button className="btn-lg" variant="outline-primary">Hire Top Talent</Button>
                            </h1>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Image src=""></Image></Col>

                </Row>
                <Row>

                    <Col>
                        <Image src=""></Image></Col>
                    <Col>
                        <Jumbotron className="container">
                            <h1><b>Get matched to <br />tech teams based <br />on your skills</b></h1>
                            <p>On eWorker, companies are hiring software developers, devOps engineers<br /> and data scientist just like you. Complete your profile, get vetted and <br />start applying for your next remote role.</p>
                            <h1 >
                                <Button className="btn-lg" variant="outline-dark">Apply</Button>
                            </h1>
                        </Jumbotron>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Jumbotron className="container">
                            <h1><b>Our simple but <br />thorough <br />process!</b></h1>
                            <p>


                                <b>Create a profile</b>

                                <p>It’s your opportunity to tell employers what you want out of your next role – and it takes less than a few minutes.</p>


                                <b>Complete our Screening</b>

                                <p>Pass our technical screening processes and interviews with your dedicated talent manager – who will ensure you receive the best offers.</p>

                                <b>Get Visible and Receive Offers</b>

                                <p>Get visible on eWorker so that companies can discover your profile and make you offers with salary and tech stack up front.</p>


                                <b>Get Hired</b>

                                <p>Interview with global companies that spark your interest! And choose the one you love the best.</p>

                            </p>
                            <h1 >
                                <Button className="btn-lg" variant="outline-dark">Apply</Button>
                            </h1>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Image src=""></Image></Col>

                </Row>
                <Row>

                    <Col>
                        <Image src=""></Image></Col>
                    <Col>
                        <Jumbotron className="container">
                            <h1><b>Work with your favorite<br /> tech stack</b></h1>
                            <p>Whether it’s Python, Scala, JavaScript or anything else, on eWorker you only <br />get offers from companies for your preferred technology stack and desired salary.<br /> – helping you to find jobs up to 50% faster.</p>
                            <h1 >
                                <Button className="btn-lg" variant="outline-dark">Apply</Button>
                            </h1>
                        </Jumbotron>
                    </Col>

                </Row>

            </div>

        </div>
    )
}
