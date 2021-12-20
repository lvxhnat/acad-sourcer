import React from 'react'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import {Link} from 'react-router-dom'

export default function NavButton(props) {
  const [anchorEl, setAnchorEl] = React.useState(false)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const menuname = props.menuname
  const menuitems = props.menuitems
  const menulinks = ![undefined, null].includes(props.menulinks) ? props.menulinks : []

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls="fade-menu"
        disableRipple={anchorEl}
        aria-haspopup="true"
        aria-expanded={anchorEl ? 'true' : undefined}
        style={{color: 'black', backgroundColor: 'transparent'}}
        onClick={handleClick}>
        {menuitems !== null && menuitems !== undefined ? <KeyboardArrowDownIcon /> : null}
        {menuname}
      </Button>
      {menuitems !== null && menuitems !== undefined ? (
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={anchorEl}
          onClose={handleClose}
          TransitionComponent={Fade}>
          {menuitems.map((item, i) => (
            <Link
              style={{textDecoration: 'none', color: 'black'}}
              key={i}
              to={{pathname: ![undefined, null].includes(menulinks[i]) ? menulinks[i] : ''}}>
              <MenuItem key={i} onClick={handleClose}>
                {item}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      ) : null}
    </div>
  )
}
