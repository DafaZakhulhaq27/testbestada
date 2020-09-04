import React, { Component } from 'react';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import Detail from './components/detail/Detailitem';
import Topproduct from './components/topproduct/Topproduct';
import Topdetail from './components/topdetail/Topdetail';
import Topcompany from './components/topcompany/Topcompany';
import Download from './components/download/Download';
import Newsletter from './components/newsletter/Newsletter';
import Cart from './components/cart/Cart';
import Item from './components/item/Item';
import Footer from './components/footer/Footer';
import SliderBanner from './components/slider/SliderBanner';
import './assets/css/bootstrap.min.css' ;
import './assets/css/styles.css' ;

class App extends Component {
  constructor(props){
    super(props) ;
    this.state = {
      route:'home',
      isSignin: false,
      email : '',
      items :[
        {
          id : 1,
          name : "Adidas",
          description : "Want a adidas your customer’s interest in a product? It’s right under your nose",
          price : 1200,
          img : "i1.jpg"
        },
        {
          id : 2,
          name : "Nike",
          description : "Want a nike customer’s interest in a product? It’s right under your nose",
          price : 1030,
          img : "i2.jpg"
        },
        {
          id : 3,
          name : "Supreme",
          description : "Want a supreme ignite your customer’s interest in a product? It’s right under your nose",
          price : 500,
          img : "i3.jpg"
        },
        {
          id : 4,
          name : "Gucci",
          description : "Want a gucci ignite your customer’s interest in a product? It’s right under your nose",
          price : 700,
          img : "i4.jpg"
        },
        {
          id : 5,
          name : "Puma",
          description : "Want a Puma ignite your customer’s interest in a product? It’s right under your nose",
          price : 650,
          img : "i5.jpg"
        },
        {
          id : 6,
          name : "Joger",
          description : "Want a Joger ignite your customer’s interest in a product? It’s right under your nose",
          price : 700,
          img : "i6.jpg"
        },        
      ],
      topItems :[
        {
          id : 1,
          name : "Cittos",
          description : "Want a Cittos your customer’s interest in a product? It’s right under your nose",
          price : 140,
          img : "t1.jpeg"
        },
        {
          id : 2,
          name : "Fossil",
          description : "Want a nike Fossil interest in a product? It’s right under your nose",
          price : 1030,
          img : "t2.jpeg"
        },
        {
          id : 3,
          name : "Garmin",
          description : "Want a Garmin ignite your customer’s interest in a product? It’s right under your nose",
          price : 530,
          img : "t3.jpg"
        },     
      ],      
      searchfield : '',
      iddetail : 0,
      cart : []
    }
  }

  loadUser = (emailsignin) => {
    this.setState({
      email : emailsignin
    })  
  }

  onRouteChange = (route) => {
    if(route === 'homesignin'){
      this.setState({isSignin : true}) ;
    }else if(route === 'home'){
      this.setState({isSignin : false}) ;
    }
    this.setState({route : route}) ;
  }
  onSearchChange = (event) =>{
    this.setState({searchfield : event.target.value})
  }
  onChangeIdDetail = (id,route) =>{
    this.setState({iddetail : id , route : route})
  }  
  pushCart = (data) =>{
    this.state.cart.push({
      name : data.name,
      price : data.price
    })
    alert(`${data.name} success added to shopping chart`)
  }  

  render() {
    const {isSignin, route, email,items,searchfield,iddetail,topItems,cart} = this.state ;
    const filteredItem = items.filter(items => {
      return items.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return(
      <div className="App">
        {
          route === 'signup' ?
          <SignUp onRouteChange={this.onRouteChange} loadUser={this.loadUser}  signInStatus={isSignin} />   
          : null

        }    
        {
          route === 'topdetail' ?
          <>
              <Navbar onRouteChange={this.onRouteChange} routeStatus={route} signInStatus={isSignin} signInEmail={email} cart={cart} />  
                <Topdetail iddetail={iddetail} items={topItems} onRouteChange={this.onRouteChange} signInStatus={isSignin}  pushCart={this.pushCart} />   
              <Footer />          
          </>
           : null

        }   
        {
          route === 'cart' ?
          <>
              <Navbar onRouteChange={this.onRouteChange} routeStatus={route} signInStatus={isSignin} signInEmail={email} cart={cart} />  
               <Cart cart={cart} />
              <Footer />          
          </>
           : null

        }                          
        {
          route === 'home' || route === 'homesignin' ?
          <>
            <Navbar onRouteChange={this.onRouteChange} routeStatus={route} signInStatus={isSignin} signInEmail={email} cart={cart} />  
              <SliderBanner />   
              <Search searchChange={this.onSearchChange} searchfield={searchfield} />
              <Item items={filteredItem}  signInStatus={isSignin} onChangeIdDetail={this.onChangeIdDetail} onRouteChange={this.onRouteChange} onRouteChange={this.onRouteChange} pushCart={this.pushCart} />              
              <Topproduct topItems={topItems} signInStatus={isSignin} onChangeIdDetail={this.onChangeIdDetail} onRouteChange={this.onRouteChange}  pushCart={this.pushCart} />
              <Topcompany />
              <Download />
              <Newsletter />
            <Footer />
            </> 
          :(
            route === 'signin' ? 
            <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}  signInStatus={isSignin}  />:
            (
              route === 'detail' ?
              <>
              <Navbar onRouteChange={this.onRouteChange} routeStatus={route} signInStatus={isSignin} signInEmail={email} cart={cart} />  
                <Detail iddetail={iddetail} items={items} onRouteChange={this.onRouteChange} signInStatus={isSignin}  pushCart={this.pushCart} />   
              <Footer />          
              </>   : null
            )
          )
        }

      </div>
    )
  };
}

export default App;
