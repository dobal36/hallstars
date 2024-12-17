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
  { id: 1, path: "/player2024", label: "코칭스태프", style: {} },
  { id: 2, path: "/pitcher2024", label: "투수", style: {} },
  { id: 3, path: "/batter2024", label: "타자", style: { color: "black" } },
  { id: 4, path: "/bench", label: "등번호", style: {} },
];

function Batter() {
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

  const navigate = useNavigate();

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    navigate(`/player${selectedYear}`);
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
              <select onChange={handleYearChange}>
                <option value="2024">2024시즌</option>
                <option value="2025">2025시즌</option>
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
                      <p className={styles.name}>
                        강현준 <span>포수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>6</p>
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
                      <p className={styles.name}>
                        권대근 <span>1루수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>9</p>
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
                      <p className={styles.name}>
                        김건우 <span>유격수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>39</p>
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
                      <p className={styles.name}>
                        김석민 <span>1루수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>36</p>
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
                      <p className={styles.name}>
                        김의진 <span>포수</span>
                      </p>
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
                      <p className={styles.name}>
                        박영빈 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>8</p>
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
                      <p className={styles.name}>
                        박준영 <span>3루수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>36</p>
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
                      <p className={styles.name}>
                        심민성 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>3</p>
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
                      <p className={styles.name}>
                        윤영준 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>51</p>
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
                      <p className={styles.name}>
                        이윤환 <span>1루수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>17</p>
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
                      <p className={styles.name}>
                        이찬희 <span>2루수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>7</p>
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
                      <p className={styles.name}>
                        정준호 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>65</p>
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
                      <p className={styles.name}>
                        최재원 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>27</p>
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
                      <p className={styles.name}>
                        최현서 <span>외야수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>11</p>
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
                      <p className={styles.name}>
                        한기민 <span>유격수</span>
                      </p>
                    </div>
                    <div className={styles.backNumber}>
                      <p>14</p>
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

export default Batter;
