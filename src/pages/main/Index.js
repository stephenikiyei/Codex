import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import svg from '../../content/images/memphis.svg'
import svg1 from '../../content/images/memphis2.png'
import svg2 from '../../content/images/dotts.png'
import '../../content/css/flex-slider.css'
import '../../content/css/bootstrap.min.css'
import '../../content/css/font-awesome.css'
import { useHistory } from 'react-router-dom';
import { FaAngellist, FaBook, FaBookOpen, FaBrain, FaClipboardList, FaClock, FaCode, FaCompass, FaFacebook, FaGlobe, FaGlobeAfrica, FaGraduationCap, FaLandmark, FaLevelUpAlt, FaListAlt, FaListUl, FaPlug, FaQuestionCircle, FaReddit, FaSchool, FaSignOutAlt, FaThumbsUp, FaTimes, FaToolbox, FaTools, FaTwitch, FaTwitter, FaUser, FaUserAlt, FaUserAltSlash, FaUserCircle, FaUserShield, FaUserTag, FaVoteYea } from 'react-icons/fa';
import '../../content/css/templatemo-softy-pinko.css'

export const Index = props => {
  let history = useHistory();
useEffect(() => {
  

  return () => {
    
  }
}, [])
 const gotocourselist=()=>{
  history.push({
    pathname: '/courselist'
    
     });
 }


    return (
        <div className='mainwindow'>
            
                 <div>
        <div className="welcome-area" id="welcome">
          {/* ***** Header Text Start ***** */}

          <div class="mouse_scroll">

<div class="mouse">
    <div class="wheel"></div>
</div>
<div>
    <span class="m_scroll_arrows unu"></span>
    <span class="m_scroll_arrows doi"></span>
    <span class="m_scroll_arrows trei"></span>
</div>
</div>
          <div className="header-text">
            <div className="containerc">
              <div className="row">
                <div className="">
                    <img className='indexsvg' src={svg}/>
                   
                  <h1>We provide the best <strong>Online Learning Platform</strong><br /> for <strong>Students</strong></h1>
                  <img className='indexsvg2' src={svg1}/>
                  <img className='indexsvg3' src={svg2}/>
                 <p></p>
                  <button className="main-button-slider" onClick={()=>{
                     gotocourselist()
                  }}>Browse Courses</button>
                </div>
              </div>
            </div>
          </div>
          {/* ***** Header Text End ***** */}
        </div>
        {/* ***** Welcome Area End ***** */}
        {/* ***** Features Small Start ***** */}
        <section className="section home-feature">
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
                      <p>New and improved means of learning online</p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                  {/* ***** Features Small Item Start ***** */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaPlug className='indexcon'/>
                      </div>
                      <h5 className="features-title">Best Relationship</h5>
                      <p>An open Relationship with instructors and Students </p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                  {/* ***** Features Small Item Start ***** */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaCompass className='indexcon'/>
                      </div>
                      <h5 className="features-title">Naviational</h5>
                      <p>Eaisly navigate your way around our platform</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaClock className='indexcon'/>
                      </div>
                      <h5 className="features-title">Time Friendly</h5>
                      <p>Take a course anytime, anywhere</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                      <FaBook className='indexcon'/>
                      </div>
                      <h5 className="features-title">Resourseful</h5>
                      <p>We have industry standard resources that would guide you through your journey</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                    <div className="features-small-item">
                      <div className="icon">
                     <FaQuestionCircle className='indexcon'/>
                      </div>
                      <h5 className="features-title">Comprehensive Quizes</h5>
                      <p>Answer easy and complex questions to boost your journey and earn certifications</p>
                    </div>
                  </div>
                  {/* ***** Features Small Item End ***** */}
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="section" id="testimonials">
          <div className="containerc">
            {/* ***** Section Title Start ***** */}
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">What people are saying</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                
                </div>
              </div>
            </div>
            {/* ***** Section Title End ***** */}
            <div className="row">
              {/* ***** Testimonials Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item">
                  <div className="team-content">
                    <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                    <p>I learnt about petri nets in less than a month and now I'm an expert</p>
                    <div className="user-image">
                      <FaReddit/>
                    </div>
                    <div className="team-info">
                      <h3 className="user-name">Abdulkadir Bala</h3>
                      <span>Reddit</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Testimonials Item End ***** */}
              {/* ***** Testimonials Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item">
                  <div className="team-content">
                    <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                    <p>Better than Udemy. Period</p>
                    <div className="user-image">
                    <FaTwitter/>
                    </div>
                    <div className="team-info">
                      <h3 className="user-name">Dave Wood</h3>
                      <span>Twitter</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Testimonials Item End ***** */}
              {/* ***** Testimonials Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item">
                  <div className="team-content">
                    <i><img src="assets/images/testimonial-icon.png" alt="" /></i>
                    <p>Tried it out for the first time and it was better then I expected</p>
                    <div className="user-image">
                    <FaFacebook/>
                    </div>
                    <div className="team-info">
                      <h3 className="user-name">Oke Martin</h3>
                      <span>FaFacebook</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Testimonials Item End ***** */}
            </div>
          </div>
        </section>
        {/* ***** Testimonials End ***** */}
        {/* ***** Pricing Plans Start ***** */}
        <section className="section colored" id="pricing-plans">
          <div className="containerc">
            {/* ***** Section Title Start ***** */}
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Pricing Plans</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                </div>
              </div>
            </div>
            {/* ***** Section Title End ***** */}
            <div className="row">
              {/* ***** Pricing Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Starter</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">$</span>
                      <span className="price">14.50</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">2 Featured course</li>
                      <li className="active">Newsletters</li>
                      <li className="active">Course Materials for any course Enrolled</li>
                   
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="main-button pur">Purchase Now</a>
                  </div>
                </div>
              </div>
              {/* ***** Pricing Item End ***** */}
              {/* ***** Pricing Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                <div className="pricing-item active">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Premium</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">$</span>
                      <span className="price">21.50</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">6 Featured Courses</li>
                      <li className="active">2 Promoted Courses</li>
                      <li className="active">Unlimited Course Materials</li>
                      <li className="active">Newsletters</li>
                      
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="main-button pur">Purchase Now</a>
                  </div>
                </div>
              </div>
              {/* ***** Pricing Item End ***** */}
              {/* ***** Pricing Item Start ***** */}
              <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Advanced</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">$</span>
                      <span className="price">42.00</span>
                      <span className="period">monthly</span>
                    </div>
                    <ul className="list">
                      <li className="active">20 Featured Courses</li>
                      <li className="active">20 Promoted Courses</li>
                      <li className="active">Pro Badges</li>
                      <li className="active">Unlimted course materials</li>
                      <li className="active">Newsletters and Discounts</li>
                      <li className="active">Intructor live sessions</li>
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <a href="#" className="main-button pur">Purchase Now</a>
                  </div>
                </div>
              </div>
              {/* ***** Pricing Item End ***** */}
            </div>
          </div>
        </section>
        {/* ***** Pricing Plans End ***** */}
        {/* ***** Counter Parallax Start ***** */}
        <section className="counter">
          <div className="content">
            <div className="containerc">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-bottom">
                  
                    <strong id='value'><FaGraduationCap/><br/> 100 +</strong>
                    <span>Courses</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-top">
                  <strong> <FaSchool/> <br/>50 +</strong>
                    <span>Certified Instructors</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item decoration-bottom">
                    <strong>  <FaUser/> <br/> 1,000 +</strong>
                    <span>Students</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="count-item">
                    <strong> <FaGlobeAfrica/> <br/>15</strong>
                    <span>Countries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Counter Parallax End ***** */}   
        {/* ***** Blog Start ***** */}
     
        {/* ***** Blog End ***** */}
        {/* ***** Contact Us Start ***** */}
        <section className="section colored" id="contact-us">
        <img className='indexsvg3' src={svg2}/>
          <div className="containerc">
            {/* ***** Section Title Start ***** */}
            <div className="row">
              <div className="col-lg-12">
                <div className="center-heading">
                  <h2 className="section-title">Talk To Us</h2>
                </div>
              </div>
              <div className="offset-lg-3 col-lg-6">
                <div className="center-text">
                  <p>We would respond as soon as possible</p>
                </div>
              </div>
            </div>
            {/* ***** Section Title End ***** */}
            <div className="row">
              {/* ***** Contact Text Start ***** */}
           
              {/* ***** Contact Text End ***** */}
              {/* ***** Contact Form Start ***** */}
              <center>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="contact-form">
                  <form id="contact" className='form' action method="get">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your Message" required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="main-button">Send Message</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              </center>
              {/* ***** Contact Form End ***** */}
            </div>
          </div>
        </section>
        {/* ***** Contact Us End ***** */}
        {/* ***** Footer Start ***** */}
        </div>
        </div>
    );
};

Index.propTypes = {
    
};
