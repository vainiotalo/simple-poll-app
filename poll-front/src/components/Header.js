import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
    return(
        <div className="Header">
            <div id="header">
                <div id="header-buttons">
                    <Link to={'/polls'}>
                        <button id="header-button" type="button" onClick={void(0)}>Polls</button>
                    </Link>
                    <Link to={'/'}>
                        <button id="header-button" type="button" onClick={void(0)}>Create Poll</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
