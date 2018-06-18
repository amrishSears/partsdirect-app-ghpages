import * as React from "react";
import {Nav, Image,Navbar, Collapse, NavItem, NavLinkContainer ,NavLink ,NavDropdown,MenuItem} from 'react-bootstrap';
class Footer extends React.Component {

    // this constructor is necessary to make the props work
    constructor(props) {
       super(props);
    }
    render() {
       return <Nav className="pull-down">
      <NavItem  className="pull-right">
      <div className="span3 anchorLayout">
      <h2 className="content-subhead">Quick Links</h2>
      <ul>
     <li> <a data-omniture="" href="/partsdirect/product-types/">All Categories</a></li>
     <li>  <a data-omniture="" href="/partsdirect/brands/">All Brands </a></li>
     <li>  <a data-omniture="" href="/partsdirect/user-manuals">Owner's Manuals</a></li>
     <li>  <a data-omniture="" href="/partsdirect/getParentCategory.pd?categoryName=Kitchen+Appliance">Appliance Parts</a></li>
     <li>  <a data-omniture="" href="/partsdirect/merchandiser/show.pd?description=Water%20Filters">Refrigerator Water Filters</a></li>
     <li>  <a data-omniture="" href="/partsdirect/getParentCategory.pd?categoryName=Lawn-Mower-Parts">Lawn Mower Parts</a></li>
     <li> <a data-omniture="" href="/partsdirect/getParentCategory.pd?categoryName=Snow-Blower-Parts">Snowblower Parts</a></li>
      </ul>
     </div>
     </ NavItem>
     <NavItem className="pull-right">
     <div className="span3 anchorLayout">
						<h2 className="content-subhead">Your Account</h2>
                        <ul>
						<li><a data-omniture="" href="/order-and-subscription-lookup.html" title="Order status">Your Order</a></li>
						<li><a href="/partsdirect/faq.pd?pop=flush&amp;commercialUI=false#automaticReordersFAQ">Automatic Reorders</a></li>
						<li><a href="https://www.searspartsdirect.com/partsdirect/myProfileSetupPreferences.pd">Your Profile</a></li>
						<li><a  data-component="/apps/searspartsdirect/components/content/spdRedesignGlobalFooter" data-omniture="Footer - Feedback">Give Us Feedback</a></li>
						<li><a href="/partsdirect/aboutUs.pd" data-omniture="Footer - About Us">About Us</a></li>
                        </ul>
					</div>
                    </ NavItem>
      </Nav>
    }
 }
 export default Footer;