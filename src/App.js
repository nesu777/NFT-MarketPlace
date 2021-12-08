import './App.css';
import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import HeaderMain from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
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
        <Segment inverted color='blue' tertiary style={{ margin: '0em 0em 0em', padding: '5em 0em' }}>
        <Routes>
        <Route
          path="/"
          element={
          <HomePage />}
        />

        <Route
          path="/allassets"
          element={
          <HomePage />}
        />

        <Route
          path="/featured"
          element={
          <HomePage />}
        />

         <Route
          path="/aboutus"
          element={
          <HomePage />}
        />

        <Route
          path="/support"
          element={
          <HomePage />}
        />

        <Route
          path="/login"
          element={
          <HomePage />}
        />
      </Routes>

      </Segment>
      <Footer />
      </Router> 
    </div>  
    </>
  );
}
}

export default App;
