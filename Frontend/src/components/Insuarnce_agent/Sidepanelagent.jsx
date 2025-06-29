import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Home from '../Home';

function Sidepanel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Drawer
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <ul className="px-4" onClick={handleClose}>
            <Link to ="/agentlayout/customer">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Customer</a>
            </li>
            </Link>
            

            {/* 
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Customer_read</a>
            </li>
             */}


            <Link to="/agentlayout/application">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Application</a>
            </li>
            </Link>
            <Link to="/agentlayout/quote">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Quote</a>
            </li>
            </Link>
            
            <Link to="/agentlayout/insurancepolicy">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Policy</a>
            </li>
            </Link>

            <Link to="/agentlayout/claimsettle">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Claim Settlement</a>
            </li>
            </Link>
            <Link to="/agentlayout/office">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Office</a>
            </li>
            </Link>

            <Link to="/agentlayout/membership">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Membership</a>
            </li>
            </Link>

            <Link to="/agentlayout/vehicleservice">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Vehicle Service</a>
            </li>
            </Link>

            <Link to="/agentlayout/nok">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">NOK</a>
            </li>
            </Link>

            <Link to="/agentlayout/insurancecompany">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Company</a>
            </li>
            </Link>

            <Link to="/agentlayout/policyrenewable">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Policy Renewable</a>
            </li>
            </Link>

            <Link to="/agentlayout/incident">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident</a>
            </li>
            </Link>

            <Link to="/agentlayout/incidentreport">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident Report</a>
            </li>
            </Link>

            <Link to="/agentlayout/coverage">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Coverage</a>
            </li>
            </Link>

            <Link to="/agentlayout/product">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Product</a>
            </li>
            </Link>

            <Link to="/agentlayout/receipt">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Receipt</a>
            </li>
            </Link>

            <Link to="/agentlayout/claimagent">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Claim</a>
            </li>
            </Link>

            <Link to="/agentlayout/payment"> 
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Premium Payment</a>
            </li>
            </Link>

            <Link to="/agentlayout/vehicle">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Vehicle</a>
            </li>
            </Link>

            <Link to ="/agentlayout/staff">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Staff</a>
            </li>
            </Link>
            
            <Link to="/agentlayout/department">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Department</a>

            </li>
            </Link>
             
            {/* <Link to="/agentlayout/incident">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident</a>
            </li>
            </Link> */}


          </ul>

        </Offcanvas.Body>
      </Offcanvas>

      
    </>
  );
}

export default Sidepanel;