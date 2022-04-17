import React,{useState} from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const [emailInput,SetEmailInput]=useState("")
    const [passwordInput,setPasswordInput]=useState("")
    const [showPassword,setShowPassword]=useState("password")
    const [openEye,setOpenEye]=useState("visible")
    const [closeEye,setCloseEye]=useState("hidden")
    const [error,setError]=useState("")
    
    const toNavigate=useNavigate();
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regexpForPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/

    const OpeneyeHandle=()=>{
      showPassword==="password"?setShowPassword("text"):setShowPassword("password")
     setOpenEye("hidden")
     setCloseEye("visible")
     }

    const CloseeyeHandle=()=>{
        showPassword==="password"?setShowPassword("text"):setShowPassword("password")
        setOpenEye("visible")
        setCloseEye("hidden")
    }
    const LoginHandle=()=>{
        // toNavigation("/Category")
        var isemail= regexp.test(String(emailInput).toLowerCase());
        var isCorrectPassword=regexpForPass.test(passwordInput)
        if(!isemail && !isCorrectPassword){
            setError("Invalid email and password")
            
            const data=localStorage.getItem("info")
            console.log(data)

        }
        else if(!isemail){
            setError("Invalid email")
        }
        else if(!isCorrectPassword){
            setError("Please inter valid password")
        }
        else{
            setError("")
            const obj={
                "Email":emailInput,
                "Password":passwordInput
            }
            localStorage.setItem("info", JSON.stringify(obj))
            toNavigate("/Category")
        }
    }

      return (
  <div className="loginPage" >
      <div className="header">
                    <h1 className="tv2z">TV2Z</h1>
                    <h1 className="login">LOG IN</h1>
      </div>
      <h1 className="loginText">LOG IN</h1>
      <p className="intructionText">Enter your credential to log in to TV2Z</p>
      <div className="inputTag">
                    <input className="email" onChange={(e)=>{SetEmailInput(e.target.value)}} value={emailInput} placeholder="Email" type="email" id="emailElement"/>
                    <span className="passwordDiv">
                        <input className="password" onChange={(e)=>{setPasswordInput(e.target.value)}} value={passwordInput} placeholder="Password" type={showPassword} id="passwordElement"/>
                        <svg onClick={OpeneyeHandle} style={{visibility:openEye}} className="openEye" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg className="closeEye" onClick={CloseeyeHandle} style={{visibility:closeEye}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3L21 21" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 10.677C10.1631 11.0585 9.98425 11.5541 10 12.0629C10.0158 12.5716 10.2249 13.0552 10.5848 13.4151C10.9448 13.7751 11.4284 13.9842 11.9371 14C12.4459 14.0157 12.9415 13.8369 13.323 13.5" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.362 7.56104C5.68 8.74004 4.279 10.42 3 12C4.889 14.991 8.282 18 12 18C13.55 18 15.043 17.477 16.395 16.65" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 6C16.008 6 18.701 9.158 21 12C20.6705 12.5208 20.3105 13.0216 19.922 13.5" stroke="#6F6F6F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </span>
      </div>

      


      <p className="error" id="errorMessage">{error}</p>
      <p className="forgotpassword">Forgot password?<b className="click-here">Click here!</b></p>
      <p className="para">By clicking on 'Log in' button, you are hereby agreeing to our <span>Privacy Policy</span> and <span >Terms & Conditions</span></p>
      <button onClick={LoginHandle} className="loginButton" >LOG IN</button>
      <p>Don't have an account?<b>Sign Up!</b></p>
      <div className="footer" >
         <p className="footer-text">2020 WT TV2Z. All rights reserved.</p>
      </div> 
  </div>
  );
}

export default Login;
