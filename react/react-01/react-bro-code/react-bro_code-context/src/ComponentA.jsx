import React, {createContext, useState} from 'react';
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Вася");
  return (
    <div className="box">
      ComponentA
      Hello {user}
      <UserContext.Provider value={user}>
        <ComponentB user={user}/>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;