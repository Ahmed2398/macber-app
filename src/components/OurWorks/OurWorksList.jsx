import React, {useState} from 'react'
import { Container, Col, Row } from "react-bootstrap";
import {works} from '../../Data/WorksData'
import OurWorks from './OurWorks';
import {motion} from "framer-motion";
import {IoIosArrowForward} from 'react-icons/io';
import {MDBCard,MDBCardImage} from "mdb-react-ui-kit";
import './OurWorks.css'
import {NavLink} from "react-router-dom";
const OurWorksList = () => {

    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changecontent=(project)=>{
        setpopupcontent([project]);
        setpopuptogle(!popuptogle);
    }
    return (
        <>
            <motion.section
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
                className="work ptb-60"
            >
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head-content pb-1">
                                <h4 className="small-text text-warning text-center mb-3">
                                    Our Works
                                </h4>
                            </div>
                        </Col>
                    <div className="app_container">
                        <div className="head-content pb-1">
                            <h4 className=" text-uppercase text-center">
                                Software Development
                            </h4>
                        </div>
                        <div className="content_container">
                            {works.slice(0, 6).map((work,index)=>{
                                return(

                                    <MDBCard className="h-100 box-work ">
                                        <button className="btn" style={{padding:0}}  onClick={()=> changecontent(work)}>
                                        <MDBCardImage src={work.imgCard} fluid alt={work.title} className="rounded" />
                                        </button>
                                    </MDBCard>

                                );
                            })}
                        </div>

                        {popuptogle && (
                            <div className="pop_up_container" onClick={changecontent}>
                                <div className="pop_up_body scroll" onClick={(e)=> e.stopPropagation()}>
                                    <div className="pop_up_header">
                                        <button className="btn btn-purble m-2" onClick={changecontent}>x</button>
                                    </div>
                                    <div className="pop_up_content">
                                        {popupcontent.map((pop)=>{
                                            return(
                                                <div className="pop_up_card">
                                                    {/*<h3>{pop.title}</h3>*/}
                                                    {/*<p>{pop.description}</p>*/}
                                                    {/*<p>{pop.id}</p>*/}
                                                    {/*<p>{pop.details}</p>*/}
                                                    <img className="pdf" src={pop.details} alt={pop.title}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>

                    <Col lg={12} className="pt-3 text-start">
                        <NavLink to={'softwaredev'} className="">
                           <button className="btn btn-link btn-purble-outline"> see more<IoIosArrowForward className="arrow-link"/></button>
                        </NavLink>
                    </Col>
                </Row>








            </Container>
            </motion.section>

        </>
    )
}

export default OurWorksList
