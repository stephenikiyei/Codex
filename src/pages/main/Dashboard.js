import React from 'react';
import { FaAd, FaArchive, FaArrowCircleUp, FaBookmark, FaChartArea, FaCheck, FaCheckCircle, FaCheckDouble, FaHandPaper, FaHourglassHalf, FaNewspaper, FaRegThumbsDown, FaStar, FaThumbsUp, FaThumbtack, FaTruckLoading } from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import petrinets from '../../content/images/petrinets.png'
import { useHistory } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
export const Dashboard = (props) => {
  let history = useHistory();
  const gotoaccount=()=>{
    history.push({
      pathname: '/account'
      
       });
   }
  
   const gotocourseoutline=()=>{
     history.push({
       pathname: '/courseoutline'
       
        });
    }
    return (
        <div className='mainwindow'>
    <div className="contentcontainer">
    <div className="clistcontainer">
        {/* header */}
        <div >
          <h1 className="dashheader">Hello Abdulkadir</h1> <span> <button onClick={()=>{
gotoaccount();
          }} className="cdashlbutton"> View Profile</button> </span>
          <p className='dashp'>
          Here is a breakdown of your recent activities
          </p>
        </div>
        {/* header */}
        <div className="content .flex-column">
          {/* row */}
          <div className="row">
            {/*  */}
            <div className="data">
              {/*  */}
              <div className="img clistimg flex dahimg ">
              <img src={petrinets} alt="" />
              </div>
              {/*  */}
              <div className="text">
              <CircularProgressbar value={10} text={`${10}%`} />
                <p className='pdash'>Introduction to Petri-Nets</p>
                {/*  */}
                <div className="info">
                  <p> This course is a guide to how petri-nets are used in the world of Computer Science and its Importance</p>
      
      <div>
            <button onClick={()=>{
                      gotocourseoutline();
                    }} className="clbutton">Open Course</button>
                </div>
            
                 
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
            <p className='cltype'>In progress <FaHourglassHalf/> </p>
          </div>
         
        </div>
        {/* <div className="content .flex-column">
       
          <div className="row">
       
            <div className="data">
          
              <div className="img clistimg flex dahimg ">
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
      
              <div className="text">
              <CircularProgressbar value={100} text={`${100}%`} />
                <p className='pdash'>Project Manager</p>
           
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
      
      <div>
            <button className="clbutton">Open Course</button>
                </div>
            
                 
                </div>
               
              </div>
             
            </div>
            <p className='cltype'>Completed <FaCheckDouble/> </p>
          </div>
        
        </div> */}
        
        <span>load more page...</span>
      </div>
      </div>
</div>
    );
};

