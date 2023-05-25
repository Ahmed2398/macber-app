import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import digital from "../../assets/images/digitalIn.png";
import {motion} from "framer-motion";
import {videos} from "../../Data/VideosData";
import Videos from "./Videos";
import {NavLink} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

const VideosDetails = () => {
    return (
        <>
            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className=" projects">
                <Container>
                    <Row>
                        <Col  lg={6} sm={6} className="m-auto">
                            <h3 className="head-banner h3-banner">Digital</h3>
                            <h1 className="head-banner"> Activations</h1>
                            <p className=" text-banner text-muted">
                                Our innovative digital activation services bring your brand to life and engage your audience. We create memorable experiences that connect your brand with your target audience and drive results. From virtual events to social media campaigns, we have the tools and expertise to make your brand stand out.
                            </p>

                        </Col>
                        <Col lg={6} sm={6} >
                            <img src={digital} alt="game" width="100%"/>
                        </Col>
                    </Row>
                </Container>
            </motion.section>
            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className=" office"
            >
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="head-content text-center py-5">
                                <h4 className="text-warning text-uppercase">Macber activations</h4>
                                {/*<h2 className="text-head-pros">Our Innovations</h2>*/}
                            </div>
                        </Col>
                        {videos.map((video, index)=>{
                            const {id, src} = video;
                            return(
                                <Col key={index}  lg={4} md={6} sm={6}>
                                    <Videos id={id} src={src} />
                                </Col>
                            )

                        })}
                    </Row>
                </Container>
            </motion.section>
        </>
    );
};

export default VideosDetails;
