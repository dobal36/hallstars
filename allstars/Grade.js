import React from "react";
import { Link } from "react-router-dom";
import styles from "./Manager.module.css";

function Grade() {
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
                <Link to="/manager">감독</Link>
              </li>
              <li>
                <Link to="/grade" style={{ color: "black" }}>
                  리그성적
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <div className={styles.inner2}>
              <div>
                <img
                  src="/img/grade.png"
                  width={"590px"}
                  className={styles.grade}
                  alt="gra"
                />
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Grade;
