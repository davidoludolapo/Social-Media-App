import React from 'react'
import './auth.css'
import Logo from '../../img/logo.png'

function Auth() {
  return (
    <div className='auth'>
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="webname">
                <h1>SQI SOCIAL</h1>
                <h6>Lorem, ipsum dolor sit amet consectetur.</h6>
            </div>
        </div>

        {/* <SignUp/> */}
        <LogIn/>
    </div>
  )
}

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }


function SignUp(params) {
    return(
        <div className="a-right">
            <form  className="infoForm authForm">

                <h3>Signup</h3>

                <div>
                    <input type="text" placeholder='First name' className='infoInput' name='firstname'/>
                    <input type="text" placeholder='Last name' className='infoInput' name='lastname'/>
                </div>
                <div>
                    <input type="text" className="infoInput" name='username' placeholder='Username' />
                </div>
                <div>
                    <input type="text" className="infoInput" name='password' placeholder='Password'/>
                    <input type="text" className="infoInput" name='confirmPassword' placeholder='Confirm Password'/>
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Already have an account? Login here</span>
                </div>
                <button className="button infoButton" type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default Auth