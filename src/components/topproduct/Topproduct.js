import React, { Component } from 'react'  

class Topproduct extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { signInStatus,onChangeIdDetail,topItems,pushCart} = this.props ;
        return(
            <div className="mt-5">
                <div className="container">
                    <h3><b>Top Product</b></h3>
                    <hr />
                </div>
                <div className="row justify-content-center">
                {
                    topItems.length > 0 ?
                    (
                        topItems.map((user,i) => {
                        return (
                                <div className="card col-md-3 mr-2 ml-2 mt-4" key={topItems[i].id}>
                                    <img className="card-img-top" src={require(`./${topItems[i].img}`)} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{topItems[i].name}</h5>
                                        <p className="card-text">$ {topItems[i].price}</p>
                                        {
                                            signInStatus ?  
                                            <button 
                                            className="btn btn-primary"
                                            onClick={() => pushCart(topItems[i])  }>
                                                add cart
                                            </button>                                             : 
                                            <button 
                                                className="btn btn-primary"
                                                disabled>
                                                    add cart
                                             </button>     
                                        }
                                        <button 
                                            className="btn btn-success ml-3"
                                            onClick={() => onChangeIdDetail(`${topItems[i].id}`,'topdetail')  }>
                                                    Detail
                                        </button>                                         
                                    </div>
                                </div>    
                        )
                    })
                    ) : ( <h1 style={{height : "20vh"}}>Item not found</h1>)
                }
                </div>
            </div>
        )
    }
}

export default Topproduct ;