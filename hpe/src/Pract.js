import React, { useState, useRef } from 'react';
import './Pract.css';
const Pract = () => {
    const [leftWidth, setLeftWidth] = useState(50); // Initial width of A is 50%
    const isResizing = useRef(false);
  
    const handleMouseDown = () => {
      isResizing.current = true;
    };
  
    const handleMouseMove = (e) => {
      if (isResizing.current) {
        const newLeftWidth = (e.clientX / window.innerWidth) * 100;
        setLeftWidth(Math.max(0, Math.min(newLeftWidth, 100)));
      }
    };
  
    const handleMouseUp = () => {
      isResizing.current = false;
    };
  
    React.useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);
  
    return (
      <div className="container">
        <div className="resizable" style={{ width: `${leftWidth}%` }}>A</div>
        <div className="divider" onMouseDown={handleMouseDown}></div>
        <div className="resizable" style={{ width: `${100 - leftWidth}%` }}>B</div>
      </div>
    );
  };


export default Pract
