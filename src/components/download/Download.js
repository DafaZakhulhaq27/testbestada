import React from 'react'

const Download = () => {
    return (
        <div className="container mt-5">
            <h2><b>Get The App</b></h2>
            <div className="row mt-3"> 
                <a href="https://apps.apple.com/" target="_blank">
                    <img className="img download-img" src={require(`./d1.png`)} alt="Card image cap"/>  
                </a>
                <a href="https://play.google.com/" className="ml-3" target="_blank">
                    <img className="img download-img" src={require(`./d2.png`)} alt="Card image cap"/>  
                </a>
            </div>
        </div>
    )
} 

export default Download ;