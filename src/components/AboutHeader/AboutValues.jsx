import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import feature3 from "../../assets/images/value.png";
import misiion from "../../assets/images/mision.png";
import './AboutHeader.css';

import {motion} from "framer-motion";
import {GiSatelliteCommunication} from "react-icons/gi";
import {RiNumber1} from "react-icons/ri";
import {BsFillArrowRightSquareFill} from "react-icons/bs";

const AboutValues = () => {
    return (
        <>

                <motion.section className="values ptb-60" whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, type: 'tween' }}>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="m-auto">
                            <div className="my-5">
                                <div className="head-content">
                                    <h4 className="small-text text-warning text-center">Our Values</h4>
                                    {/*<h2>At Macber, we are committed to providing our clients with the highest level of service and delivering*/}
                                    {/*    solutions that exceed their expectations. Our core values include:</h2>*/}
                                    <p className="text-secondary">At Macber, we believe in delivering exceptional service and solutions that go above and beyond our clients' expectations. Our values are at the heart of everything we do:</p>
                                </div>
                                <div className="">
                                    <ul>
                                        <li className="list-group-item">
                                            <h6 className="text-capitalize">1-INNOVATION</h6>
                                            <p>We are constantly pushing the boundaries of what's possible, seeking new and creative ways to solve problems and improve outcomes.</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h6 className="text-capitalize">2-COMMUNICATION</h6>
                                            <p>We take ownership of our work and hold ourselves accountable for delivering high-quality results. We are committed to taking responsibility for our actions and decisions.</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h6 className="text-capitalize">3-TIMELY DELIVERY</h6>
                                            <p>We understand the importance of delivering projects on time and on budget. We work tirelessly to meet our deadlines and ensure that our clients' needs are always met.</p>
                                        </li>
                                        <li className="list-group-item">
                                            <h6 className="text-capitalize">4-CUSTOMER SATISFACTION</h6>
                                            <p> We are dedicated to our clients' success and satisfaction. We strive to exceed their expectations and build long-lasting partnerships based on trust and mutual respect.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="feature-img-warp position-relative d-flex flex-column align-content-end">

                                <img src={feature3} alt="feature image"
                                     className=" rounded-custom"/>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="feature-img-warp position-relative d-flex flex-column align-content-end">
                                <img src={misiion} alt="feature image"
                                     className=" rounded-custom"/>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="my-5">
                                <div className="head-content">
                                    <h4 className="small-text text-warning">Our Mission</h4>
                                    {/*<h2>At Macber, we are committed to providing our clients with the highest level of service and delivering*/}
                                    {/*    solutions that exceed their expectations. Our core values include:</h2>*/}
                                    <p className="text-secondary my-3">At Macber, we are driven by a mission to empower businesses with innovative and reliable digital solutions that enable them to achieve their goals. We are committed to delivering exceptional value to our clients by leveraging our technical expertise, fostering clear communication, ensuring timely delivery, and dedicating ourselves to customer satisfaction.</p>
                                    <p className="text-secondary my-3">Our goal is to be a leading provider of digital solutions in the industry, setting the standard for excellence in quality, performance, and service. We hold ourselves to the highest standards of integrity, professionalism, and social responsibility, and are committed to making a positive impact on the world around us.</p>
                                    <p className="text-secondary my-3">At Macber, our mission is more than just a statement - it's a commitment to our clients, our employees, and our community. We are dedicated to creating meaningful and lasting relationships with all those we serve, and to making a difference in the world, one project at a time.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </motion.section>
        </>
    );
};

export default AboutValues;
