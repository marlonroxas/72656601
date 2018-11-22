import React, {Component} from 'react'
import {
  Row,
  Col,
  Icon
} from 'antd'
import {WrapperSection4, Content4} from '../styled'


class Index extends Component {
  render() {
    const iconfig = {fontSize: '50px', padding: '10px', borderRadius: '100%', color: '#009A9A'}
    return (
      <WrapperSection4>
        <Row>
          <Content4 lg={{span: 8, offset: 2}}>
            <Col lg={{span: 21}} align='right'>
              <h1>For your manager</h1>
            </Col>
            <Col lg={{span: 3}}><Icon style={iconfig} type='usergroup-add' /></Col>
            <Col lg={{span: 24}} align='right'>
              <p>
              Let Sitelab assist with you with easy to use time in attendance location based register. Monitor your next scheduled shifts.
              Access your specified list of tasks for your allocated shift so all jobs are completed.
              Report any problems directly to management with a live shift issue register.
              </p>
            </Col>
          </Content4>
          <Content4 lg={{span: 8}}>
            <img src='https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg' />
          </Content4>
        </Row>
      </WrapperSection4>
    )
  }
}

export default Index
