import { useState } from 'react';

import axios from 'axios';
import Menu from './menu';
import { useNavigate } from 'react-router-dom';

function AddArticle() {

    const navigate=useNavigate();

  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [marque, setMarque] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      reference,
      designation,
      marque,
      
      prixVente, 
      qtestock, 
  imageartpetitf
    };
  

axios.post("http://localhost:3001/produits",newProduct)
.then(res => {  
console.log(res);
navigate("/articles")
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
        <h2 className="text-center mb-4">Ajout d'un produit</h2>
        <div className="form-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} className="grid gap-3">
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Référence"
          type="text"
          value={reference}
          onChange={e => setReference(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Désignation"
          name="designation"
          type="text"
          value={designation}
          onChange={e => setDesignation(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Marque"
          type="text"
          value={marque}
          onChange={e => setMarque(e.target.value)}
          />
     </div>
     
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Prix Vente"
          name="prixVente"
          type="number"
          value={prixVente}
          onChange={e => setPrixVente(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Quantité"
          type="number"
          value={qtestock}
onChange={e => setQtestock(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control" type="file" id="formFile"/>
    </div>    
     <div className="text-center">
          {imageartpetitf ? <img src={imageartpetitf} alt="" width="70" /> : null}
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

export default AddArticle;

