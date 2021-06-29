// a component which we can access it with/without user login. By default we’ll open this component.

import React from 'react';
import profilepic from './Image/profilepic.jpg';

// The stracture of fullpage for Home.js

function Home() {
  return (
    <main>
    <div className="greet">
        <h1>Welcome</h1>
        <h2>To My Home Page</h2>
    </div>

    <div className="hs">
      <img src={profilepic} alt="" className="jpg"/>
    </div>
    </main>
  );
}

export default Home;
