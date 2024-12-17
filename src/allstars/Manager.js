import React from "react";
import { Link } from "react-router-dom";
import styles from "./Manager.module.css";

function Manager() {
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
                <Link
                  to="/allstars"
                  className={styles.route}
                  style={{ color: "aqua" }}
                >
                  ALLSTARS
                </Link>
              </li>
              <li className={styles.menu}>
                <Link to="/player2025" className={styles.route}>
                  TEAM
                </Link>
              </li>
              <li className={styles.menu}>
                <Link
                  to="https://www.youtube.com/channel/UC6FZdLtK9wj-JethaIa9Qtw"
                  className={styles.route}
                >
                  MOVIE
                </Link>
              </li>
              <li className={styles.menu}>
                <Link to="/award" className={styles.route}>
                  AWARD
                </Link>
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
                <Link to="/allstars">팀연혁</Link>
              </li>
              <li>
                <Link to="/manager" style={{ color: "black" }}>
                  감독
                </Link>
              </li>
              <li>
                <Link to="/grade">리그성적</Link>
              </li>
            </ul>
          </section>
          <section>
            <div className={styles.inner}>
              <div>
                <img src="/img/manager.png" alt="kim" className={styles.kim} />
              </div>
              <div className={styles.file}>
                <p className={styles.first}>32</p>
                <p className={styles.second}>
                  김의진 <span className={styles.third}>감독</span>
                </p>
                <p className={styles.fourth}>&nbsp;KIM EUI JIN</p>
                <br />

                <p className={styles.fifth}>&nbsp;생년월일 | 1998-06-25</p>
                <p className={styles.fifth}>&nbsp;투타 | 우투우타</p>
                <p className={styles.fifth}>&nbsp;신장/체중 | 173cm 70kg</p>
                <p className={styles.fifth}>
                  &nbsp;경력 | 춘천리틀-춘천주니어-봉의고
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Manager;
