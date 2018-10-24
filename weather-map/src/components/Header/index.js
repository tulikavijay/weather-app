import React from 'react'
import Link from 'gatsby-link'
import ToggleTheme from './ToggleTheme'


const Header = () => (
  <div className="main__header" 
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div className="app-brand_container">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            Weather App
          </Link>
        </h1>
      </div>
      <ToggleTheme className="ToggleTheme_container" />
    </div>
    
  </div>
)

export default Header
