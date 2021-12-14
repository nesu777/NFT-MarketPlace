import React, { Component } from 'react'
import { Header, Icon, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class HeaderMain extends Component{

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render(){
    const { activeItem } = this.state

    return( 
  <Header as='h1' inverted>
    <Icon color='yellow' name='ethereum' />
    <Header.Content>NFT Base</Header.Content> {/*nft 'home base' idea*/}
  <Segment inverted>
  <Menu fluid widths={7} inverted pointing secondary>
    <Menu.Item
      as={NavLink} to="/home"
      name='Home'
      active={activeItem === 'home'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink} to="/allassets"
      name='All Assets'
      active={activeItem === 'allassets'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/featured"
      name='Featured Art'
      active={activeItem === 'featured'}
      onClick={this.handleItemClick}
      /*game chosen with Math.random route to game show page*/
    />
    <Menu.Item 
      as={NavLink}
      to="/aboutus"
      name='About Us'
      active={activeItem === 'aboutus'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/dashboard"
      name='Dashboard'
      active={activeItem === 'dashboard'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/login"
      name='Login'
      content={<Icon color='yellow' size='large' name='user circle' />}
      active={activeItem === 'login'}
      onClick={this.handleItemClick}
        >
        Login
    </Menu.Item>
  </Menu>
  </Segment>
  </Header>
)
}
}