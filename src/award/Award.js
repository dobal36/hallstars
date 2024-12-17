import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Award.module.css";

const links = [
  { id: 1, path: "/allstars", label: "ALLSTARS", style: {} },
  { id: 2, path: "/player2025", label: "TEAM", style: {} },
  {
    id: 3,
    path: "https://www.youtube.com/channel/UC6FZdLtK9wj-JethaIa9Qtw",
    label: "MOVIE",
    style: {},
  },
  { id: 4, path: "/award", label: "AWARD", style: { color: "aqua" } },
];

const links2 = [
  { id: 1, path: "/award", label: "수상자", style: { color: "black" } },
];

function Award() {
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
              <div className={styles.year}>
                <select
                  onChange={(e) => {
                    const selectedYear = e.target.value;
                    window.location.href = `/batter${selectedYear}`; // 페이지를 해당 연도로 이동
                  }}
                >
                  <option value="2024">2024시즌</option>
                  {/* <option value="2025">2025시즌</option> */}
                </select>
              </div>
              <div className={styles.mold}>
                <ul className={styles.playerList}>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>평균자책점</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>김의진</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>5.25</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>탈삼진</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p
                        className={styles.titleholder}
                        style={{ fontSize: "26px" }}
                      >
                        김의진, 최성헌
                      </p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>14</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>타율</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>박준영</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>0.586</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>안타</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p
                        className={styles.titleholder}
                        style={{ fontSize: "26px" }}
                      >
                        권대근, 박준영
                      </p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>17</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>홈런</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p
                        className={styles.titleholder}
                        style={{ fontSize: "16px" }}
                      >
                        권대근, 박준영, 김석민
                      </p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>1</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>타점</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>박준영</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>18</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>득점</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>김의진</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>27</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>출루율</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>박준영</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>0.676</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>장타율</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>박준영</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>1.069</p>
                      </div>
                    </div>
                  </li>
                  <li className={styles.player}>
                    <div className={styles.recordName}>
                      <p>도루</p>
                    </div>
                    <div className={styles.profileBox}>
                      <p className={styles.titleholder}>최현서</p>
                    </div>
                    <div className={styles.profileName}>
                      <div>
                        <p className={styles.record}>9</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Award;
