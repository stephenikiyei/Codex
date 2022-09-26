import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Routes} from 'react-router-dom';
import { ProtectedRoute } from "./component/protectedroutes";
import {Auth} from './pages/account/Auth'
import {Index} from './pages/main/Index'
import {Courselist} from './pages/main/Courselist'
import {Coursepage} from './pages/main/Coursepage'
import {Navigation} from './pages/main/Navigation'
import {Account} from './pages/account/Account'
import {Courseoutline} from './pages/main/Courseoutline'
import {Coursecategory} from './pages/main/Coursecategory'
import {Dashboard} from './pages/main/Dashboard'
import {Footer} from './pages/main/Footer'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory()
//routes when not logged in
function App() {
  const LoginContainer = () => (
    <div className="appcon">
      <Route path='/auth' exact component={Auth} />
    </div>
  )
  
  
  // routes when logged in
   const DefaultContainer = () => (
      <div className='appcon'>
        <Navigation />
      
        <Route path='/index' exact component={Index} />
        <Route path='/courselist' exact component={Courselist} />
        <Route path='/courseoutline' exact component={Courseoutline} />
        <Route path='/coursecategory' exact component={Coursecategory} />
        <Route path='/account' exact component={Account} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/coursepage' exact component={Coursepage} />
       

       <Footer/>
      </div>
     
   )
  return (
    <Router history={history}>
  
     

 
   <Switch>
  
  
   <Route path='/' exact component={Auth} />
   <Route exact path="/(auth)" component={LoginContainer}/>
    <Route component={DefaultContainer}/>
      
       {/* <ProtectedRoute exact path="/types" component={Votingtypes} /> */}
       
       <Route path="*" component={()=>"404 NOT FOUND"}/>
   </Switch>
    
   
    </Router>
  );
  
}

export default App;
