import React from 'react';

const UserDashboard = ({ user }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg font-sans">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-4xl text-blue-400 mb-4">
          +
        </div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-400">{user.username}</p>
        <p className="text-sm text-gray-400 mb-2">Joined {user.joinDate}</p>
        <div className="flex justify-center space-x-4">
          <span>{user.following} Following</span>
          <span>{user.followers} Followers</span>
        </div>
        {/* Country flag can be added here */}
      </div>
      
      <div className="bg-gray-700 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🔥", value: user.dayStreak, label: "Day streak" },
            { icon: "⚡", value: user.totalXP, label: "Total XP" },
            { icon: "🛡️", value: user.currentLeague || 'None', label: "Current league" },
            { icon: "🏅", value: user.topFinishes, label: "Top 3 finishes" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-600 p-3 rounded-lg text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-700 rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-4">🔥</div>
          <div className="flex-grow">
            <h3 className="font-semibold">Wildfire</h3>
            <div className="bg-gray-600 h-2 rounded-full mt-1">
              <div 
                className="bg-blue-500 h-full rounded-full" 
                style={{width: `${(user.wildfireProgress / 3) * 100}%`}}
              ></div>
            </div>
          </div>
          <span className="ml-2">{user.wildfireProgress}/3</span>
        </div>
        <button className="text-blue-400 font-semibold">VIEW ALL</button>
      </div>
    </div>
  );
};

export default UserDashboard;