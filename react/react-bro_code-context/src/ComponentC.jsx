import React, {useContext} from 'react';
import ComponentD from "./ComponentD.jsx";
import {UserContext} from "./ComponentA.jsx";

// function ComponentC(props) {
function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div>
      <div className="box">
        <p>ComponentC</p>
        {/*<ComponentD user={props.user}/>*/}
        <div>Here we are! It was easy, {user}!!!</div>
        <ComponentD/>
      </div>
    </div>
  );
}

export default ComponentC;