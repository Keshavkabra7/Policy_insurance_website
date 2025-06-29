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
          <Offcanvas.Title>Customer</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         
          <ul className="px-4" onClick={handleClose}>
          <Link to ='/userlayout'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Home</a>
            </li>
            </Link>

            <Link to ='/userlayout/Customerform'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Customer</a>
            </li>
            </Link>

            <Link to ='/userlayout/customer_read'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Customer_read</a>
            </li>
            </Link>


            <Link to="/userlayout/application">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Application</a>
            </li>
            </Link>

            <Link to = "/userlayout/quote_read">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Quote</a>
            </li>
            </Link>

            <Link to = "/userlayout/insurance_read">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Policy</a>
            </li>
            </Link>

            <Link to = "/userlayout/claimsettlement">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Claim Settlement</a>
            </li>
            </Link>

            <Link to = "/userlayout/officepage">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Office</a>
            </li>
            </Link>


            <Link to  ="/userlayout/buttonpage">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Membership</a>
            </li>
            </Link>

            <Link to ="/userlayout/vehicleservicepage">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Vehicle Service</a>
            </li>
            </Link>


            <Link to = "/userlayout/nok">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">NOK</a>
            </li>
            </Link>

            <Link to = "/userlayout/ICP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Insurance Company</a>
            </li>
            </Link>

            <Link to = "/userlayout/PRP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Policy Renewable</a>
            </li>
            </Link>

            <Link to='/userlayout/IP'>
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident</a>
            </li>
            </Link>
            
            <Link to = "/userlayout/IRP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Incident Report</a>
            </li>
            </Link>

            <Link to = "/userlayout/CoverageP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Coverage</a>
            </li>
            </Link>


            <Link to = "/userlayout/PP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Product</a>
            </li>
            </Link>

            <Link to = "/userlayout/RP">
            <li className="py-1">
              <a href="#" className="text-gray-800 hover:text-blue-500">Receipt</a>
            </li>

            </Link>
          </ul>

        </Offcanvas.Body>
      </Offcanvas>
     
      
    </>
  );
}

export default Sidepanel;