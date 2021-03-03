import React from 'react';
// import logo from './logo.svg';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import '../Header/Header.css';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Const from '../Const/Const';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path="/about" component={Info}/>
      <Route path="/" component={About} />
      <Route path="/const/:id" component={Const} />
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
