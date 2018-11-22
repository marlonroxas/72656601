import React, {Component} from 'react'
import {
  Row,
  Col,
} from 'antd'
import {WrapperSection6} from '../styled'


class Index extends Component {
  render() {
    return (
      <WrapperSection6>
        <Row>
          <Col lg={{span: 20, offset: 2}}>
            <h1>What is Lorem Ipsum?</h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
          </Col>
        </Row>
      </WrapperSection6>
    )
  }
}

export default Index
