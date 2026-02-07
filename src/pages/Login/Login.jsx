import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import background_banner from "../../assets/background_banner.jpg";
import{login,signup} from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  // const[loading,setLoading]=useState(false);
   
  const user_auth =async(event)=>{
    event.preventDefault();
    // setLoading(true);
    if(signState === "Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
    // setLoading(false);
  }
 

  return (
    // loading? <div className="login-spinner">
    //   <img src={netflix_spinner} alt="" />
    // </div>:
    <div className="login">
      {/* Background Image */}
      <img
        src={background_banner}
        className="background_img"
        alt="background"
      />

      {/* Logo */}
      <img src={logo} className="login-logo" alt="Logo" />

      {/* Glass Box */}
      <div className="login-box">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up" && (
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your name" />
          )}

          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter the Password" />

          <button onClick={user_auth} type="submit">{signState}</button>

          <div className="login-options">
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="login-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
