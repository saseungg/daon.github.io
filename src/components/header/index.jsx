import React from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { ThemeSwitch } from '../theme-switch'

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
