import React from 'react'
import './Header.css'
import punkLogo from '../res/images/cryptopunk-logo.png'
import searchIcon from '../res/images/search.png'
import themeSwitchIcon from '../res/images/theme-switch.png'

export const Header = () => {
    return <div className='header'>
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt=''/>
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} alt={"search icon"}/>
            </div>
            <input className='searchInput' placeholder='Collection, item or user...'/>
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitchIcon} alt={"theme switch"}/>
            </div>
        </div>

        <div className='loginButton'>GET IN

        </div>


    </div>
}

