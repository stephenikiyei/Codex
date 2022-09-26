import React, { useState } from 'react';
import { Steps } from "rsuite";
import svg2 from '../../content/images/codexbig.png'
import video1 from '../../content/videos/m1.mp4'
import { Radio, RadioGroup, Form } from 'rsuite';
import { useHistory, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { render } from '@testing-library/react';
const moment = require('moment');
const styles = {

  width: "200px",
  display: "inline-table",
  verticalAlign: "top"
};
export const Courseoutline = (props) => {
  const payload= useLocation();
  var [Button, setButton] = useState("Next");
  var [visible, setvisibley] = useState(false);
  var [visibleq, setvisibleyq] = useState(true);
  const [visiblec, setvisibleyc] = useState(true);
  const [selectedoption, setselectedoption] = useState([])
  var [answerresponseclass, setanswerresponseclass] = useState([])
  var [answerresponse, setanswerresponse] = useState([])
  var [mediavisible, setmediavisible] = useState(false)
  //content
  var[getmodules,setmodules] = useState([]);
  var[getcurrenttopicindex,setcurrenttopicindex] = useState([]);
  var[getcurrentmoduleindex,setcurrentmoduleindex] = useState([]);
  var[question,setquestion] = useState([]);
  var[options,setoptions] = useState([]);
  var[gettopic,settopic] = useState([]);
  var [sessionstatus,setsessionstatus] = useState([]);
  var[usersession,setusersession] = useState([]);
  var[gettopiccontent,settopiccontent] = useState([]);
  var[currenttopicindex,setforcurrenttopicindex] = useState(0);
  var[currentmoduleindex,setforcurrentmoduleindex] = useState(0);
  const userselectedoption = '';
  let history = useHistory();
var usession;  



useEffect(() => {
  checkifuserenrolled()


}, [])

const  uuidv4=()=>{
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
  }

  const checkifuserenrolled=async()=>{
    var courseid = payload.state.courseid 
    var userid = localStorage.getItem('userid');

    const asessionuser =  await  fetch('http://192.168.0.153/api/sessions/getsessioninfo/'+userid+'/'+courseid)
    .then(response => {
      setsessionstatus(response.status)
      setsessionstatus((state)=>{
        console.log(state);
        sessionstatus = state;
        return state;
      });
      return response.json()})
    .then(data=>{
        console.log(data)
       setusersession(data)
       setusersession((state)=>{
        console.log(state);
        usersession = state;
        localStorage.setItem('currenttopicid',usersession.CurrentTopicId);
        return state;
      });
        
    }).catch(err => {
        console.log(err)
    })

 generatemodulewithocontents();

  

    
  }

  const Submitanswer = async()=>{
    setvisibleyc(false)
    if (selectedoption.length === 0){

    } 
    else
    {
      var qodata;
      await  fetch('http://192.168.0.153/api/questionoptions/question/'+question.QuestionId)
      .then(response => response.json())
      .then(data=>qodata =data
        ).catch(err => {
          console.log(err)
      })
      console.log(qodata)
      console.log(selectedoption.option)
      if(qodata.OptionId === selectedoption.option){
        setanswerresponseclass('cmpcorrect')
        setanswerresponseclass((state)=>{
          console.log(state);
          answerresponseclass = state;
          return state;
        });
        setanswerresponse('correct')
        setanswerresponse((state)=>{
          console.log(state);
          answerresponse = state;
          return state;
        });
      }
      else{
        setanswerresponseclass('cmpwrong')
        setanswerresponseclass((state)=>{
          console.log(state);
          answerresponseclass = state;
          return state;
        });
        setanswerresponse('wrong')
        setanswerresponse((state)=>{
          console.log(state);
          answerresponse = state;
          return state;
        });
      }
      console.log(selectedoption)
    }
   
  }

  const ToNextTopic= async()=>{
    setvisibleyc(true)

    var topinx = parseInt(currenttopicindex);
   
    var modinx = parseInt(currentmoduleindex);
    var currntmod = getmodules[modinx].ModuleId;
    if(topinx<=3){
     topinx = topinx+1
    }
    else if(topinx>3){
      topinx = 0;
    }
     setforcurrenttopicindex(topinx);
     setforcurrenttopicindex((state)=>{
      console.log(state);
      currenttopicindex = state;
      
      return state;
    });
    console.log(topinx)
    if(topinx===3){
      var qdata;
      var odata;
      var quiztopicid = gettopic[3].TopicId;
      await  fetch('http://192.168.0.153/api/questions/topic/'+quiztopicid)
       .then(response => response.json())
       .then(data=>qdata =data
         ).catch(err => {
           console.log(err)
       })
       console.log(qdata.QuestionId)
       await  fetch('http://192.168.0.153/api/options/question/'+qdata.QuestionId)
       .then(response => response.json())
       .then(data=>odata =data
         ).catch(err => {
           console.log(err)
       })
       
       setquestion(qdata)
       setquestion((state)=>{
        console.log(state);
        question = state;
        
        return state;})
       console.log(odata)
       setoptions(odata)
       setoptions((state)=>{
        console.log(state);
        options = state;
        
        return state;})

      setButton('Finish Quiz');
     setButton((state)=>{
      console.log(state);
    Button = state;
      
      return state;
    });
      setvisible(true)
      setvisibleyq(false)
    }
    else if (topinx === 4){
      setvisible(false)
      setButton('Next');
      setButton((state)=>{
       console.log(state);
       Button = state;
       
       return state;
     });
      setvisibleyq(true)
    }
    else if(topinx<3){
      setButton('Next');
      setButton((state)=>{
       console.log(state);
       Button = state;
       
       return state;
     });
    
      setvisibleyq(true)
      setvisibleyq((state)=>{
        console.log(state);
        visibleq = state;
        
        return state;})
      
   
     
    }
    if(topinx >3){
     modinx =  modinx+1
      currntmod = getmodules[modinx].ModuleId;
      const topic =   await  fetch('http://192.168.0.153/api/topics/module/'+currntmod)
       .then(response => response.json())
       .then(data=>{

           console.log(data)
          settopic(data)
          settopic((state)=>{
           console.log(state);
           gettopic = state;
           
           return state;
         });
           
       }).catch(err => {
           console.log(err)
       })
       setforcurrentmoduleindex(modinx);
       setforcurrentmoduleindex((state)=>{
      console.log(state);
      currentmoduleindex = state;
      
      return state;
    });
    setforcurrenttopicindex(0);
     setforcurrenttopicindex((state)=>{
      console.log(state);
      currenttopicindex = state;
      
      return state;
    });
    }
    if(modinx>3){
      history.push({
        pathname: '/index'
        
       });
    }
  
   
    if (topinx ===4){
      topinx = topinx-1
    }
    var curttopic = gettopic[topinx].TopicId
    var tcontent;
    const topiccon =   await  fetch('http://192.168.0.153/api/topiccontents/topic/'+curttopic)
    .then(response => response.json())
    .then(data=> tcontent = data).catch(err => {
        console.log(err)
    })
     settopiccontent(tcontent)
     settopiccontent((state)=>{
      gettopiccontent = state;
      return state;
     })

    tcontent.map((tcon)=>{
      if (tcon.MediaId===null)
        setmediavisible(true)
         return setmediavisible((state)=>{
          console.log(state);
          mediavisible = state;
          
          return state;
        });
      })
 
     
  }
  const generatemodulewithocontents=async()=>{

    var ccourseid = payload.state.courseid 
    var topcid = localStorage.getItem('currenttopicid');
    var currentuserid = localStorage.getItem('userid');
    console.log(sessionstatus)
    console.log(topcid)
    console.log(sessionstatus)
    if(sessionstatus === 200){

    const topic =   await  fetch('http://192.168.0.153/api/topics/'+topcid)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       setcurrenttopicindex(data)
       setcurrenttopicindex((state)=>{
        console.log(state);
        getcurrenttopicindex = state;
        localStorage.setItem('topicindexmoduleid',getcurrenttopicindex.ModuleId);
        localStorage.setItem('topictopicindex',getcurrenttopicindex.TopicIndex);
        return state;
      });
        
    }).catch(err => {
        console.log(err)
    })
    var topicindexmoduleid = localStorage.getItem('topicindexmoduleid');
    const module =   await  fetch('http://192.168.0.153/api/modules/'+topicindexmoduleid)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       setcurrentmoduleindex(data)
       setcurrentmoduleindex((state)=>{
        console.log(state);
        getcurrentmoduleindex = state;
        localStorage.setItem('currentmoduleindexmoduleindex',getcurrentmoduleindex.ModuleIndex);
        return state;
      });
        
    }).catch(err => {
        console.log(err)
    })

    const topics =   await  fetch('http://192.168.0.153/api/topics/module/'+topicindexmoduleid)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       settopic(data)
       settopic((state)=>{
        console.log(state);
        gettopic = state;
        
        return state;
      });
      
        
    }).catch(err => {
        console.log(err)
    })
    const modules =   await  fetch('http://192.168.0.153/api/modules/course/'+ccourseid)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
       setmodules(data)
       setmodules((state)=>{
        console.log(state);
        getmodules = state;
        
        return state;
      });
       
        
    }).catch(err => {
        console.log(err)
    })
    var tcontent;
    const topiccontent =   await  fetch('http://192.168.0.153/api/topiccontents/topic/'+topcid)
    .then(response => response.json())
    .then(data=> tcontent = data).catch(err => {
        console.log(err)
    })
       settopiccontent(tcontent)
       settopiccontent((state)=>{
        console.log(state);
        gettopiccontent = state;
        
        return state;
      });

     tcontent.map((tcon)=>{
      if (tcon.MediaId===null)
        setmediavisible(true)
         return setmediavisible((state)=>{
          console.log(state);
          mediavisible = state;
          
          return state;
        });

     })
       

    var currentmoduleindexmoduleindex = localStorage.getItem('currentmoduleindexmoduleindex');
    console.log(currentmoduleindexmoduleindex)
    var topictopicindex = localStorage.getItem('topictopicindex');
      setforcurrentmoduleindex(currentmoduleindexmoduleindex)
      setforcurrentmoduleindex((state)=>{
        console.log(state);
        currentmoduleindex = state;
       
        return state;
      });
      setforcurrenttopicindex(topictopicindex)
      setforcurrenttopicindex((state)=>{
        console.log(state);
        currenttopicindex = state;
       
        return state;
      });
      
    }
const OnOptionChange = async (e)=>{
   setselectedoption({...userselectedoption,[e.target.name]: e.target.value});
  console.log(e.target.value) 
} 
    // const topics =   await  fetch('http://192.168.0.153/api/topics/module/'+moduleid)
    // .then(response => response.json())
    // .then(data=>{
    //     console.log(data)
    //    setmodules(data)
        
    // }).catch(err => {
    //     console.log(err)
    // })
    // const topiccontent =   await  fetch('http://192.168.0.153/api/topiccontents/topic/'+topicid)
    // .then(response => response.json())
    // .then(data=>{
    //     console.log(data)
    //    setmodules(data)
        
    // }).catch(err => {
    //     console.log(err)
    // })


  }
  function onChangeValue(e) {
    setselectedoption({...userselectedoption,[e.target.name]: e.target.value});
    console.log(e.target.value);
  }
  function setvisible() {
      setvisibley(true);
      setvisibleyq(false);
  }
  function showanswer() {
     
      setvisibleyc(false);
  }
    return (
<div>
<h1 className='cmpheader'>{}</h1>
      <div className='outlinepage'>
        
        <div className='outlinepageprogress'>
      <Steps  current={parseInt(currentmoduleindex)} vertical style={styles}>
       {getmodules.map((modules)=>{
        return <Steps.Item title={modules.ModuleTitle} />
       })} 
      
      </Steps>
  
      <Steps current={parseInt(currenttopicindex)} vertical style={styles}>
      {gettopic.map((topics)=>{
        return <Steps.Item title={topics.TopicTitle} />
       })} 
      </Steps>
   </div>
   <div>
    <div className='cmpcontent'>
      <div hidden={visible}>
        <div hidden={mediavisible}>
<ReactPlayer  url={video1} width='100%' pip={true} playIcon controls={true} /> </div>
<br/>
  
    <p className='cmpcontentp'> {gettopiccontent.map((topiccontent)=>{
       return topiccontent.TopicContent1
    })}
</p><p>
                   
                    </p>
    </div>
    <div hidden={visibleq}>
    <p className='cmpcontentqp'>Question</p>
    <p className='cmpcontentqqp'> {question.Question}</p><p>
                  
                    </p>
                    <div className='cmpqform' onChange={onChangeValue}>
                      {options.map((option)=>{
                        return  <div> <input type="radio" value={option.OptionId}  name="option" /> <p className='cmpopt'>{option.Option1}</p></div>
                      })}
     
    </div>

  <br/>

  <div className={answerresponseclass} hidden={visiblec}>
    <p>{answerresponse}</p>
  </div>
  
  <br/>
  <button className='cmpbutton' onClick={()=>{
Submitanswer();
                    }}>Submit</button>
  <br/>
  <br/>
  <br/>
  <br/>
  </div>
  <button className='cmpbutton' onClick={()=>{
ToNextTopic();
                    }}>{Button}</button>
    </div>
    </div>
    </div>
    </div>
    );
};

