import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from './menu';
function EditClient() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [ID, setId] = useState("");
  const [image, setimage] = useState("");
  const [Prenom, setPrénom] = useState("");
  const [nom, setNom] = useState(""); // Correction : utiliser setNom au lieu de setId
  const [num, setNuméro] = useState("");
  const [email, setEmail] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Convertir l'image en base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setimage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    axios.get('http://localhost:3001/clients/' + id).then(res => {
      setId(res.data.id);
      setPrénom(res.data.Prenom);
      setNom(res.data.nom); // Correction : utiliser setNom au lieu de setId
      setNuméro(res.data.num);
      setEmail(res.data.email);
      setimage(res.data.image);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id,
      Prenom,
      nom,
      num,
      email,
      image,
    };

    axios.put(`http://localhost:3001/clients/${id}`, newClient)
      .then(res => {
        console.log(res);
        navigate("/client");
      })
      .catch(error => {
        console.log(error);
        alert("Erreur ! Modification non effectuée");
      });
  }

  return (
    <>
    <Menu/>
      <div className="container">
        <h2 className="my-4">Modification d'un client</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">Image</label>
              <input
  type="file"
  className="form-control"
  id="imageartpetitf"
  placeholder="Image"
  accept="image/*"
  onChange={e => handleImageChange(e)}
/>
            </div>
            <div className="col-md-6">
              <label htmlFor="id" className="form-label">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="ID"
                value={id}
                onChange={e => setId(e.target.value)}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="nom" className="form-label">NOM</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Nom"
                value={nom}
                onChange={e => setNom(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="prenom" className="form-label">PRENOM</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Prénom"
                value={Prenom}
                onChange={e => setPrénom(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="num" className="form-label">NUMERO</label>
              <input
                type="text"
                className="form-control"
                id="num"
                placeholder="Numéro"
                value={num}
                onChange={e => setNuméro(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="mail" className="form-label">EMAIL</label>
              <input
                type="text"
                className="form-control"
                id="mail"
                placeholder="EMAIL"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
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

export default EditClient;
