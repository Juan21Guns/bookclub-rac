import React from 'react';
import axios from 'axios';

function App() {
  axios.get('http://0.0.0.0:80/working', { withCredentials: false })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="App">
      <p>This is still working</p>
    </div>
  );
}

export default App;
