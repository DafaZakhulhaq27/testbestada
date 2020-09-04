import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light p-3 " style={{width : "100%", height : "auto"}}>
            <hr /> 
            <div className="container pt-3">
                <div className="row text-center justify-content-center">
                    <div className="col-md-3">
                        <h5><b>Bestada Shop</b></h5>
                        <p>28 Sin Ming Lane, #01-143, Midview City Indonesia 573972</p>
                    </div>
                    <div className="col-md-4">
                        <h5><b>About</b></h5>
                        <p>Term & condition</p>
                        <p>Policy & privacy</p>
                        <p>Career</p>
                        <p>FAQ</p>
                    </div>
                    <div className="col-md-4">
                        <h5><b>Tutorial</b></h5>
                        <p>How to register, How to Buy, How to sell product</p>
                        <p>Shoping tips</p>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <hr />
                <p className="text-center"> © 2020 PT Bestada</p>
            </div>
        </footer>
    ) ;
}

export default Footer;