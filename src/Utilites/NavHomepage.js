import React from 'react'
import {
    Navbar,
    Nav,
    Container,
    Button,
    Row,
    Col,
    Card,
  } from "react-bootstrap";
  import logo from "../Image/Group.png";
  import east from "../Image/east.png";
const NavHomepage = () => {
  return (
    <div className="  d-inline-grid align-items-center " style={{ height:'118px'}}>
    <Navbar className=""  style={{ height: "49px" }} expand="lg">
        
        <Navbar.Brand className="  d-flex text-light" href="#home">
          <div className=" d-flex justify-content-between align-items-center">
            <div>
              <img
                src={logo}
                width="46.925"
                height="49"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </div>

            <div>
              <hr className="slash "></hr>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="m-0" href="#home">الصفحة الرئيسية</Nav.Link>
            <Nav.Link href="#link">طور معرفتك</Nav.Link>
            <Nav.Link href="#link">الخدمات</Nav.Link>
            <Nav.Link href="#link">آخر الأخبار</Nav.Link>
            <Nav.Link href="#link">المقالات</Nav.Link>
            <Nav.Link href="#link">ندوات</Nav.Link>
            <Nav.Link href="#link">ملتقى التواصل</Nav.Link>
          </Nav>
          <div className="d-flex align-item-center ">
            <hr className="slash2 "></hr>
            <div
              className="d-flex  justify-content-between btn rounded-5 align-items-center px-4 py-2 "
              style={{ background: "#F2001B", width:'212px' }}
            >
              <div>
                <span  className=" fw-bold   text-white">تسجيل الدخول</span>
              </div>
              <div >
                <img  className='me-4' width='20' height='25' src={east} />
              </div>
            </div>
            
          </div>
        
        </Navbar.Collapse>
        
      </Navbar>
 
    
   
      
    </div>
  )
}

export default NavHomepage
