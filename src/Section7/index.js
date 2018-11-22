import React, {Component} from 'react'
import {
  Row,
  Col,
  Divider,
  Icon
} from 'antd'
import {WrapperSection7, Content3, Content4} from '../styled'


class Index extends Component {
  render() {
    const iconfig = {fontSize: '50px', padding: '10px', borderRadius: '100%', border: '1px solid #fff', color: '#009A9A'}
    return (
      <WrapperSection7>
        <Row>
          <Content3 lg={{span: 20, offset: 2}}>
            <h1>Get In Touch</h1>
            <h2>We're here to help 24/7</h2>
            <Divider type='horizontal' />
          </Content3>
          <Content4 lg={{span: 10, offset: 2}}>
            <p>Please change into:</p>
            <p>We are here to assist your organisation. Frustrated at the lack of transparency and compliance, our product is here to solve these issues.</p>
            <p>If you have any questions about our product and our company, please do not hesitate to contact us.</p>
            <Content4 lg={{span: 12}}>
              <h1>Our Address</h1>
            </Content4>
            <Content4 lg={{span: 12}}>
              <h1>Our Address</h1>
            </Content4>
            <Content4 lg={{span: 12}}>
              <h1>Our Address</h1>
            </Content4>
            <Content4 lg={{span: 12}}>
              <h1>Our Address</h1>
            </Content4>
          </Content4>
          <Content4 lg={{span: 10}} align='center'>
            <Icon style={iconfig} type='safety-certificate' theme='filled' />
            <Divider type='horizontal' />
            <h1>Time & Attendance</h1>
            <p>Measure and compare your time spent on site and identify efficiency against your resourcing requirements. View your productivity with a few clicks.</p>
          </Content4>
        </Row>
      </WrapperSection7>
    )
  }
}

export default Index
