import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, IconButton, Tab, Tabs,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { StyledMessage, StyledMessageContainer, StyledMessageTitle } from './style';

function DiscussionFeed({
  discussions, setDiscussions, setCurrentTabIndex, currentTabIndex,
}) {
  const handleTabChange = (e, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };

  const handleAddTab = async () => {
    await axios.post('https://jarvis-nodejs.onrender.com/discussion', {
      headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5174/',
      },
    }, { withCredentials: true }, { messageList: [] })
      // eslint-disable-next-line no-underscore-dangle
      .then((res) => setDiscussions((prev) => [...prev, { name: `Search ${prev.length + 1}`, messageList: [], id: res.data._id }]));
  };

  const handlePunctuation = (text) => text.split('\n').map((str, i) => {
    if (str === '' && i === 0) return null;
    return <p style={{ margin: 0 }}>{str}</p>;
  });

  return (
    <>
      <Box sx={{
        display: 'flex', width: '60vw',
      }}
      >
        <Tabs
          value={currentTabIndex}
          variant="scrollable"
          onChange={handleTabChange}
          indicatorColor="none"
          textColor="inherit"
          sx={{
            '& .MuiTabScrollButton-root:first-child': {
              position: 'absolute',
              top: '170px',
              left: '-40px',
            },
            '& .MuiTabScrollButton-root:last-child': {
              position: 'absolute',
              top: '170px',
              right: '-40px',
            },
          }}
        >
          {discussions.map((tab, i) => <Tab label={`tab ${i + 1}`} id={tab.id} key={tab.name} sx={{ background: currentTabIndex === i ? '#1a1a1a' : '#000', borderRadius: '8px 8px 0 0', marginRight: '5px' }} />)}
          <IconButton sx={{ marginLeft: '10px', color: '#FFF' }} size="large" onClick={handleAddTab}><AddIcon /></IconButton>
        </Tabs>

      </Box>
      <StyledMessageContainer>
        {discussions[currentTabIndex]?.messageList?.map((message) => (
          <>
            <StyledMessageTitle from={message.from}>{message.from}</StyledMessageTitle>
            <StyledMessage
              key={message.from}
              from={message.from}
            >
              {handlePunctuation(message.text)}
            </StyledMessage>
          </>
        ))}
      </StyledMessageContainer>
    </>
  );
}

DiscussionFeed.propTypes = {
  discussions: PropTypes.shape().isRequired,
  setDiscussions: PropTypes.func.isRequired,
  setCurrentTabIndex: PropTypes.func.isRequired,
  currentTabIndex: PropTypes.number.isRequired,
};

export default DiscussionFeed;
