import React, { Component } from 'react'
import { Card, Table, Image, Button, Header, Segment, Icon, Form, Label, Input } from 'semantic-ui-react'

// const src = 'logo192.png'

export default class AllAssets extends Component {
  render() {
    return (

    <Segment inverted style={{ padding: '2em 8em', margin: '0em 11.2em' }}>
      {
            this.props.modalOpen && 
            <Form onSubmit={this.props.allHandleSubmit}>
              <Label>Name: </Label>
              <Input name="name" placeholder={this.props.allName} value={this.props.allName} onChange={this.props.allHandleChange}/> 
              <br/>
              <Label>Creator: </Label>
              <Input name="creator" placeholder={this.props.allCreator} value={this.props.allCreator} onChange={this.props.allHandleChange}/>
              <br/>
              <Label>Price: </Label>
              <Input name="price" placeholder={this.props.allPrice} value={this.props.allPrice} onChange={this.props.allHandleChange}/>
              <br/>
              <Label>Image: </Label>
              <Input name="price" placeholder={this.props.allImage} value={this.props.allImage} onChange={this.props.allHandleChange}/>
              <br/>
              <Button>Submit</Button>
            </Form>
            // this.modalOpen && <EditModal showEditForm={this.showEditForm} asset={this.state.asset}/>
          }
          <br/>
      <Header align='center' as='h1' style={{ fontSize: '3em', padding: '1em 0em' }}>All Assets</Header>
      <Table celled>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>1</Table.HeaderCell>
        <Table.HeaderCell>All NFT Assets</Table.HeaderCell>
        <Table.HeaderCell>3</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
          <Table.Body>
          <Table.Row>
            { 
              this.props.assets.map((asset, i) => {
                return (
            <Table.Cell key={asset._id}>      
            <Card.Group>
            <Card>
              <Image src={asset.image} wrapped ui={false} />
              <Card.Content>
              <Card.Header>{asset.price}ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span>{asset.creator}</span>
              </Card.Meta>
            <Card.Description>
              {asset.name}
            </Card.Description>
              </Card.Content>
            <Card.Content extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
              <Table.Cell onClick={() => { this.props.addLike(asset)}}>LIKE</Table.Cell>
                    <Table.Cell onClick={() => { this.props.showEditForm(asset)}}><Button color='yellow' inverted>Show Edit Form</Button></Table.Cell>
                    <Table.Cell onClick={() => this.props.deleteAsset(asset._id)}><Button color='red' inverted>Delete</Button></Table.Cell>
            </Card.Content>
            </Card>
            </Card.Group>
            </Table.Cell>
              )
            })
          }  
        </Table.Row>    
        </Table.Body>      
    </Table>
    </Segment>
    )
  }
}