import React, { Component } from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

export default class HomePage extends Component{
  render(){
    return( 
    <Container color='blue'>
      <Header size='huge' align='center'><Icon color='yellow' name='ethereum' />
    <Header.Content>NFT Base</Header.Content></Header>
        <Header size='medium' align='center'>
          Primiere acces to the latest NFT digital assets on the market
          Never miss a digital bid by creating an account and following
          your favorite artists.
        </Header>
{/*        <Image src='./png-transparent-ethereum.png' />
*/}
    </Container>
)
}
}