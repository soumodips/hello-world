import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>So you came this far</h1>
    <p>Welcome! Check out my repos <a href="https://github.com/soumodips/" target="blank">here</a>.</p>
    <p>Did you bring coffee and cookies for me ? :p </p>
    <Link to="/page-2/">What now ?</Link>
  </div>
)

export default IndexPage
