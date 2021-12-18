import './App.css';
import React, { Component } from 'react'
// import { Table, Label, Form, Input, Button } from 'semantic-ui-react'
import HeaderMain from './components/Header'
import NewForm from './components/NewForm'
import AssetList from './components/AssetList'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Featured from './components/Featured'
// import AllAssets from './components/AllAssets'
import AboutUs from './components/AboutUs'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      assets: [],
      modalOpen: false,
      asssetToBeEdited: {},
      userLoggedIn: false
    }
  }
  
  getAssets = () => {
    // fetch to the backend
    fetch(baseUrl + "/assets",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data)
      this.setState({ assets: data })
    })
  }

  loginUser = async (e) => {
    console.log('loginUser')
    e.preventDefault()
    const url = baseUrl + '/users/login'
    const loginBody = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    try {

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      console.log(response)
      console.log("BODY: ",response.body)

      if (response.status === 200) {
        this.getAssets()
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  register = async (e) => {
    e.preventDefault()
    const url = baseUrl + '/users/signup'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.status === 200) {
        this.getAssets()
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  addAsset = (newAsset) => {
    const copyAssets = [...this.state.assets]
    copyAssets.push(newAsset)
    this.setState({
      assets: copyAssets,
    })
  }

  deleteAsset = (id) => {
      // console.log(id)
      fetch(baseUrl + '/assets/' + id, {
      method: 'DELETE',
      credentials: "include"
    }).then( res => {
      console.log(res)
      const findIndex = this.state.assets.findIndex(asset => asset._id === id)
      const copyAssets = [...this.state.assets]
      copyAssets.splice(findIndex, 1)
      this.setState({
        assets: copyAssets
      })
    })
  }

  addLike = (asset) => {
    fetch(baseUrl + '/assets/' + asset._id, {
      method: 'PUT',
      body: JSON.stringify({ likes: asset.likes + 1}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      // console.log(resJson)
      const copyAssets = [...this.state.assets]
      const findIndex = this.state.assets.findIndex(asset => asset._id === resJson._id)
      copyAssets[findIndex].likes = resJson.likes
      this.setState({
        assets: copyAssets
      })
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const url = baseUrl + '/assets/' + this.state.assetToBeEdited._id
    try{
      const response = await fetch( url , {
        method: 'PUT',
        body: JSON.stringify({
          name: e.target.name.value,
          creator: e.target.creator.value,
          price: e.target.price.value,
          img: e.target.img.value
        }),
        headers: {
          'Content-Type' : 'application/json'
        },
        credentials: "include"
      })

      if (response.status === 200){
        const updatedAsset = await response.json()
        console.log(updatedAsset)
        const findIndex = this.state.assets.findIndex(asset => asset._id === updatedAsset._id)
        const copyAssets = [...this.state.assets]
        copyAssets[findIndex] = updatedAsset
        this.setState({
          assets: copyAssets,
          modalOpen:false
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }

  handleChange = (e)=>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }

  showEditForm = (asset)=>{
    this.setState({
      modalOpen:true,
      name: asset.name,
      price: asset.price,
      creator: asset.creator,
      img: asset.img,
      assetToBeEdited: asset
    })
  }

  componentDidMount() {
    this.getAssets()
  }

  render() {
    return (
      <>  
      <div className='mainContainer'>
        <Router>
        <div className='ui segment main' style={{ margin: '0em 0em 0em', padding: '0em 0em 0em' }}>
        <HeaderMain />
        <Routes>
        <Route
          path="/home"
          element={
          <HomePage />}
        />

        <Route
          path="/newasset"
          element={
          <NewForm baseUrl={baseUrl} addAsset={ this.addAsset }/>}
        />    

        <Route
          path="/allassets" 
          element={
          <AssetList assets={this.state.assets} editName={this.state.name} editPrice={this.state.price} editCreator={this.state.creator} editImg={this.state.img} addLike={this.addLike} deleteAsset={this.deleteAsset} editHandleSubmit={this.handleSubmit} editHandleChange={this.handleChange} modalOpen={this.state.modalOpen} showEditForm={this.showEditForm} assetToBeEdited={this.state.assetToBeEdited}/>} 
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
          <Login register={this.register} loginUser={this.loginUser} />}
        />
      </Routes>
      <Footer />
      </div>
      </Router> 
    </div>  
    </>
  );
}
}

export default App;
