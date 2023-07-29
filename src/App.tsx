import React, { useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./components/types/Types";

const App = () => {
  const[users, setUsers] = useState<IUser[]>([])
  return (
    <div>
      <Card
        onClick={(num: number) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
