import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const StyledMessage = styled(Box)(((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  borderRadius: '8px',
  background: '#242424',
  width: '40%',
  gap: '10px',
  height: 'auto',
  marginLeft: props.from === 'you' ? 'auto' : '20px',
  marginRight: props.from === 'you' ? '20px' : 'auto',
  textAlign: 'left',
  padding: '15px 10px',
  '&::before': {
    position: 'absolute',
    right: props.from === 'you' && 10,
    left: props.from === 'api' && 10,
    width: '11px',
    height: '9px',
    display: 'block',
    background: '#242424',
    content: '""',
    borderRadius: props.from === 'you' ? '0 50% 100% 50%' : '50% 0 50% 100%',
  },
  '&::after': {
    position: 'absolute',
    right: props.from === 'you' && 10,
    left: props.from === 'api' && 10,
    width: '10px',
    height: '4px',
    display: 'block',
    background: '#1a1a1a',
    content: '""',
    borderRadius: props.from === 'you' ? '0 100% 100% 0' : '0 0 0 100%',
  },
})));

export const StyledMessageTitle = styled(Typography)(((props) => ({
  marginLeft: props.from === 'you' ? 'auto' : '28px',
  marginRight: props.from === 'you' ? '28px' : 'auto',
  textAlign: 'left',
})));

export const StyledMessageContainer = styled(Box)({
  boxShadow: '0.1px 0.1px 3px 0 black',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  background: '#1a1a1a',
  height: '60vh',
  maxWidth: '60vw',
  borderRadius: '0 0 8px 8px',
  overflowY: 'scroll',
  padding: '15px 0',
  marginBottom: '50px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    border: '4px solid #FFF',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-track-piece': {
    height: '90%',
  },
  '&::-webkit-scrollbar-track-piece:end': {
    background: 'transparent',
    marginBottom: '5px',
  },
  '&::-webkit-scrollbar-track-piece:start': {
    background: 'transparent',
    marginTop: '5px',
  },

});
