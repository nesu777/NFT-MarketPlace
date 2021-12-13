import './App.css';
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import HeaderMain from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Featured from './components/Featured'
import AllAssets from './components/AllAssets'
import AboutUs from './components/AboutUs'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends Component {
  

  render() {
    return (
      <>  
      <div className='mainContainer' color='blue' tertiary>
        <Router>
        <Segment color='black' inverted style={{ margin: '0em 0em 0em', padding: '2em 0em' }}>
        <HeaderMain />
        </Segment>
        <Segment inverted color='blue' tertiary style={{ margin: '0em 0em 0em', padding: '5em 0em 0em' }}>
        <Routes>
        <Route
          path="/"
          element={
          <HomePage />}
        />

        <Route
          path="/allassets"
          element={
          <AllAssets />}
        />

        <Route
          path="/featured"
          element={
          <Featured />}
        />

         <Route
          path="/aboutus"
          element={
          <AboutUs />}
        />

        <Route
          path="/dashboard"
          element={
          <Dashboard />}
        />

        <Route
          path="/login"
          element={
          <Login />}
        />
      </Routes>
      <Footer />
      </Segment>
      
      </Router> 
    </div>  
    </>
  );
}
}

export default App;
