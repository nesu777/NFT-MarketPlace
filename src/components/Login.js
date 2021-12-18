import React, { Component } from 'react'
import { Grid, Button, Header, Icon, Form, Input, Segment, Checkbox } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      loginUser: '',
      register:''
    }
  }
  render(){
    return(
  <Grid textAlign='center' style={{ height: '65vh', margin: '0em 0em 20em' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
    {/*<Segment inverted>*/}
    <Segment padded='very'>
      <Header as='h2' textAlign='center'>
        <Icon name='ethereum' /> NFT Base Account
      </Header>
      <Form size='big' onSubmit={this.props.loginUser}>
                <Header>Login </Header>
                <Form.Input type="text" id="name" name="username"/>
                <Form.Input type="password" id="password" name="password"/>
                <Button size='big 'type="submit" color='yellow' as={NavLink} to="/home">Login</Button>
            </Form>
            <br/>
            <Form onSubmit={this.props.register}>
                <Header>Register </Header>
                <Form.Field>
                  <Input placeholder='Create username' />
                </Form.Field>
                <Form.Field>
                  <Input placeholder='Creat Password' />
                  <label> </label>
                  <Input placeholder='Confirm Password' />
                </Form.Field>
                <Button size='big' type="submit" color='yellow' as={NavLink} to="/home">Register</Button>
            </Form>
            <Checkbox label='I agree to the Terms and Conditions' />
    </Segment>
    {/*</Segment>*/}
    </Grid.Column>
  </Grid> 
)
}
}