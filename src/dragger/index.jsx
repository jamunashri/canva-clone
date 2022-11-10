import React, {useState} from "react";
import Draggable from "react-draggable";

const Dragger = ({ textDraggable, text, imageDraggable, width, height }) => {
    let [activeDrags, setActiveDrags] = useState(0);
    const onStart = () => {
      setActiveDrags(activeDrags++);
    };
  
    const onStop = () => {
      setActiveDrags(activeDrags--);
    };
    console.log(imageDraggable,'imageDraggable',textDraggable,'textDraggable')
    const dragHandlers = { onStart, onStop };
  return (
    <>
    <div className="dragger">
        {(!textDraggable && !imageDraggable) && <>The Draggable parts will be here once you click any items on the Sidebar</>}
      {textDraggable && (
        <Draggable {...dragHandlers} >
          <div className="box">{text}</div>
        </Draggable>
      )}
      {imageDraggable && (
        <Draggable {...dragHandlers} >
            <img
              src="https://ik.imagekit.io/ikmedia/backlit.jpg"
              alt="draggable-img"
              width={width}
              height={height}
            />
        </Draggable>
      )}
      </div>
    </>
  );
};
export default Dragger;
