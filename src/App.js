import { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  const [inputText, setInputText] = useState("");
  const [friendsList, setFriendsList] = useState([
    {
      text: "Luis",
      id: 1,
    },
    {
      text: "Josefina",
      id: 2,
    },
    {
      text: "David",
      id: 3,
    },
  ]);
  return (
    <>
      <div className="container">
        <h1>Lista de amigos</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          friendsList={friendsList}
          setFriendsList={setFriendsList}
        />
        <List friendsList={friendsList} setFriendsList={setFriendsList} />
      </div>
    </>
  );
}

export default App;
