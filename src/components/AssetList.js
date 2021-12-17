import React, { Component } from 'react'
import EditModal from './EditModal'
import { Table, Label, Form, Input, Button } from 'semantic-ui-react'

export default class AssetList extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async (e) => {

    const baseUrl = process.env.REACT_APP_BASEURL

    e.preventDefault()
    const url = baseUrl + '/assets/' + this.props.assetToBeEdited._id
    try{
      const response = await fetch( url , {
        method: 'PUT',
        body: JSON.stringify({
          name: e.target.name.value,
          creator: e.target.creator.value,
          price: e.target.price.value
        }),
        headers: {
          'Content-Type' : 'application/json'
        },
        credentials: "include"
      })

      if (response.status === 200){
        const updatedAsset = await response.json()
        console.log(updatedAsset)
        const findIndex = this.props.assets.findIndex(asset => asset._id === updatedAsset._id)
        const copyAssets = [...this.props.assets]
        copyAssets[findIndex] = updatedAsset
        this.setState({
          assets: copyAssets,
          modalOpen:false
        })
      }
    }
    catch(err){
      console.log('Error => ', err);
    }
  }
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
                    <Table.Cell>{asset.price} ETH</Table.Cell>
                    <Table.Cell>{asset.creator}</Table.Cell>
                    <Table.Cell>{asset.likes}</Table.Cell>
                    <Table.Cell onClick={() => { this.props.addLike(asset)}}>LIKE</Table.Cell>
                    <Table.Cell onClick={() => { this.props.showEditForm(asset)}}><Button color='yellow' inverted>Show Edit Form</Button></Table.Cell>
                    <Table.Cell onClick={() => this.props.deleteAsset(asset._id)}><Button color='red' inverted>Delete</Button></Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
        <br/>
          {
            this.props.modalOpen && 
            <Form onSubmit={this.handleSubmit}>
              <Label>Name: </Label>
              <Input name="name" placeholder={this.props.name} value={this.props.name} onChange={this.handleChange}/> 
              <br/>
              <Label>Creator: </Label>
              <Input name="creator" placeholder={this.props.creator} value={this.props.creator} onChange={this.handleChange}/>
              <br/>
              <Label>Price: </Label>
              <Input name="price" placeholder={this.props.price} value={this.props.price} onChange={this.handleChange}/>
              <br/>
              <Button>Submit</Button>
            </Form>
            // this.modalOpen && <EditModal showEditForm={this.showEditForm} asset={this.state.asset}/>
          }
      </div>
    )
  }
}
