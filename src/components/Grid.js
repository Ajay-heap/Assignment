import React,{ useState } from 'react'
const Grid = () => {

    const [Grid,setGrid]= useState(false);
    const [List,setList]= useState(false);
  
    const clickGrid=()=>{
      setGrid(true);
      setList(false);
  
    }
    const clickList =()=>{
      setGrid(false);
      setList(true);  }

  return (<>
    <div style={{alignSelf:"end"}} className ="grid">
    <button onClick={clickList}><i class="ri-list-check">nskj</i></button>
    <button onClick={clickGrid}><i class="ri-grid-fill"></i>snb</button>
    </div>
  </>
  )
}

export default Grid