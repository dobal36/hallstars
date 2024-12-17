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
  { id: 2, path: "/pitcher2025", label: "투수", style: {} },
  { id: 3, path: "/batter2025", label: "타자", style: {} },
  { id: 4, path: "/bench", label: "등번호", style: { color: "black" } },
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
              <img
                src="/img/backNumber.png"
                style={{ margin: "0 auto", display: "block" }}
                alt="등번호"
              />
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Bench;
