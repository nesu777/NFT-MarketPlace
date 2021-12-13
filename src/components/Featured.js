import React, { Component } from 'react'
import { Item, Container, Divider, Segment, Icon } from 'semantic-ui-react'

//Show Page Component

export default class Featured extends Component {
render(){
		return(
			<Container color='blue'>
			<Segment padded='very'>
			{/*<br/><br/>*/}
			<Item key='{asset.id}'>
      			<Item.Content>
      				<Segment raised inverted>
        			<Item.Header as='h1'>Future Battle</Item.Header>
        			<Item.Image src='space_battle_asset.png' size='huge'/>
        			<Item.Header as='h2' color='blue'>27 WETH ($103,321) for 1 edition<Icon name='ethereum' color='blue'/>
        			<br/><br/>
        			<button className='ui primary button'>Bid</button>
        			<button className='ui tertiary button'>Watch Bid<Icon name='star' color='yellow' /></button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'><strong>Creator: Beeble</strong></Item.Meta>
        			<Item.Description>
          			</Item.Description>
        			</Segment>
        			{/*<br/>*/}
      			</Item.Content>
    		</Item>
    		</Segment>
    		</Container>
			)
	}
}