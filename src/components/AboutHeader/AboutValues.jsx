import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import feature3 from "../../assets/images/plan.jpg";
import './AboutHeader.css';

import {motion} from "framer-motion";
import {GiSatelliteCommunication} from "react-icons/gi";
import {RiNumber1} from "react-icons/ri";

const AboutValues = () => {
    return (
        <>

                <motion.section className="values ptb-60" whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, type: 'tween' }}>
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="m-auto">
                            <div className="my-5">
                                <div className="head-content">
                                    <h4 className="small-text text-warning">Our Values</h4>
                                    {/*<h2>At Macber, we are committed to providing our clients with the highest level of service and delivering*/}
                                    {/*    solutions that exceed their expectations. Our core values include:</h2>*/}
                                    <p className="text-secondary">At Macber, we are committed to providing our clients with the highest level of service and delivering
                                        solutions that exceed their expectations. Our core values include:</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-1">Innovation</h6>
                                    <h6 className="mb-1">Communication</h6>
                                    <h6 className="mb-1">Ownership</h6>
                                    <h6 className="mb-1">Timely delivery</h6>
                                    <h6 className="mb-1">Customer satisfaction</h6>

                                </div>
                            </div>
                            <div className="my-5">
                                <div className="head-content">
                                    <h4 className="small-text text-warning">Our Mission</h4>
                                    {/*<h2>At Macber, we are committed to providing our clients with the highest level of service and delivering*/}
                                    {/*    solutions that exceed their expectations. Our core values include:</h2>*/}
                                    <p className="text-secondary">At Macber, our mission is to empower businesses with innovative and reliable digital solutions that help
                                        them achieve their goals. We strive to deliver exceptional value to our clients through technical
                                        expertise, clear communication, timely delivery, and a dedication to customer satisfaction. Our mission
                                        is to be a leading provider of digital solutions in the industry, while maintaining the highest standards of
                                        integrity, professionalism, and social responsibility.</p>
                                </div>
                            </div>

                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="feature-img-warp position-relative d-flex flex-column align-content-end">
                                {/*<ul className="img-overlay-list list-unstyled position-absolute">*/}
                                {/*    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">*/}
                                {/*        <i className="fas fa-check bg-primary text-white rounded-circle"></i>*/}
                                {/*        <h6 className="mb-0">Create a Free Account</h6>*/}
                                {/*    </li>*/}
                                {/*    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">*/}
                                {/*        <i className="fas fa-check bg-primary text-white rounded-circle"></i>*/}
                                {/*        <h6 className="mb-0">Install Our Tracking Pixel</h6>*/}
                                {/*    </li>*/}
                                {/*    <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">*/}
                                {/*        <i className="fas fa-check bg-primary text-white rounded-circle"></i>*/}
                                {/*        <h6 className="mb-0">Start Tracking your Website</h6>*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                                <img src={feature3} alt="feature image"
                                     className="img-fluid rounded-custom"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </motion.section>
        </>
    );
};

export default AboutValues;
