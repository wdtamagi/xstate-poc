import React from "react";
import { Todos } from "./containers/todos";

function App() {
  return (
    <div className="p-6">
      <h1 className="mx-auto text-gray-600 mt-2 mb-4 text-center">TODOS</h1>
      <Todos />
    </div>
  );
}

export default App;
