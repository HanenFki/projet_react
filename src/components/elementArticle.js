import { Link } from "react-router-dom";

function ElementArticle(props) {
  return (
    <div className="row">
      {props.articles.map((article) => (
        <div key={article.id} className="col-sm-3">
          <div className="card h-100">
            <img
              src={article.imageartpetitf}
              className="card-img-top img-fluid"
              alt={article.designation}
            />
            <div className="card-body">
              <h5 className="card-title">{article.designation}</h5>
              <p className="card-text">{article.marque}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{article.reference}</li>
              <li className="list-group-item">{article.categorie}</li>
              <li className="list-group-item">{article.prixVente}</li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              
              <div>
                <Link to={`/editArticle/${article.id}`} className="btn btn-warning ml-2">
                  Modifier
                </Link>
                <button
                  onClick={() => {
                    props.deleteProd(article.id);
                  }}
                  className="btn btn-danger ml-2"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ElementArticle;
