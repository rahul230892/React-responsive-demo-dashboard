import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="card">
          <h2>Card 1</h2>
        </div>
        <div className="card">
          <h2>Card 2</h2>
        </div>
        <div className="card">
          <h2>Card 3</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
