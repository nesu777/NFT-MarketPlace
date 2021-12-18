import React, { Component } from 'react'
import { Card, Image, Button, Header, Segment, Icon, Form, Label, Input } from 'semantic-ui-react'
// const src = 'logo192.png'

export default class AllAssets extends Component {
  render() {
    return (

    <Segment inverted style={{ padding: '2em 8em', margin: '0em 11.2em' }}>
      
      <Header align='left' as='h1' style={{ fontSize: '3em', padding: '1em 0em' }}>Explore</Header>
          {/*{
            this.props.modalOpen && 
            <Form onSubmit={this.props.editHandleSubmit}>
              <Label>Name: </Label>
              <Input name="name" placeholder={this.props.editName} value={this.props.editName} onChange={this.props.editHandleChange}/> 
              <br/>
              <Label>Creator: </Label>
              <Input name="creator" placeholder={this.props.editCreator} value={this.props.editCreator} onChange={this.props.editHandleChange}/>
              <br/>
              <Label>Price: </Label>
              <Input name="price" placeholder={this.props.editPrice} value={this.props.editPrice} onChange={this.props.editHandleChange}/>
              <br/>
              <Label>Image: </Label>
              <Input name="img" placeholder={this.props.editImg} value={this.props.editImg} onChange={this.props.editHandleChange}/>
              <br/>
              <Button>Submit</Button>
            </Form>
            // this.modalOpen && <EditModal showEditForm={this.showEditForm} asset={this.state.asset}/>
          }*/}
          <Card.Group itemsPerRow={3}>
            { 
              this.props.assets.map((asset, i) => {
                return ( 
            <Card key={asset._id}>
              <Image src={asset.img} size='medium' wrapped ui={false}/>
              <Card.Content>
              <Card.Header>{asset.price }ETH<Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              {/*<span>(Live conversion: ${((asset.price * 3957.10)  * Math.floor(10 * Math.random())).toFixed(2)})</span>*/}
              <span>(USD value: ${(asset.price * 3957.11).toFixed(2)})</span>
              </Card.Meta>
              <Card.Meta>
              <span>{asset.creator}</span>
              </Card.Meta>
            <Card.Description>
              {asset.name}
            </Card.Description>
              </Card.Content>
            <Card.Content extra>
              <span>{asset.likes}</span>
              <Icon onClick={() => { this.props.addLike(asset)}} name='heart outline' color='red' size='big'/>
              <Button size='medium' color='yellow' inverted>Buy</Button>   
              <br/><br/>
              <Button onClick={() => { this.props.showEditForm(asset)}} color='blue' inverted>Edit</Button>
              <Button onClick={() => this.props.deleteAsset(asset._id)} color='red' inverted>Delete</Button>
              {
            this.props.modalOpen && 
            <Form onSubmit={this.props.editHandleSubmit}>
              <Label>Name: </Label>
              <Input name="name" placeholder={this.props.editName} value={this.props.editName} onChange={this.props.editHandleChange}/> 
              <br/>
              <Label>Creator: </Label>
              <Input name="creator" placeholder={this.props.editCreator} value={this.props.editCreator} onChange={this.props.editHandleChange}/>
              <br/>
              <Label>Price: </Label>
              <Input name="price" placeholder={this.props.editPrice} value={this.props.editPrice} onChange={this.props.editHandleChange}/>
              <br/>
              <Label>Image: </Label>
              <Input name="img" placeholder={this.props.editImg} value={this.props.editImg} onChange={this.props.editHandleChange}/>
              <br/>
              <Button>Submit</Button>
            </Form>
            // this.modalOpen && <EditModal showEditForm={this.showEditForm} asset={this.state.asset}/>
          }
            </Card.Content>
            </Card>
              )
            })
          }
      </Card.Group>        
    </Segment>
    )
  }
}