import React from 'react'

const Newsletter = () => {
    return (
        <div className="bg-light pt-2 mt-5" style={{height : "20vh"}}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>NewsLetter</h1>
                        <p>Stay up-to-date with our latest news.</p>
                    </div>
                    <div className="col-md-6">
                    <div className="form-inline mt-3">
                        <div className="form-group mx-sm-3 mb-2">
                            <label  className="sr-only">Email ...</label>
                            <input type="email" className="form-control" id="inputPassword2" placeholder="Email" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Subcribe</button>
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
} 

export default Newsletter ;