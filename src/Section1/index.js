import React, {Component} from 'react'
import {
  Row,
  Col,
  Menu
} from 'antd'

import {WrapperSection1, Navigation, Content1, Content2} from '../styled'
import Logo from '../assets/white_logo_transparent.png'

class Index extends Component {
  constructor(){
    super()
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }

  render() {
    const links = [
      {title: 'HOME', key: 'home'},
      {title: 'ABOUT US', key: 'about'},
      {title: 'SERVICES', key: 'services'},
      {title: 'OUR CLIENTS', key: 'clients'},
      {title: 'CONTACT', key: 'contact'},
    ]
    return (
      <WrapperSection1>
        <Navigation>
          <Col lg={{span: 10, offset: 2}}><img src={Logo} /></Col>
          <Col lg={{span: 10}}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <For each='row' index='index' of={links} >
                <Menu.Item key={row.key}>
                  {row.title}
                </Menu.Item>
              </For>
              
            </Menu>
          </Col>
        </Navigation>
        <Row>
          <Content1 lg={{span: 10, offset: 2}}>
            <h1>Your mobile on-site assistant</h1>
            <p>Leave uncertainty, spreadsheets, paperwork and miscommunication behind. Sitelab provides you the ability for time & attendance, shift allocation and generate service reports.</p>
            <p>
              <img src='https://9zzt1vsuo7-flywheel.netdna-ssl.com/wp-content/uploads/2018/06/app-store-button.png' />
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Get_it_on_Google_play.svg/1024px-Get_it_on_Google_play.svg.png' />
            </p>
          </Content1>
          <Content2 lg={{span: 10}} align='center'><img src='https://cdn.pixabay.com/photo/2017/02/08/17/47/smartphone-2049642_1280.png' /></Content2>
        </Row>
      </WrapperSection1>
    )
  }
}

export default Index
