import React, {Component} from 'react'
import {Wrapper} from './styled'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </Wrapper>
    )
  }
}

export default App
