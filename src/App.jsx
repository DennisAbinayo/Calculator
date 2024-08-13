import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("useeffect used");
  }, []);

   function handleOperatorClick(e) {
     setValue(value + e.target.value);
   }

  
  const calcResult = () => {
    let result = "";
    try {
      result = eval(value);
    } catch (error) {
      console.log("Error calculating result:", error);
      setValue("Error");
      return;
    }
    setValue(String(result));
  };

 
  return (
    <div className="calculator">
      <div className="output">
        <input type="text" value={value} />
      </div>
      <button className="spanTwo" value={"AC"} onClick={() => setValue("")}>
        AC
      </button>
      <button value={"DEL"} onClick={() => setValue(value.slice(0, -1))}>
        DEL
      </button>
      <button className="operator" value={"/"} onClick={handleOperatorClick}>
        /
      </button>
      <button value={"7"} onClick={handleOperatorClick}>
        7
      </button>
      <button value={"8"} onClick={handleOperatorClick}>
        8
      </button>
      <button value={"9"} onClick={handleOperatorClick}>
        9
      </button>
      <button className="operator" value={"*"} onClick={handleOperatorClick}>
        *
      </button>
      <button value={"4"} onClick={handleOperatorClick}>
        4
      </button>
      <button value={"5"} onClick={handleOperatorClick}>
        5
      </button>
      <button value={"6"} onClick={handleOperatorClick}>
        6
      </button>
      <button className="operator" value={"+"} onClick={handleOperatorClick}>
        +
      </button>
      <button value={"1"} onClick={handleOperatorClick}>
        1
      </button>
      <button value={"2"} onClick={handleOperatorClick}>
        2
      </button>
      <button value={"3"} onClick={handleOperatorClick}>
        3
      </button>
      <button className="operator" value={"-"} onClick={handleOperatorClick}>
        -
      </button>
      <button className="zero" value={"0"} onClick={handleOperatorClick}>
        0
      </button>
      <button value={"."} onClick={handleOperatorClick}>
        .
      </button>
      <button
        value={"="}
        className="spanTwo operator equal"
        onClick={calcResult}
      >
        =
      </button>
    </div>
  );
}

export default App;
