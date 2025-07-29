import React from 'react';
import ComponentC from "./ComponentC.jsx";

// function ComponentB(props) {
function ComponentB() {
  return (
    <div>
      <div className="box">
        ComponentB
        {/*<ComponentC user={props.user}/>*/}
        <ComponentC/>
      </div>

    </div>
  );
}

export default ComponentB;