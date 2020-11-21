import React from 'react'
import './index.css'

function SignUp() {
    return (
          <div className="Login-component">
                <div >
                    {<h1 className="Welcome" style={{color:"white"}}>Thank You</h1>}
                </div>
    <div className="centered">
        <div className="box">
            <form>
                <h3 style={{textAlign:"center"}}><i>SignUp hERE</i></h3>
                <p>
                <label for="fname"><b>UserName:</b></label>
                <input type="text" id="fname" style={{justifyContent:"center"}} name="fname" placeholder="Diana"/><br></br>
                </p>
                <p>
                <label for="lname"><b>E-mail:</b></label>
                <input type="text" id="lname" name="lname" placeholder="diana@gmail"/><br></br>
                </p>
                <p>
                <label for="lname"><b>PassWord:</b></label>
                <input type="text" id="lname" name="lname"  placeholder="12@hk/?"/><br></br>
                </p> 
                 <p style={{textAlign:"center"}}>
                <button><input type="button" value="Submit"/></button> 
                </p>
              </form>
        </div>
        </div>
        </div>
    )
}

export default SignUp
