import React from 'react';
import { FaAngellist, FaBook, FaBookOpen, FaBrain, FaClipboardList, FaClock, FaCode, FaCompass, FaGlobe, FaGlobeAfrica, FaGraduationCap, FaLandmark, FaLevelUpAlt, FaListAlt, FaListUl, FaSchool, FaSignOutAlt, FaThumbsUp, FaTimes, FaToolbox, FaTools, FaUser, FaUserAlt, FaUserAltSlash, FaUserCircle, FaUserShield, FaUserTag, FaVoteYea } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
export const Coursecategory= (props) => {
  let history = useHistory();
  const gotocoursepage=()=>{
    history.push({
      pathname: '/coursepage'
      
       });
   }
    return (

    <div className="catcontainer">
        {/* header */}
        <div className="header">
          <h1 className='catheader'>Categories</h1>
         
        </div>
       
          <div className="containerc">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {/* ***** Features Small Item Start ***** */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaBrain className='indexcon'/>
                      </div>
                      <h5 className="features-title">Modern Strategy</h5>
                      <p>Customize anything in this template to fit your website needs</p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                  {/* ***** Features Small Item Start ***** */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaLandmark className='indexcon'/>
                      </div>
                      <h5 className="features-title">Best Relationship</h5>
                      <p>Contact us immediately if you have a question in mind</p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                  {/* ***** Features Small Item Start ***** */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaCompass className='indexcon'/>
                      </div>
                      <h5 className="features-title">Ultimate Marketing</h5>
                      <p>You just need to tell your friends about our free templates</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaClock className='indexcon'/>
                      </div>
                      <h5 className="features-title">Ultimate Marketing</h5>
                      <p>You just need to tell your friends about our free templates</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaBook className='indexcon'/>
                      </div>
                      <h5 className="features-title">Ultimate Marketing</h5>
                      <p>You just need to tell your friends about our free templates</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                     <FaTools className='indexcon'/>
                      </div>
                      <h5 className="features-title">Ultimate Marketing</h5>
                      <p>You just need to tell your friends about our free templates</p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                </div>
              </div>
            </div>
          </div>
    
       

      </div>

    );
};

