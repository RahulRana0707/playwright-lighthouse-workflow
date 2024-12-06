import { useEffect } from "react";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
function App() {
  useEffect(() => {
    for (let index = 0; index < 1000; index++) {
      console.log(index);
    }
  }, []);
  return (
    <>
      <div className="App">
        <TodoWrapper />
      </div>
    </>
  );
}

export default App;
