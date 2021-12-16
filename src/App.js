import './App.css';
import React, { Component } from 'react'
// import { Segment } from 'semantic-ui-react'
import HeaderMain from './components/Header'
// import NewForm from './components/NewForm'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Featured from './components/Featured'
import AllAssets from './components/AllAssets'
import AboutUs from './components/AboutUs'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      baseURL: 'https://flow-mainnet.g.alchemy.com',
      apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
      query: '&t=',
      assetTitle: '',
      searchURL: '',
      assetsForSale: [],
      requestOptions: {}
    }
    // this.state = {
    //   assets: [],
    //   modalOpen: false,
    //   asssetToBeEdited: {},
    //   name:'',
    //   creator:'',
    //   price:''
    // }
  }
  
  getAssets = () =>{

    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }, () => {
      fetch("https://flow-mainnet.g.alchemy.com/" +this.state.apiKey+ "/v1/getNFTs/?owner=0x9eef2e4511390ce4&offset=0&limit=10", this.state.requestOptions)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        assetsForSale: json
      }),
      (err) => console.log(err))
    })
  // .then(response => response.text())
  // .then(result => this.setState({
  //   gamesOnSale: result
  // }))
  // .then(console.log(this.state.gamesOnSale.map(function(item){return item})))
  // .catch(error => console.log('error', error));

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

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }, () => {
      fetch("https://flow-mainnet.g.alchemy.com/xlkp1n3yzg6xim4mwjr2byhpr0wirck7/v1/getNFTMetadata/?tokenId=" + this.state.gameTitle +"&limit=5", this.state.requestOptions)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        searchResults: json,
        gameTitle: ''
      }),
      (err)=>console.log(err))
    })
  }

    getData = (data) => {
      console.log('setting state')
      this.setState({
        showThisGame: data,
      }, () => {
        console.log(this.state.showThisAsset)
        /*made it return to try and pass it to GameInfo*/
        return this.state.showThisAsset
      })
    }

  // addAsset = (newAsset) => {
  //   const copyAssets = [...this.state.assets]
  //   copyAssets.push(newAsset)
  //   this.setState({
  //     assets: copyAssets,
  //   })
  // }

  // deleteAsset = (id) => {
  //     // console.log(id)
  //     fetch(baseUrl + '/assets/' + id, {
  //     method: 'DELETE',
  //     credentials: "include"
  //   }).then( res => {
  //     // console.log(res)
  //     // if I checked for a 200 response code
  //     const findIndex = this.state.assets.findIndex(asset => asset._id === id)
  //     const copyAssets = [...this.state.assets]
  //     copyAssets.splice(findIndex, 1)
  //     this.setState({
  //       assets: copyAssets
  //     })
  //   })
  // }

  // addLike = (asset) => {
  //   // console.log(holiday)
  //   fetch(baseUrl + '/assets/' + asset._id, {
  //     method: 'PUT',
  //     body: JSON.stringify({ likes: asset.likes + 1}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: "include"
  //   }).then(res => res.json())
  //   .then(resJson => {
  //     // console.log(resJson)
  //     const copyAssets = [...this.state.assets]
  //     const findIndex = this.state.assets.findIndex(asset => asset._id === resJson._id)
  //     copyAssets[findIndex].likes = resJson.likes
  //     this.setState({
  //       assets: copyAssets
  //     })
  //   })
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const url = baseUrl + '/assets/' + this.state.assetToBeEdited._id
  //   try{
  //     const response = await fetch( url , {
  //       method: 'PUT',
  //       body: JSON.stringify({
  //         name: e.target.name.value,
  //         creator: e.target.creator.value
  //       }),
  //       headers: {
  //         'Content-Type' : 'application/json'
  //       },
  //       credentials: "include"
  //     })

  //     if (response.status === 200){
  //       const updatedAsset = await response.json()
  //       //console.log(updatedHoliday)
  //       const findIndex = this.state.assets.findIndex(asset => asset._id === updatedAsset._id)
  //       const copyAssets = [...this.state.assets]
  //       copyAssets[findIndex] = updatedAsset
  //       this.setState({
  //         assets: copyAssets,
  //         modalOpen:false
  //       })
  //     }
  //   }
  //   catch(err){
  //     console.log('Error => ', err);
  //   }
  // }

  handleChange = (e)=>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }

  showEditForm = (asset)=>{
    this.setState({
      modalOpen:true,
      name: asset.name,
      creator: asset.creator,
      price: asset.price,
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
      {/*<NewForm baseUrl={baseUrl} addAsset={ this.addAsset }/>
        <table>
          <tbody>
            { this.state.assets.map((asset, i) => {
                return (
                  <tr key={asset._id}>
                    <td key={i}> {asset.name} </td>
                    <td>{asset.likes}</td>
                    <td onClick={() => { this.addLike(asset)}}>LIKE</td>
                    <td onClick={() => { this.showEditForm(asset)}}>Show Edit Form</td>
                    <td onClick={() => this.deleteAsset(asset._id)}>X</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <br/>
        {
            this.state.modalOpen &&

            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input name="name" value={this.state.name} onChange={this.handleChange}/> <br/>

              <label>Creator: </label>
              <input name="creator" value={this.state.creator} onChange={this.handleChange}/>

              <label>Price: </label>
              <input name="price" value={this.state.price} onChange={this.handleChange}/>

              <button>submit</button>

            </form>
          }*/}
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
      </div>
      </Router> 
    </div>  
    </>
  );
}
}

export default App;
