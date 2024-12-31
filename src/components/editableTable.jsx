import React, { useState } from 'react';

const initialData = [
  ['Item 1', 'Descrição 1', '100'],
  ['Item 2', 'Descrição 2', '200'],
  ['Item 3', 'Descrição 3', '300'],
];

const EditableTable = () => {
  const [data, setData] = useState(initialData);
  const [editingCell, setEditingCell] = useState({ row: null, col: null });
  const [tempValue, setTempValue] = useState('');

  // Inicia a edição de uma célula
  const startEditing = (row, col, value) => {
    setEditingCell({ row, col });
    setTempValue(value);
  };

  // Salva o valor editado
  const saveCell = (row, col) => {
    const updatedData = [...data];
    updatedData[row][col] = tempValue;
    setData(updatedData);
    setEditingCell({ row: null, col: null });
    setTempValue('');
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => startEditing(rowIndex, colIndex, cell)}
                >
                  {editingCell.row === rowIndex && editingCell.col === colIndex ? (
                    <input
                      type="text"
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                      onBlur={() => saveCell(rowIndex, colIndex)}
                      autoFocus
                    />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;