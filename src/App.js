import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <div className="container">
        <h1>Lista de amigos</h1>
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
