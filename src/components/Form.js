export const Form = (props) => {
  const { setInputText, setFriendsList, friendsList, inputText } = props;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const toggleSubmit = (e) => {
    e.preventDefault();
    setFriendsList([
      ...friendsList,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    clearText();
  };
  const clearText = () => {
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} type="text" onChange={inputTextHandler} />
      <button className="boton" type="submit" onClick={toggleSubmit}>
        +
      </button>
    </form>
  );
};
