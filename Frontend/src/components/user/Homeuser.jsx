import React from 'react'
import { Link } from 'react-router-dom'

const Homeuser = () => {
  return (
<>

<div className="container mx-auto p-4">
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my details</h2>
              
              <div className="card-actions justify-end">
              
                <Link to ='/userlayout/customer_read'>
                <button className="btn">view my details</button>
                </Link>
                
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Application</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/application'>
                <button className="btn">view my Application</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Quote</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/quote_read'>
                <button className="btn">view my Quote</button>
                </Link>
              </div>
            </div>
          </div>
          


          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my insuance policy</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/insurance_read'>
                <button className="btn">view insuance policy</button>
                </Link>
              </div>
            </div>
          </div>
          



          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Claim settlement</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/claimsettlement'>
                <button className="btn">view my Claim settlement</button>
                </Link>
              </div>
            </div>
          </div>
          



          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Incident</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/IP'>
                <button className="btn">view my Incident</button>
                </Link>
              </div>
            </div>
          </div>
          


          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Coverage</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/CoverageP'>
                <button className="btn">view my Coverage</button>
                </Link>
              </div>
            </div>
          </div>
          


          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Membership</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/buttonpage'>
                <button className="btn">view my Membership</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my NOK details</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/nok'>
                <button className="btn">view my NOK</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Policy Renewable</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/PRP'>
                <button className="btn">view my Policy Renewable</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-96 bg-white text-primary-content">
            <div className="card-body">
              <h2 className="card-title">view my Receipt</h2>
            
              <div className="card-actions justify-end">
                <Link to ='/userlayout/RP'>
                <button className="btn">view my Receipt</button>
                </Link>
              </div>
            </div>
          </div>
          
          
          
          
          
          

          </div>
        </div>

</>
  )
}

export default Homeuser