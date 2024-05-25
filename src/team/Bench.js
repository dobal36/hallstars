import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Player.module.css";

const links = [
  { id: 1, path: "/allstars", label: "ALLSTARS", style: {} },
  { id: 2, path: "/player", label: "TEAM", style: { color: "aqua" } },
  {
    id: 3,
    path: "https://youtube.com/@user-cq3sp3xf8g?si=pyGekwioZGJDndjA",
    label: "MOVIE",
    style: {},
  },
  { id: 4, path: "/photo", label: "PHOTO", style: {} },
];

const links2 = [
  { id: 1, path: "/player", label: "코칭스태프", style: {} },
  { id: 2, path: "/pitcher", label: "투수", style: {} },
  { id: 3, path: "/batter", label: "타자", style: {} },
  { id: 4, path: "/bench", label: "대기선수", style: { color: "black" } },
];

function Bench() {
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
                      <p className={styles.name}>김기현</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>0</p>
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
                      <p className={styles.name}>최근우</p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>2</p>
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

export default Bench;
