import * as React from 'react';
import {Nav, Image,Navbar, Collapse, NavItem, NavLinkContainer ,NavLink ,NavDropdown,MenuItem} from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';



class Header extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
        super(props);
        
    }
    
    render() {
       const bgBlue = {backgroundColor: '#00008B', color: "#FFF"}
      
      
       
       const logo = require('../img/logo.jpg')
       return (
  
<Navbar style={bgBlue}>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home"> <Image src={logo} /></a>     
    </Navbar.Brand>
  </Navbar.Header>
  <Nav className="pull-right">
      
    <NavItem eventKey={1} href="#">
    Chat Now
    </NavItem>
   
    <NavItem eventKey={2} href="#">
    Help -888.873.3829
    </NavItem>
    <NavItem eventKey={2} href="#">
    Store Location
    </NavItem>
    <NavDropdown eventKey={3} title="Cart/Account" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Cart</MenuItem>
      <MenuItem eventKey={3.2}>Account</MenuItem>
     </NavDropdown>
   
  </Nav>
</Navbar>);
    }
 }
 export default Header;
 