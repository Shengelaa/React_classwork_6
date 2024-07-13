import React, { useState } from "react";

const App = () => {
  const [volume, setVolume] = useState(10);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor='volume'></label>
        <input
          type='range'
          id='volume'
          name='volume'
          min='10'
          max='60'
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div>
        <p style={{ fontSize: `${volume}px` }}>Hello Mindia</p>
      </div>
    </div>
  );
};

export default App;
