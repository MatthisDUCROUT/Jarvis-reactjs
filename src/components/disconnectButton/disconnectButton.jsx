import { IconButton } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';

function DisconnectButton({ handleClick, label }) {
  return (
    <div style={{ position: 'absolute', top: 10, right: -10 }}>
      <IconButton onClick={handleClick}>
        <LogoutIcon sx={{ color: 'white' }} />
        {label}
      </IconButton>
    </div>
  );
}

DisconnectButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

DisconnectButton.defaultProps = {
  label: null,
};

export default DisconnectButton;
