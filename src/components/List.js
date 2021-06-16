import { Friends } from "./Friends";

export const List = (props) => {
  const { friendsList, setFriendsList } = props;
  return (
    <>
      <div className="container-list d-flex justify-content-center">
        <ul className="list-elements">
          {friendsList.map((friend) => (
            <Friends
              text={friend.text}
              key={friend.id}
              friend={friend}
              setFriendsList={setFriendsList}
              friendsList={friendsList}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
