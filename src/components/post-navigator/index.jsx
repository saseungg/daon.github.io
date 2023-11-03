import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div className="navigator-container">
      <div>
        {previous && (
          <div className="post-card prev">
            <Link to={previous.fields.slug} rel="prev">
              <div className="direction">이전 글</div>
              <div className="title">{previous.frontmatter.title}</div>
            </Link>
          </div>
        )}
      </div>
      <div>
        {next && (
          <div className="post-card next">
            <Link to={next.fields.slug} rel="next">
              <div className="direction">다음 글</div>
              <div className="title">{next.frontmatter.title}</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
