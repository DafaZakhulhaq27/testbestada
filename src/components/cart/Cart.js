import React, { Component } from 'react'  

class Cart extends Component  {
    constructor(props) {
        super(props);
    }
    render(){
        const { cart } = this.props ;
        let total = 0 ;
        return (
            <div className="container mt-5 pt-5">
                <h4>Shopping Cart</h4>
                <table className="table mt-5">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length > 0 ?
                            (
                                cart.map((user,i) => {
                                let no = i+1 ;
                                total = total + cart[i].price
                                return (
                                    <tr>
                                    <th scope="row">{no}</th>
                                        <td>{cart[i].name}</td>
                                        <td> $ {cart[i].price}</td>
                                    </tr>     
                                )
                            })
                            ) : (
                                <tr>
                                    <th scope="row" colSpan="3">no items</th>
                                </tr>                                    
                            )
                        }
                      
                    </tbody>
                    <tfoot>
                        <tr>
                        <th scope="row" colSpan="2">Total</th>
                        <th scope="row" >
                            {   
                                <td>$ { total }</td>                                                 
                            }       
                        </th>
                        </tr>
                    </tfoot>
                </table>            
            </div>
        )
    }    
} 

export default Cart ;