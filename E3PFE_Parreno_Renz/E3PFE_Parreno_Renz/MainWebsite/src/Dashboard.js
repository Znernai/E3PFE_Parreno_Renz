/*  It’s a private page that users can access only after successfully logged in.
 it will also provide the option to logout from user account in the same component. */

import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  // this is the output that can see if you start the website
  return (
    <main>
    <div>
      <div className="greet">
      <h1>Welcome {user.name}!</h1><br /><br />
      <h2>Section : BSIT32-E2<br /><br />
      Course : Information Technology<br /><br />
      Hobbies : Board Games</h2><br /><br />
      </div>
      <div className="logout">
      <input type="button" onClick={handleLogout} value="Logout" />
      </div>
    </div>
    </main>
  );
}

export default Dashboard;
