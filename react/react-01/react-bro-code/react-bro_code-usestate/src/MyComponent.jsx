import React, {useState} from 'react';

function MyComponent() {
  const [name, setName] = useState("Aaaaaaa");
  const [age, setAge] = useState(0);
  const [classification, setClassification] = useState(0);
  const updateState = () => {
    if (name === "Babba") {
      setAge(17)
      setName('Abba');
      console.log(name);
    } else {
      setAge(25);
      setName("Babba");
      console.log(name);
    }
  }
  const updateClassification = () => {
    if (age < 20) {
      setClassification("Young");
    } else {
      setClassification ("Experienced");
    }
  }
  return (
    <div>
      <p>Name: {name}, Age: {age}</p>
      <button onClick={updateState}>Set states</button>
      <p>Classification: {classification}</p>
      <button onClick={updateClassification}>Classify</button>
    </div>
  );
}

export default MyComponent;