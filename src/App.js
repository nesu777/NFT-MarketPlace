import './App.css';
import React, { Component } from 'react'
import { Table, Label, Form, Input, Button } from 'semantic-ui-react'
import HeaderMain from './components/Header'
import NewForm from './components/NewForm'
import AssetList from './components/AssetList'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Featured from './components/Featured'
import AllAssets from './components/AllAssets'
import AboutUs from './components/AboutUs'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

let baseUrl = process.env.REACT_APP_BASEURL

class App extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   baseURL: 'https://flow-mainnet.g.alchemy.com',
    //   apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    //   query: '&t=',
    //   assetTitle: '',
    //   searchURL: '',
    //   assetsForSale: [],
    //   requestOptions: {}
    // }
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

  // getAssets = () =>{

  //   this.setState({
  //     requestOptions: {
  //       method: 'GET',
  //       redirect: 'follow'
  //     }
  //   }, () => {
  //     fetch("https://flow-mainnet.g.alchemy.com/" +this.state.apiKey+ "/v1/getNFTs/?owner=0x9eef2e4511390ce4&offset=0&limit=10", this.state.requestOptions)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(json => this.setState({
  //       assetsForSale: json
  //     }),
  //     (err) => console.log(err))
  //   }) 
  // }

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

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     requestOptions: {
  //       method: 'GET',
  //       redirect: 'follow'
  //     }
  //   }, () => {
  //     fetch("https://flow-mainnet.g.alchemy.com/xlkp1n3yzg6xim4mwjr2byhpr0wirck7/v1/getNFTMetadata/?tokenId=" + this.state.gameTitle +"&limit=5", this.state.requestOptions)
  //     .then(res => {
  //       return res.json()
  //     })
  //     .then(json => this.setState({
  //       searchResults: json,
  //       assetTitle: ''
  //     }),
  //     (err)=>console.log(err))
  //   })
  // }

    // getData = (data) => {
    //   console.log('setting state')
    //   this.setState({
    //     showThisGame: data,
    //   }, () => {
    //     console.log(this.state.showThisAsset)
    //     return this.state.showThisAsset
    //   })
    // }

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
          price: e.target.price.value
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
      assetToBeEdited: asset
    })
  }

  componentDidMount() {
    this.getAssets()
  }

  // AssetList = () =>{
  //     <div className='ui container'>
  //     <Table>
  //         <Table.Body>
  //           { 
  //             this.state.assets.map((asset, i) => {
  //               return (
  //                 <Table.Row key={asset._id}>
  //                   <Table.Cell key={i}> {asset.name} </Table.Cell>
  //                   <Table.Cell>{asset.price} ETH</Table.Cell>
  //                   <Table.Cell>{asset.creator}</Table.Cell>
  //                   <Table.Cell>{asset.likes}</Table.Cell>
  //                   <Table.Cell onClick={() => { this.props.addLike(asset)}}>LIKE</Table.Cell>
  //                   <Table.Cell onClick={() => { this.props.showEditForm(asset)}}>Show Edit Form</Table.Cell>
  //                   <Table.Cell onClick={() => this.props.deleteAsset(asset._id)}><Button color='red' inverted>Delete</Button></Table.Cell>
  //                 </Table.Row>
  //               )
  //             })
  //           }
  //         </Table.Body>
  //       </Table>
  //       <br/>
  //       {
  //           this.state.modalOpen &&

  //           <Form onSubmit={this.handleSubmit}>
  //             <Label>Name: </Label>
  //             <Input name="name" value={this.state.name} onChange={this.handleChange}/> 
  //             <br/>
  //             <Label>Creator: </Label>
  //             <Input name="creator" value={this.state.creator} onChange={this.handleChange}/>
  //             <br/>
  //             <Label>Price: </Label>
  //             <Input name="price" value={this.state.price} onChange={this.handleChange}/>
  //             <br/>
  //             <Button>Submit</Button>

  //           </Form>
  //         }
  //     </div>
  //   }

  render() {
    return (
      <>  
      <div className='mainContainer'>
      
      
{/*        <AssetList assets={this.state.assets} addLike={this.addLike} deleteAsset={this.deleteAsset} showEditForm={this.showEditForm} modalOpen={this.state.modalOpen} showEditForm={this.showEditForm}/>
*/}        <Router>
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
          <AssetList assets={this.state.assets} addLike={this.addLike} deleteAsset={this.deleteAsset} showEditForm={this.showEditForm} modalOpen={this.state.modalOpen} showEditForm={this.showEditForm} handleSubmit={this.handleSubmit} assetToBeEdited={this.state.assetToBeEdited}/>} 
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
