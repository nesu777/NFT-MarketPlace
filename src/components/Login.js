import React, { Component } from 'react'
import { Grid, Header, Icon, Segment } from 'semantic-ui-react'

export default class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      loginUser: '',
    }
  }
  render(){
    return(
  <Grid textAlign='center' style={{ height: '65vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
    <Segment>
      <Header as='h2' textAlign='center'>
        <Icon name='ethereum' /> Log-in to your account
      </Header>
      <form onSubmit={this.props.loginUser}>
                <strong>Login </strong>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" name="username"/>
                <label htmlFor="name">Password: </label>
                <input type="text" id="password" name="password"/>
                <input type="submit" value="login" />
            </form>
            OR
            <form onSubmit={this.props.register}>
                <strong>Register </strong>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" name="username"/>
                <label htmlFor="name">Password: </label>
                <input type="text" id="password" name="password"/>
                <input type="submit" value="signup" />
            </form>
    </Segment>
    </Grid.Column>
  </Grid> 
)
}
}