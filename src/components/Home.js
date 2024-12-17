<<<<<<< HEAD
import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Home() {
  return (
    <div className={styles.Home}>
      <Link to="https://www.instagram.com/hallym_allstars?igsh=MTM0Z2FqZDk2NDc1Mw==">
        <img src="/img/logo.png" className={styles.logo} alt="logo" />
      </Link>
      <main className={styles.mainhome}>
        <header className={styles.headerhome}>
          <Link to="https://www.instagram.com/hallym_allstars?igsh=MTM0Z2FqZDk2NDc1Mw==">
            <img src="/img/logo.png" className={styles.logo2} alt="logo" />
          </Link>
          <button className={styles.btn}>메뉴</button>
        </header>
        <nav className={styles.navigation} aria-hidden="true">
          <ol className={styles.navigationList}>
            {[
              "감독",
              "총무",
              "운영위원장",
              "운영위원",
              "운영위원",
              "선수단",
              "영상관",
              "사진관",
            ].map((item, index) => (
              <li className={styles.navigationMenu} key={index}>
                <Link to="" className="navigation-btn">
                  <span>{item}</span>
                  <img src="/img/arrow.png" alt="arrow" />
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className={classNames(styles.menu, styles.item1)}>
          <Link to="/manager">
            {/* <video
              src="/media/manager.mp4"
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              controls
            ></video> */}
            <img
              src="../img/manager.jpg"
              width="100%"
              height="100%"
              alt="manager"
            />
            <div className={styles.text}>
              <p className={styles.ment1}>MANAGER</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item2)}>
          <Link to="/player2025">
            <img
              src="../img/player.jpg"
              width="100%"
              height="100%"
              alt="player"
            />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment2)}>PLAYER</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item3)}>
          <Link to="https://www.youtube.com/channel/UC6FZdLtK9wj-JethaIa9Qtw">
            <img src="/img/movie.jpg" width="100%" height="100%" alt="movie" />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment3)}>MOVIE</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item4)}>
          <Link to="/award">
            <img src="/img/award.jpg" width="100%" height="100%" alt="awa" />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment2)}>AWARD</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
=======
import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Home() {
  return (
    <div className={styles.Home}>
      <Link to="https://www.instagram.com/hallym_allstars?igsh=MTM0Z2FqZDk2NDc1Mw==">
        <img src="/img/logo.png" className={styles.logo} alt="logo" />
      </Link>
      <main className={styles.mainhome}>
        <header className={styles.headerhome}>
          <Link to="https://www.instagram.com/hallym_allstars?igsh=MTM0Z2FqZDk2NDc1Mw==">
            <img src="/img/logo.png" className={styles.logo2} alt="logo" />
          </Link>
          <button className={styles.btn}>메뉴</button>
        </header>
        <nav className={styles.navigation} aria-hidden="true">
          <ol className={styles.navigationList}>
            {[
              "감독",
              "총무",
              "운영위원장",
              "운영위원",
              "운영위원",
              "선수단",
              "영상관",
              "사진관",
            ].map((item, index) => (
              <li className={styles.navigationMenu} key={index}>
                <Link to="" className="navigation-btn">
                  <span>{item}</span>
                  <img src="/img/arrow.png" alt="arrow" />
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className={classNames(styles.menu, styles.item1)}>
          <Link to="/manager">
            {/* <video
              src="/media/manager.mp4"
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              controls
            ></video> */}
            <img
              src="../img/manager.jpg"
              width="100%"
              height="100%"
              alt="manager"
            />
            <div className={styles.text}>
              <p className={styles.ment1}>MANAGER</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item2)}>
          <Link to="/player">
            <img
              src="../img/player.jpg"
              width="100%"
              height="100%"
              alt="player"
            />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment2)}>PLAYER</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item3)}>
          <Link to="https://youtube.com/@user-cq3sp3xf8g?si=pyGekwioZGJDndjA">
            <img src="/img/movie.jpg" width="100%" height="100%" alt="movie" />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment3)}>MOVIE</p>
            </div>
          </Link>
        </div>
        <div className={classNames(styles.menu, styles.item4)}>
          <Link to="/photo">
            <img src="/img/photo.jpg" width="100%" height="100%" alt="pho" />
            <div className={styles.text}>
              <p className={classNames(styles.ment1, styles.ment2)}>PHOTO</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
>>>>>>> 61a29665814f2130970d1268814b1d10d8b6dc64
