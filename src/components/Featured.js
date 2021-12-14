import React, { Component } from 'react'
import { Item, Container, Divider, Segment, Icon, Button } from 'semantic-ui-react'

//Show Page Component

export default class Featured extends Component {
render(){
		return(
			<Container color='blue'>
			<Segment padded='very' inverted>
			{/*<br/><br/>*/}
			<Item key='{asset.id}'>
      			<Item.Content>
      				<Segment raised inverted>
        			<Item.Header as='h1'>Imperial Astronaut</Item.Header>
        			<Item.Image src='astronaut_nft.png' size='huge' fluid/>
        			<Item.Header as='h2' color='blue'>27 WETH ($103,321) for 1 edition<Icon name='ethereum' color='blue'/>
        			<br/><br/>
        			<Button color='yellow'>Bid</Button>
        			<Button className='ui tertiary button'>Watch Bid<Icon name='star' color='yellow' /></Button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'><strong>Creator: Beeple</strong></Item.Meta>
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
