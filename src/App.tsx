import React, { useState } from 'react';


import MyItems from './components/items';
import InputWithIcon from './components/search';

import './App.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function App() {
  const [query, setQuery] = useState("");
  const [formats, setFormats] = useState(() => ['']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <div className='app'>
      <InputWithIcon setQuery={setQuery} />
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        className='btnGroup'
      >
        <ToggleButton value="album" aria-label="album">
          Search for Album
        </ToggleButton>
        <ToggleButton value="artist" aria-label="artist">
          Search for Artist
        </ToggleButton>
        <ToggleButton value="song" aria-label="song">
          Search for Song
        </ToggleButton>
      </ToggleButtonGroup>
      <MyItems search={query} />
    </div>
  );

}

export default App;
