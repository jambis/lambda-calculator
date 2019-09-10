import React from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  //const [number, setNumber] = useState(numbers);

  return (
    <div className="numbers">
      {numbers.map((number, index) => (
        <NumberButton key={index} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
