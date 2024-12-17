import React from "react";
import { Link } from "react-router-dom";
import styles from "./Manager.module.css";

function Allstars() {
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
                <Link to="/allstars" style={{ color: "black" }}>
                  팀연혁
                </Link>
              </li>
              <li>
                <Link to="/manager">감독</Link>
              </li>
              <li>
                <Link to="/grade">리그성적</Link>
              </li>
            </ul>
          </section>
          <section>
            <div className={styles.inner}>
              <div className={styles.history}>
                <p>2019.08.01&nbsp;&nbsp; | &nbsp;&nbsp;팀 창단</p>
                <p>
                  2019.08.08&nbsp;&nbsp; | &nbsp;&nbsp;제 3회 횡성군수기
                  전국대학클럽 야구대회 준우승
                </p>
                <p>
                  2021.07.30&nbsp;&nbsp; | &nbsp;&nbsp;제 2회 양구로부터
                  전국대학클럽 야구대회 4위
                </p>
                <p>
                  2022.02.18&nbsp;&nbsp; | &nbsp;&nbsp;2022 KUBA
                  대학클럽야구대회 IN 강원 우승
                </p>
                <p>
                  2022.07.25&nbsp;&nbsp; | &nbsp;&nbsp;KUSF 클럽챔피언십
                  중부지역 8위
                </p>
                <p>
                  2023.08.25&nbsp;&nbsp; | &nbsp;&nbsp;제 4회 청춘양구배
                  전국대학클럽 야구대회 4위
                </p>
                <p>
                  2023.10.29&nbsp;&nbsp; | &nbsp;&nbsp;제 1회 제천시 의림지배
                  전국대학클럽 야구대회 4위
                </p>

                <p>
                  2023.02.25&nbsp;&nbsp; | &nbsp;&nbsp;2024 제2회 야구&티볼
                  페스티벌 IN 양구 OB 3위
                </p>
                <p>
                  2024.07.13&nbsp;&nbsp; |
                  &nbsp;&nbsp;춘천시야구소프트볼협회장배(3부) 3위
                </p>
                <p>
                  2024.08.18&nbsp;&nbsp; | &nbsp;&nbsp;제 5회 청춘양구배
                  전국대학동아리야구대회(졸업생부문) 우승
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default Allstars;
