import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {motion} from "framer-motion";
import './Videos.css';
import {videos} from "../../Data/VideosData";
import Videos from "./Videos";
import {NavLink} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

const VideosList = () => {
    return (
        <>
            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className="ptb-60 office"
            >
                <Container>
                    <Row>
                        <Col lg={12} sm={12}>
                            <div className="head-content text-center py-5">
                                <h4 className="text-warning text-uppercase">Macber activations</h4>
                                {/*<h2 className="text-head-pros">Our Innovations</h2>*/}
                            </div>
                        </Col>
                        {videos.slice(0,6).map((video, index)=>{
                            const {id, src} = video;
                            return(
                                <Col key={index}  lg={4} md={6} sm={6}>
                                   <Videos id={id} src={src} />
                                </Col>
                            )

                        })}
                        <Col lg={12} className="pt-3 text-start">
                            <NavLink to={'digital'} className="">
                                <button className="btn btn-link btn-purble-outline"> see more<IoIosArrowForward className="arrow-link"/></button>
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </motion.section>
        </>
    );
};

export default VideosList;
