import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'

function Sidebar() {
  const SidebarOption = (Icon, title, number, selected) => (
    <div className={`sidebar__option ${selected && 'sidebar__option--active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )

  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
        onClick={() => dispatch(openSendMessage())}
      >
        compose
      </Button>
      {SidebarOption(InboxIcon, 'Inbox', '54', true)}
      {SidebarOption(StarIcon, 'Starred', '54')}
      {SidebarOption(AccessTimeIcon, 'Snoozed', '54')}
      {SidebarOption(LabelImportantIcon, 'Important', '54')}
      {SidebarOption(NearMeIcon, 'Sent', '54')}
      {SidebarOption(NoteIcon, 'Drafts', '54')}
      {SidebarOption(ExpandMoreIcon, 'More', '54')}
      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
