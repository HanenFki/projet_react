import Menu from './menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementClient from './ElementClient';

function ListeClients(props) {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/Clients').then((response) => setClients(response.data));
  }, []);

  const deleteClient = async (id) => {
    if (!window.confirm('Are you sure you want to delete')) {
      return;
    }

    axios
      .delete('http://localhost:3001/Clients/' + id)
      .then(() => {
        console.log('successfully deleted!');
        setClients((prevClients) => prevClients.filter((client) => client.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Menu/>
      <div className="container">
        <h1 className="my-4">Liste des clients :</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">ID</th>
              <th className="text-center">NOM</th>
              <th className="text-center">Prénom</th>
              <th className="text-center">Email</th>
              <th className="text-center">Numéro de téléphone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="text-center">
                  <img src={client.image} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </td>
                <td className="text-center">{client.id}</td>
                <td className="text-center">{client.nom}</td>
                <td className="text-center">{client.Prenom}</td>
                <td className="text-center">{client.email}</td>
                <td className="text-center">{client.num}</td>
                <td className="text-center">
                  <Link to={`/EditClient/${client.id}`} className="btn btn-info mr-2">
                    Modifier
                  </Link>
                  <button onClick={() => deleteClient(client.id)} className="btn btn-danger">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListeClients;
