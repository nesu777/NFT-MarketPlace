import React, { Component } from 'react'
import { Segment, Container, Grid, Header, List, Divider, Icon } from 'semantic-ui-react'

export default class Footer extends Component{
  render(){
    return( 
  <div className='content' sticky='onBottom'>
  <Segment color='grey' inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Payments' />
            <List link inverted>
              <List.Item as='a'>MetaMask</List.Item>
              <List.Item as='a'>PayPal</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Affiliates' />
            <List link inverted>
              <List.Item as='a'>Ethereum <Icon color='white' name='ethereum'/></List.Item>
              <List.Item as='a'>Alchemy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Encrypted Site' />
            <List link inverted>
              <List.Item as='a'>Secure <Icon color='yellow' name='lock'/></List.Item>
              <List.Item as='a'>Blockchain</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header inverted as='h4' content='Contact Us' />
            <p>
              support@nftbase.com
            </p>
          </Grid.Column>
        </Grid>

        <Divider inverted section />
        <Icon size='big' color='yellow' name='ethereum' />
        <br/>
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
             Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)
}
}