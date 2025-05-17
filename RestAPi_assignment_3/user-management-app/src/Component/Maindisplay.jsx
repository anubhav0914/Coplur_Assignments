import React, { useState } from 'react';
import UserList from './UserList';
import SingleUser from './SingleUser';

const MainDisplay = () => {
  const [view, setView] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Enquiry</h1>

      <div className="space-x-4 mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setView('list')}
        >
          Get All Users
        </button>

        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => setView('single')}
        >
          Get User by ID
        </button>
      </div>

      {view === 'list' && <UserList />}
      {view === 'single' && <SingleUser />}
    </div>
  );
};

export default MainDisplay;
