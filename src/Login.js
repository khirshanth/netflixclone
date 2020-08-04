import React from "react"
import "./login.css"
import fire from "./fire"
class Login extends React.Component{
    constructor(props){
        super(props)
            this.state={
               email:"",
               password:""
            }
            this.handleChange=this.handleChange.bind(this)
            this.login=this.login.bind(this)
        }
    login(e){
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div className="form">
                 <form>
                        <h1 style={{color:"white"}}>Sign In</h1>
                        <div className="input">
                       <input className="form-1"
                        name="email"
                        type="email" required  
                        placeholder="Email or phone number"
                        onChange={this.handleChange}
                        value={this.state.email}
                         />
                     
                       </div>
                       <div className="input">
                       <input className="form-1" 
                       name="password"
                       type="password" required 
                       placeholder="Password" 
                       onChange={this.handleChange}
                       value={this.state.password}
                    
                      />
                       
                       </div>
                       <div className="input">
                   
                           <button className="but"
                          
                          onClick={this.login}
                          >Sign In</button>
                        
                        
                       
                   
                       
                   </div>
                
                   
              
            </form>
            </div>
        )
    }
}


export default Login;