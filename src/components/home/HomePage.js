import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import logo from "../../Image/Group.png";
import east from "../../Image/east.png";
import NavHomepage from "../../Utilites/NavHomepage";
import PlayerVideo from "../../Utilites/PlayerVideo";
import arow from "../../Image/arow.png";
import bag from "../../Image/bag.png";
import bord from "../../Image/bord.png";
import ListVideo from "./ListVideo";

const HomePage = () => {
  const cardContent = [
    {
      title: "المسار الريادي",
      icon: arow,
    },
    {
      title:" مسار الأعمال القائمة",
      icon: bag,
    },
    {
      title: "مسار المستثمر",
      icon:bord,
    },
  ];
  return (
    <div style={{ background: "#000025" }} >
      <NavHomepage />

      <hr className="m-0  border-1 border-light"></hr>

      <Container style={{height:'580px'}}  className=" px-2  position-relative  height-cont ">
        <Row
          className="d-flex  mb-5 "
          style={{ marginTop: "110px", marginBottom:'90px'}}
        >
          <Col lg={4} className=" ms-5 me-4 ">
            <div>
              <h1
                className=" text-white fw-bold   text-end mb-3 "
                style={{ fontSize: "65px", fontFamily: "Lalezar" }}
              >
                غير <span className=" text-danger">مسار</span> حياتك
              </h1>
             
            </div>
            <hr
                style={{
                  width: "",
                  height: "2px",
                  color: "white",
                  textAlign: "center",
                }}
                className="  border-1    mb-3 "
              ></hr>
            <div className=" ">
              <p style={{ maxWidth: "" }} className=" text-end">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها.
              </p>
              <Button
                style={{ maxWidth: "" }}
                className="w-100 float-end mb-5 mt-3 bg-danger rounded-5 fw-bold text-white fs-4"
                variant="red"
              >
                انضم الآن
              </Button>
            </div>
          </Col>
          <Col lg={7}>
            <div>
              <PlayerVideo />
            </div>
          </Col>
        </Row>
       
        <Row  className="me-4"   >
        {cardContent.map((card, index) => (
          <Col lg='4'  className="     " key={index}>
           
              <Card style={{ background: '#192E99' ,minHeight:'310px' , minWidth:'280px' }} className="     text-white  p-3 card-position ">
                <Card.Body className="   d-flex flex-column align-items-center justify-content-center ">
                 
                  <img width='140' height='140' src={card.icon}  />
                  <Card.Title className=" mt-4 fs-4 fw-bolder">{card.title}</Card.Title>
                </Card.Body>
              </Card>
            
          </Col>
        ))}
        
        </Row>
      </Container>
      <div style={{ height:'210px' }} className=" bg-white bg-k7l">

      </div>
      <div>
      <ListVideo/>
      </div>
      
    </div>
  );
};

export default HomePage;
