import React from "react";

const NoteItem = ({ text, deleteNote, fontSize }) => {
  const sizeMap = {
    small: "14px",
    medium: "18px",
    large: "22px",
  };

  const style = {
    fontSize: sizeMap[fontSize] || sizeMap.medium,
    padding: "8px 10px",

    border: "1px solid #ddd",
    borderRadius: 6,
    marginBottom: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
  };

  return (
    <div style={style}>
      <span>{text}</span>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
};

export default NoteItem;
