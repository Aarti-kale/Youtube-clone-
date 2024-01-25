import React, { useState } from 'react';
import {Link} from 'react-router-dom'
 const Header = () => {
    // for menu icon
    const [showMenu, setShowMenu] = useState(false)
     
    const toggleMenu =() =>{
        setShowMenu(!showMenu)
    }
    //  for search bar
    const[showSearchBar , setShowSearchBar] = useState(false);
       const toggleSearchBar = () =>{
        setShowSearchBar(!showSearchBar);
       }
    
    return(
        <header className=' bg-black text-white py-3'>
            <div className='container-fluid'>
                <div className='row align-items-start justify-content-between'>

                    {/* Menu icon */}
                    <div className='col-md-1 ms-3'>
                        <div className='text-white'
                           style={{cursor:'pointer'}}
                           onClick={toggleMenu}

                        >
                        <Link to="/" className='text-decoration-none text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokewidth="2" 
                        stroke-linecap="round" stroke-linejoin="round" 
                        className="feather feather-menu ms-4">
                            <line x1="3" y1="12" x2="21" y2="12">
                                </line><line x1="3" y1="6" x2="21" y2="6">
                                    </line><line x1="3" y1="18" x2="21" y2="18">
                                        
                                    </line>
                        </svg>
                        
                        </Link>
                        </div>

                        {/* showMenu */}
                        {showMenu && (
                            <div className='col-md-20 bg-white'>
                                  <ul className='list-unstyled'>
                                     <li>
                                     <Link to ="/home" className='mx-3 text-light mt-2 md-5'>
                                    <img
                                      src='./images/home.png'
                                        alt="home logo"
                                           className='img-fluid'
                                            style={{maxWidth:'80px', maxHeight:'40px',marginRight:'20px'}}
                                             />
                                     </Link> 
                                     </li>
                                     <li>
                                     <Link to="/shorts" className='mx-3 text-light mt-2'>
                                       <img
                                        src='./images/shorts.svg'
                                             alt='shorts_logo'
                                              className='img-fluid'
                                               style={{maxWidth:'90px', maxHeight:'40px', marginRight:'20px'}}  
                                                   />
                                              </Link>
                                     </li>
                                     <li>
                                     <Link to="/subscription" className='mx-3 text-light mt-2'>
                                         <img
                                            src='./images/subscription.png'
                                           alt='subscription_logo'
                                           title='subscription'
                                           className='img-fluid'
                                                style={{maxWidth:'90px', maxHeight:'40px', borderRadius:'50%', marginLeft:'0px'}}  
                                              />
                                            </Link>
                                     </li>
                                  </ul>
                                </div>
                        )}
                    </div>
                    {/* Logo and youtube text */}
                    <div className='col-md-1 d-flex flex-column '> 
                    <Link to = "/" className='text-decoration-none text-white d-flex align-items-center'>
                <img src="/images/youtube.jpg"
                 alt="YouTube Logo" 
                 className='logo img-fluid me-2' 
                 style={{width: '60px', height :'40px'}}
                 />
                 
                 <span className='fs-4 fw-bold mb-2'  style={{fontSize: '1.5rem'}}>YouTube</span>
                 </Link>
                 </div>
             
             
            <div className='col-md-6 d-flex ms-auto justify-content-end'>
                
                {/* search logo */}
                <div className='col-md-6 d-flex mas-auto justify-content-end'>
                <div className='me-2 d-flex'style={{cursor:'pointer'}} onClick={toggleSearchBar}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="25"
                 viewBox="0 0 24 24" 
                 fill="none" stroke="currentColor" 
                 strokewidth="2" 
                 stroke-linecap="round" 
                 stroke-linejoin="round" 
                 className="feather feather-search me-5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    </div>
                    {/* show Search bar */}
                    {showSearchBar && (
                        <div className='container'>
                            <div className='row justify-content-end'>
                                <div className='col-md-20'>
                                    <input
                                    type='text'
                                    placeholder='search...'
                                    className='form-control form-control-lg'
                                    style={{width: '20rem'}} 
                                    />
                                    </div> 
                                 </div>
                              </div>
                    )}

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic me-5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video me-5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell me-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>

                    
                     
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokewidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user me-5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    
                   
                </div>
                
                </div>
            </div>
            </div>
        </header>
    
    )
 }
  export default Header;