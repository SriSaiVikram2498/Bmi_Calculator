import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState(0);
  const [text, setText] = useState(' ');
  const bmi_cal = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    if (weightNum === 0 || heightNum === 0) {
      window.alert("Enter valid weight and height");
    }
    const calculatedBMI = (703 * (weight / (height * height)));
    const roundedBMI = calculatedBMI.toFixed(2);
    setBmi(roundedBMI);
    if (roundedBMI > 26) {
      setText("You are overweight");
    }
    if (roundedBMI < 16) {
      setText("You are underweight");
    }
    if (roundedBMI > 16 && roundedBMI <= 26) {
      setText("you are healty");
    }
  };
  return (
    <div className="App">
      <div className="container">
      <h1>BMI CALCULATOR</h1>
        <h2>Weight(in lb)</h2>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
        <h2>Height(in inch)</h2>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in inches"
        />
        <br />
        {/* <button onClick={bmi_cal} >submit
        
      </button> */}
        <Button variant={"outlined"}
          onClick={bmi_cal}
        >submit</Button>
        <br/>
        <Button variant="text" onClick={() => window.location.reload()}>
          Reload
        </Button>
        <p>you BMI is {bmi}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default App;
