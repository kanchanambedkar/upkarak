import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // === intialize default chess board dimensions 
  const [boxSize, setBoxSize] = useState(8);
  const [chessArray, setChessArray] = useState([]);

  // === for creating no of rows and colums
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < boxSize; i++) {
      newArray.push([]);
      for (let j = 0; j < boxSize; j++) {
        newArray[i].push({ row: i, col: j });
      }
    }
    setChessArray(newArray);
  }, [boxSize]);

  // === dynamically change no of Ranks and Files of chess
  const handleChange = (e) => {
    setBoxSize(e.target.value);
  };

  return (
    <div className="App py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
        <h2 className="mb-4 fw-bolder">Chess Board</h2>
            <div className="form-group mb-3">
              <label className="fw-medium mb-1">
                Please Enter no of Ranks and Files of the Chess Board (in px)
              </label>
              <input
                className="w-100 border-start-0 border-end-0 border-top-0"
                type="text"
                value={boxSize}
                name="width"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-9 ps-5">
            <div className="chess-container bg-grey ms-auto">
              {chessArray.map((row, i) => (
                <div key={i} className="row">
                  {row.map((box, j) => (
                    <div key={j} className={`col ${ (box.row + box.col) % 2 === 0 ? "bg-white" : "bg-black"}`} style={{height: '50px'}}>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
