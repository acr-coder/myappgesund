import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image'
import gelogo from '../assets/image1.png'

const LoginComponent = ( {goToRegister} ) => {
  const router = useRouter();
  const [error,setError] = useState('')
  const [userData, setUserData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', { ...userData });
      router.push('/profile');
    } catch (err) {
      console.log(err.response.data);
      setError('Email or Password is invalid')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
    setError('')
  }
  
  return (
    
        
      <form onSubmit={handleSubmit}>
      <div className="container">
         
      <div className="box">
      <Image className="geslogo" src={gelogo} alt="logo" width={80} height={80} /> 
      <h1>Login</h1>
        </div>
    
    <hr/>


    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Password" name="identifier" id="psw" required onChange={e => handleChange(e)}/>

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Repeat Password" name="password" id="psw-repeat" required onChange={e => handleChange(e)}/>
    <hr/>
    <h5 style={{color:"red"}} >{error ? `${error}`:''}</h5>
    
    <button type="submit" className="registerbtn">Login</button>
  </div>

  <div className="container signin">
    <p>Dont you have Gesund account? <a onClick={goToRegister} style={{cursor:"pointer"}}>Register</a>.</p>
  </div>
      </form>
      
      
    
  )
}

export default LoginComponent;