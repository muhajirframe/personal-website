import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default () => (
  <div style={{
    fontFamily: 'monospace',
    minHeight: '100vh',
    textAlign: 'center',
    paddingTop: '13rem'
  }}>
    <h1 style={{
      'font-family': 'monospace'
    }}>Muhammad Muhajir</h1>
    <div>Front End Developer</div>
    <div>
      <a href="https://twitter.com/_muhajir_" style={{
        display: 'inline-block',
        padding: '0 1rem',
        color: '#555'
      }}>twitter</a>
      <a href="https://github.com/muhajirframe" style={{
        display: 'inline-block',
        padding: '0 1rem',
        color: '#555'
      }}>github</a>
    </div>
  </div>
)
