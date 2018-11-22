import React, {Component} from 'react'
import {
  Row,
  Icon
} from 'antd'
import {WrapperSection5, Content4} from '../styled'


class Index extends Component {
  render() {
    const iconfig = {fontSize: '50px', padding: '10px', borderRadius: '100%', color: '#009A9A'}
    return (
      <WrapperSection5>
        <Row>
          <Content4 align='center' lg={{span: 5, offset: 2}}>
            <p><Icon style={iconfig} type='check' /></p>
            <h1>888</h1>
            <p>Win</p>
          </Content4>
          <Content4 align='center' lg={{span: 5}}>
            <p><Icon style={iconfig} type='heart' /></p>
            <h1>888</h1>
            <p>Retain</p>
          </Content4>
          <Content4 align='center' lg={{span: 5}}>
            <p><Icon style={iconfig} type='heart' /></p>
            <h1>888</h1>
            <p>Manage</p>
          </Content4>
          <Content4 align='center' lg={{span: 5}}>
            <p><Icon style={iconfig} type='heart' /></p>
            <h1>888</h1>
            <p>Personnel</p>
          </Content4>
        </Row>
      </WrapperSection5>
    )
  }
}

export default Index
