import React from 'react'

const Topcompany = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <h3><b>Top Company</b></h3>
                <hr />  
            </div>
            <div className="row justify-content-center topcompany">
                <div className="card col-md-3 mr-2 ml-2 mt-4">
                        <img className="card-img-top" src={require(`./c1.jpeg`)} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><b>Google</b></h5>
                            <p className="card-text">Google LLC is multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware</p>
                        </div>
                </div>              
                <div className="card col-md-3 mr-2 ml-2 mt-4">
                        <img className="card-img-top" src={require(`./c2.jpeg`)} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><b>IBM</b></h5>
                            <p className="card-text">IBM is an technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware</p>
                        </div>
                </div>
                <div className="card col-md-3 mr-2 ml-2 mt-4">
                        <img className="card-img-top" src={require(`./c3.jpeg`)} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><b>Microsoft</b></h5>
                            <p className="card-text">Microsoft is an technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware</p>
                        </div>
                </div>                                 
            </div>          
        </div>
    )
} 

export default Topcompany ;