import React,{useState,useEffect} from "react";
import "./Nav.css"
import {Link,BrowserRouter as Router} from "react-router-dom"

function Nav(){
    const[show,handleShow]= useState(false)
    
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){ 
                handleShow(true)
            }else handleShow(false)
        })
    //    return()=>{
    //        window.removeEventListener("scroll")
    //    }
    },[])
   
    
       
    
    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img
            className="logo"
            src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
            alt="netflix  logo"
            />
             <Router>
                <Link to="/logOut" className="butt">Log Out</Link>
            </Router>
        </div>
    )
}



export default Nav