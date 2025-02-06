import { useState, useEffect } from "react";
import './App.css';
import Card from './components/Card';
const data = [
  {
    id: 1,
    name: "Task 1",
    selected: false,
    group: "left",
  },
  {
    id: 2,
    name: "Task 2",
    selected: false,
    group: "left",
  },
  {
    id: 3,
    name: "Task 3",
    selected: false,
    group: "right",
  },
  {
    id: 4,
    name: "Task 4",
    selected: false,
    group: "right",
  }
]
function App() {
  const [allData, setAllData] = useState(data);
  const [leftData, setLeftData] = useState(null);
  const [rightData, setRightData] = useState(null)

  useEffect(() => {
    const leftDatas = allData.filter((data) => data?.group == "left");
    const rightDatas = allData.filter((data) => data?.group == "right");
    console.log(leftDatas)
    setLeftData(leftDatas);
    setRightData(rightDatas);
  }, [allData]);

  const handleLeftClick = () => {
    const modifiedAllData = allData.map((data) => {
      if (data.selected) {
        return { ...data, selected: false, group: "left" }
      }
      return data;
    })
    setAllData(modifiedAllData);
  }

  const handleRightClick = () => {
    const modifiedAllData = allData.map((data) => {
      if (data.selected) {
        return { ...data, selected: false, group: "right" }
      }
      return data;
    })
    setAllData(modifiedAllData);
  }

  return (
    <div className="App">
      <div className="header-text">Transfer List</div>
      <div class="bottom-container">
        <Card
          tasks={leftData}
          allData={allData}
          setAllData={setAllData}
        />
        <div class="btn-container">
          <div
            class="btn"
            onClick={() => handleLeftClick()}
          >
            left
          </div>
          <div
            class="btn"
            onClick={() => handleRightClick()}
          >Right</div>
        </div>
        <Card
          tasks={rightData}
          allData={allData}
          setAllData={setAllData}
        />
      </div>
    </div>
  );
}

export default App;
