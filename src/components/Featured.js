import React, { Component } from 'react'
import { Item, Container, Divider, Segment, Icon, Header} from 'semantic-ui-react'

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
        			<Item.Header as='h1' color='blue'>74 ETH for 1 edition
        			<Item.Content style={{ fontSize: '0.7em' }}>Creator: DaVinci123</Item.Content>
        			<br/>
        			<Item.Description style={{ fontSize: '0.7em' }}>
        				Astronaut floating in imperial space was inspired by events that I experienced when travelling to remote French Polynesian islands and investigating the use of celestial mechanics for navigation.
							"Watch out for the ghost planet!" the film's trailer says. It's part of a recurring pattern throughout the three films, in which his narrator is drunk and runs around with a laser pointer in a trance.
								None of the standard models for space navigation
          			</Item.Description>
        			<br/><br/>
        			</Item.Header>
        			<Divider />
        			</Segment>
      			</Item.Content>
    		</Item>
    		</Segment>
    		</Container>
			)
	}
}
