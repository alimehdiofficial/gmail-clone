import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { logout, selectUser } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://uploads-ssl.webflow.com/5d4c323a8620ae5cc5346818/5d8cb2e3e6f0c89071d07703_gmail-logo.png'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  )
}

export default Header
