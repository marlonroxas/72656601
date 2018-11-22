import React, {Component} from 'react'
import {
  Row,
  Col,
  Divider,
  Icon
} from 'antd'
import {WrapperSection3, Content3, Content4} from '../styled'


class Index extends Component {
  render() {
    const iconfig = {fontSize: '50px', padding: '10px', borderRadius: '100%', border: '1px solid #fff', color: '#009A9A'}
    return (
      <WrapperSection3>
        <Row>
          <Content3 lg={{span: 20, offset: 2}}>
            <h1>Our Services</h1>
            <h2>Manage your assets more effectively</h2>
            <Divider type='horizontal' />
            <p>Provide visibility for your sites by utlising Sitelab's proprietary technology that creates transparency, compare and benchmark productivity to performance, increase contract compliance, reduce risk to immediately address on-site problem reporting and measure your outcomes with reports.</p>
          </Content3>
          <Content4 lg={{span: 8, offset: 2}} align='center'>
            <img src='https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg' />
          </Content4>
          <Content4 lg={{span: 12}}>
            <Col lg={{span: 3}}><Icon style={iconfig} type='usergroup-add' /></Col>
            <Col lg={{span: 21}}>
              <h1>For your manager</h1>
            </Col>
            <Col lg={{span: 24}}>
              <p>
                Effectively manage your assets with a comprehensive dashboard featuring:
                <ul>
                  <li>Geo-fencing with sign on/off with facial recognition, biometric sign on/off</li>
                  <li>Schedule shifts to site specifications</li>
                  <li>Reduce risk by instant problem messaging</li>
                </ul>
              </p>
            </Col>
          </Content4>
        </Row>
      </WrapperSection3>
    )
  }
}

export default Index
