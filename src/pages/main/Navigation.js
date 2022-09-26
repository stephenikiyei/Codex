import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../../content/images/codex.png'
import { useHistory } from 'react-router-dom';
import { FaRegUser, FaUser, FaUserAlt, FaUserCircle, FaUserCog, FaUserMd, FaUserSecret } from 'react-icons/fa';




export  const Navigation = props => {

  let history = useHistory();
  const gotocourselist=()=>{
    history.push({
      pathname: '/courselist'
      
       });
   }
  const gotodashboard=()=>{
    history.push({
      pathname: '/dashboard'
      
       });
   }
  const gotocategories=()=>{
    history.push({
      pathname: '/coursecategory'
      
       });
   }
    useEffect(() => {
  
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script");
        const script4 = document.createElement("script");
        const script5 = document.createElement("script");

        script.src = '../../content/js/bootstrap.min.js';
        script2.src = '../../content/js/popper.min.js';
        script3.src = '../../content/js/jquery-3.3.1.min.js';
        script4.src = '../../content/js/jquery.sticky.js';
        script5.src = '../../content/js/main.js';
        script.async = true;
        script2.async = true;
        script3.async = true;
        script4.async = true;
        script5.async = true;
    
        document.body.appendChild(script);
        document.body.appendChild(script2);
        document.body.appendChild(script3);
        document.body.appendChild(script4);
        document.body.appendChild(script5);
        return () => {
          
        }
      }, [])
      const gohome=()=>{
        history.push({
          pathname: '/index'
          
           });
       }
    return (
        <div class="navcon">
        <div class="nav">
           

         
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
         <img className='navlogo' onClick={()=>{
          gohome();
        }} src={logo}/>
        </div>
        <h1 className='label'>CODEX</h1>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a  className='navlink' onClick={()=>{
gotocourselist()
}}>Courses</a>
          <a  className='navlink' onClick={()=>{
gotocategories()}} >Categories</a>
          <a  className='navlink' >About</a>
 
          <a  className='navlink' onClick={()=>{
            gotodashboard();
          }} > &nbsp; <FaRegUser/>  &nbsp; <b>Abdulkadir</b></a>
        </div>
        </div>
     
</div>
    );
};

Navigation.propTypes = {
    
};

