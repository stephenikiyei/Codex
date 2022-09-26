import PropTypes from 'prop-types';
import React, { Component, useState,useEffect } from 'react'
import logo from '../../content/images/codex.png'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../auth';
import 'react-toastify/dist/ReactToastify.css';
const moment = require('moment');
var isauthsuccess = true;
var userid
var useritem=[];
export const Auth = (props) => {

	const [formData, setformData] = useState({
		firstname:'',
		middlename:'',
		lastname:'',
		lemail:'',
		email:'',
		lpassword:'',
		password:'',
		cpassword:'',
	});
	const{
		firstname,
		middlename,
		lastname,
		email,
		lemail,
		password,
		lpassword,
		cpassword,
	} = formData
	const[getuseritem,setuseritem] = useState([])
	const onChange = async (e)=>
   setformData({...formData,[e.target.name]: e.target.value});
    let history = useHistory();
useEffect(() => {
     signinclick();   
return () => {

}
}, [])
const  uuidv4=()=>{
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
  }

//Validate credentials before login
  async function  validatecredentials(umail,upass){
	var isemailvalid;

	console.log(umail);
	console.log(upass);
	let credentials = await fetch('http://192.168.0.153/api/users/validate/'+umail+'/'+upass
	)
    .then(function(body){
		return body.text();
	}).then(function(data){
		console.log(data);
		return data;
	})
	
	console.log(credentials)
	typeof credentials === 'undefined'? isemailvalid = false: isemailvalid=true;
	
	console.log(isemailvalid)
	console.log(credentials)
if (isemailvalid === true){
	
	 userid = credentials;

	


	credentials === 'invalid'? isauthsuccess=false: isauthsuccess = true;
}
else{
	isauthsuccess = false;
}
	
	return{response:isauthsuccess}
		
}
//pass validation to login
const validatesignin=(e)=>{
	
	
	var emailtxt;
	var passwordtxt;
	e.preventDefault();
	emailtxt = e.target.lemail.value;
	passwordtxt = e.target.lpassword.value;

return	(async () => {
	var response = await validatecredentials(emailtxt,passwordtxt)
	console.log(response);
	if(response.response === false){
		toast.error('Invalid Credentials', {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			});
	}
	else{
		toast.success('Login Success', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			});
			let authh = new auth();
			authh.login();
			var authstate = authh.isAuthenticated();
			console.log(authstate)
			try{
	
			const user  = await fetch('http://192.168.0.153/api/users/getuserdetails/'+userid)
			if (!user.ok) {
				console.log(user);
				throw new Error(`Error! status: ${user.status}`);
			  }
		  
			  const result = await user.json();
			  setuseritem(result);
			  setuseritem((state)=>{
				  console.log(state);
				  useritem = state;
				  return state;
			  });
			  
			  
			
		 } catch (err) {
			console.log(err);
		  }
		 
		  var xitems = useritem;
		  console.log(xitems)
		 

			localStorage.setItem('isauthenticated',authstate);
			localStorage.setItem('userid',userid);
			
			  history.push({
				pathname: '/index'
				
			   });
			window.location.reload();
	}
  })()
}
//validate sign up
const  validatesignup=async(e)=>{

	e.preventDefault();
	var guid = uuidv4();
	var fname = e.target.firstname.value;
	var mname = e.target.middlename.value;
	var lname = e.target.lastname.value;
	var mail = e.target.email.value;
	var pword = e.target.password.value;
	var cpword = e.target.cpassword.value;

	console.log(pword)
	const putpeope = await fetch('http://192.168.0.153/api/Users/', {  
		method: 'POST',  
		headers:{
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Methods": "POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
			'Accept':'application/json',
			'Content-Type':'application/json'
		},
		body: JSON.stringify({
			UserId: guid,
			FirstName:fname,
			MiddleName:mname,
			AccountTypeId:guid,
			SubscriptionTypeId:guid,
			LastName:lname,
			UserEmail:email,
			UserName:email,
			PasswordHash:pword,
			DateCreated:moment().format('yyyy-MM-d HH:mm:ss'),
			
	
		}),  
	
	})
	if (!putpeope.ok) {
		console.log(putpeope);
		if(putpeope.status === 409){
			 throw toast.error('Sorry, a user with this E-mail has alredy been registered', {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				});
		}
		else{
		  throw  toast.error('An Error occured : Status'+putpeope.status, {
				position: "top-center",
				autoClose: 3000,
	 
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
				});
		}

		
	   
	  }
	  console.log(putpeope.status)

const result = await putpeope.json();
toast.success('Registration Successful', {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  });
setTimeout(function(){

console.log(result)
history.push({
    pathname: '/index'
    
   });

}, 3500);
	console.log(fname+' '+lname+ 'is the name')
	// history.push({
	// 	pathname: '/index'
		
	//    });
}

  const signupclick =()=>{
    var container = document.getElementById('container');
    console.log(container.classList)
    container.classList.add('right-panel-active');
  }
  const signinclick =()=>{
    var container = document.getElementById('container');
    container.classList.remove('right-panel-active');
        console.log('nada');
    
   
  }

    return (
        <div className='authcon'>
			<ToastContainer
	
	position="top-center"
	autoClose={5000}
	hideProgressBar={false}
	newestOnTop={false}
	closeOnClick
	rtl={false}
	pauseOnFocusLoss
	draggable
	pauseOnHover
	/>
       <img className='authimg' src={logo}/>
	  
	  
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form onSubmit={validatesignup}>
			<h1>Create Account</h1>
		
			<span>or use your email for registration</span>
			<input type="text" name='firstname' placeholder="First Name" onChange={(e)=> onChange(e)}/>
			<input type="text"  name='middlename'placeholder="Middle Name" onChange={(e)=> onChange(e)}/>
			<input type="text"  name='lastname'placeholder="Last Name" onChange={(e)=> onChange(e)}/>
			<input type="email"  name='email'placeholder="Email" onChange={(e)=> onChange(e)}/>
			<input type="password"  name='password'placeholder="Password" onChange={(e)=> onChange(e)}/>
			<input type="password" name='cpassword' placeholder="Confirm Password" onChange={(e)=> onChange(e)}/>
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form onSubmit={validatesignin} >
			<h1>Sign in</h1>
			
			<span>or use your account</span>
			<input type="email" name='lemail' placeholder="Email" onChange={(e)=> onChange(e)} />
			<input type="password" name='lpassword' placeholder="Password" onChange={(e)=> onChange(e)}/>
			<a className='forgotp' href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To explore more courses, please login</p>
				<button className="ghost" onClick={()=>{
                signinclick();
                }} id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Don't have an Account?</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" onClick={()=>{
                signupclick();
                }} id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
    
      
       
    
 </div>
    );
};

Auth.propTypes = {
    
};

