import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <div className="navigator-container">
      <div>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            <div className="post-card prev">
              <div className="direction">이전 글</div>
              <div className="title">{previous.frontmatter.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.fields.slug} rel="next">
            <div className="post-card next">
              <div className="direction">다음 글</div>
              <div className="title">{next.frontmatter.title}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
