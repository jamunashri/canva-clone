import "./App.css";
import React, { useState } from "react";
import Dragger from "./dragger";
import SideBar from "./sidebar";
import Header from "./header";

function App() {
  const [textDraggable, setTextDraggable] = useState(false);
  const [imageDraggable, setImageDraggable] = useState(false);
  const [text, setText] = useState("");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  return (
    <div className="App">
      <Header
        textDraggable={textDraggable}
        text={text}
        imageDraggable={imageDraggable}
        handleInput={(e) => setText(e.target.value)}
        width={width}
        height={height}
        handleHeight={(e) => setHeight(e.target.value)}
        handleWidth={(e) => setWidth(e.target.value)}
      />
      <div className="row">
        <div className="sidebar-column">
          <SideBar
            setImageDraggable={() => setImageDraggable(!imageDraggable)}
            setTextDraggable={() => setTextDraggable(!textDraggable)}
          />
        </div>
        <div className="main-column">
          <Dragger
            textDraggable={textDraggable}
            text={text}
            imageDraggable={imageDraggable}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
