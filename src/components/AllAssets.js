import React, { Component } from 'react'
import { Card, Image, Button, Header, Segment, Icon} from 'semantic-ui-react'

const src = 'logo192.png'

export default class AllAssets extends Component {
  render() {
    return (
    <div>
    <Segment inverted style={{ padding: '2em 8em', margin: '0em 11.2em' }}>
      <Header align='center' as='h1' style={{ fontSize: '3em', padding: '1em 0em' }}>All Assets</Header>
      <Card.Group itemsPerRow={3}>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>5 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>Creator123</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt1'
            </Card.Description>
              </Card.Content>
            <Card.Content extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
          </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>0.029 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>Artist007</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt2'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
          </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>0.1 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>Verified_User</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt3'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
          </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>52.5 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>MuskElonn</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt4'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
          </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>100 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>DaVinci2</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt5'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
          </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>30 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>YachtClub</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt6'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
        </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>0.042 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>New_user00</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt7'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
        </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>20 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>ChainArt</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt8'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
        </Card>
        <Card>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
              <Card.Header>0.03 ETH <Icon name='ethereum'/></Card.Header>
              <Card.Meta>
              <span className='date'>MetaMan9</span>
              </Card.Meta>
            <Card.Description>
              'RandomArt9'
            </Card.Description>
              </Card.Content>
            <Card.Content align='center' extra>
              <Button size='big' color='yellow'>Bid</Button>
              <Button size='big' color='black'>Wish List</Button>
            </Card.Content>
        </Card>      
      </Card.Group>
    </Segment>
    </div>
    )
  }
}