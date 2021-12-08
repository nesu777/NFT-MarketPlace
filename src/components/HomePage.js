import React, { Component } from 'react'
import { Container, Image, Header } from 'semantic-ui-react'

export default class HomePage extends Component{
  render(){
    return( 
  <div >
    <br/>
    <Container>
      <Header size='huge' align='center'>NFT Base</Header>
        <Header size='medium' align='center'>
          Primiere acces to the latest NFT digital assets on the market
          Never miss a digital bid by creating an account and following
          your favorite artists.
        </Header>
        <Image src='./png-transparent-ethereum.png' />

    </Container>
  </div>
)
}
}