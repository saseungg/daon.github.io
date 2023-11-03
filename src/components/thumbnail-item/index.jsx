import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
import { CategoryIcon } from './icon/category-icon'
import { DateIcon } from './icon/date-icon'
import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug} className="thumbnail-text">
      <h3>{node.frontmatter.title || node.fields.slug}</h3>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />

      <div className="thumbnail-subinfo">
        <div className="subinfo-box">
          <DateIcon />
          <span>{node.frontmatter.date}</span>
        </div>
        <div className="subinfo-box">
          <CategoryIcon />
          <span>{node.frontmatter.category}</span>
        </div>
      </div>
    </div>
  </Link>
)
