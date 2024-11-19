// App.js
import React, { useState } from 'react';
import './Assets/css/compo.css'

function App() {
  const [fontSize, setFontSize] = useState('medium'); 

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div className={`app-container font-${fontSize}`} style={{ fontSize: fontSize === 'small' ? '16px' : fontSize === 'medium' ? '20px' : '24px' }}>
      <h1>Students Information Portal</h1>
      <hr/>
      <div className="font-size-controls">
        <span>Font Size: </span>
        <button onClick={() => handleFontSizeChange('small')}>S</button>
        <button onClick={() => handleFontSizeChange('medium')}>M</button>
        <button onClick={() => handleFontSizeChange('large')}>L</button>
      </div>

      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </div>
  );
}

export default App;
