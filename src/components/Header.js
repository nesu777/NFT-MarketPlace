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
  <div className='content' sticky='onTop'>   
  <div className='ui fluid container'>
  <Header as='h1' inverted>
    <Icon color='yellow' name='ethereum' />
    <Header.Content>NFT Base</Header.Content> {/*nft 'home base' idea*/}
    <Segment inverted>
  <Menu fluid widths={6} inverted pointing secondary>
    <Menu.Item
      as={NavLink} to="/"
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
      to="/support"
      name='Support'
      active={activeItem === 'support'}
      onClick={this.handleItemClick}
    />
    <Menu.Item 
      as={NavLink}
      to="/login"
      name='Login/SignUp'
      content={<Icon color='yellow' size='large' name='user circle' />}
      active={activeItem === 'login'}
      onClick={this.handleItemClick}
        >
        Login/SignUp
    </Menu.Item>
  </Menu>
  </Segment>
  </Header>
  </div>
  </div>
)
}
}