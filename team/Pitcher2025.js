import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Player.module.css";

const links = [
  { id: 1, path: "/allstars", label: "ALLSTARS", style: {} },
  { id: 2, path: "/player2025", label: "TEAM", style: { color: "aqua" } },
  {
    id: 3,
    path: "https://www.youtube.com/channel/UC6FZdLtK9wj-JethaIa9Qtw",
    label: "MOVIE",
    style: {},
  },
  { id: 4, path: "/award", label: "AWARD", style: {} },
];

const links2 = [
  { id: 1, path: "/player2025", label: "코칭스태프", style: {} },
  { id: 2, path: "/pitcher2025", label: "투수", style: { color: "black" } },
  { id: 3, path: "/batter2025", label: "타자", style: {} },
  { id: 4, path: "/bench", label: "등번호", style: {} },
];

function Pitcher() {
  const [activeLinks, setActiveLinks] = useState(
    Array(links.length).fill(false)
  );

  const handleMouseDown = (index) => {
    const newActiveLinks = [...activeLinks];
    newActiveLinks[index] = true;
    setActiveLinks(newActiveLinks);
  };

  const handleMouseUp = (index) => {
    const newActiveLinks = [...activeLinks];
    newActiveLinks[index] = false;
    setActiveLinks(newActiveLinks);
  };

  return (
    <div>
      <header className={styles.hair}>
        <div className={styles.headerTop}>
          <Link to="/">
            <img src="/img/logo.png" className={styles.logo} alt="Logo" />
          </Link>
        </div>
        <div className={styles.headerBottom}>
          <nav>
            <ul className={styles.navigation}>
              {links.map((link, index) => (
                <li key={link.id} className={styles.menu}>
                  <Link
                    to={link.path}
                    className={`${styles.route} ${
                      activeLinks[index] ? styles.routeActive : ""
                    }`}
                    onMouseDown={() => handleMouseDown(index)}
                    onMouseUp={() => handleMouseUp(index)}
                    style={link.style}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.mainManager}>
        <article>
          <section>
            <ul className={styles.tab}>
              {links2.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} style={link.style}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <div className={styles.year}>
              <select
                onChange={(e) => {
                  const selectedYear = e.target.value;
                  window.location.href = `/pitcher${selectedYear}`; // 페이지를 해당 연도로 이동
                }}
              >
                <option value="2025">2025시즌</option>
                <option value="2024">2024시즌</option>
              </select>
            </div>
            <div className={styles.inner}>
              <ul className={styles.playerList}>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>김승희</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>25</p>
                    </div>
                  </div>
                </li>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>김의진</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>32</p>
                    </div>
                  </div>
                </li>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>김주한</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>18</p>
                    </div>
                  </div>
                </li>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>이상민</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>29</p>
                    </div>
                  </div>
                </li>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>이승준</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>99</p>
                    </div>
                  </div>
                </li>
                <li className={styles.player}>
                  <div className={styles.profileBox}>
                    <img
                      src="/img/profile.jpg"
                      className={styles.profile}
                      alt="Profile"
                    />
                  </div>
                  <div className={styles.profileName}>
                    <div>
                      <p className={styles.name}>최성헌</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>5</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Pitcher;
