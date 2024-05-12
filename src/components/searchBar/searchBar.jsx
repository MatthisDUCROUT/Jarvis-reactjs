import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import { LinearProgress } from '@mui/material';
import { StyledIconButton, StyledTextField } from './style';

function SearchBar({
  handleSearch,
  searchInput,
  setSearchInput,
  isLoading,
}) {
  return (
    <div style={{
      display: 'flex', maxHeight: '40px', width: '100%',
    }}
    >
      {isLoading && <LinearProgress />}
      <StyledTextField
        value={searchInput}
        inputProps={{ style: { color: '#FFF' } }}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Tapez votre question ici ..."
      />
      <StyledIconButton
        sx={{
          paddingRight: '10px',
        }}
        onClick={handleSearch}
      >
        <SendIcon fontSize="small" />
      </StyledIconButton>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
