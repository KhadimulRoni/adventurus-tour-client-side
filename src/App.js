
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import Tours from './components/Home/Tours/Tours';
import AboutUs from './components/Home/AboutUs/AboutUs';
import Login from './components/Home/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Booking from './components/Home/Booking/Booking';
import PrivateRoute from './components/Home/Login/PrivateRoute/PrivateRoute';
import AddTour from './components/Home/AddTour/AddTour';
import SuggestedTours from './components/Home/SuggestedTours/SuggestedTours';


function App() {
  return (
    <div className="App"> 
      <AuthProvider>
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

                <Route path="/addTour">
                  <AddTour></AddTour>
                </Route>
                <Route path ="/suggestedTours">
                  <SuggestedTours></SuggestedTours>
                </Route>
                <PrivateRoute path="/booking/:id">
                  <Booking></Booking>
                </PrivateRoute>

                <Route path="/about">
                  <AboutUs></AboutUs>
                </Route>
                <Route path ="*">
                  <NotFound></NotFound>  
                </Route>  
              </Switch>
              <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
