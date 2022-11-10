import React from "react";

const SideBar = ({ setImageDraggable, setTextDraggable }) => {
  return (
    <>
      <div className="sidebar">
        <div className="box" onClick={setTextDraggable}>
          Text Box
        </div>
        <div className="img-box" onClick={setImageDraggable}>
          <img
            src="https://ik.imagekit.io/ikmedia/backlit.jpg"
            alt="draggable-img"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </>
  );
};
export default SideBar;
