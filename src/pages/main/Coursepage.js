import React, { useState } from 'react';
import svg2 from '../../content/images/codexbig.png'
import petrinets from '../../content/images/petrinets.png'
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export const Coursepage = (props) => {
  const payload= useLocation();
  let history = useHistory();
  const[getcourses,setcourses] = useState([]);
  const moment = require('moment');
  useEffect(() => {
  fetchcourses()
  }, [])
  const  uuidv4=()=>{
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
    }
  const gotocourseoutline=async()=>{
    var id = payload.state.courseid 
    var currentuserid = localStorage.getItem('userid');
    var modules;
    var topics;
    var firsttopic
    var guid = uuidv4();

    await  fetch('http://192.168.0.153/api/modules/course/'+id)
    .then(response => response.json())
    .then(data=> modules = data
        
    ).catch(err => {
        console.log(err)
    })
    var firstmodule = modules[0].ModuleId;
    await  fetch('http://192.168.0.153/api/topics/module/'+firstmodule)
    .then(response => response.json())
    .then(data=> topics = data)
        
    .catch(err => {
        console.log(err)
    })
    var firsttopic = topics[0].TopicId

    await fetch('http://192.168.0.153/api/sessions', {  
      method: 'POST',  
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        SessionId: guid,
        UserId:currentuserid,
        CurrentTopicId:firsttopic,
        SessionStartTime:moment().format('yyyy-MM-d HH:mm:ss'),
      }),     
    })

    history.push({
      pathname: '/courseoutline',
      state:{courseid :id,
        from:'coursepage'}
      
       });
   }
   const fetchcourses =async()=>{
    var courseid = payload.state.courseid 
    console.log(courseid)
    const courses =   await  fetch('http://192.168.0.153/api/courses/'+courseid)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       setcourses(data)
        
    }).catch(err => {
        console.log(err)
    })
   

   }

   const populatecoursepageinterface=()=>{
  
    return    <div className="col-sm-7">
    <h2 className='cpageheader'>{getcourses.CourseTitle}</h2>
    <h3 className='cpageprice'>$4.50</h3>
    <h4 className='cplabel'>Course Information</h4>
    <p className='cpagedes'> {getcourses.CourseDescription}</p><p>
      <button className='clbutton' onClick={()=>{
        gotocourseoutline();
      }}>Enroll</button>
    </p></div>
   }
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="product-view">
            <center>
            <div className="product-view-box">
              <div className="row cpage">
                <div className="col-sm-5">
                
                    <img className='product-img'  src={petrinets} alt="" />
                {/* /.product-img */}
                </div>{/* /.col-sm-4 */}
               {populatecoursepageinterface()}{/* /.col-sm-4 */}
              </div>{/* /.row */}
            </div>
            </center>{/* /.product-view-box */}
          </div>{/* /.product-view */}

          <div>
            <center>
            <h1 className='cpagerev'><u>Reviews</u></h1>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}


