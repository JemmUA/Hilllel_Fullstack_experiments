import React, {useContext} from 'react';
import {UserContext} from "./ComponentA.jsx";

// function ComponentD(props) {
function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="box">
        ComponentD
        {/*Hello AGAIN, !!!{props.user}!!!*/}
        {/*Hello AGAIN, !!!   !!!*/}
        Hello AGAIN, {user} !!!
      </div>

    </div>
  );
}

export default ComponentD;