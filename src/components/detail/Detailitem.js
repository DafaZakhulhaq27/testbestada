import React, { Component } from 'react'  

class Detailitem extends Component {
    constructor(props) {
        super(props);
    }
    render (){
        const { iddetail,items,onRouteChange,signInStatus,pushCart } = this.props ;
        return (
            items.map((user,i) => {
                if(items[i].id == iddetail){
                    return (
                        <div className="container mt-5 pt-5">
                            <img className="img" src={require(`./${items[i].img}`)} alt="Card image cap"/>  
                        <div className="text-center mt-5">
                            <h3>{items[i].name}</h3>    
                            <p>{items[i].description}</p>  
                            <p><b>{items[i].price}</b></p>  
                            {
                                signInStatus ?
                                <>
                                <button 
                                className="btn btn-primary"
                                onClick={() => pushCart(items[i])  }>
                                    add cart
                                </button> 
                                <button 
                                    className="btn btn-success ml-3"
                                    onClick={() => onRouteChange('homesignin')} >
                                        Back to Home
                                </button>                 
                                </>
                                 :
                                 <>
                                 <button 
                                 className="btn btn-primary"
                                 disabled>add cart</button>                                  
                                 <button 
                                     className="btn btn-success ml-3"
                                     onClick={() => onRouteChange('home')} >
                                     Back to Home
                                 </button>  
                                 </>               
                            }        
                        </div>
                    </div>    
                    )
                }
            }
        ) ) 
    }
    // const found = items.find(item => item.id === iddetail)
}

export default Detailitem;