import React, { Component } from 'react'  

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onRouteChange,signInStatus,signInEmail,cart } = this.props ;
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <span className="navbar-brand">Bestada Shop</span>
                    <div>
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
 
                        {
                            signInStatus ? <>                        
                            <span className="navbar-brand">{signInEmail}</span>
                            <button 
                                className="btn btn-outline-danger my-2 my-sm-0 ml-2 mr-2" 
                                type="submit"
                                onClick={() => onRouteChange('signin')}>
                                    Logout
                            </button>
                            <button 
                                className="btn btn-outline-primary my-2 my-sm-0 ml-2 mr-2" 
                                type="submit"
                                onClick={() => onRouteChange('cart')}>
                                    Cart 
                            </button>
                             </> : <>
                            <button 
                                className="btn btn-outline-primary my-2 my-sm-0 ml-2 mr-2" 
                                type="submit"
                                onClick={() => onRouteChange('signin')}>
                                    Sign In
                            </button>
                            <button 
                                className="btn btn-outline-primary my-2 my-sm-0 ml-2 mr-2" 
                                type="submit"
                                onClick={() => onRouteChange('signup')}>
                                    Sign Up
                            </button>  

                            </  >
                        }                        
                        </form>
                    </div>                
                    </div>
                </nav>
        )    
    }
}


export default Navbar ;