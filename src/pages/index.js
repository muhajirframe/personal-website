import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import gl from 'glamorous'
import anime from 'animejs'

export default class Index extends Component {
  componentDidMount = () => {
    const tl = anime.timeline({
      autoplay: true
    })
    tl
      .add({
        targets: '#wrapper',
        delay: 1000,
        duration: 2000,
        opacity: 1
      })
      .add({
        targets: '#heading',
        color: '#fff',
        translateY: [-100, 0]
      })
      .add({
        targets: '#tagline',
        translateX: [-50, 0],
        color: ['#000', '#fff']
      })
      .add({
        targets: '#email',
        opacity: 1,
        duration: 5000
      })
  }
  render() {
    return (
      <Wrapper id="wrapper">
        <Heading id="heading">Muhammad Muhajir</Heading>
        <div id="tagline">Front End Developer</div>
        <div>
          <Email id="email" href="mailto:hi@muhajirframe.com">
            hi@muhajirframe.com
          </Email>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = gl.div({
  fontFamily: 'monospace',
  minHeight: '100vh',
  textAlign: 'center',
  paddingTop: '13rem',
  backgroundColor: '#000',
  opacity: 0
})

const Heading = gl.h1({
  'font-family': 'monospace'
})
const Email = gl.a({
  display: 'inline-block',
  color: '#555',
  opacity: 0
})
