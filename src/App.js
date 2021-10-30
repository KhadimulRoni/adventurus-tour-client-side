
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Tours from './components/Home/Tours/Tours';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Login from './components/Home/Login/Login';


function App() {
  return (
    <div className="App"> 
      <Router>
          <Header></Header>
           <Switch>
             <Route exact path ="/">
               <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/tours">
                <Tours></Tours>
              </Route>
              <Route path="/about">
                <AboutUs></AboutUs>
              </Route>
                
            </Switch>
            <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
