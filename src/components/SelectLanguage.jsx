import React, { useEffect } from 'react';
import { Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import US from 'country-flag-icons/react/3x2/US';
import SA from 'country-flag-icons/react/3x2/SA';
import ES from 'country-flag-icons/react/3x2/ES';
import FR from 'country-flag-icons/react/3x2/FR';
import { useTranslation } from 'react-i18next';
import { use } from 'react';

const SelectLanguage = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = React.useState(localStorage.getItem('i18nextLng'));
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    window.location.reload();
    setLanguage(e);
    setAnchorEl(null);
    i18n.changeLanguage(e)
  };

  const flagStyle = {
    width: '1.5rem',
    borderRadius: '3px',
    marginRight: '7px',
  }

  useEffect(() => {
    if(language == "ar") {
      document.body.style.direction = 'rtl';
    } else {
      document.body.style.direction = 'ltr';
    }
  }, [language])
  return (
    <React.Fragment>
      <Tooltip title="Select Language">
        <IconButton
          onClick={handleClick}
          variant="text"
        >
          {
            language === 'en'
              ? <US title="English" style={flagStyle}/>
            : language === 'ar'
              ? <SA title="Arabic" style={flagStyle}/>
            : language === 'es'
              ? <ES title="Spain" style={flagStyle}/>
            : language === 'fr'
              ? <FR title="Frensh" style={flagStyle}/>
            : <US title="English" style={flagStyle}/>
          }
        </IconButton>
      </Tooltip>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleClose('en')}><US title="English" style={flagStyle}/> English</MenuItem>
        <MenuItem onClick={() => handleClose('ar')}><SA title="Arabic" style={flagStyle}/> Arabic</MenuItem>
        <MenuItem onClick={() => handleClose('es')}><ES title="Spain" style={flagStyle}/> Spain</MenuItem>
        <MenuItem onClick={() => handleClose('fr')}><FR title="Frensh" style={flagStyle}/> Frensh</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default SelectLanguage