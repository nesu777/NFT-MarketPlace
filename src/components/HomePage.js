import React, { Component } from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'

export default class HomePage extends Component{
  render(){
    return( 
    <Segment padded='very' inverted style={{ margin: '0em -0.1em'}}>
      <Header size='huge' align='center'><Icon color='yellow' name='ethereum' />
    <Header.Content>NFT Base</Header.Content></Header>
      <Header>
        <Header.Content size='medium' align='center'style={{ margin: '1em 5em 0em', padding: '0em 2em' }}>
          Premiere acces to the latest NFT digital assets on the market.
          Never miss a digital bid by creating an account and following
          your favorite artists.</Header.Content>
        <br />
        <br />
        <Segment style={{ margin: '3em 5em 0em', padding: '3em 5em 3em 0em' }}>
        <Header align='center' ><Header.Content size='small'><Icon size='big' color='yellow' name='ethereum' />Etheruem Wallet<Icon size='large' name='arrow right' /><Icon size='big' color='violet' name='file image' />Digital Asset Masterpiece<Icon size='large' name='arrow right' /><Icon size='big' color='blue' name='lock' />Blockchain Backed Contract</Header.Content></Header>  
        </Segment>
        </Header>
        <br /> 
        <Image src='./homePageGraphic1.png' />
    </Segment>    
)
}
}