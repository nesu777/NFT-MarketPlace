import React, { Component } from 'react'
import { Item, Container, Header, Divider, Segment, Icon } from 'semantic-ui-react'

//Show Page Component

export default class AboutUs extends Component {
render(){
		return(
			<Container>
			<Item key='{game.id}'>
      			<Item.Content>
      				<Segment inverted raised>
      				<br/>
        			<Item.Header as='h1' align='center'>About Us</Item.Header>
        			<Header as='h2' align='center' color='black'><Icon name='ethereum' color='yellow' align='center'/>NFT Base</Header>
        			<br/>
        			<Divider />
        			<Item.Description>
        			<Container text>
        			<br/>
          				<p>&emsp; <strong>This app is a marketplace exclusively for buying and selling digital products such as photos, videos, audio, and other file formats with non-fungible tokens (NFTs). As a digital consumer you have access to a database of digital assets to purchase assets securely with NFTs. As an artist you have access to a database of digital art so that you can add your own artwork and sell it. As an art collector you have online access to digital art to maintain and add to you collection.
						</strong></p>
          				<p>&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo. Purus ut faucibus pulvinar elementum integer enim neque. Sit amet est placerat in egestas erat. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Turpis egestas integer eget aliquet nibh praesent tristique. Morbi non arcu risus quis varius quam quisque. Consequat nisl vel pretium lectus quam id leo in. Adipiscing commodo elit at imperdiet dui accumsan. Condimentum lacinia quis vel eros donec ac odio tempor. Arcu felis bibendum ut tristique et egestas quis ipsum. Convallis convallis tellus id interdum velit laoreet.</p>
									<p>&emsp; Quis lectus nulla at volutpat diam ut venenatis tellus in. Eu mi bibendum neque egestas congue quisque egestas. Volutpat diam ut venenatis tellus in metus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Mauris commodo quis imperdiet massa tincidunt nunc. Adipiscing elit pellentesque habitant morbi tristique senectus. Turpis nunc eget lorem dolor sed.</p>
									<Container align='center'>
          				{/*<Item.Image src='./GamePad.jpg' size='big' />*/}
          				</Container>
          				<br/>
          				<p>&emsp; Placerat orci nulla pellentesque dignissim. Morbi tristique senectus et netus et. Nibh sed pulvinar proin gravida hendrerit lectus. Blandit libero volutpat sed cras ornare arcu dui. Magna ac placerat vestibulum lectus. Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
          				<Container align='center'>
          				{/*<Item.Image src='./SaveKeyboard.jpg' size='big' />*/}
          				</Container>
          				<br/>
          				<p>&emsp; Purus ut faucibus pulvinar elementum integer enim neque. Sit amet est placerat in egestas erat. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Turpis egestas integer eget aliquet nibh praesent tristique. Morbi non arcu risus quis varius quam quisque. Consequat nisl vel pretium lectus quam id leo in. Adipiscing commodo elit at imperdiet dui accumsan. Condimentum lacinia quis vel eros donec ac odio tempor. Arcu felis bibendum ut tristique et egestas quis ipsum. Convallis convallis tellus id interdum velit laoreet.Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
          				<Container align='center'>
          				{/*<Item.Image src='./FriendsGaming.jpg' size='big' />*/}
          				</Container>
          				<br/>
          				<p>&emsp; Magna ac placerat vestibulum lectus. Facilisi nullam vehicula ipsum a arcu cursus. Sit amet purus gravida quis blandit turpis. Facilisis sed odio morbi quis commodo odio. Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.Nisl pretium fusce id velit ut tortor pretium viverra. Placerat in egestas erat imperdiet sed euismod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas maecenas pharetra convallis posuere morbi leo.</p>
							</Container>
							<br/><br/><br/>			
							</Item.Description>
        			</Segment>
        			<br/>
      			</Item.Content>
    		</Item>
    		</Container>
			)
	}
}
