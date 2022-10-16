import Status from "./Status";

function UsersTable(props) {
  
   function handleDelete(user){
props.deleteUser(user);
   }
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th className="w-25">Service Name</th>
                <th className="w-25">Status</th>
        
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map(user=>
                        <tr key={user.id} className="bg-light">
                        <td>{user.name}</td>
                        <td>
                            <Status type={user.status} />
                        </td>
                        <td><button onClick={() => handleDelete(user)} className="btn btn-default">
                                <i className="bi-trash3"></i>
                            </button>
                        </td>
                        </tr>
                        )
                }
            </tbody>
        </table>
      );
}


export default UsersTable;