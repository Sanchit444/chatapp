import React, { useState } from 'react'
import axios from 'axios'; //api call
import './Form.css'
const Loginform = () => {
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[error,seterror]=useState('');
    const handleSubmit= async (e)=>{
        e.preventDefault(); //to prevent browser to refresh
        // if username and password is correct
        const authObject ={'Project-ID': "69991752-03ae-4258-9027-b90a1acca2af", 'User-Name':username,'User-Secret':password}
        try {
           await axios.get('https://api.chatengine.io/chats',{headers:authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
        window.location.reload();
           
        } catch (err) {
            seterror('Credential is wrong');
        }
    }
  return (
    // <div className='wrapper'>
    //     <div className='form'>
    //         <h1 className='title'>Chat Application</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} className='input' placeholder='Username' required/>
    //             <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className='input' placeholder='Password' required/>
    //             <div align="center">
    //                 <button type='submit' className='button'>
    //                     <span>Start Chatting</span>
    //                 </button>
    //             </div>
                
    //         </form>
    //         <h2 className='error'>{error}</h2>
    //     </div>
    // </div>

    <div className='container'>
        <span className="error animated tada" id="msg"></span>
        <form  name="form1" class="box" onSubmit={handleSubmit}>
            <h4>Chat<span>App</span></h4>
            <h5>Sign in to your account.</h5>
            <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} name="user"  placeholder="UserName" autocomplete="off"/>
            <i className="typcn typcn-eye" id="eye"></i>
            <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} name="password" placeholder="PasssWord" id="pwd" autocomplete="off"/>
            <label>
                <input type="checkbox"/>            
                <small className="rmb">Remember me</small>
            </label>
            <a href="#" className="forgetpass">Forget Password?</a>
            <button type="submit" value="Sign in" className="btn1">
                Submit
            </button>
        </form>
        <a href="#" className="dnthave">Don’t have an account? Sign up</a>
    </div>

  )
}

export default Loginform