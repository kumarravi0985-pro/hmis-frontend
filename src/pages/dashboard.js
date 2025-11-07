import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Complete Health Ecosystem</h1>
      <p className="dashboard-subtitle">
        AI-powered healthcare platform with advanced analytics, community
        support, and personalized wellness tracking
      </p>
     

      <div className="cards-container">
        <div className="card">
          <h2>98%</h2>
          <p>HEALTH SCORE</p>
          <span>Improved this week</span>
        </div>

        <div className="card">
          <h2>12</h2>
          <p>ACTIVE RECORDS</p>
          <span>Recently added</span>
        </div>

        <div className="card">
          <h2>5</h2>
          <p>CONNECTED DEVICES</p>
          <span>All devices active</span>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>AI MONITORING</p>
          <span>Real-time analysis</span>
        </div>

        <div className="card">
          <h2>3</h2>
          <p>ACHIEVEMENTS</p>
          <span>Goal completed</span>
        </div>

        <div className="card">
          <h2>2.5K</h2>
          <p>COMMUNITY</p>
          <span>Active members</span>
        </div>

          <div className="card">
          <h2>1.5K</h2>
          <p>ABDM</p>
          <span>ABHA members</span>
        </div>
          <div className="card">
          <h2>5K</h2>
          <p>EMR</p>
          <span>Health Records</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
