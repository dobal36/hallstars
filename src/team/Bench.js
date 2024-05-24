import React from "react";
import { Link } from "react-router-dom";
import styles from "./Player.module.css";

function Bench() {
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
              <li className={styles.menu}>
                <Link to="/allstars">ALLSTARS</Link>
              </li>
              <li className={styles.menu} style={{ color: "aqua" }}>
                <Link to="/player">TEAM</Link>
              </li>
              <li className={styles.menu}>
                <Link to="https://youtube.com/@user-cq3sp3xf8g?si=pyGekwioZGJDndjA">
                  MOVIE
                </Link>
              </li>
              <li className={styles.menu}>
                <Link to="/photo">PHOTO</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className={styles.mainManager}>
        <article>
          <section>
            <ul className={styles.tab}>
              <li>
                <Link to="/player">코칭스태프</Link>
              </li>
              <li>
                <Link to="/pitcher">투수</Link>
              </li>
              <li>
                <Link to="/batter">타자</Link>
              </li>
              <li>
                <Link to="/bench" style={{ color: "black" }}>
                  대기선수
                </Link>
              </li>
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
