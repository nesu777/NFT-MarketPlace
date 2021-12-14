import React, { Component } from 'react'

export default class NewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:''
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // fetch
    fetch(this.props.baseUrl + '/assets', {
      method: 'POST',
      body: JSON.stringify({name: this.state.name}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then( res => {
        return res.json()
    }).then( data => {
      // console.log(data)
      this.props.addAsset(data)
      this.setState({
        name: ''
      })
    }).catch (error => console.error({'Error': error}))
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} />
        <input type="submit" value="Add NFT asset" />
      </form>
    )
  }

}