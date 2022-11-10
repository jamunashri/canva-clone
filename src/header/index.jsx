import React from "react";

const Header = ({ textDraggable, imageDraggable, text, handleInput, height, width, handleHeight, handleWidth }) => {
  return (
    <>
      <div className="header-box">
        <h1>Canva Clone</h1>
        {(textDraggable || imageDraggable) && (
          <div>
            <label> Enter Text Content
            <input type="text" value={text} onChange={handleInput} placeholder="Enter Text to change" />
            </label>
            <label> Enter Height of the Image
            <input type="number" value={height} onChange={handleHeight} placeholder="Enter Height of the image" />
            </label> 
            <label> Enter Width of the Image
            <input type="number" value={width} onChange={handleWidth} placeholder="Enter Width of the image" />
            </label>
          </div>
          
        )}
      </div>
    </>
  );
};
export default Header;
