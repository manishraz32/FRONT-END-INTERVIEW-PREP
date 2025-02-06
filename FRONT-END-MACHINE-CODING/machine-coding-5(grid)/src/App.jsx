import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [grid, setGrid] = useState([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
  const [columns, setColumns] = useState('');
  const [clickedItem, setClickedItem] = useState([]);
  
  const oneCount = grid.flat().filter((elem) => elem).length;

  const generateColumn = (cols) => {
    let columnString = '';
    for(let i = 0; i < cols; i++) {
      columnString += 'auto ';
    }
    setColumns(columnString);
  }

  const handleGridClick = (gridNum) => {
    let clickedItemArr = [...clickedItem, gridNum];  
    setClickedItem(clickedItemArr);
    if(clickedItemArr.length == oneCount) {
      let id = setInterval(() => {
        setClickedItem((prvItem) => {
          let arr = [...prvItem];
          arr.pop();
          if(arr.length == 0) {
            clearInterval(id);
          }
          return arr;
        });
      }, 1000);
    }
  }
  

  useEffect(() => {
    generateColumn(grid.length);
  }, [])

  return (
    <div className="main-container">
       <div 
      style={{
        display: 'grid',
        gridTemplateColumns: columns,
        gap: '8px',
      }}
      className="grid-container"
    >
      {
        grid.flat().map((elem, idx) => (
          elem == 1 ?
          <div
            key={idx}
            style={{
              backgroundColor: clickedItem.includes(idx) ? 'blue' : ''
            }}
            onClick={() => handleGridClick(idx)}
            className="fill-grid"
          >
            
          </div>
          : 
          <div 
            key={idx}
            className="empty-grid"
            >
              
          </div>
        ))
      }
     
    </div>
    </div>
  )
}

export default App
