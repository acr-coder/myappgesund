import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image'
import gelogo from '../assets/image1.png'


const RegisterComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [error,setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', userData);
      router.replace('/profile');
    } catch (err) {
      console.log(err.response.data);
      console.log(err.response.data.message);
      setError(err.response.data.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value });
    setError('')
  }
  const goToLogin = () => {
    router.push('/');
  }

  return (
    <div className="mybox">
      <div className="left-box">
      <Image className="geslogo" src={gelogo} alt="logo" width={80} height={80} /> 
        <h1 style={{marginLeft:"10px"}} >Gesund AI</h1>
      </div>
    <div className="right-box">
    <form onSubmit={handleSubmit}>
          <div className="mycontainer">
      <div>
       
      <h1 style={{textAlign:"center"}}>Register</h1>
        </div>    
    
    
    <p>Please fill in this form to create a Gesund account.</p>
    <hr/>

    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter Email" name="username" id="email" required onChange={e => handleChange(e)}/>

    <label htmlFor="email"><b>Email</b></label><span>{error ? `${error}`: ''}</span>
    <input type="email" placeholder="Enter Password" name="email" id="psw" required onChange={e => handleChange(e)}/>

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Repeat Password" name="password" id="psw-repeat" required onChange={e => handleChange(e)}/>
    <hr/>

    
    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="mycontainer signin">
    <p>Already have an account? <a onClick={goToLogin} style={{cursor:"pointer"}}>Sign in</a>.</p>
  </div>
      
    </form>
    </div>
    
   
    </div>
  )
}

export default RegisterComponent;