import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState("notice");
  return (
    <div>
      {/* {버튼} */}
      <div className="tabs-buttons">
        <button onClick={() => setTab("notice")} className={`tab-button ${tab === "notice" ? "tab-btn-active" : ""}`}>
          공지사항
        </button>
        <button
          onClick={() => setTab("gallery")}
          className={`tab-button  ${tab === "gallery" ? "tab-btn-active" : ""}`}>
          갤러리
        </button>
      </div>
      {/* {내용} */}
      {tab === "notice" && (
        <ul>
          <li>공지내용 01</li>
          <li>공지내용 02</li>
          <li>공지내용 03</li>
          <li>공지내용 04</li>
        </ul>
      )}
      {tab === "gallery" && (
        <ul className="gallery-grid">
          <img src="https://picsum.photos/100" alt="g1" />
          <img src="https://picsum.photos/101" alt="g2" />
          <img src="https://picsum.photos/102" alt="g3" />
        </ul>
      )}
    </div>
  );
}
