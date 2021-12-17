import React, { Component } from 'react'
import { Item, Container, Divider, Segment, Icon, Button, Header} from 'semantic-ui-react'

//Show Page Component

export default class Featured extends Component {
render(){
		return(
			<Container color='blue'>
			<Segment padded='very' inverted>
			{/*<br/><br/>*/}
			<Header align='center' as='h1' style={{ fontSize: '3em', padding: '1em 0em' }}>Featured Art</Header>
			<Item key='{asset.id}'>
      			<Item.Content>
      				<Segment raised inverted padded='very'>
        			<Item.Header as='h1'><Icon name='ethereum' color='yellow'/>Imperial Astronaut</Item.Header>
        			<Item.Image centered src='astronaut_nft.png' size='huge'/>
        			<Item.Header as='h1' color='blue'>27 WETH ($103,321) for 1 edition
        			<Item.Content style={{ fontSize: '0.7em' }}>Creator: Beeple</Item.Content>
        			<br/>
        			<Button color='yellow' inverted>Bid</Button>
        			<Button className='ui tertiary button'>Watch Bid <Icon name='star' color='yellow' /></Button>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			<Item.Meta as='h3'>(11) <Icon name='heart' color='red'/><strong>Likes</strong></Item.Meta>
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
