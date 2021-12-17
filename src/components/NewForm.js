import React, { Component } from 'react'
import { Form, Label, Input } from 'semantic-ui-react'

export default class NewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:''
    }
  }

  handleChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value,
            [event.target.id]: event.target.value,
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
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name: </Label>
        <Input type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} />
        <Label htmlFor="name">Creator: </Label>
        <Input type="text" id="creator" name="creator" onChange={ (e) => this.handleChange(e)} value={this.state.creator} />
        <Label htmlFor="name">Price: </Label>
        <Input type="text" id="price" name="price" onChange={ (e) => this.handleChange(e)} value={this.state.price} />
        <Label htmlFor="image">Img: </Label>
        <Input type="text" id="img" name="img" onChange={ (e) => this.handleChange(e)} value={this.state.img} />
        <Input type="submit" value="Add NFT asset" />
      </Form>
    )
  }

}