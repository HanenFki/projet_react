import { useState } from 'react';

import axios from 'axios';
import Menu from './menu';
import { useNavigate } from 'react-router-dom';

function AddClient() {

    const navigate=useNavigate();

  const [nom, setnom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");
  
  const [image, setimage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      nom,
      Prenom,
      email,
      num, 
       image
    };
  
//faire le add dans la BD
axios.post("http://localhost:3001/clients",newClient)
.then(res => {  
console.log(res);
navigate("/client")
  })   
.catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })

}

return ( 
    <>
    <Menu/>
<div className="container">
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center mb-4">Ajout d'un client</h2>
        <div className="form-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} className="grid gap-3">
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="NOM"
          type="text"
          value={nom}
          onChange={e => setnom(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Prénom"
          name="Prenom"
          type="text"
          value={Prenom}
          onChange={e => setPrenom(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Email"
          type="text"
          value={email}
          onChange={e => setemail(e.target.value)}
          />
     </div>
     
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Numéro"
          name="Numéro"
          type="number"
          value={num}
          onChange={e => setnum(e.target.value)}
          />
     </div>
     
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control" type="file" id="formFile"/>
    </div>    
     <div className="text-center">
          {image ? <img src={image} alt="" width="70" /> : null}
        </div>
     <div className="text-center">
          <button className="btn btn-success">Valider</button>
        </div> 
    </div>
    </form>
   
  </div>
</div>
</div>
</div>
</>
     );
}

export default AddClient;

