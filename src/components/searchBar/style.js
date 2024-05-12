import styled from '@emotion/styled';
import { IconButton, TextField } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledTextField = styled(TextField)`
  width: 100%;
  background: #1a1a1a;
  border-radius: 8px 0 0 8px;
  border: none;
  box-shadow: 0.1px 0.1px 3px 0 black;
  fieldset {
    border: none;
  }
   .MuiInputBase-root {
    height: 100%;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 5%;
  background: #1a1a1a;
  border-radius: 0 8px 8px 0;
  box-shadow: 0.1px 0.1px 3px 0 black;
  border: none;
  color: #FFF;
`;
