import React, { Component } from 'react'
import { Form, Input, Segment, Grid, Header, Icon, Button } from 'semantic-ui-react'

export default class NewForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:'',
      creator:'',
      price:'',
      img:''
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
      body: JSON.stringify({name: this.state.name, creator: this.state.creator, price: this.state.price, img: this.state.img}),
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
        name: '',
        creator:'',
        price:'',
        img:''
      })
    }).catch (error => console.error({'Error': error}))
  }


  render() {
    return (
  <Grid textAlign='center' style={{ height: '65vh', margin: '0em 0em 20em' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 750 }}>
    <Segment style={{ padding: '5em 10em 5em' }}>
    <Segment padded='very'>
      <Header as='h2' textAlign='center'>
        <Icon name='ethereum' color='yellow'/> Enter a New NFT Asset
      </Header>
      <br/>
      <Form onSubmit={this.handleSubmit} size='big'>
        <Icon name='header'/>
        <Input placeholder="Artwork Name"type="text" id="name" name="name" onChange={ (e) => this.handleChange(e)} value={this.state.name} />
        {/*<Label htmlFor="name">Creator: </Label>*/}
        <br/>
        <br/>
        <br/>
        <Icon name='user'/>
        <Input placeholder="Creator" type="text" id="creator" name="creator" onChange={ (e) => this.handleChange(e)} value={this.state.creator} />
        {/*<Label htmlFor="name">Price: </Label>*/}
        <br/>
        <br/>
        <br/>
        <Icon name='ethereum'/>
        <Input placeholder="Price" type="text" id="price" name="price" onChange={ (e) => this.handleChange(e)} value={this.state.price} />
        {/*<Label htmlFor="image">Img: </Label>*/}
        <br/>
        <br/>
        <br/>
        <Icon name='image'/>
        <Input placeholder="Image Address"type="text" id="img" name="img" onChange={ (e) => this.handleChange(e)} value={this.state.img} />
        <br/>
        <br/>
        <br/>
        <Button type="submit" size='big' color='green'>Add NFT asset</Button>
      </Form>
      </Segment>
      </Segment>
    </Grid.Column>
  </Grid> 
    )
  }

}