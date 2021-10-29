import './App.css';
import Tours from './components/Home/Tours/Tours';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Tours></Tours>
    </div>
  );
}

export default App;
