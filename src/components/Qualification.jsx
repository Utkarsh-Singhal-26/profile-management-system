import React, { useState } from "react";
import { PlusCircle, MinusCircle } from "lucide-react";

const Qualification = ({qual, setQual}) => {
  const [newQual, setNewQual] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleDelete = (item) => {
    const index = qual.indexOf(item);
    if (index !== -1) {
      const updatedExp = [...qual];
      updatedExp.splice(index, 1);
      setQual(updatedExp);
    }
  };

  const handleInputChange = (e) => {
    setNewQual(e.target.value);
  };

  const handleConfirmAdd = () => {
    if (newQual.trim() !== "") {
      setQual((prev) => [...prev, newQual]);
      setNewQual("");
      setIsAdding(false);
    }
  };

  return (
    <div className="Qualification second-column">
      <ul>
        {qual.map((item, index) => (
          <li key={index} className="item">
            {item}
            <MinusCircle size={20} onClick={() => handleDelete(item)} />
          </li>
        ))}
        {isAdding && (
          <li className="item">
            <input type="text" onChange={handleInputChange} />
            <PlusCircle size={20} onClick={handleConfirmAdd} />
          </li>
        )}
      </ul>
      {!isAdding && <PlusCircle size={20} className="icon" onClick={handleAdd} />}
    </div>
  );
};

export default Qualification;
