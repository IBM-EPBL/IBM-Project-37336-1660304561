import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from './pages/home_page/home_page';
import Login from "./pages/login_page/login_page";
import Register from "./pages/register_page/register_page";
import Dashboard from "./pages/dashboard_page/dashboard_page";
import './App.css';

function App() {
  const navigation = useNavigate()
  const location = useLocation()
  return (<>
          <div class="box-form">
	          <div class="left">
		          <div class="overlay">
		            <h1>Personal Expense Tracker</h1>
                <p>If you've ever decided to get a handle on your cash flow, you know that the first step is knowing how you're spending your money. That's something really low on the fun-to-do meter.</p>
		          </div>
              <div className="imgbox">
              <img className="imgdesign" src={require('./assets/tracker.png')}/>
              </div>
	          </div>
	          <div class="right">
              <Routes>
                <Route path ="/" element={<Login navigation={navigation}/>}/>
                <Route path ="/register" element={<Register navigation={navigation} location={location}/>}/>
              </Routes>
	          </div>
	        </div>
          
        </>)
}

export default App;
 