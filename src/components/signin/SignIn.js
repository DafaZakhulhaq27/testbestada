import React, {Component} from 'react' ;

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : '' 
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail : event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({signInPassword : event.target.value })
    }
    onSubmitSignIn = () => {
        const {signInEmail, signInPassword} = this.state ;
        if(signInEmail && signInPassword){
            fetch('http://34.101.199.158:3000/users/login', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email: signInEmail,
                    password: signInPassword 
                })
            }).then( response => response.json())
            .then(data => {
                    if(data.status){
                        alert(data.message)
                        this.props.loadUser(signInEmail) 
                        this.props.onRouteChange('homesignin')                     
                    }else{
                        alert(data.message)
                    }
            }).catch(err => {
                alert(err)
            })
        }
    }            
    render(){
        const { onRouteChange } = this.props ;
        return (
            <div className="container">
            <div className="row justify-content-center">    
            <div className="col-xl-5 col-lg-5 col-md-9 mt-5">
                <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Sign In</h1>
                        </div>
                        <div className="user">
                            <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control form-control-user" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Email" 
                                onChange={this.onEmailChange} />
                            </div>
                            <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control form-control-user" 
                                id="password" 
                                placeholder="Password" 
                                onChange={this.onPasswordChange} />
                            </div>
                            <input 
                                className="btn btn-primary btn-user btn-block" 
                                value="Sign In"
                                type="submit"
                                onClick={this.onSubmitSignIn} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="text-center">
                        <a 
                            className="medium" 
                            onClick={() => onRouteChange('signup')}>
                            Dont have an account ?
                         </a>
                         <hr />
                         <a 
                            className="medium mt-3" 
                            onClick={() => onRouteChange('home')}>
                            back to the home
                         </a>                         
                    </div>                 
                </div>         
            </div>
        
            </div>
        
        </div>
        )
    }
} 

export default SignIn ;