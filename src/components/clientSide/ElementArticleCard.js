import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const ElementArticleCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();

  const addToCart = (product) => {
    const target = {
      id: product.id,
      title: product.designation,
      image: product.imageartpetitf,
      price: product.prixVente,
      qtestock: product.qtestock,
      quantity: 1,
    };
    addItem(target);
    console.log('Item added to cart:', target);
  };

  return (
    <>
    
      <div className="container">
      <AppBar position="fixed" style={{ backgroundColor: '#C5E1A5', width: '100%', zIndex: 1000 }}>
        <Toolbar>
          <Button color="inherit">
            <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
              {cartCount}
              <ShoppingCartIcon fontSize="large" />
            </Link>
          </Button>
          <div className="d-flex justify-content-end">
          <button type="button" class="btn btn-outline-success btn-rounded btn-lg" data-mdb-ripple-init  data-mdb-ripple-color="dark">
          <Link to="/loginclient" style={{ textDecoration: 'none', color: 'white' }}>
            Login
          </Link>
        </button> </div>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '64px' }}> {/* Ajustez la hauteur du padding en fonction de la hauteur de votre barre de navigation */}
        <div className="row">
          {props.articles &&
            props.articles.map((product) => (
              <div key={product.id} className="col-sm-3 mb-4">
                <div className="card h-100">
                  <img
                    src={product.imageartpetitf}
                    className="card-img-top"
                    alt={product.designation}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.designation}</h5>
                    <p className="card-text">{product.marque}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.reference}</li>
                    <li className="list-group-item">{product.categorie}</li>
                    <li className="list-group-item">{product.prixVente}</li>
                  </ul>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <Link
                      to="#"
                      className="btn btn-success"
                      onClick={() => addToCart(product)}
                      disabled={product.qtestock <= 1}
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default ElementArticleCard;
