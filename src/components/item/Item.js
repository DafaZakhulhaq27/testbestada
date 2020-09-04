import React from 'react'

const Item = ({items,signInStatus,onChangeIdDetail,pushCart}) => {
    return (
        <div className=" mt-5">
            <div className="row justify-content-center">
                {
                    items.length > 0 ?
                    (
                    items.map((user,i) => {
                        return (
                                <div className="card col-md-3 mr-2 ml-2 mt-4" key={items[i].id}>
                                    <img className="card-img-top" src={require(`./${items[i].img}`)} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{items[i].name}</h5>
                                        <p className="card-text">$ {items[i].price}</p>
                                        {
                                            signInStatus ?  
                                            <button 
                                                className="btn btn-primary"
                                                onClick={() => pushCart(items[i])  }>
                                                add cart
                                            </button>  : 
                                            <button 
                                                className="btn btn-primary"
                                                disabled>
                                                    add cart
                                             </button>                                            
                                        }
                                        <button 
                                            className="btn btn-success ml-3"
                                            onClick={() => onChangeIdDetail(`${items[i].id}`,'detail')  }>
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
    ) ;
}

export default Item;