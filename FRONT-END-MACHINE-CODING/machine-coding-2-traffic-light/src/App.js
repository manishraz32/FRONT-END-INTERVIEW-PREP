import { useState, useEffect } from "react";
import './App.css';
import Bulb from './components/Bulb';

function App() {
  const [greenColor, setGreenColor] = useState('green');
  const [yellowColor, setYellowColor] = useState('black');
  const [redColor, setRedColor] = useState('black');
  const [infiniteState, setInfiniteState] = useState(0);


  useEffect(() => {
    const changeLights = async () => {
      await new Promise(res => setTimeout(() => res(1), 4000));
      setGreenColor('black');
      setYellowColor('yellow');

    
      await new Promise(res => setTimeout(() => res(1), 500));
      setYellowColor('black');
      setRedColor('red');

      await new Promise(res => setTimeout(() => res(1), 3000));
      setRedColor('black');
      setGreenColor('green');
      setInfiniteState((prv) => prv + 1);
    };

    changeLights();
  }, [infiniteState]); 

  return (
    <div className="App">
      <Bulb color={greenColor} />
      <Bulb color={yellowColor} />
      <Bulb color={redColor} />
    </div>
  );
}

export default App;
