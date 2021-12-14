import React, { Component } from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

export default class Login extends Component {
  render(){
    return(
  <Grid textAlign='center' style={{ height: '65vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
    <Segment>
      <Header as='h2' textAlign='center'>
        <Icon name='ethereum' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='black' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Button color='yellow'>Sign Up</Button>
      </Message>
    </Segment>
    </Grid.Column>
  </Grid> 
)
}
}