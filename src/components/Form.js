export const Form = (props) => {
  const { setInputText, setFriendsList, friendsList, inputText } = props;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const toggleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    }
    setFriendsList([
      ...friendsList,
      { text: inputText, id: Math.random() * 1000 },
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
