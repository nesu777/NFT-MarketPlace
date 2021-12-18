import React, { Component } from 'react'
import { Card, Grid, List, Image, Button, Header, Segment, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Dashboard extends Component {
  render() {
    return (
      <div>

      <Segment style={{ padding: '0em 4em', margin: '0em 8em' }} vertical>
      <Segment>
        <Grid container stackable verticalAlign='middle'>
        <Header as='h1' style={{ fontSize: '4em', padding: '1em 0em 0em' }}>
          My Dashboard
        </Header>
        <Grid.Row>
        <Grid.Column width={8}>
          <Segment> 
            <List style={{ fontSize: '1.5em' }}>
              <List.Item>
                <List.Icon name='user' />
                <List.Content>Name: John</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='users' />
                <List.Content>Member Since: '2021'</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='ethereum' />
                <List.Content>Balance: 20.00376 ETH</List.Content>
              </List.Item>
            </List>
          </Segment>
          <Segment>  
            <Header as='h3' style={{ fontSize: '2em' }}>
               MetaMask eWallet
            </Header>
            <p style={{ color: 'blue' }}>0xf75e85d6ed72a0773a247345847126ab1a3c598e</p>
            <p style={{ fontSize: '1.33em' }}>
              A wallet address is a unique digital address, made up of letters and numbers, 
              that you can use for sending and receiving digital currencies 
              such as Bitcoin and Ether. It is similar to an account 
              number in the traditional banking system. Wallet addresses are public and are safe to share with others.
            </p>
          </Segment>  
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
              <Card.Header>John</Card.Header>
              <Card.Meta>
              <span className='date'>Joined in 2021</span>
              </Card.Meta>
            <Card.Description>
              John is an NFT collector
            </Card.Description>
              </Card.Content>
            <Card.Content extra>
              {/*<a>*/}
              <Icon name='user' />
                22 followers
              {/*</a>*/}
            </Card.Content>
          </Card>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' color='black' as={NavLink} to="/newasset">Add Digital Asset</Button>
            <Button size='huge' color='yellow' as={NavLink} to="/home">Logout</Button>
            <br/>
            <br/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>  
    </Segment>
    </div>
    )
  }
}