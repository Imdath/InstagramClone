import {useState} from 'react'

import './index.css'

const Header = () => {
  const [searchInput, showSearchInput] = useState('')
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dextfnjwj/image/upload/v1671208483/instalogo-modified_h5oili.png"
          alt="insta icon"
          className="home-icon"
        />
        <h1 className="home-heading">Insta Share</h1>
      </div>
      <div className="search-container">
        <input type="search" className="search-bar" />
        <ul className="home-profile">
          <li className="home">Home</li>
          <li className="profile">Profile</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
