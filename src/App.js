
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Editor from './editor/Editor';
import Previewer from './previewer/Previewer';
import { faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {
  const maximize = <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
  const minimize = <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />

  const [isMaximize, setIsMaximize] = useState(false)
  const [width, setWidth] = useState("50%");
  const [isResizing, setResizing] = useState(false)


  /* ------------------------- handle toggle maximize ------------------------- */
  const handleToggleMaximize = (string) => {
    if (string === "editor") {
      if (!isMaximize) {
        document.querySelector(".previewer-part").style.display = "none";
        document.querySelector(".divide").style.display = "none";
        setIsMaximize(!isMaximize);
        document.querySelector("#editor").style.height = "100vh";
      } else {
        document.querySelector(".previewer-part").style.display = "block";
        document.querySelector(".divide").style.display = "block";
        setIsMaximize(!isMaximize);
        document.querySelector("#editor").style.height = "100%";
      }
    } else {
      if (!isMaximize) {
        document.querySelector(".editor-part").style.display = "none";
        document.querySelector(".divide").style.display = "none";
        setIsMaximize(!isMaximize);
      } else {
        document.querySelector(".editor-part").style.display = "block";
        document.querySelector(".divide").style.display = "block";
        setIsMaximize(!isMaximize);
      }
    }

  }

  /* -------------------------------- function to handle when user drag divide-------------------------------- */
  // start drag divide
  const handleOnMouseDown = () => {
    setResizing(true)
  }

  const handleOnMouseMove = (e) => {
    if (!isResizing) {
      return //if user don't drag divide
    }
    const containerOffSetLeft = document.querySelector(".container").offsetLeft;
    const newLeftWidth = e.clientX - containerOffSetLeft;
    if (newLeftWidth > 100 && newLeftWidth < window.innerWidth - 100) {
      setWidth(`${newLeftWidth}px`)
    }

  }

  // finish drag divide
  const handleOnMouseUp = () => {
    setResizing(false)
  }

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleOnMouseMove);
      document.addEventListener("mouseup", handleOnMouseUp);
    } else {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleOnMouseMove);
      document.removeEventListener("mouseup", handleOnMouseUp);
    };
  }, [isResizing]);

  return (
    <div className='app'>
      <h1 className='title'>Mardown Previewer</h1>
      <p className='author'>by <a href="https://github.com/Son-Tr" target='_blank' rel="noopener noreferrer">Son-Tr</a></p>
      <div className='container' >
        <div className='editor-part' style={{ width: width }}>
          <div className="toolbar">
            <h2 >Editor</h2>
            <span className="icon" onClick={() => { handleToggleMaximize("editor") }}>
              {isMaximize ? minimize : maximize}
            </span>
          </div>
          <Editor />
        </div>
        <div className='divide' onMouseDown={handleOnMouseDown}></div>
        <div className='previewer-part' style={{ width: `calc(100%- ${width}-8px)` }}>
          <div className="toolbar">
            <h2 >Previewer</h2>
            <span className="icon" onClick={() => { handleToggleMaximize("previewer") }}>
              {isMaximize ? minimize : maximize}
            </span>
          </div>
          <Previewer />
        </div>
      </div>
    </div>
  );
}

export default App;
