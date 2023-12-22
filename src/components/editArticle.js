import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from './menu';

function EditArticle() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [marque, setMarque] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Convertir l'image en base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageartpetitf(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3001/produits/${id}`).then(res => {
      setReference(res.data.reference);
      setDesignation(res.data.designation);
      setMarque(res.data.marque);
      setPrixVente(res.data.prixVente);
      setQtestock(res.data.qtestock);
      setImageartpetitf(res.data.imageartpetitf);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id,
      reference,
      designation,
      marque,
      prixVente,
      qtestock,
      imageartpetitf
    };

    axios.put(`http://localhost:3001/produits/${id}`, newProduct)
      .then(res => {
        console.log(res);
        navigate("/articles");
      })
      .catch(error => {
        console.log(error);
        alert("Erreur ! Modification non effectuée");
      });
  }

  return (
    <>
      <Menu />
      <div className="container">
        <h2 className="my-4">Modification d'un produit</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="reference" className="form-label">Référence</label>
              <input
                type="text"
                className="form-control"
                id="reference"
                placeholder="Référence"
                value={reference}
                onChange={e => setReference(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="designation" className="form-label">Désignation</label>
              <input
                type="text"
                className="form-control"
                id="designation"
                placeholder="Désignation"
                value={designation}
                onChange={e => setDesignation(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="marque" className="form-label">Marque</label>
              <input
                type="text"
                className="form-control"
                id="marque"
                placeholder="Marque"
                value={marque}
                onChange={e => setMarque(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="prixVente" className="form-label">Prix Vente</label>
              <input
                type="number"
                className="form-control"
                id="prixVente"
                placeholder="Prix Vente"
                value={prixVente}
                onChange={e => setPrixVente(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="qtestock" className="form-label">Quantité</label>
              <input
                type="number"
                className="form-control"
                id="qtestock"
                placeholder="Quantité"
                value={qtestock}
                onChange={e => setQtestock(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="imageartpetitf" className="form-label">Image</label>
              <input
  type="file"
  className="form-control"
  id="imageartpetitf"
  placeholder="Image"
  accept="image/*"
  onChange={e => handleImageChange(e)}
/>

            </div>
            <div className="col-12">
              {imageartpetitf ? <img src={"/" + imageartpetitf} alt={imageartpetitf} width="70" /> : null}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-success">Valider</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditArticle;
