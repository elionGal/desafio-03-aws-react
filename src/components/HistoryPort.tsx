import React, { useState } from "react";
import '../styles/HistoryPortStyle.css'

interface HistoryProps {
  isEditing: boolean;
}

const HistoryPort: React.FC<HistoryProps> = ({ isEditing }) => {
  const [text, setText] = useState(
    "Olá, eu sou Felipe Pato e comecei minha carreira trabalhando em um pequeno escritório na California..."
  );
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    setText(editText);
  };

  return (
    <div className="myHistory">
      <h2 className="historyTitle">Minha história</h2>
      {isEditing ? (
        <textarea
          className="historyText"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p className="historyText">{text}</p>
      )}
      {isEditing && (
        <button type="button" className="saveButton" onClick={handleSave}>
          Salvar
        </button>
      )}
    </div>
  );
};

export default HistoryPort;
