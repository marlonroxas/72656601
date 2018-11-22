import React, {Component} from 'react'
import {
  Row,
  Col,
  Divider,
  Icon
} from 'antd'
import {WrapperSection2, Content3, Content4} from '../styled'


class Index extends Component {
  render() {
    const iconfig = {fontSize: '50px', padding: '10px', borderRadius: '100%', border: '1px solid #fff', color: '#009A9A'}
    return (
      <WrapperSection2>
        <Row>
          <Content3 lg={{span: 20, offset: 2}}>
            <h1>Welcome to <span>Sitelab</span></h1>
            <h2>Benefits of using Sitelab for your organisation</h2>
            <Divider type='horizontal' />
            <p>Provide visibility for your sites by utlising Sitelab's proprietary technology that creates transparency, compare and benchmark productivity to performance, increase contract compliance, reduce risk to immediately address on-site problem reporting and measure your outcomes with reports.</p>
          </Content3>
          <Content4 lg={{span: 6, offset: 2}} align='center'>
            <Icon style={iconfig} type='safety-certificate' theme='filled' />
            <Divider type='horizontal' />
            <h1>Compliance</h1>
            <p>Access your site specific records from you or your provider's records such as induction, training records, certifications, insurance details and more.</p>
          </Content4>
          <Content4 lg={{span: 6}} align='center'>
            <Icon style={iconfig} type='safety-certificate' theme='filled' />
            <Divider type='horizontal' />
            <h1>Time & Attendance</h1>
            <p>Measure and compare your time spent on site and identify efficiency against your resourcing requirements. View your productivity with a few clicks.</p>
          </Content4>
          <Content4 lg={{span: 6}} align='center'>
            <Icon style={iconfig} type='safety-certificate' theme='filled' />
            <Divider type='horizontal' />
            <h1>Risk Management</h1>
            <p>Create visibility and address on-site incidents immediately. Access reports and send messages to building managers, supervisors and personnel.</p>
          </Content4>
        </Row>
      </WrapperSection2>
    )
  }
}

export default Index
