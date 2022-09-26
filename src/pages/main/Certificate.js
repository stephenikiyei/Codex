import React from 'react';
import { FaAd, FaArchive, FaArrowCircleUp, FaBookmark, FaChartArea, FaCheck, FaCheckCircle, FaHandPaper, FaNewspaper, FaRegThumbsDown, FaStar, FaThumbsUp, FaThumbtack } from 'react-icons/fa';

export const Certificate = (props) => {
    return (
        <div className='mainwindow'>
    <div className="contentcontainer">
    <div className="clistcontainer">
        {/* header */}
        <div className="header">
          <h1>featured Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!
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
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
              {/*  */}
              <div className="text">
                <p className="statue">On Sale</p>
                <p>Project Manager</p>
                {/*  */}
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
      
      <div>
            <button className="clbutton">Open Course</button>
                </div>
            
                 
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
            <p className='cltype'>Featured <FaStar/> </p>
          </div>
          {/* row */}
            
          {/* row */}
        </div>
        <div className="content .flex-column">
          {/* row */}
          <div className="row">
            {/*  */}
            <div className="data">
             
              <div className="img clistimg flex ">
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
              {/*  */}
              <div className="text">
                <p className="statue">On Sale</p>
                <p>C# Crash Course</p>
                {/*  */}
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
                 
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
            <p className='cltype'>Promoted <FaArrowCircleUp/> </p>
          </div>
          {/* row */}
            
          {/* row */}
        </div>
        <div className="content .flex-column">
          {/* row */}
          <div className="row">
            {/*  */}
            <div className="data">
             
              <div className="img clistimg flex ">
                <img src="https://i.postimg.cc/pXsqTRh1/one.png" alt="" />
              </div>
              {/*  */}
              <div className="text">
                <p className="statue"> 10% Discount</p>
                <p>Java Crash Course</p>
                {/*  */}
                <div className="info">
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            obcaecati maiores vel, dignissimos molestiae placeat harum incidunt?
            Praesentium nisi exercitationem numquam odio quae aliquam
            necessitatibus amet expedita, atque nobis inventore!</p>
                 
                </div>
                {/*  */}
              </div>
              {/*  */}
            </div>
            <p className='cltype'>For you <FaCheckCircle/> </p>
          </div>
          {/* row */}
            
          {/* row */}
        </div>
        <span>load more page...</span>
      </div>
      </div>
</div>
    );
};

