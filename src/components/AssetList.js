import React, { Component } from 'react'
import { Table, Label, Header } from 'semantic-ui-react'

class AssetList extends Component {

  constructor(props){
    super(props)

    this.state = {
      showThisAssetID: '',
    }
    this.showSearchedAsset = this.showSearchedAsset.bind(this)
  }

  showSearchedGame = (event) => {
    this.setState({
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      },

    }, () => {
      fetch("https://flow-mainnet.g.alchemy.com/xlkp1n3yzg6xim4mwjr2byhpr0wirck7/v1/getNFTMetadata/?tokenId=" + this.state.showThisAssetID)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({
        showThisAsset: json
      }),
    (err) => console.log(err))
    .then(this.props.sendData(this.state.showThisAsset))
    })
  }

  render(){
    return(
      <div className='ui container'>
      <br/>
      <Header size='huge' align='center'>Available NFTs</Header>
      <Table color='blue' celled striped inverted>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Game</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Rating</Table.HeaderCell>
      </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          this.props.gamesOnSale.map(game => {
            return(
              <Table.Row key={game.gameID} onClick={(e) => this.setState({showThisGameID: game.gameID})}>
                <Table.Cell>
                  <Label onClick={this.showSearchedGame}>{game.title}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Label>${game.salePrice}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Label>{game.steamRatingPercent}</Label>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
      <Table.Footer>
      <Table.Row>
        <Table.HeaderCell link='true'>More Games</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
      </Table.Footer>
      </Table>
      </div>
    )
  }
}

export default GameList
