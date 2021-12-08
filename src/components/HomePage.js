import React, { Component } from 'react'
import { Container, Header, Icon, Image, Segment } from 'semantic-ui-react'

export default class HomePage extends Component{
  render(){
    return( 
    <Container color='blue'>
    <Segment padded='very' inverted>
      <Header size='huge' align='center'><Icon color='yellow' name='ethereum' />
    <Header.Content>NFT Base</Header.Content></Header>
      <Header>
        <Header.Content size='medium' align='center'style={{ margin: '1em 5em 0em', padding: '0em 2em' }}>
          Primiere acces to the latest NFT digital assets on the market.
          Never miss a digital bid by creating an account and following
          your favorite artists.</Header.Content>
        <br />
        <br />
        <Segment style={{ margin: '3em 5em 0em', padding: '3em 5em 3em 0em' }}>
        <Header align='center' ><Header.Content size='small'><Icon size='big' color='yellow' name='ethereum' />Etheruem Wallet<Icon size='large' name='arrow right' /><Icon size='big' color='violet' name='file image' />Digital Asset Masterpiece<Icon size='large' name='arrow right' /><Icon size='big' color='blue secondary' name='lock' />Blockchain Backed Contract</Header.Content></Header>  
        </Segment>
        </Header>
        <br />
    {/*</Segment>
    <Segment inverted> */}   
        <Image src='./homePageGraphic1.png' />
    </Segment>    
    </Container>
)
}
}