import React from 'react'
import { Button, Col, Image, Jumbotron, Row } from 'react-bootstrap'
import './Employers.css';

export default function Employers() {
    return (
        <div>
            <div id="body">
                <span>
                    <Row>
                        <Col>
                            <Jumbotron className="container">
                                <h1><b>Hire Top black <br />Tech Talent.</b></h1>
                                <p>eWorker connects your business to an <b>exclusive community of top tech talent</b> who are ready to help your business achieve its technical goals. Discover brilliant and <b>pre-qualified experts</b> for every technology stack imaginable — Connect with the ones you like!</p>
                                <h1 >
                                    <Button className="btn-lg" variant="outline-dark">Apply as Talent</Button>
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
                                <h1><b>Post JD’s quickly, <br />receive responses <br />even quicker.</b></h1>
                                <p>Our <b>AI powered machine</b> does the hard work — matching top talent to your role. Each engineer responds with their tailored application within a matter of hours. Every Monday, new tech talents get added to our platform. <b>Connect with the ones you like!</b></p>
                                <h1 >
                                    <Button className="btn-lg" variant="outline-dark">Sign up!</Button>
                                </h1>
                            </Jumbotron>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Jumbotron className="container">
                                <h1><b>Discover<br /> hidden senior<br /> tech talent.</b></h1>
                                <p>

                                    eWorker gives you a unique way to discover <b>top</b>  talent to grow your business.
                            Explore <b>fixed-contract</b> or <b>full time employees</b> — Giving you the freedom to scale your team in no time.
                            Build your team <b>quicker than other channels.</b>
                            90% of companies get matched to the right talent in <b>2 – 72 hours.</b>
                                </p>
                                <h1 >
                                    <Button className="btn-lg" variant="outline-dark">Sign up!</Button>
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
                                <h1><b>Trust our talent <br />to solve your <br />complex <br />problems.</b></h1>
                                <p>
                                    Only the top <b>1%</b> of applicants make it into eWorker.
                            All candidates are <b>pre-qualified</b> using skills/code challenges and talent management interviews,
                             resulting in <b>less time wasted</b> for your technical hiring managers.</p>
                                <h1 >
                                    <Button className="btn-lg" variant="outline-dark">Sign up!</Button>
                                </h1>
                            </Jumbotron>
                        </Col>

                    </Row>
                </span>

            </div>
        </div>
    )
}
