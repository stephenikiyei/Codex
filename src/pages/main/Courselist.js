import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaAd, FaArchive, FaArrowCircleUp, FaBookmark, FaChartArea, FaCheck, FaCheckCircle, FaHandPaper, FaNewspaper, FaRegThumbsDown, FaStar, FaThumbsUp, FaThumbtack } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import petrinets from '../../content/images/petrinets.png'
export const Courselist = (props) => {
  let history = useHistory();

  const[getcourses,setcourses] = useState([]);
  const gotocoursepage=(id)=>{
    history.push({
      pathname: '/coursepage',
      state:{courseid :id,
        from:'courselist'}
      
       });
   }
   useEffect(() => {
     fetchcourses();
   }, [])
   

   const fetchcourses =async()=>{
    const courses =   await  fetch('http://192.168.0.153/api/courses')
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       setcourses(data)
        
    }).catch(err => {
        console.log(err)
    })
   

   }

   const populatecourseinterface=()=>{
    return getcourses.map((course) => {
      return    <div className="text">
      <p className="statue">On Sale</p>
      <p value={course.CourseId}>{course.CourseTitle}</p>
      {/*  */}
      <div className="info">
       

<div>
  <button onClick={()=>{
    gotocoursepage(course.CourseId);
  }} className="clbutton">Open Course</button>
      </div>
  
       
      </div>
      {/*  */}
    </div>
    });
   }
    return (
        <div className='mainwindow'>
    <div className="contentcontainer">
    <div className="clistcontainer">
        {/* header */}
        <div className="header">
          <h1>featured Courses</h1>
          <p>
            Here are some features courses we offer here at codex.
          </p>
        </div>
        {/* header */}
        <div className="content .flex-column">
          {/* row */}
          <div className="row">
            {/*  */}
            <div className="data">
              {/*  */}
              <div className="img clistimg flex ">
                <img src={petrinets} alt="" />
              </div>
              {/*  */}
              {populatecourseinterface()}
           
              {/*  */}
            </div>
            <p className='cltype'>Featured <FaStar/> </p>
          </div>
          {/* row */}
            
          {/* row */}
        </div>
        
        {/* <div className="content .flex-column">
        
          <div className="row">
          
            <div className="data">
             
              <div className="img clistimg flex ">
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
             
              <div className="text">
                <p className="statue">On Sale</p>
                <p>C# Crash Course</p>
           
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
                 
                </div>
               
              </div>
      
            </div>
            <p className='cltype'>Promoted <FaArrowCircleUp/> </p>
          </div>
    
        </div>
        <div className="content .flex-column">
       
          <div className="row">
      
            <div className="data">
             
              <div className="img clistimg flex ">
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
             
              <div className="text">
                <p className="statue"> 10% Discount</p>
                <p>Java Crash Course</p>
               
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
                 
                </div>
              
              </div>
            
            </div>
            <p className='cltype'>For you <FaCheckCircle/> </p>
          </div>
        
        </div> */}

        <span>load more page...</span>
      </div>
      </div>
</div>
    );
};

