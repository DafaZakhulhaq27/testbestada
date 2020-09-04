import React, {Component} from 'react' ;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpEmail : '',
            signUpPassword : '' 
        }
    }
    onEmailChange = (event) => {
        this.setState({signUpEmail : event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({signUpPassword : event.target.value })
    }
    onSubmitSignUp = () => {
        const {signUpEmail, signUpPassword} = this.state ;
        if(signUpEmail && signUpPassword){
            fetch('http://34.101.199.158:3000/users/signup', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email: signUpEmail,
                    password: signUpPassword 
                })
            }).then( response => response.json())
            .then(data => {
                    if(data.status){
                        alert(data.message) 
                        this.props.loadUser(signUpEmail) 
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
                            <h1 className="h4 text-gray-900 mb-4">Sign Up</h1>
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
                                value="Sign Up"
                                type="submit"
                                onClick={this.onSubmitSignUp} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="text-center">
                        <a 
                            className="medium" 
                            onClick={() => onRouteChange('signin')}>
                            Already have account ?
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

export default SignUp ;