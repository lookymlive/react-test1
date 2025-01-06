// Lista.tsx
import React, { useState } from 'react';

interface ListaProps {
  someProp: string;
}

const Lista: React.FC<ListaProps> = () => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        id="itemInput"
        placeholder="Add a item to the list"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;