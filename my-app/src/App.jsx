import React, { useState, useEffect } from "react";
import NoteItem from "./components/NoteItem";
import { SettingsContext } from "./contexts/SettingsContext";

function App() {
  const [fontSize, setFontSize] = useState("medium");

  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes_app_v1");
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved notes:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes_app_v1", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setNotes((prev) => [trimmed, ...prev]);
    setInputValue("");
  };

  const deleteNoteAt = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  const containerStyle = {
    minHeight: "100vh",
    padding: 24,
    background: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
  };

  const boxStyle = {
    maxWidth: 600,
    margin: "0 auto",
    background: "#f9fafb",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };

  const inputRow = { display: "flex", gap: 8, marginBottom: 12 };

  return (
    <SettingsContext.Provider value={{ fontSize, setFontSize }}>
      <div style={containerStyle}>
        <div style={boxStyle}>
          {<h1>Notes App </h1>}

          <div style={{ marginBottom: 16 }}>
            <label style={{ marginRight: 8 }}>Font size:</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <span style={{ marginLeft: 12, color: "#666" }}>
              (Global setting via Context)
            </span>
          </div>

          <div style={inputRow}>
            <input
              type="text"
              placeholder="Type a note..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ flex: 1, padding: 8 }}
              onKeyDown={(e) => {
                if (e.key === "Enter") addNote();
              }}
            />
            <button onClick={addNote}>Add</button>
          </div>

          <div>
            {notes.length === 0 ? (
              <p style={{ color: "#666" }}>No notes yet — add one!</p>
            ) : (
              notes.map((note, idx) => (
                <SettingsContext.Consumer key={idx}>
                  {({ fontSize }) => (
                    <NoteItem
                      text={note}
                      fontSize={fontSize}
                      deleteNote={() => deleteNoteAt(idx)}
                    />
                  )}
                </SettingsContext.Consumer>
              ))
            )}
          </div>
        </div>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
