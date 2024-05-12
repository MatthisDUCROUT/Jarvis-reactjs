import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DiscussionFeed from '../components/discussionFeed/discussionFeed';
import SearchBar from '../components/searchBar/searchBar';

function SearchPage({ discussions, setDiscussions }) {
  const [searchInput, setSearchInput] = useState('');
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);

  const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTE3MjJiN2ItYmU0MC00ZmNhLWExNmMtM2JmMWM5NTQ4MGE1IiwidHlwZSI6ImFwaV90b2tlbiJ9.z_0Z1WH6Pt5b0vhxaRMf0CGHxMcIlRNC7RymklLstKM';
  const bearer = `Bearer ${API_KEY}`;
  const API_URL = 'https://api.edenai.run/v2/text/generation';

  const options = {
    method: 'POST',
    url: API_URL,
    headers: {
      authorization: bearer,
    },
    data: {
      providers: 'cohere',
      text: searchInput,
      temperature: 0.2,
      max_tokens: 250,
    },
  };

  const handleSearch = async () => {
    setIsSending(true);
    if (searchInput !== '') {
      const newDiscussions = discussions;
      newDiscussions[currentTabIndex].messageList = [...discussions[currentTabIndex].messageList, { from: 'you', text: searchInput }];
      await axios.put(`https://jarvis-nodejs.onrender.com/discussion/${discussions[currentTabIndex].id}`, { ...newDiscussions[currentTabIndex].messageList });
      setDiscussions([...newDiscussions]);
      setSearchInput('');
      await axios.request(options)
        .then((res) => {
          newDiscussions[currentTabIndex].messageList = [...discussions[currentTabIndex]
            .messageList, { from: 'api', text: res.data.cohere.generated_text }];
          setDiscussions([...newDiscussions]);
        }).finally(() => axios.put(
          `https://jarvis-nodejs.onrender.com/discussion/${discussions[currentTabIndex].id}`,
          { ...newDiscussions[currentTabIndex].messageList },
        ));
      setIsSending(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DiscussionFeed
        discussions={discussions}
        setDiscussions={setDiscussions}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <SearchBar
        isSending={isSending}
        setIsSending={setIsSending}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
    </div>
  );
}

SearchPage.propTypes = {
  discussions: PropTypes.shape([]).isRequired,
  setDiscussions: PropTypes.func.isRequired,
};

export default SearchPage;
