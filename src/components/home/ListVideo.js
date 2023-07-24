
import React from 'react'
import { Player } from 'video-react';
import PlayerVideo from '../../Utilites/PlayerVideo';
import { Row,Col, Container } from 'react-bootstrap';

const ListVideo = () => {
    const cardContent = [
        {
          header: " اللياقة والتغذية",
          title:'التعلم القائم على الألعاب',
          p: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص...',

        },
        {
            header: "تكنولوجيا التعليم ",
            title:'التعلم القائم على الألعاب',
            p: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص...',
        },
        {
            header: " التداول الإلكتروني",
            title:'التعلم القائم على الألعاب',
            p:'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص...' ,
        }, {
            header: " اللياقة والتغذية",
            title:'التعلم القائم على الألعاب',
            p: 'هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص...',
        },
      ];
  return (
    <Container >
      <h1 className=' text-center mt-5 '>طور معرفتك</h1>
     <Row className='mt-5' >

     
      {cardContent.map((item, index) => (
        <Col lg='6' key={index} style={{ marginBottom:'50px'}}>
        <div  >
            <PlayerVideo/>
        </div>
          <div className=' d-flex flex-column justify-content-center align-items-center text-center'>
            <h5  className='bg-light text-opacity-75 text-dark mt-3 px-3 rounded-5 '>{item.header}</h5>
            <h4 className='mt-3'>{item.title}</h4>
            <p className=' mt-3 text-white text-opacity-25 fs-6'>{item.p}</p>
          </div>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default ListVideo
