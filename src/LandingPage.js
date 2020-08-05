import React from "react";


import fire from "./fire"
import App from "./App"
import Home from "./Home"




class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
           user:{}
        }
    }

componentDidMount(){
    this.authListener()
}
authListener(){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
            this.setState({
                 user
            })
        }else{
            this.setState({user:null})
        }
    })
}
render()
{
    return(
      <div>
          {this.state.user ? <App/> : <Home/>}
       
      </div>
        
    )
}
}


// function LandingPage(){
//     return(
//         <Router>
//             <div>
//                 <Switch>
//                     <Route path="/" exact component={Home}/>
//                     <Route path="/App" component={App} />
//                 </Switch>
//             </div>
//         </Router>
//     )
// }
export default LandingPage