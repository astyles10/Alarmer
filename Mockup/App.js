import React from "react";
import "./styles.css";

const DigitalOceanMockup = () => {
  return (
    <div className="container">
      {/* Header */}
      <header>
        <h1>DigitalOcean</h1>
        <button>Sign Up</button>
      </header>

      <div className="content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>CONTENTS</h2>
          <ul>
            <li>Prerequisites</li>
            <li>Step 1 – Installing</li>
            <li>Step 2 – Connecting Securely</li>
            <li>Step 3 – Running as a Service</li>
            <li>Conclusion</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <p>Your VNC server is now ready to use whenever your server boots up...</p>
          <div className="command-box">
            <p>
              <span>$</span> ssh -L <span className="highlight">59000</span>:localhost:
              <span className="highlight">5901</span> -C -N -l <span className="highlight">sammy</span> your_server_ip
            </p>
          </div>
          <p>Make a new connection using your VNC client software...</p>
        </main>
      </div>

      {/* Footer */}
      <footer>
        <p>Get Ubuntu on a hosted virtual machine in seconds...</p>
        <button>Learn More</button>
      </footer>
    </div>
  );
};

export default DigitalOceanMockup;
