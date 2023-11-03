import React from 'react'
import { Link } from 'gatsby'
import { ThemeSwitch } from '../theme-switch'

import './index.scss'

export const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={`/`} className="home-nav">
          {title}
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  )
}
