import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import "../Carousel/CarouselHeader.css";
import girl from "../../assets/images/girl.png";
import boy from "../../assets/images/Boy.png";

import SocialMedia from "../SocialMedia/SocialMedia";
function CarouselHeader() {
  return (
    <Container >
    {/* <div className="bubbles">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
    </div> */}
      <Carousel className="py-5">
        <Carousel.Item>
          <div className="mySlides  ">
            <div id="banner-one ">
              <Row>
                <div className="col-lg-6 col-sm-12 m-auto">
                  <h3 className="head-banner h3-banner">Innovative </h3>
                  <h2 className="head-banner head-banner-h1">
                    Digital Activation  <br />
                  </h2>
                  <h3 className="head-banner h3-banner">Services </h3>
                  <p className=" text-banner text-muted">
                    Our innovative digital activation services bring your
                    brand to life and engage your audience. We create memorable experiences that connect
                    your brand with your target audience and drive results. From virtual events to social media
                    campaigns, we have the tools and expertise to make your brand stand out.
                  </p>
                  {/* <a href="#" className="btn btn-costume-two" style="margin-left: 10px;">See More</a> */}
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img src={girl} alt="game" width="75%" />
                </div>
              </Row>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="mySlides">
            <div id="banner-two">
              <Row>
                <div className="col-lg-6 col-sm-12 m-auto">
                  <h3 className="head-banner h3-banner">Expert </h3>
                  <h2 className="head-banner head-banner-h1">

                    Software Development  <br />
                  </h2>
                  <h3 className="head-banner h3-banner">Solutions </h3>
                  <p className=" text-banner text-muted">
                    Our team of expert software developers crafts
                    tailor-made solutions to meet your unique business needs. With over 10 years of experience
                    delivering high-quality solutions, we specialize in developing web and mobile applications,
                    as well as complex enterprise systems that drive business results.
                  </p>
                  {/* <a href="#" className="btn btn-costume-two" style="margin-left: 10px;">See More</a> */}
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                  <img  src={boy} alt="newsoftkey" width="75%" />
                </div>
              </Row>
            </div>
          </div>
        </Carousel.Item>
      <Carousel.Item>
        <div className="mySlides">
          <div id="banner-two">
            <Row>
              <div className="col-lg-6 col-sm-12 m-auto">
                <h3 className="head-banner h3-banner">Next-Generation </h3>
                <h2 className="head-banner head-banner-h1">

                  Game Development<br />
                </h2>
                <h3 className="head-banner h3-banner">Expertise </h3>
                <p className=" text-banner text-muted">
                  We specialize in creating engaging and
                  immersive gaming experiences. Our team of experienced game developers and talented
                  artists utilize the latest technologies including Virtual Reality, Augmented Reality, and
                  Artificial Intelligence to create games that captivate audiences and drive user engagement.
                </p>
                {/* <a href="#" className="btn btn-costume-two" style="margin-left: 10px;">See More</a> */}
              </div>
              <div className="col-lg-6 col-sm-12 text-center">
                <img  src={boy} alt="newsoftkey" width="75%" />
              </div>
            </Row>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>

      <div className="col-lg-2 m-auto">
           <SocialMedia/>
            </div>

    </Container>
  );
}

export default CarouselHeader;
