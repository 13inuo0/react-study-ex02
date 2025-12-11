import { useState } from "react";

export default function HeaderW() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  return (
    <header className="header">
      <h1>LOGO</h1>
      <nav>
        <ul className="nav-list">
          <li
            className="nav-item"
            onMouseEnter={() => setHoveredMenu("home")}
            onMouseLeave={() => setHoveredMenu(null)}>
            홈
            {hoveredMenu === "home" && (
              <ul className="submenu">
                <li className="submenu-item">메인</li>
                <li className="submenu-item">소개</li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setHoveredMenu("notice")}
            onMouseLeave={() => setHoveredMenu(null)}>
            공지사항
            {hoveredMenu === "notice" && (
              <ul className="submenu">
                <li className="submenu-item">공지사항 목록</li>
                <li className="submenu-item">새소식</li>
                <li className="submenu-item">이벤트</li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setHoveredMenu("gallery")}
            onMouseLeave={() => setHoveredMenu(null)}>
            갤러리
            {hoveredMenu === "gallery" && (
              <ul className="submenu">
                <li className="submenu-item">갤러리</li>
                <li className="submenu-item">문의</li>
              </ul>
            )}
          </li>
          <li
            className="nav-item"
            onMouseEnter={() => setHoveredMenu("faq")}
            onMouseLeave={() => setHoveredMenu(null)}>
            문의             {hoveredMenu === "faq" && (
              <ul className="submenu">
                <li className="submenu-item">문의사항</li>
                <li className="submenu-item">F&Q</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
