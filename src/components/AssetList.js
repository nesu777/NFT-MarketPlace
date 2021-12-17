import React, { Component } from 'react'
// import EditModal from './EditModal'
import { Table, Label, Form, Input, Button, Image } from 'semantic-ui-react'

export default class AssetList extends Component {
  render(){
    return(
      <div className='ui container'>
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
          <br/>
      <Table>
          <Table.Body>
            { 
              this.props.assets.map((asset, i) => {
                return (
                  <Table.Row key={asset._id}>
                    <Table.Cell key={i}> {asset.name} </Table.Cell>
                    <Table.Cell>{asset.price} ETH</Table.Cell>
                    <Table.Cell>{asset.creator}</Table.Cell>
                    <Table.Cell>{asset.likes}</Table.Cell>
                    <Table.Cell><Image src={asset.img} size='small'/></Table.Cell>
                    <Table.Cell onClick={() => { this.props.addLike(asset)}}>LIKE</Table.Cell>
                    <Table.Cell onClick={() => { this.props.showEditForm(asset)}}><Button color='yellow' inverted>Show Edit Form</Button></Table.Cell>
                    <Table.Cell onClick={() => this.props.deleteAsset(asset._id)}><Button color='red' inverted>Delete</Button></Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
      </div>
    )
  }
}
