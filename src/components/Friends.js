export const Friends = (props) => {
  const { text, setFriendsList, friend, friendsList } = props;
  const toggleDelete = () => {
    setFriendsList(friendsList.filter((element) => element.id !== friend.id));
  };
  return (
    <>
      <div className="friend d-flex">
        <li className="friend-item list-unstyled">{text}</li>
        <button className="boton" onClick={toggleDelete}>
          X
        </button>
      </div>
    </>
  );
};
