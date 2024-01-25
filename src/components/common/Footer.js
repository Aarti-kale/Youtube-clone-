import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' sticky-bottom  fixed-bottom bg-dark text-light py-2 '>
       <div className='container'>
         <div className='row'>
          <div className='col-md-12'>
           <div className='d-flex '>
             <Link to ="/" className='mx-3 text-light mt-2 md-5'>
              <img
              src='./images/home.png'
              alt="home logo"
              className='img-fluid'
              style={{maxWidth:'80px', maxHeight:'40px',marginRight:'280px'}}
              />
              </Link> 
            
                <Link to="/shorts" className='mx-3 text-light mt-2'>
                  <img
                   src='./images/shorts.svg'
                   alt='shorts_logo'
                   className='img-fluid'
                   style={{maxWidth:'90px', maxHeight:'40px', marginRight:'280px'}}  
                  />
                </Link>
                <Link to="/add" className='mx-3 text-light mt-2'>
                  <img
                   src='./images/add.png'
                   alt='add_logo'
                   className='img-fluid'
                   style={{maxWidth:'90px', maxHeight:'40px', borderRadius:'50%', marginRight:'270px'}}  
                  />
                </Link>
                <Link to="/subscription" className='mx-3 text-light mt-2'>
                  <img
                   src='./images/subscription.png'
                   alt='subscription_logo'
                   className='img-fluid'
                   style={{maxWidth:'90px', maxHeight:'40px', borderRadius:'50%', marginLeft:'0px'}}  
                  />
                </Link>
                </div>
            </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
