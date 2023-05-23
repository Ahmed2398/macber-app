import React from 'react'
import Benfits from './Benfits'
import { Container, Row, Col } from 'react-bootstrap'
import { benfits } from '../../Data/BenfitsData';
// import MissionPartners from '../MissionPartners/MissionPartners';
import { motion } from "framer-motion"
import './Benfits.css';
import macber from '../../assets/images/logos/MacberLogo.svg';
function BenfitsList() {
  return (
   <>
       <section className="ptb-120 benfits-bg" >
     <Container>

    <Row>
    <Col xs={12} lg={12}>
        <div className="d-flex justify-content-center">
            <img src={macber} className="w-25" alt="macber benfits"/>

        </div>
      <h1 className="about-content-head f-39 pt-1 text-center text-capitalize">Your Trusted Technology Partner</h1>
            <p className="text-center lead about-content text-center">
                Access the Best-In-Class Talent, Competitive Costs, and Incredible <br/>Streamlined Processes your
                business needs to succeed.
            </p>
      </Col>
   {benfits.map((benfit, index)=>{
    const{img, name, text} = benfit;
    return(

        <Col xs={12} lg={4} key={index} className="benefits-col">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 1, type: 'tween' }}
            >
        <Benfits key={index} img={img} name={name} text={text} />
            </motion.div>
        </Col>

    )

   })}

    </Row>

  </Container>
       </section>
   </>
  )
}

export default BenfitsList
