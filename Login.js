import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
   <div className="Login-component">
                <div >
                    {<h1 className="Welcome" style={{color:"white"}}>Welcome User</h1>}
                </div>
    <div className="centered">
        <div className="box">
            <form>
                <h3 style={{textAlign:"center"}}><i>LoGin PaGe</i></h3>
                <p>
                <label for="fname"><b>UserName:</b></label>
                <input type="text" id="fname"  name="fname" placeholder="Diana"/><br></br>
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
                <Link to ='/SignUp'><button><input type="button" value="SignUp"/></button></Link>
                </p> 
            </form>
        </div>
        </div>
    </div>
                  
    )
}

export default Login
