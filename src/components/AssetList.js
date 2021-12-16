import React, { Component } from 'react'
import { Table, Label, Form, Input, Button } from 'semantic-ui-react'

export default class AssetList extends Component {

  render(){
    return(
      <div className='ui container'>
      <Table>
          <Table.Body>
            { 
              this.props.assets.map((asset, i) => {
                return (
                  <Table.Row key={asset._id}>
                    <Table.Cell key={i}> {asset.name} </Table.Cell>
                    <Table.Cell>{asset.likes}</Table.Cell>
                    <Table.Cell onClick={() => { this.addLike(asset)}}>LIKE</Table.Cell>
                    <Table.Cell onClick={() => { this.showEditForm(asset)}}>Show Edit Form</Table.Cell>
                    <Table.Cell onClick={() => this.deleteAsset(asset._id)}>X</Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
        <br/>
        {
            this.state.modalOpen &&

            <Form onSubmit={this.handleSubmit}>
              <Label>Name: </Label>
              <Input name="name" value={this.state.name} onChange={this.handleChange}/> <br/>

              <Label>Creator: </Label>
              <Input name="creator" value={this.state.creator} onChange={this.handleChange}/>

              <Label>Price: </Label>
              <Input name="price" value={this.state.price} onChange={this.handleChange}/>

              <Button>Submit</Button>

            </Form>
          }
      </div>
    )
  }
}
