import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({}) => (
  <footer>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <hr />
      <span>Copyright © Eric Jiang 2014 - {new Date().getFullYear()}</span>
      <span>
        Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </div>
  </footer>
)

export default Header
