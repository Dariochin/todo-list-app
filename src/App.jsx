import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Draggable from "react-draggable";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleButtonClick = () => {
    setClickPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setShowInput(true);
  };

  const handleConfirm = () => {
    setNotes([
      ...notes,
      { text: newNote, x: clickPosition.x, y: clickPosition.y },
    ]);
    setShowInput(false);
    setNewNote("");
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewNote("");
  };

  return (
    <div className="App">
      <button className="center-button" onClick={handleButtonClick}>
        Crea Nota
      </button>
      {showInput && (
        <div className="overlay">
          <div
            className="input-section"
            style={{ top: clickPosition.y, left: clickPosition.x }}
          >
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Inserisci il testo"
            />
            <button onClick={handleConfirm}>Conferma</button>
            <button onClick={handleCancel}>Annulla</button>
          </div>
        </div>
      )}
      {notes.map((note, index) => (
        <Draggable key={index}>
          <div
            className="note"
            style={{ position: "absolute", top: note.y, left: note.x }}
          >
            <span>{note.text}</span>
            <div className="container-svg">
              {
                <svg
                  width="490"
                  height="435"
                  viewBox="0 0 490 435"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1" filter="url(#filter0_f_198_107)">
                    <path
                      d="M78 30.903C74.8 257.658 41 329.575 30 404.243H73.5L78 30.903Z"
                      fill="black"
                    />
                  </g>
                  <g opacity="0.3" filter="url(#filter1_f_198_107)">
                    <path
                      d="M94.5 79.8253L72 400.176L97 400.68L94.5 79.8253Z"
                      fill="black"
                    />
                  </g>
                  <g filter="url(#filter2_d_198_107)">
                    <path
                      d="M481 20.4004C446.655 20.0054 208.769 18.5902 94.1196 17.932C90.9247 42.0231 90.7916 287.97 91.1244 407.932C134.255 407.932 367.681 407.603 479.003 407.438C477.805 370.709 479.835 134.109 481 20.4004Z"
                      fill="#FFF68B"
                    />
                  </g>
                  <path
                    opacity="0.02"
                    d="M481 20.4975C446.567 20.4186 209.073 18.0635 94.1291 17.932C93.0026 38.6665 92.5 63.9564 92 95.8436C135.242 95.8436 368.393 95.959 480 95.9261C480.5 73.4474 480.501 43.2522 481 20.4975Z"
                    fill="#222222"
                  />
                  <defs>
                    <filter
                      id="filter0_f_198_107"
                      x="0"
                      y="0.902954"
                      width="108"
                      height="433.34"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="15"
                        result="effect1_foregroundBlur_198_107"
                      />
                    </filter>
                    <filter
                      id="filter1_f_198_107"
                      x="52"
                      y="59.8253"
                      width="65"
                      height="360.854"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10"
                        result="effect1_foregroundBlur_198_107"
                      />
                    </filter>
                    <filter
                      id="filter2_d_198_107"
                      x="85"
                      y="17.932"
                      width="400"
                      height="400"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="-1" dy="5" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_198_107"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_198_107"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            </div>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default App;
