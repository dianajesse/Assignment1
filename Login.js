import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';
import About from './About';


function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [LoggedIn,setLoggedIn]=useState(false)

    const handleEmailInput=(e)=>{setEmail(e.target.value)}
    const handlePasswordInput=(e)=>{setPassword(e.target.value)}
    
    function handleLogin (e){
        e.preventDefault()
    if(email==="diana@gmail"&& password==="1234"){
           setLoggedIn(true);
           <Router><Switch> 
           <Route exact path='/About' component={About}/>
             </Switch></Router>
    }
    
      }
      function handleLogout (e){
          e.preventDefault();
          setLoggedIn(false)
        }
    return (
        <div>{

            LoggedIn
           
            ?
            <>
           <About/>
           <Button style={{align:"right"}} onClick={handleLogout}> LogOut</Button> 
            </>
              :
            <> 
            <div className="Login-component">
                <div >
                    {<h1 className="Welcome" style={{color:"white"}}>Welcome User </h1>}
                </div>
           
           
    <div className="centered">
        <div className="box">
            <form>
                <h3 style={{textAlign:"center"}}><i><span>LoGin PaGe</span></i></h3>
                <p>
                <label for="lname" className="distance"><b>E-mail:</b></label>
                        <input type="text" value={email}  onChange={handleEmailInput} placeholder="diana@gmail"/><br></br>
                </p>
                <p>
                <label for="lname"className="distance"><b>PassWord:</b></label>
                <input type="text" value={password} onChange={(e)=>handlePasswordInput(e)}  placeholder="12@hk/?"/><br></br>
                </p> 
                 <p style={{textAlign:"center"}}>
                 <input type="button" value="Submit" onClick={handleLogin}/>
                 <Link to='/SignUp'><button>SignUp</button></Link>
                </p> 
            </form>
        </div>
        </div>
    </div>
    </>
      }     
       </div>
       )
        }
   

export default Login
