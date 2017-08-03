import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Muhammad Muhajir | muhajirframe"
          meta={[
            { name: "description", content: "Muhammad Muhajir's personal website" },
            { name: "keywords", content: "web developer, front end developer, fullstack developer"},
            { name: "theme-color", content:"#db5945"}
          ]}
        />
          {this.props.children()}
      </div>
    )
  }
}
