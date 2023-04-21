import React from "react";

const NavBar = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 3100,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="nav-bar">
        <section className="nav-items">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#team"onClick={handleClick}>Team</a>
              </li>
              <li class="dropdown">
                <a href="#">Algorithms</a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/Scheduling">Priority Scheduling</a>
                  </li>
                  <li>
                    <a href="/peterson">Peterson Algorithm</a>
                  </li>
                  <li>
                    <a href="/fcfs">
                      First Come First Serve <br /> Disc Scheduling
                    </a>
                  </li>
                  <li>
                    <a href="Optimal">
                      Optimal Page <br /> Replacement
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/chat">Chat Bot</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default NavBar;
