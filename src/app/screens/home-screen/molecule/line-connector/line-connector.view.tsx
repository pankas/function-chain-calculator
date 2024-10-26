// Update LineConnector component
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SvgLine = styled.svg`
  position: absolute;
  pointer-events: none;
  overflow: visible;
`;

// Update the LineConnector component for smoother and clearer lines
function LineConnector({ from, to }) {
    const [linePath, setLinePath] = useState('');
  
    useEffect(() => {
      const fromEl = document.getElementById(from);
      const toEl = document.getElementById(to);
  
      if (fromEl && toEl) {
        const fromRect = fromEl.getBoundingClientRect();
        const toRect = toEl.getBoundingClientRect();
  
        const startX = fromRect.left + fromRect.width / 2;
        const startY = fromRect.bottom;
        const endX = toRect.left + toRect.width / 2;
        const endY = toRect.top;
  
        // Create a more pronounced curved path
        const controlPointX1 = startX;
        const controlPointY1 = startY + 100; // Increase for a stronger curve
        const controlPointX2 = endX;
        const controlPointY2 = endY - 100; // Increase for a stronger curve
  
        setLinePath(
          `M${startX},${startY} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${endX},${endY}`
        );
      }
    }, [from, to]);
  
    return (
      <SvgLine>
        <path d={linePath} stroke="#4a90e2" strokeWidth="2" fill="none" />
      </SvgLine>
    );
  }
  

export default LineConnector;
