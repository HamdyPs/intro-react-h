import { useState } from "react";

function Color() {
  const colors = ['red', 'green', 'blue', 'yellow']
  const [col, setCol] = useState(colors[1])
  const handlerColor = (color) => {
    
    setCol(color)
   
  }
  return <div className="color">
    <p style={{ width: 100, height: 100, background: col }}></p>

    <div className="btns">
    {colors.map((color,index)=> {
      return <button key={index} onClick={()=> handlerColor(color)}>{color}</button>
    })}
    </div>

  </div>;
}

export default Color;
