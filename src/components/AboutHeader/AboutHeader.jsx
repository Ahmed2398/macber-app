import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutImage from "../../assets/images/aboutnew.png";
import image2 from "../../assets/images/shapesIcons/image-2.png";
import image3 from "../../assets/images/shapesIcons/feature-3.png";
import './AboutHeader.css';
import {motion} from "framer-motion";

const AboutHeader = () => {
    // Counter
    let counter = document.querySelectorAll(".counter");
    let arr = Array.from(counter);
    // eslint-disable-next-line array-callback-return
    arr.map((item) => {
        let count = item.innerHTML;
        item.innerHTML = "";
        var countNumber = 0;
        function counterUp() {
            item.innerHTML = countNumber++;
            if (countNumber > count) {
                clearInterval(stop);
            }
        }

        let stop = setInterval(() => {
            counterUp();
        }, item.dataset.speed / count);

    });
    return (
        <>
            <motion.section whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, type: 'tween' }} fadedd className="hero-section-2 about-header-section ptb-120 position-relative overflow-hidden py-3 ">
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <Row>
                                <Col md={6} className=" m-auto">
                                    <h3 className="head-banner h3-banner">About</h3>
                                    <h1 className="head-banner head-banner-h1"> Macber</h1>
                                    {/*<h3 className="head-banner h3-banner editH3">Your Trusted Technology Partner*/}
                                    {/*</h3>*/}
                                </Col>
                                <div className="col-md-6">
                                    <img src={aboutImage} className="w-100 img-fluid" alt="about macber"/>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </motion.section>

            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className="story ptb-60 "
            >
                <Container>
                    <Row>
                        <Col lg={5} sm={12} className="order-lg-1 ">
                            <div className="head-content">
                                <h4 className="small-text">Our Story</h4>
                                {/*<h2>A Great Story Starts with a Friendly Team</h2>*/}
                                <p className="text-secondary">Founded in 2014, Macber has grown to become a trusted partner for top brands and businesses across
                                    the world. We are proud to have worked with some of the biggest names  from different industries,<br/>
                                    Our portfolio includes projects for clients like
                                    Siemens, Vodafone <br/>and Nestle.
                                </p>
                            </div>
                            <div className="my-5">
                                <h6 className="mb-1">Event Activations and Registrations</h6>
                               <p className="text-secondary">We are also a leading provider of event activations and registrations in Egypt, having delivered
                                   successful campaigns for high-profile events such as Cairo ICT, the largest tech exhibition in the region.
                                   Our expertise in this area has enabled us to connect our clients with their target audiences and drive
                                   engagement and results.</p>
                            </div>
                            <div className="my-5">
                                <h6 className="mb-1">Expanding Reach</h6>
                                <p className="text-secondary">With our success in Egypt, we have expanded our reach to serve clients globally. We now have offices in
                                    London, UAE, and Saudi Arabia, allowing us to provide the same high-quality services to our
                                    international clients.</p>
                            </div>

                            <div className="my-5">
                                <h6 className="mb-1">Successful Projects and Users Served</h6>
                                <p className="text-secondary">Our team of over 40 professionals has completed more than 1300 projects, served more than 2 million
                                    users across various platforms and channels. Our focus on innovation, quality, and customer satisfaction
                                    has earned us trust to deliver the highest quality services to the biggest brands in the world to meet
                                    their evolving needs. With offices in Egypt, London, UAE, and Saudi Arabia, we are positioned to serve
                                    clients across the globe.</p>
                            </div>
                            <div className="my-5">
                                <p className="text-secondary">At Macber, we are dedicated to providing innovative solutions that help our clients achieve their goals
                                    and stand out in their industries. Contact us today to learn more about how we can help you take your
                                    business to the next level.</p>
                            </div>
                        </Col>
                        <Col lg={7} sm={12} className="order-lg-0" >
                            <div className="story-grid-wrapper position-relative">

                                <ul className="position-absolute animate-element parallax-element shape-service d-none d-lg-block">
                                    <li className="layer layerTwo" data-depth="0.02">
                                        <img src={image2} alt="shape"
                                             className="img-fluid position-absolute color-shape-2 z-5"/>
                                    </li>
                                    <li className="layer layerOne" data-depth="0.03">
                                        <img src={image3} alt="shape"
                                             className="img-fluid position-absolute color-shape-3 "/>
                                    </li>
                                </ul>

                                <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-success counter"
                                            data-speed="1000">+ 2,000,000</h3>
                                        <h6 className="mb-0">Served  Users</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary counter"
                                            data-speed="1000">46</h3>
                                        <h6 className="mb-0">Team Members</h6>
                                    </div>
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-warning ">9</h3>
                                        <h6 className="mb-0">Years In Business</h6>
                                    </div>
                                    <div className="story-item bg-light border">
                                        <h3 className="display-5 fw-bold mb-1 text-danger counter"
                                            data-speed="1000">401</h3>
                                        <h6 className="mb-0">Clients Worldwide</h6>
                                    </div>
                                    <div className="story-item bg-white border">
                                        <h3 className="display-5 fw-bold mb-1 text-primary counter"
                                            data-speed="1000">1250</h3>
                                        <h6 className="mb-0">Projects Completed</h6>
                                    </div>
                                    <div className="story-item bg-white border">

                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </motion.section>
        </>
    );
};

export default AboutHeader;
