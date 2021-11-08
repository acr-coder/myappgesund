import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import logo from '../assets/image1.png'
import help from '../assets/help.svg'
import noti from '../assets/in.svg'
import avatar from '../assets/Group.png'


const Header = ({logout, props}) => {
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Image src={logo} alt="logo"/>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-light"  ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link href="/aicatalog">
              <a className="nav-link" aria-current="page" >AI Catalog</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/deployments">
              <a className="nav-link" aria-current="page" >Deployments</a>
              </Link>
            </li>
            
            <li className="nav-item">
            <Link href="/modelregistry">
              <a className="nav-link" aria-current="page" >Model Registry</a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/applications">
              <a className="nav-link" aria-current="page" >Applications</a>
              </Link>
            </li>
            <li className="nav-item">
            
              <a style={{cursor:"pointer"}} className="nav-link user" aria-current="page" onClick={logout} >Logout</a>
              
            </li>
            <li className="nav-item">
            
              <a  className="nav-link user" aria-current="page" >{props.user.username}</a>
              
            </li>
            
            
          </ul>
          <div className="icons" >
            
            <Image className="nav-icon" src={help} alt="help" />
          <Image className="nav-icon" src={noti} alt="noti"  />
          <Image className="nav-icon" src={avatar} alt="avatar"  />
          </div>
          

        </div>
      </div>
    </nav>
    )
}

export default Header
