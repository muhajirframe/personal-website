import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import gl from 'glamorous'

import "../css/typography.css"

const Wrapper = gl.div({
  minHeight: '100vh'
})

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="Muhammad Muhajir | muhajirframe"
          meta={[
            { name: "description", content: "Muhammad Muhajir's personal website" },
            { name: "keywords", content: "web developer, front end developer, fullstack developer"},
          ]}
        />
          {this.props.children()}
      </Wrapper>
    )
  }
}
