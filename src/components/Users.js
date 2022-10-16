import {useState} from "react";
import Header from "./Header";
import UsersTable from "./UsersTable";
import Message from "./Message";

function Users() {


const [usersData, setUsersData] = useState ([]);


function addUser (newUser) {


  newUser.id = Math.random() + '' ;

const updated = [...usersData, newUser];
  setUsersData(updated)

}
function deleteUser(user){
const updated = usersData.filter(userItem => userItem.id !== user.id);
setUsersData(updated);
}
  return (
    <>
      <Header addUser={addUser} />
      {
        usersData.length === 0 &&
        <Message />
      }
      <UsersTable users={usersData} deleteUser = {deleteUser} />
    </>
  );
}

export default Users;
