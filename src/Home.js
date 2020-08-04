import React from "react"
import "./home.css"
import Login from "./Login"

function Home(){
    return(
        <div className="a">
           <img
            className="logo"
            src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
            alt="netflix  logo"
            />
            <Login/>
           </div>
       
    )
}

    

export default Home