import React, { Component } from 'react'
import { Label, Form, Input, Button } from 'semantic-ui-react'

export default class EditModal extends Component {

  render(){
    return(
            <Form onSubmit={this.handleSubmit}>
              <Label>Name: </Label>
              <Input name="name" placeholder={this.props.name} value={this.props.name} onChange={this.handleChange}/> 
              <br/>
              <Label>Creator: </Label>
              <Input name="creator" placeholder={this.props.creator} value={this.props.creator} onChange={this.handleChange}/>
              <br/>
              <Label>Price: </Label>
              <Input name="price" placeholder={this.props.price} value={this.props.price} onChange={this.handleChange}/>
              <br/>
              <Button>Submit</Button>
            </Form>
            )
          }
        }