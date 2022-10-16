import { useState } from "react";

function Header(props) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

function handleBtnClick (e) {
  e.preventDefault ();



  props.addUser ({
    name: name,
    status: status
  });
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <a className="navbar-brand" href="#">Services Name :</a>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input value={name} onChange={(e) => setName(e.target.value)} className="form-control me-2" type="text" placeholder="Mailing List" aria-label="Name" />
              
              <select value={status} onChange={(e) => setStatus(e.target.value)} className= 'form-select me-2' >
                <option>active</option>
                <option>expired</option>
                <option>banned</option>

              </select>

              <button onClick = {(e) => handleBtnClick(e)} className="w-100 btn btn-outline-success" type="submit">
                Add Service
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header; 
