import React, { useState } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ elements }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [hoveredElement, setHoveredElement] = useState('');

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = (elementName) => {
    setHoveredElement(elementName);
  };

  const handleMouseLeave = () => {
    setHoveredElement('');
  };

  return (
    <>
      <div
        className="custom-cursor"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      >
        {hoveredElement && <div className="circle">{hoveredElement}</div>}
      </div>
      <div className="content" onMouseMove={handleMouseMove}>
        {elements.map((element, index) => (
          <div
            key={index}
            className="hover-div"
            onMouseEnter={() => handleMouseEnter(element)}
            onMouseLeave={handleMouseLeave}
          >
            {element}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCursor;
