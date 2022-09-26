import React from 'react';
import { FaAd, FaArchive, FaArrowCircleUp, FaBookmark, FaChartArea, FaCheck, FaCheckCircle, FaCheckDouble, FaHandPaper, FaHourglassHalf, FaNewspaper, FaRegThumbsDown, FaStar, FaThumbsUp, FaThumbtack, FaTruckLoading } from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const Account = (props) => {
    return (
        <div className='mainwindow'>
    <div className="contentcontainer">
    <div className="clistcontainer">
        {/* header */}
        <div >
          <h1 className="dashheader">Hello Abdulkadir</h1>
          <p className='dashp'>
         Account Information
          </p>

<div className='accountinputs'>
          <input type="text" placeholder="First Name" />
			<input type="text" placeholder="Middle Name" />
			<input type="text" placeholder="Last Name" />
			<input type="email" placeholder="Email" />
            <br/>
            <br/>
            <p className='dashp'>
         Change Password
          </p>
			<input type="password" placeholder="Old Password" />
			<input type="password" placeholder="New Password" />
			<input type="password" placeholder="Confirm Password" />
            </div>

            <br/>
            <span> <button className="cdashlbutton"> Update</button> </span>
        </div>
        {/* header */}
    
        
      </div>
      </div>
</div>
    );
};

